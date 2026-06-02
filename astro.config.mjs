import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://lucasquintela23.github.io",
  base: "/blog-quintela/",
  redirects: {
    "/linha-de-producao-qa-vs-qc": "/2026-06-01-linha-de-producao-qa-vs-qc",
  },
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
