const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const domain = "https://www.psychologica.pl";
const businessId = `${domain}/#business`;

function sitemapUrls(xml) {
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert(urls.length, "Pusta mapa witryny");
  for (const url of urls) assert.equal(new URL(url).origin, domain, "Obcy adres w mapie witryny");
  return urls;
}

function verifyLocalBusiness(html, facts) {
  const documents = [...html.matchAll(/<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => JSON.parse(match[1]));
  for (const document of documents) assert.equal(document["@context"], "https://schema.org");
  const nodes = documents.flatMap((document) => document["@graph"] || [document]);
  const businesses = nodes.filter((node) => [].concat(node["@type"] || [])
    .some((type) => ["LocalBusiness", "ProfessionalService"].includes(type)));
  assert.equal(businesses.length, 1, "Wymagany jeden wpis firmy, bez duplikatów");
  const business = businesses[0];
  assert.deepEqual(business["@type"], ["LocalBusiness", "ProfessionalService"]);
  assert.equal(business["@id"], businessId);
  assert.equal(business.name, "Psychologica - Renata Zuba");
  assert.equal(business.url, `${domain}/`);
  assert.deepEqual(business.address, { "@type": "PostalAddress", ...facts.address });
  assert.equal(business.email, facts.email);
  assert.equal(business.telephone, facts.telephone);
  assert(business.areaServed.some((area) => area["@type"] === "City" && area.name === facts.address.addressLocality));
  for (const property of ["image", "logo"]) assert.equal(new URL(business[property]).origin, domain);
  assert.equal(nodes.find((node) => node["@type"] === "WebSite")?.publisher?.["@id"], businessId);
  assert.equal(nodes.find((node) => node["@type"] === "Person")?.worksFor?.["@id"], businessId);
  for (const service of nodes.filter((node) => node["@type"] === "Service")) {
    assert.equal(service.provider?.["@id"], businessId);
  }
  assert(/<link\b(?=[^>]*\brel="describedby")(?=[^>]*\bhref="https:\/\/www\.psychologica\.pl\/llms\.txt")[^>]*>/i.test(html),
    "Brak odnośnika opisującego stronę plikiem llms.txt");
}

function verifyLlms(text, pageUrls) {
  const source = fs.readFileSync(path.join(__dirname, "../static/llms.txt"), "utf8");
  assert.equal(text, source, "Opublikowany llms.txt różni się od zatwierdzonego pliku");
  assert.equal((text.match(/^# /gm) || []).length, 1);
  assert(text.startsWith("# Psychologica – Renata Zuba\n"));
  const summary = text.match(/^> (.+)$/m)?.[1];
  assert(summary, "Brak opisu firmy");
  assert.equal(summary.split(/(?<=[.!?])\s+/).length, 3, "Opis musi zawierać trzy zdania");
  assert(summary.includes("superwizję psychoterapii, prowadzoną wyłącznie stacjonarnie w Rzeszowie"),
    "Opis firmy musi jasno wskazywać stacjonarną formę superwizji");
  const links = [...text.matchAll(/^- \[([^\]]+)\]\((https:\/\/[^)]+)\): (.+)$/gm)];
  assert.equal(links.length, pageUrls.length + 1, "Brak opisanych stron lub wersji Markdown");
  const urls = links.map((match) => match[2]);
  assert.equal(new Set(urls).size, urls.length, "Powtórzony link w llms.txt");
  assert.deepEqual([...urls].sort(), [...pageUrls, `${domain}/index.md`].sort());
  for (const link of links) assert(link[3].endsWith("."), "Brak pełnego opisu podstrony");
  const supervision = links.find((link) => link[2] === `${domain}/superwizja/`);
  assert(supervision?.[1] === "Superwizja psychoterapii"
    && supervision[3].includes("wyłącznie stacjonarnie w Rzeszowie")
    && !/online|zdaln/i.test(supervision[3]), "llms.txt: superwizja musi być opisana jako stacjonarna");
  assert(!/\{\{|\bundefined\b|\bnull\b/.test(text), "Niewypełniony tekst pliku llms.txt");
  return urls;
}

module.exports = { sitemapUrls, verifyLocalBusiness, verifyLlms };
