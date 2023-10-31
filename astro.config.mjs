import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap(), tailwind()],
  output: "server",
  adapter: vercel({
    edgeMiddleware: true
  })
});