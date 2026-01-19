import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // Deploys to GitHub Pages at /sbcsclub-web/
  base: "/sbcsclub-web/",
  plugins: [react()],
});
