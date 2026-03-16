// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://navinpatel76.github.io",
  base: "/NavinPatelPortfolio/",
  vite: {
    plugins: [tailwindcss()],
  },
});
