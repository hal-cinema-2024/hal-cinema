import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), TanStackRouterVite(), injectScript()],
});

import { Plugin } from "vite";
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
