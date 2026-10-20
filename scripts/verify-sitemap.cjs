const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const domain = "https://www.psychologica.pl";
const root = path.join(__dirname, "..");

function entries(xml, kind) {
  const tag = kind === "index" ? "sitemap" : "url";
  const container = kind === "index" ? "sitemapindex" : "urlset";
  assert(new RegExp(`<${container}\\b[^>]*xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`).test(xml), `Nieprawidłowy format ${container}`);
  assert(xml.trim().endsWith(`</${container}>`), "Niekompletna mapa XML");
  const rows = [...xml.matchAll(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, "g"))].map((match) => {
    const locations = [...match[1].matchAll(/<loc>([^<]+)<\/loc>/g)];
    const dates = [...match[1].matchAll(/<lastmod>([^<]+)<\/lastmod>/g)];
    assert.equal(locations.length, 1, "Wpis mapy musi mieć jeden loc");
    assert.equal(dates.length, 1, "Wpis mapy musi mieć jeden lastmod");
    const url = locations[0][1];
    assert.equal(new URL(url).origin, domain, "Obca domena w sitemapie");
    assert(!new URL(url).search && !new URL(url).hash, "Adres mapy z parametrami lub fragmentem");
    const lastmod = dates[0][1];
    assert(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(lastmod) && Number.isFinite(Date.parse(lastmod)), "Nieprawidłowy lastmod");
    assert(Date.parse(lastmod) <= Date.now(), "lastmod w przyszłości");
    if (kind !== "index") {
      assert(new URL(url).pathname.endsWith("/"), "Brak kanonicznego ukośnika");
      assert(!/^\/(?:404(?:\.html)?|dziekujemy|polityka-prywatnosci|dev-404-page)\/?$/.test(new URL(url).pathname), "Strona wykluczona w sitemapie");
    }
    return { url, lastmod };
  });
  assert(rows.length, `Pusta mapa ${container}`);
  assert.equal(new Set(rows.map((row) => row.url)).size, rows.length, "Duplikaty w sitemapie");
  return rows;
}

function verifyPage(html, url) {
  assert(!/<meta\b(?=[^>]*name=["']robots["'])(?=[^>]*content=["'][^"']*noindex)/i.test(html), `noindex w sitemapie: ${url}`);
  const canonical = html.match(/<link\b(?=[^>]*rel=["']canonical["'])[^>]*href=["']([^"']+)["']/i)?.[1];
  assert.equal(canonical, url, `Inny canonical: ${url}`);
}

async function verifySitemap(read, htmlByPath = {}) {
  const index = entries(await read(`${domain}/sitemap-index.xml`), "index");
  const rows = [];
  for (const map of index) {
    const children = entries(await read(map.url), "pages");
    assert.equal(map.lastmod, children.map((row) => row.lastmod).sort().at(-1), "lastmod indeksu różni się od mapy podrzędnej");
    rows.push(...children);
  }
  assert.equal(new Set(rows.map((row) => row.url)).size, rows.length, "Duplikaty między mapami");
  assert(rows.some((row) => row.url === `${domain}/`), "Brak strony głównej w mapie");
  for (const { url } of rows) {
    const route = new URL(url).pathname;
    verifyPage(htmlByPath[route] || await read(url), url);
  }
  const robots = await read(`${domain}/robots.txt`);
  assert(robots.split(/\r?\n/).includes(`Sitemap: ${domain}/sitemap-index.xml`), "robots.txt nie wskazuje mapy");
  return rows;
}

function finalize() {
  const indexPath = path.join(root, "public/sitemap-index.xml");
  let index = fs.readFileSync(indexPath, "utf8");
  index = index.replace(/<sitemap><loc>([^<]+)<\/loc>(?:<lastmod>[^<]+<\/lastmod>)?<\/sitemap>/g, (_, url) => {
    assert.equal(new URL(url).origin, domain);
    const rows = entries(fs.readFileSync(path.join(root, "public", new URL(url).pathname), "utf8"), "pages");
    return `<sitemap><loc>${url}</loc><lastmod>${rows.map((row) => row.lastmod).sort().at(-1)}</lastmod></sitemap>`;
  });
  fs.writeFileSync(indexPath, index);
}

async function local() {
  finalize();
  const read = async (url) => {
    const route = new URL(url).pathname;
    return fs.readFileSync(path.join(root, "public", route.endsWith("/") ? `${route}index.html` : route), "utf8");
  };
  const rows = await verifySitemap(read);
  const expected = [];
  function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(filename);
      else if (entry.name === "index.html") {
        const html = fs.readFileSync(filename, "utf8");
        if (!/\bnoindex\b/i.test(html.match(/<meta\b(?=[^>]*name=["']robots["'])[^>]*>/i)?.[0] || "")) {
          const route = "/" + path.relative(path.join(root, "public"), filename).replace(/index\.html$/, "");
          expected.push(`${domain}${route}`);
        }
      }
    }
  }
  walk(path.join(root, "public"));
  assert.deepEqual(rows.map((row) => row.url).sort(), expected.sort(), "Mapa nie obejmuje wszystkich indeksowalnych stron kompilacji");
  console.log(`SITEMAP: OK — ${rows.length} kanonicznych stron, lastmod, indeks i robots.txt`);
}

module.exports = { entries, verifyPage, verifySitemap, finalize };
if (require.main === module) local().catch((error) => { console.error(error.message); process.exitCode = 1; });
