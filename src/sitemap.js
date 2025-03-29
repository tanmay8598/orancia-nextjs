const fs = require("fs");

const { create } = require("apisauce");

const { promisify } = require("util");

const writeFileAsync = promisify(fs.writeFile);
const apiClient2 = create({
  baseURL: "https://backend.orancia.in/api",
  headers: { Accept: "application/vnd.github.v3+json" },
});
const BASE_URL = "https://orancia.in/";

async function sitemap() {
  const staticPaths = ["/", "/product"];

  const { data } = await apiClient2.get("product/get");
  let dynamicPaths = data.products;

  dynamicPaths = dynamicPaths.map((post) => `/product/${post._id}`);

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths
      .map(
        (url) => `
    <url>
      <loc>${BASE_URL}${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
  `
      )
      .join("")}
</urlset>`;

  await writeFileAsync("public/sitemap.xml", sitemap);
}

sitemap();
