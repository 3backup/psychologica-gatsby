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
