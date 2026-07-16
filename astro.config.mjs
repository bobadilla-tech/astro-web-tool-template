import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { site } from "./src/config/site.ts";

export default defineConfig({
  site: site.url,
  output: "static",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Homepage gets highest priority; everything else is treated equally.
        if (item.url === `${site.url}/`) {
          item.changefreq = "daily";
          item.priority = 1.0;
        } else {
          item.changefreq = "monthly";
          item.priority = 0.5;
        }
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
      minify: "esbuild",
    },
  },
});
