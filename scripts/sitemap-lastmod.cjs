const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const root = path.join(__dirname, "..");
const metadataFile = path.join(root, ".cache/sitemap-metadata.json");
const git = (args) => execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();

// Only publication timestamps are used: editing an unpublished draft must not
// advance the modification date of the public page.
function prepareMetadata(nodes) {
  if (git(["rev-parse", "--is-shallow-repository"]) === "true") {
    git(["fetch", "--unshallow", "https://github.com/3backup/psychologica-gatsby.git", "main"]);
  }
  const records = nodes.filter((node) => node.entityPayload?.type === "item")
    .map((node) => ({
      id: node.entityPayload.id,
      type: node.internal.type,
      publishedAt: node.entityPayload.meta?.published_at,
      // Retain only relationships, never CMS text or credentials.
      references: [],
      attributes: node.entityPayload.attributes,
    }));
  assert(records.length, "Brak metadanych opublikowanej treści dla sitemap");
  const ids = new Set(records.map((record) => record.id));
  function references(value, result = new Set()) {
    if (typeof value === "string" && ids.has(value)) result.add(value);
    else if (Array.isArray(value)) value.forEach((entry) => references(entry, result));
    else if (value && typeof value === "object") Object.values(value).forEach((entry) => references(entry, result));
    return [...result];
  }
  for (const record of records) {
    record.references = references(record.attributes);
    delete record.attributes;
  }
  fs.writeFileSync(metadataFile, JSON.stringify(records));
}

function dependencies(component) {
  const files = new Set();
  const models = new Set();
  function visit(filename) {
    filename = path.resolve(filename);
    assert(filename.startsWith(`${root}${path.sep}`), "Zależność poza projektem");
    if (files.has(filename)) return;
    assert(fs.existsSync(filename), `Brak źródła daty zmiany: ${path.relative(root, filename)}`);
    files.add(filename);
    if (!/\.(?:[cm]?js|jsx|tsx?|s?css|json)$/.test(filename)) return;
    const source = fs.readFileSync(filename, "utf8");
    for (const match of source.matchAll(/\b(?:allDatoCms|datoCms)([A-Z]\w*)/g)) models.add(`DatoCms${match[1]}`);
    const imports = /\bfrom\s*["']([^"']+)["']|\bimport\s*["']([^"']+)["']|\brequire\(\s*["']([^"']+)["']\s*\)|\bsrc\s*=\s*["']([^"']+)["']/g;
    for (const match of source.matchAll(imports)) {
      const specifier = match.slice(1).find(Boolean);
      if (!specifier.startsWith(".")) continue;
      const target = path.resolve(path.dirname(filename), specifier);
      const resolved = [target, ...[".js", ".jsx", ".cjs", ".json", ".ts", ".tsx", "/index.js"].map((suffix) => target + suffix)]
        .find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
      assert(resolved, `Nieznana zależność sitemap: ${specifier}`);
      visit(resolved);
    }
  }
  visit(component.split("?")[0]);
  for (const filename of ["gatsby-browser.js", "gatsby-ssr.js", "gatsby-config.js"]) {
    if (fs.existsSync(path.join(root, filename))) visit(path.join(root, filename));
  }
  return { files: [...files].map((filename) => path.relative(root, filename)), models };
}

function lastmod(component, records) {
  const { files, models } = dependencies(component);
  const codeDate = git(["log", "-1", "--format=%cI", "--", ...files]);
  assert(codeDate && Number.isFinite(Date.parse(codeDate)), "Brak historii Git dla daty zmiany strony");
  const dates = [codeDate];
  const byId = new Map(records.map((record) => [record.id, record]));
  const visited = new Set();
  function visit(record) {
    if (visited.has(record.id)) return;
    visited.add(record.id);
    if (record.publishedAt) {
      assert(Number.isFinite(Date.parse(record.publishedAt)), "Nieprawidłowa data publikacji CMS");
      dates.push(record.publishedAt);
    }
    record.references.forEach((id) => visit(byId.get(id)));
  }
  for (const model of models) {
    const matching = records.filter((record) => record.type === model);
    assert(matching.length, `Brak metadanych CMS dla ${model}`);
    matching.forEach(visit);
  }
  const latest = Math.max(...dates.map(Date.parse));
  assert(latest <= Date.now(), "Data zmiany strony jest w przyszłości");
  return new Date(latest).toISOString();
}

const options = {
  query: `{ site { siteMetadata { siteUrl } } allSitePage { nodes { path component } } }`,
  resolvePages: ({ allSitePage: { nodes } }) => {
    const records = JSON.parse(fs.readFileSync(metadataFile, "utf8"));
    return nodes.filter((page) => !/^\/(?:404(?:\.html)?|dev-404-page|offline-plugin-app-shell-fallback|dziekujemy|polityka-prywatnosci)\/?$/.test(page.path))
      .map((page) => ({ ...page, lastmod: lastmod(page.component, records) }));
  },
  serialize: ({ path: url, lastmod }) => ({ url, lastmod }),
};

module.exports = { options, prepareMetadata, dependencies, lastmod };
