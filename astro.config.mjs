import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://madnanrizqu.com",
  integrations: [mdx(), tailwind(), react(), sitemap()],
  output: "static",
  adapter: cloudflare(),
});
