const assert = require("node:assert/strict");

const domain = "https://www.psychologica.pl";
const request = (url) => fetch(url, {
  redirect: "manual",
  headers: { Accept: "text/html", "Cache-Control": "no-cache" },
  signal: AbortSignal.timeout(30000),
});

async function trace(url, read = request) {
  const initial = new URL(url);
  const chain = [];
  const visited = new Set();
  for (let count = 0; count < 5; count++) {
    assert(!visited.has(url), `Pętla przekierowań: ${initial}`);
    visited.add(url);
    const response = await read(url);
    chain.push({ url, status: response.status });
    const html = await response.text();
    if (response.status < 300 || response.status >= 400) return { chain, url, status: response.status, html };
    assert([301, 308].includes(response.status), `Nietrwałe przekierowanie: ${url}`);
    const location = response.headers.get("location");
    assert(location, `Przekierowanie bez Location: ${url}`);
    const target = new URL(location, url);
    assert.equal(target.protocol, "https:", "Przekierowanie musi prowadzić do HTTPS");
    assert(["psychologica.pl", "www.psychologica.pl"].includes(target.hostname), "Przekierowanie do obcej domeny");
    assert.equal(target.pathname.replace(/\/$/, ""), initial.pathname.replace(/\/$/, ""), "Przekierowanie zmienia ścieżkę (np. na stronę główną)");
    assert.equal(target.search, initial.search, "Przekierowanie gubi parametry");
    url = target.href;
  }
  throw new Error(`Zbyt długi łańcuch przekierowań: ${initial}`);
}

async function verifyRouting(read = request, nonce = Date.now()) {
  const missing = `/seo-check-${nonce}-nie-istnieje`;
  const paths = ["/", "/o-mnie/?seo_check=canonical", missing, `${missing}/`, `${missing}.html`];
  const results = await Promise.all(["http://psychologica.pl", "http://www.psychologica.pl", "https://psychologica.pl", domain]
    .flatMap((origin) => paths.map(async (pathname) => {
      const url = origin + pathname;
      const result = await trace(url, read);
      assert.equal(new URL(result.url).origin, domain, "Wymagana jedna domena kanoniczna www");
      if (origin !== domain) assert([301, 308].includes(result.chain[0].status), "Druga domena lub HTTP udostępnia kopię zamiast przekierowania");
      const absent = pathname.startsWith(missing);
      assert.equal(result.status, absent ? 404 : 200, `Nieprawidłowy końcowy status: ${url}`);
      if (absent) {
        assert(/<h1\b[^>]*>Strona nie znaleziona/.test(result.html), "404 nie zawiera pomocnej strony błędu");
        assert(/href="\/"/.test(result.html), "404 nie ma linku do strony głównej");
        assert(!/<meta\b[^>]*http-equiv=["']refresh/i.test(result.html), "404 przekierowuje przez meta refresh");
      } else if (origin === domain) assert.equal(result.chain.length, 1, "Kanoniczny adres nie powinien przekierowywać");
      return { request: url, chain: result.chain, finalStatus: result.status };
    })));
  return results;
}

module.exports = { trace, verifyRouting };
if (require.main === module) verifyRouting().then((rows) => {
  console.log(`PRZEKIEROWANIA: OK — ${rows.length} wariantów domen, HTTPS, ścieżek i 404`);
}).catch((error) => { console.error(error.message); process.exitCode = 1; });
