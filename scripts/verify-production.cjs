const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const path = require("node:path");
const { verifyCms } = require("./cms-release-check.cjs");

const root = path.join(__dirname, "..");
const repository = "3backup/psychologica-gatsby";
const remote = `https://github.com/${repository}.git`;
const ref = "refs/heads/main";
const domain = "https://www.psychologica.pl";

async function read(url, format) {
  const response = await fetch(url, {
    headers: { Accept: format === "json" ? "application/json" : "text/html", "Cache-Control": "no-cache" },
    signal: AbortSignal.timeout(30000),
  });
  assert(response.ok, `Odczyt produkcji nie powiódł się: ${response.status}`);
  return format === "json" ? response.json() : response.text();
}

async function main() {
  const commit = process.argv[2];
  assert(/^[a-f0-9]{40}$/.test(commit || ""), "Podaj pełny SHA zatwierdzonego wydania");
  const githubSha = execFileSync("git", ["ls-remote", remote, ref], { cwd: root, encoding: "utf8" }).split(/\s+/)[0];
  assert.equal(githubSha, commit, "GITHUB: docelowy ref nie wskazuje wydania");
  console.log(`GITHUB: OK ${repository} ${ref} ${commit}`);

  const cms = await verifyCms();
  const release = await read(`${domain}/release.json?verify=${commit}`, "json");
  assert.equal(release.commit, commit, "APLIKACJA: domena produkcyjna nie używa wydania");
  assert.deepEqual(release.cms, cms, "BAZA: konfiguracja/schemat buildu różnią się od obecnego CMS");
  assert.equal(release.databaseChangesRequired, false, "Wydanie wymaga osobnej weryfikacji zmian bazy");

  const deployments = JSON.parse(execFileSync("gh", ["api", `repos/${repository}/deployments?sha=${commit}`], { encoding: "utf8" }));
  const deployment = deployments.find((item) => item.sha === commit && item.environment.toLowerCase() === "production");
  assert(deployment, "APLIKACJA: brak produkcyjnego wdrożenia SHA w GitHub");
  const statuses = JSON.parse(execFileSync("gh", ["api", `repos/${repository}/deployments/${deployment.id}/statuses`], { encoding: "utf8" }));
  assert.equal(statuses[0]?.state, "success", "APLIKACJA: brak udanego wdrożenia");

  const html = await read(`${domain}/?verify=${commit}`);
  assert(html.includes("<title>Psycholog i psychoterapeuta w Rzeszowie – Renata Zuba | Psychologica</title>"), "Nieprawidłowy title");
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, "Strona musi zawierać jeden H1");
  for (const text of ["W czym mogę pomóc", "Dla kogo jest ta pomoc", "Jak zacząć współpracę", "Ile kosztują usługi psychologa w Rzeszowie?", "Jak wygląda współpraca krok po kroku?", "Dla kogo jest ta usługa?", "Gdzie odbywają się spotkania?"]) {
    assert(html.includes(text), `Brak treści: ${text}`);
  }
  assert(!/<img\b(?![^>]*\balt=)[^>]*>/i.test(html), "Obraz bez atrybutu alt");
  console.log(`APLIKACJA: OK ${domain} — SHA, title, H1, treści i alt potwierdzone`);
  console.log(`BAZA: zweryfikowana; brak wymaganych zmian. DatoCMS ${cms.siteId}/${cms.environment}; schemat ${cms.schemaSha256}`);
}

main().catch((error) => {
  console.error(`NIEKOMPLETNE/ZABLOKOWANE: ${error.message}`);
  process.exitCode = 1;
});
