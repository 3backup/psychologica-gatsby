import React from "react";
import { renderToString } from "react-dom/server";
import { onRenderBody as collectHelmet } from "gatsby-plugin-react-helmet/gatsby-ssr";

// React 18's streaming UTF-8 buffer can insert NUL padding before Polish letters
// when the smaller SVG markup changes chunk boundaries. These pages are static;
// render the body as a string to preserve the exact text without stream padding.
export const replaceRenderer = (api) => {
  api.replaceBodyHTMLString(renderToString(api.bodyComponent));
  // Collect head metadata in the same synchronous turn. Otherwise parallel
  // renders of aliases such as /404.html can consume each other's Helmet state.
  collectHelmet(api);
};

// Gatsby already emits a content-hashed CSS file. Reuse it so repeat visits
// and page navigation can share the stylesheet instead of downloading it in HTML.
export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  replaceHeadComponents(getHeadComponents().map((component) => {
    if (component.type !== "style" ||
        component.props["data-identity"] !== "gatsby-global-css" ||
        !component.props["data-href"]) return component;

    return React.createElement("link", {
      key: component.key,
      rel: "stylesheet",
      href: component.props["data-href"],
    });
  }));
};
