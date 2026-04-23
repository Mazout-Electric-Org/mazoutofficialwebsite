import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://mazoutelectric.com";

const STATIC_PATHS = [
    "/",
    "/privacy",
    "/terms",
    "/cookies"
];

function buildXML() {
    const urls = STATIC_PATHS.map((p) => {
        return `
  <url>
    <loc>${BASE_URL}${p}</loc>
    <changefreq>weekly</changefreq>
  </url>`;
    }).join("");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

const output = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(output, buildXML(), "utf8");

console.log("✅ sitemap.xml generated!");