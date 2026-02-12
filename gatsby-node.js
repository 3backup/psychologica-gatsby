const fs = require("fs");
const path = require("path");

exports.onPostBuild = () => {
  const publicDir = path.join(__dirname, "public");
  const sitemap0 = path.join(publicDir, "sitemap-0.xml");
  const sitemapXml = path.join(publicDir, "sitemap.xml");
  if (fs.existsSync(sitemap0)) {
    fs.copyFileSync(sitemap0, sitemapXml);
  }
};
