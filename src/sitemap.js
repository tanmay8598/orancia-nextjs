const fs = require("fs");
const { create } = require("apisauce");
const { promisify } = require("util");

const writeFileAsync = promisify(fs.writeFile);

const apiClient = create({
  baseURL: "https://backend.orancia.in/api",
});

const BASE_URL = "https://orancia.in/";

async function generateSitemap() {
  try {
    const staticPaths = ["/", "/product", "/blog"];
    let dynamicPaths = [];

    // Fetch Product Data
    const productResponse = await apiClient.get("/product/get");
    if (productResponse.ok && productResponse.data?.products) {
      const productPaths = productResponse.data.products.map((p) => `/product/${p._id}`);
      dynamicPaths.push(...productPaths);
    } else {
      console.warn("⚠️ Failed to fetch product data or invalid response");
    }

    // Fetch Blog Data
    const blogResponse = await apiClient.get("/blog/");
    if (blogResponse.ok && blogResponse.data?.blogs) {
      const blogPaths = blogResponse.data.blogs.map((b) => `/blog/${b._id}`);
      dynamicPaths.push(...blogPaths);
    } else {
      console.warn("⚠️ Failed to fetch blog data or invalid response");
    }

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

    // Ensure 'public' directory exists
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }

    await writeFileAsync("public/sitemap.xml", sitemap);
    console.log("✅ Sitemap generated successfully!");

  } catch (error) {
    console.error("❌ Error generating sitemap:", error.message);
  }
}

generateSitemap();
