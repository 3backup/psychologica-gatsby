const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { execFileSync } = require("node:child_process");
const { verifyCms } = require("./scripts/cms-release-check.cjs");

exports.onPreBuild = async () => {
  await verifyCms();
};

exports.createPages = ({ actions }) => {
  actions.createRedirect({
    fromPath: "/index.html",
    toPath: "/",
    isPermanent: true,
    redirectInBrowser: true,
  });
};

exports.onPostBuild = async () => {
  const cms = await verifyCms();
  const commit = process.env.VERCEL_GIT_COMMIT_SHA ||
    execFileSync("git", ["rev-parse", "HEAD"], { cwd: __dirname, encoding: "utf8" }).trim();
  if (!/^[a-f0-9]{40}$/.test(commit)) {
    throw new Error("Nie można potwierdzić SHA wydania");
  }
  fs.writeFileSync(
    path.join(__dirname, "public/release.json"),
    JSON.stringify({ commit, cms, databaseChangesRequired: false }) + "\n",
  );
  const queryDirectory = path.join(__dirname, "public/page-data/sq/d");
  const session = fs.readdirSync(queryDirectory)
    .filter((filename) => filename.endsWith(".json"))
    .map((filename) => JSON.parse(fs.readFileSync(path.join(queryDirectory, filename), "utf8")))
    .map((result) => result.data?.datoCmsHowitlookslike)
    .find((result) => result?.wspPracaCena && result?.processTime);
  if (!session) throw new Error("Brak ceny i czasu sesji z CMS dla wersji Markdown");
  const markdown = fs.readFileSync(path.join(__dirname, "static/index.md"), "utf8")
    .replace("{{sessionPrice}}", () => session.wspPracaCena)
    .replace("{{sessionTime}}", () => session.processTime);
  fs.writeFileSync(path.join(__dirname, "public/index.md"), markdown);
  await sharp(path.join(__dirname, "src/images/about-renata-zuba.jpg"))
    .resize(1200, 630, { fit: "cover", position: "north" })
    .jpeg({ quality: 82, progressive: true })
    .toFile(path.join(__dirname, "public/og-image.jpg"));

  fs.copyFileSync(
    path.join(__dirname, "src/images/logo-psychologica.png"),
    path.join(__dirname, "public/logo-psychologica.png"),
  );
};
