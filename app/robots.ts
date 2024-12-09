import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // disallow: ["/sitmap_index.xml", "/api/sitemap2", "/api/sitemap3"],
      },
    ],
    sitemap: ["https://bezrah.org/sitemap.xml"],
  };
}
