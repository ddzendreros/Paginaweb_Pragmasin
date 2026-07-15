import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// Canonicals, og:url/og:image, the sitemap and robots.txt all derive from
// this. SITE_URL stays overridable for preview environments.
const SITE_URL = process.env.SITE_URL ?? "https://pragmasyn.com";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  // Prose-heavy site: HTML whitespace rules, not the v7 JSX default that
  // eats spaces around inline elements.
  compressHTML: true,
});
