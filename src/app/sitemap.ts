import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/blog";
import { getHobbyContentSlugs } from "@/lib/hobby-content";

// Required for special metadata routes under output: "export".
export const dynamic = "force-static";

// Not process.env.NEXT_PUBLIC_BASE_PATH here — sitemap URLs need the full
// deployed origin, not just the basePath.
const BASE_URL = "https://nvadde2.github.io/portfolio-next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects
    .filter((p) => p.hasCaseStudy)
    .map((p) => ({
      url: `${BASE_URL}/projects/${p.slug}`,
      changeFrequency: "yearly",
      priority: 0.7,
    }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const hobbyRoutes: MetadataRoute.Sitemap = getHobbyContentSlugs().map(
    (slug) => ({
      url: `${BASE_URL}/hobbies/${slug}`,
      changeFrequency: "yearly",
      priority: 0.4,
    })
  );

  return [...staticRoutes, ...projectRoutes, ...blogRoutes, ...hobbyRoutes];
}
