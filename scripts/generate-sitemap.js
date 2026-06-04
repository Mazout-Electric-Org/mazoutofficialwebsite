import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://mazoutelectric.com";

const today = new Date().toISOString().split("T")[0];

// path, priority, changefreq, lastmod
const ENTRIES = [
    { path: "/", priority: "1.0", changefreq: "weekly", lastmod: today },
    { path: "/training-platform", priority: "0.9", changefreq: "weekly", lastmod: today },
    { path: "/vision", priority: "0.8", changefreq: "monthly", lastmod: today },
    { path: "/gallery", priority: "0.7", changefreq: "monthly", lastmod: today },
    { path: "/blogs", priority: "0.9", changefreq: "weekly", lastmod: today },
    { path: "/blog/building_a_real_time_ev_teleoperation_platform", priority: "0.8", changefreq: "monthly", lastmod: "2026-06-02" },
    { path: "/blog/can-vs-uart-vs-i2c-for-automotive-subsystems-what-we-used-and-why", priority: "0.8", changefreq: "monthly", lastmod: "2026-05-29" },
    { path: "/blog/how-linux-enable-scalability-in-zooty-towards-autosar", priority: "0.8", changefreq: "monthly", lastmod: "2026-05-28" },
    { path: "/blog/hidden-challenges-of-building-a-teleop-robotic-vehicle", priority: "0.8", changefreq: "monthly", lastmod: "2026-05-27" },
    { path: "/blog/building-autonomous-vehicles-with-zooty-platform", priority: "0.8", changefreq: "monthly", lastmod: "2026-05-26" },
    { path: "/blog/autonomous-navigation", priority: "0.7", changefreq: "monthly", lastmod: "2026-04-05" },
    { path: "/blog/patrolling-demonstration", priority: "0.7", changefreq: "monthly", lastmod: "2026-02-17" },
    { path: "/blog/last-mile-logistics", priority: "0.6", changefreq: "monthly", lastmod: "2025-07-23" },
    { path: "/blog/software-defined-vehicles", priority: "0.6", changefreq: "monthly", lastmod: "2023-12-12" },
    { path: "/privacy", priority: "0.3", changefreq: "yearly", lastmod: today },
    { path: "/terms", priority: "0.3", changefreq: "yearly", lastmod: today },
    { path: "/cookies", priority: "0.3", changefreq: "yearly", lastmod: today },
];

function buildXML() {
    const urls = ENTRIES.map((e) => `
  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join("");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

const output = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(output, buildXML(), "utf8");

console.log("✅ sitemap.xml generated!");