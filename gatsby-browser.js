/**
 * Load self-hosted fonts (Fontsource) so they are available globally.
 * Same font-family names as before: "Manrope", "Red Hat Display".
 */
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-ext-400.css";
import "@fontsource/manrope/latin-700.css";
import "@fontsource/manrope/latin-ext-700.css";
import "@fontsource/red-hat-display/latin-400.css";
import "@fontsource/red-hat-display/latin-ext-400.css";
import "@fontsource/red-hat-display/latin-500.css";
import "@fontsource/red-hat-display/latin-ext-500.css";
import "@fontsource/red-hat-display/latin-700.css";
import "@fontsource/red-hat-display/latin-ext-700.css";
import { registerWebMcpTools } from "./src/utils/webmcp";

registerWebMcpTools();
