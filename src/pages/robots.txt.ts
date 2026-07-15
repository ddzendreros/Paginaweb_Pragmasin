import type { APIRoute } from "astro";

// Derived from config so it self-corrects when the real domain lands.
export const GET: APIRoute = ({ site }) => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${new URL("sitemap-index.xml", site)}`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
