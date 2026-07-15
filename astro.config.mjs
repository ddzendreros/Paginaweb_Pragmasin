import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// Site URL is a reserved-TLD placeholder until the real domain exists
// ([[PENDIENTE: dominio]] in TODO-CONTENIDO.md). Canonicals and the sitemap
// derive from it, so they regenerate correctly the day it is set.
const SITE_URL = process.env.SITE_URL ?? "https://pragmasyn.example";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  // Prose-heavy site: HTML whitespace rules, not the v7 JSX default that
  // eats spaces around inline elements.
  compressHTML: true,
});
