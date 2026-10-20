// Run immediately after gatsby-plugin-sitemap and before the hosting builder
// snapshots public/. Files created only after `gatsby build` may be omitted.
exports.onPostBuild = async () => {
  await require("../../scripts/verify-sitemap.cjs").local();
  await require("../../scripts/verify-home-html.cjs").local();
};
