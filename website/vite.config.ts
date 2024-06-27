import { Plugin, defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react(), TanStackRouterVite(), injectScript()],
  server: {
    port: 3000,
  },
});

import { defaultConfig, getColorModeScript } from "@yamada-ui/react";

function injectScript(): Plugin {
  return {
    name: "vite-plugin-inject-scripts",
    transformIndexHtml(html) {
      const content = getColorModeScript({
        initialColorMode: defaultConfig.initialColorMode,
      });

      return html.replace("<body>", `<body><script>${content}</script>`);
    },
  };
}
