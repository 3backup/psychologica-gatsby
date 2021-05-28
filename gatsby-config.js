module.exports = {
  siteMetadata: {
    title: `Psychologica - gabinet psychologiczny Renata Zuba Rzeszów`,
    siteUrl: "http://localhost:8000/",
    menuLinks: [
      {
        name: "Oferta terapeutyczna",
        link: "/oferta-terapeutyczna",
      },
      {
        name: "Oferta Edukacyjna",
        link: "/oferta-edukacyjna",
      },
      {
        name: "Superwizja",
        link: "/superwizja",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",

        display: "standalone",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
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
        fonts: [`Manrope\:400,700`, `Red Hat Display\:400,500,600,700`],
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-P9450SZXPG", // Google Analytics / GA
        ],

        gtagConfig: {
          optimize_id: "GTM-PPW897F",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
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
