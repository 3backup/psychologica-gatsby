const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { dependencies, lastmod, prepareMetadata } = require("./sitemap-lastmod.cjs");
const { entries, verifyPage } = require("./verify-sitemap.cjs");

const component = path.join(__dirname, "../src/pages/oferta-edukacyjna.js");
const records = () => JSON.parse(fs.readFileSync(path.join(__dirname, "../.cache/sitemap-metadata.json"), "utf8"));
const newer = new Date(Date.now() - 1000).toISOString();

test("unchanged content retains lastmod across repeated generation", () => {
  assert.equal(lastmod(component, records()), lastmod(component, records()));
});

test("a shared CMS dependency advances lastmod; unrelated content does not", () => {
  const before = records();
  const expected = lastmod(component, before);
  const used = dependencies(component).models;
  const unrelated = before.find((record) => !used.has(record.type) && !before.some((parent) => used.has(parent.type) && parent.references.includes(record.id)));
  assert(unrelated);
  unrelated.publishedAt = newer;
  assert.equal(lastmod(component, before), expected);
  before.find((record) => record.type === "DatoCmsGlobal").publishedAt = newer;
  assert.equal(lastmod(component, before), newer);
});

test("linked CMS records contribute their publication date", () => {
  const data = records();
  const parent = data.find((record) => record.type === "DatoCmsGlobal");
  parent.references.push("linked-test-record");
  data.push({ id: "linked-test-record", type: "DatoCmsTest", publishedAt: newer, references: [] });
  assert.equal(lastmod(component, data), newer);
});

test("saving a draft does not replace the public publication timestamp", () => {
  const filename = path.join(__dirname, "../.cache/sitemap-metadata.json");
  const original = fs.readFileSync(filename);
  try {
    prepareMetadata([{ internal: { type: "DatoCmsGlobal" }, entityPayload: {
      id: "fixture", type: "item", attributes: { text: "not retained" },
      meta: { published_at: "2026-01-01T00:00:00.000Z", updated_at: newer },
    } }]);
    const metadata = JSON.parse(fs.readFileSync(filename, "utf8"));
    assert.equal(metadata[0].publishedAt, "2026-01-01T00:00:00.000Z");
    assert(!JSON.stringify(metadata).includes("not retained"));
    assert(!JSON.stringify(metadata).includes(newer));
  } finally {
    fs.writeFileSync(filename, original);
  }
});

test("future CMS timestamps block generation", () => {
  const data = records();
  data.find((record) => record.type === "DatoCmsGlobal").publishedAt = "2099-01-01T00:00:00.000Z";
  assert.throws(() => lastmod(component, data), /przyszłości/);
});

test("validator distinguishes sitemap index from URL lists and rejects missing dates", () => {
  const prefix = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  assert.throws(() => entries(prefix + '</urlset>', "pages"), /Pusta/);
  assert.throws(() => entries(prefix + '<url><loc>https://www.psychologica.pl/</loc></url></urlset>', "pages"), /lastmod/);
  const row = `<url><loc>https://www.psychologica.pl/</loc><lastmod>${newer}</lastmod></url>`;
  assert.equal(entries(prefix + row + '</urlset>', "pages").length, 1);
  assert.throws(() => entries(prefix + row + row + '</urlset>', "pages"), /Duplikaty/);
  assert.throws(() => entries(prefix + row + '</urlset>', "index"), /format/);
});

test("noncanonical and noindex pages cannot pass sitemap verification", () => {
  const url = "https://www.psychologica.pl/";
  assert.throws(() => verifyPage('<link rel="canonical" href="https://www.psychologica.pl/o-mnie/">', url), /canonical/);
  assert.throws(() => verifyPage(`<link rel="canonical" href="${url}"><meta name="robots" content="noindex,follow">`, url), /noindex/);
});
