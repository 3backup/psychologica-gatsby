const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

exports.createPages = ({ actions }) => {
  actions.createRedirect({
    fromPath: "/index.html",
    toPath: "/",
    isPermanent: true,
    redirectInBrowser: true,
  });
};

exports.onPostBuild = async () => {
  await sharp(path.join(__dirname, "src/images/about-renata-zuba.jpg"))
    .resize(1200, 630, { fit: "cover", position: "north" })
    .jpeg({ quality: 82, progressive: true })
    .toFile(path.join(__dirname, "public/og-image.jpg"));

  fs.copyFileSync(
    path.join(__dirname, "src/images/logo-psychologica.png"),
    path.join(__dirname, "public/logo-psychologica.png"),
  );
};
