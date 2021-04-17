module.exports = {
  siteMetadata: {
    title: `Psychologica - gabinet psychologiczny Renata Zuba`,
    siteUrl: "http://localhost:8000/",
    menuLinks: [
      {
        name: "Oferta terapeutyczna",
        link: "/oferta-terapeutyczna",
      },
      {
        name: "Edukacja",
        link: "/edukacja",
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
    "gatsby-plugin-linaria",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "35d2a2c19a7e6e94a0e19385ede573",
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Manrope\:400`, `Red Hat Display\:400,500,600,700`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",

    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-P9450SZXPG",
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
  ],
};
