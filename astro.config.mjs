import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [tailwind(), mdx(), sitemap()],
  image: {
    domains: ["picsum.photos"],
  },
  content: {
    sources: ['src/content']
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
