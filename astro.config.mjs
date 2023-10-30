import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
  ],
  output: "server",
  adapter: vercel({
    edgeMiddleware: true,
  }),
});
