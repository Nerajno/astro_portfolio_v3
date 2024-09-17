import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from './remark-reading-time.mjs';

// Conditionally import the Vercel adapter
let vercelAdapter;
if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
  vercelAdapter = () => import('@astrojs/vercel/serverless');
}

// https://astro.build/config
export default defineConfig({
  site: "https://astro-portfolio-v3-dusky.vercel.app",
  output: process.env.NODE_ENV === 'production' ? "hybrid" : "static",
  adapter: process.env.NODE_ENV === 'production' ? vercelAdapter() : undefined,
  integrations: [tailwind(), mdx(), sitemap()],
  image: {
    domains: ["picsum.photos"],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
