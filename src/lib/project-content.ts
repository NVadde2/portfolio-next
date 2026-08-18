import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface ProjectContent {
  slug: string;
  title: string;
  tag: string;
  date: string;
  description: string;
  content: string;
}

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export function getProjectContentSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getProjectContent(slug: string): ProjectContent | null {
  const filePath = path.join(PROJECTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    tag: data.tag as string,
    date: data.date as string,
    description: data.description as string,
    content,
  };
}
