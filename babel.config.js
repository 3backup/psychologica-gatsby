module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { esmodules: true },
        modules: false,
        useBuiltIns: false,
        loose: true,
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "linaria/babel",
  ],
  plugins: [
    ["@babel/plugin-syntax-dynamic-import", { "loose": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
  ],
};
