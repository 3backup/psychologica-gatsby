const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

async function verifyHomeHtml(html, readAsset) {
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

  for (const url of new Set([cssUrl, ...svgUrls])) {
    const asset = await readAsset(url);
    assert(asset.body.length, `Pusty zasób ${url}`);
    assert(/\bmax-age=31536000\b/.test(asset.cacheControl) && /\bimmutable\b/.test(asset.cacheControl),
      `Brak rocznego cache wersjonowanego zasobu: ${url}`);
    if (url === cssUrl) assert(!/url\(["']?data:(?:font\/|application\/vnd\.ms-fontobject)/i.test(asset.body),
      "Fonty ponownie osadzono w CSS zamiast w plikach");
  }
  console.log(`HTML: OK — ${bytes} B, ${inlineCss} B CSS inline, dostępne pliki CSS/SVG z rocznym cache`);
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
    const source = url.endsWith(".css") ? "/styles.:hash.css" : "/static/:path*";
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
