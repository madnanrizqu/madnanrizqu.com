import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [mdx(), tailwind(), react()],
  output: "static",
  adapter: cloudflare(),
});
