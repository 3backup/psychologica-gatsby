const assert = require("node:assert/strict");
const { createHash } = require("node:crypto");
const path = require("node:path");

const root = path.join(__dirname, "..");
const digest = (value) => createHash("sha256").update(JSON.stringify(value)).digest("hex");
const sortById = (rows) => rows.sort((a, b) => a.id.localeCompare(b.id));

async function readCmsMetadata() {
  const config = require(path.join(root, "gatsby-config.js"));
  const source = config.plugins.find((plugin) => plugin.resolve === "gatsby-source-datocms");
  assert(source, "Brak konfiguracji DatoCMS");
  assert.equal(source.options.preview, false, "Wymagana jest opublikowana treść CMS");
  assert.equal(source.options.environment || "main", "main", "Niewłaściwe środowisko CMS");
  assert(!source.options.apiUrl, "Niestandardowy endpoint CMS wymaga osobnej weryfikacji");

  async function get(endpoint, environment = true) {
    const response = await fetch(`https://site-api.datocms.com/${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${source.options.apiToken}`,
        Accept: "application/json",
        "X-Api-Version": "3",
        ...(environment ? { "X-Environment": "main" } : {}),
      },
      signal: AbortSignal.timeout(30000),
    });
    assert(response.ok, `Nie można zweryfikować metadanych CMS: ${endpoint} (${response.status})`);
    return (await response.json()).data;
  }

  const site = await get("site");
  const environments = await get("environments", false);
  const primary = environments.find((environment) => environment.meta?.primary);
  assert.equal(site.id, "43634", "Niewłaściwy projekt CMS");
  assert.equal(primary?.id, "main", "Niepotwierdzone główne środowisko CMS");
  const types = sortById(await get("item-types"));
  const schema = [];
  for (const type of types) {
    const fields = sortById(await get(`item-types/${type.id}/fields`));
    schema.push({
      id: type.id,
      apiKey: type.attributes.api_key,
      singleton: type.attributes.singleton,
      modularBlock: type.attributes.modular_block,
      draftMode: type.attributes.draft_mode_active,
      fields: fields.map((field) => ({
        id: field.id,
        apiKey: field.attributes.api_key,
        type: field.attributes.field_type,
        localized: field.attributes.localized,
        validators: field.attributes.validators,
        defaultValue: field.attributes.default_value,
      })),
    });
  }
  return {
    siteId: site.id,
    environment: primary.id,
    schemaSha256: digest(schema),
    sourceConfigSha256: digest(source.options),
  };
}

async function verifyCms() {
  const expected = require(path.join(root, "deployment/cms-baseline.json"));
  const actual = await readCmsMetadata();
  assert.deepEqual(actual, expected, "Niewyjaśniona zmiana schematu lub konfiguracji CMS — wdrożenie zablokowane");
  return actual;
}

module.exports = { readCmsMetadata, verifyCms };

if (require.main === module) {
  verifyCms().then(() => console.log("BAZA: zweryfikowana; brak wymaganych zmian (DatoCMS 43634/main)."))
    .catch((error) => { console.error(error.message); process.exitCode = 1; });
}
