import type { MetadataRoute } from "next";

// Required for special metadata routes under output: "export".
export const dynamic = "force-static";

const BASE_URL = "https://nvadde2.github.io/portfolio-next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
