module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 2,
        loose: true,
        shippedProposals: true,
      },
    ],
    "@babel/preset-react",
    "linaria/babel",
  ],
  plugins: [
    ["@babel/plugin-syntax-dynamic-import", { "loose": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true}]
    ,
  ],
};
