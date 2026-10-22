const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

async function verifyHomeHtml(html, readAsset) {
  const text = (value) => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const sections = [...html.matchAll(/<section\b[^>]*>([\s\S]*?)<\/section>/gi)].map((match) => match[1]);
  const about = sections.find((value) => [...value.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)]
    .some((match) => /^Psycholog Kliniczny Renata Zuba$/i.test(text(match[1]))));
  const offerLink = [...(about || "").matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)]
    .find((match) => text(match[2]) === "Oferta terapeutyczna");
  assert.equal(offerLink?.[1].match(/\bhref="([^"]+)"/)?.[1], "/oferta-terapeutyczna/",
    "Link Oferta terapeutyczna w sekcji o prowadzącej musi prowadzić do oferty");
  const questions = html.match(/<section\b(?=[^>]*aria-label="Pytania o pomoc psychologiczną i psychoterapię")[^>]*>([\s\S]*?)<\/section>/i)?.[1];
  assert(questions, "Brak pytań klientów na stronie głównej");
  assert.equal((questions.match(/<h2\b/g) || []).length, 6, "Strona główna: wymagane sześć pytań klientów");
  assert(text(questions).includes("Jak przygotować się do pierwszego spotkania?"));
  assert(text(questions).includes("Ile spotkań będzie potrzebnych?"));
  const bytes = Buffer.byteLength(html);
  assert(bytes <= 160000, `HTML strony głównej przekracza 160 kB: ${bytes} B`);
  const inlineCss = [...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)]
    .reduce((total, match) => total + Buffer.byteLength(match[1]), 0);
  assert(inlineCss < 80000, "Odchudzony arkusz CSS przekracza 80 kB");

  // Keep the reduced CSS inline: an external blocking sheet regressed real
  // mobile PageSpeed despite passing localhost Lighthouse.
  const stylesheet = [...html.matchAll(/<style\b[^>]*>/gi)]
    .find((match) => /\bdata-identity="gatsby-global-css"/.test(match[0]));
  assert(stylesheet, "Brak CSS potrzebnego do pierwszego wyświetlenia");
  const cssUrl = stylesheet[0].match(/\bdata-href="([^"]+)"/)?.[1];
  assert(/^\/styles\.[a-f0-9]+\.css$/.test(cssUrl), "Brak wersjonowanego arkusza CSS");
  assert(!/<link\b[^>]*rel="stylesheet"[^>]*href="\/styles\./.test(html), "Blokujący zewnętrzny CSS opóźnia pierwsze wyświetlenie");
  const svgUrls = [...html.matchAll(/<img\b[^>]*\bsrc="(\/static\/[^"?]+\.svg)"/gi)].map((match) => match[1]);
  assert(svgUrls.some((url) => url.includes("logo-psychologica-black-")), "Brak pliku logo nagłówka");
  assert(svgUrls.some((url) => url.includes("logo-psychologica-white-")), "Brak pliku logo stopki");
  assert(svgUrls.some((url) => url.includes("leaves-")), "Brak pliku dekoracji");
  const jsUrls = [...html.matchAll(/<script\b[^>]*\bsrc="(\/[^"?]+\.js)"/gi)].map((match) => match[1]);
  assert(jsUrls.length >= 3, "Brak zewnętrznych skryptów aplikacji");
  assert(jsUrls.every((url) => /^\/[a-zA-Z0-9_-]+-[a-f0-9]{20}\.js$/.test(url)),
    "Cache immutable jest przeznaczony wyłącznie dla skryptów z hashem w nazwie");

  for (const url of new Set([cssUrl, ...svgUrls, ...jsUrls])) {
    const asset = await readAsset(url);
    assert(asset.body.length, `Pusty zasób ${url}`);
    assert(/\bmax-age=31536000\b/.test(asset.cacheControl) && /\bimmutable\b/.test(asset.cacheControl),
      `Brak rocznego cache wersjonowanego zasobu: ${url}`);
    if (url === cssUrl) assert(!/url\(["']?data:(?:font\/|application\/vnd\.ms-fontobject)/i.test(asset.body),
      "Fonty ponownie osadzono w CSS zamiast w plikach");
  }
  console.log(`HTML: OK: ${bytes} B, ${inlineCss} B CSS inline, dostępne pliki CSS/SVG/JS z rocznym cache`);
  return { bytes, inlineCss };
}

async function local() {
  const root = path.join(__dirname, "..");
  const config = require(path.join(root, "vercel.json"));
  for (const entry of fs.readdirSync(path.join(root, "public"), { recursive: true, withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".html")) continue;
    const filename = path.join(entry.parentPath || entry.path, entry.name);
    assert(!fs.readFileSync(filename).includes(0), `NUL w wygenerowanym HTML: ${entry.name}`);
  }
  return verifyHomeHtml(fs.readFileSync(path.join(root, "public/index.html"), "utf8"), async (url) => {
    const source = url.endsWith(".css") ? "/styles.:hash.css"
      : url.endsWith(".js") ? "/:file([a-zA-Z0-9_-]+-[a-f0-9]{20}).js" : "/static/:path*";
    const cacheControl = config.headers.find((entry) => entry.source === source)?.headers
      .find((header) => header.key.toLowerCase() === "cache-control")?.value || "";
    return { body: fs.readFileSync(path.join(root, "public", url), "utf8"), cacheControl };
  });
}

async function remote(domain, html) {
  return verifyHomeHtml(html, async (url) => {
    const response = await fetch(new URL(url, domain), { redirect: "error", signal: AbortSignal.timeout(30000) });
    assert.equal(response.status, 200, `Niedostępny zasób ${url}`);
    return { body: await response.text(), cacheControl: response.headers.get("cache-control") || "" };
  });
}

module.exports = { verifyHomeHtml, local, remote };
if (require.main === module) local().catch((error) => { console.error(error.message); process.exitCode = 1; });
