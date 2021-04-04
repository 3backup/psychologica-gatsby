module.exports = {
  siteMetadata: {
    title: `Psychologica - gabinet psychologiczny Renata Zuba`,
    menuLinks: [
      {
        name: "Oferta",
        link: "/oferta",
      },
      {
        name: "Dla terapeutów",
        link: "/dla-terapeutow",
      },
      {
        name: "O mnie",
        link: "/o-mnie",
      },
      {
        name: "Lokalizacja",
        link: "/lokalizacja",
      },
      {
        name: "Skontaktuj się",
        link: "/skontaktuj-sie",
      },
    ],
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Renata Zuba Psychologica`,
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "35d2a2c19a7e6e94a0e19385ede573",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-linaria",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-P9450SZXPG",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
