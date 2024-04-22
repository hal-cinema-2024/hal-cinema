import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
});
