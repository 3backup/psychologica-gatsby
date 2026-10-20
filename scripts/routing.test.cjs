const { test } = require("node:test");
const assert = require("node:assert/strict");
const { trace } = require("./verify-routing.cjs");

test("host and slash normalization preserve path/query and finish with a real 404", async () => {
  const read = async (url) => {
    const value = new URL(url);
    if (value.hostname === "psychologica.pl") return new Response("", { status: 308, headers: { Location: `https://www.psychologica.pl${value.pathname}${value.search}` } });
    if (!value.pathname.endsWith("/")) return new Response("", { status: 308, headers: { Location: `${value.pathname}/${value.search}` } });
    return new Response("<h1>Strona nie znaleziona</h1>", { status: 404 });
  };
  const result = await trace("https://psychologica.pl/missing?check=1", read);
  assert.deepEqual(result.chain.map((hop) => hop.status), [308, 308, 404]);
  assert.equal(result.url, "https://www.psychologica.pl/missing/?check=1");
});

test("redirects of unknown URLs to homepage fail verification", async () => {
  await assert.rejects(() => trace("https://www.psychologica.pl/missing", async () => new Response("", {
    status: 308, headers: { Location: "/" },
  })), /zmienia ścieżkę/);
});

test("lost query strings and redirect loops fail verification", async () => {
  await assert.rejects(() => trace("https://psychologica.pl/o-mnie/?check=1", async () => new Response("", {
    status: 301, headers: { Location: "https://www.psychologica.pl/o-mnie/" },
  })), /gubi parametry/);
  await assert.rejects(() => trace("https://www.psychologica.pl/o-mnie/", async (url) => new Response("", {
    status: 308, headers: { Location: url },
  })), /Pętla/);
});
