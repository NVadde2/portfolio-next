import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface HobbyContent {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

const HOBBIES_DIR = path.join(process.cwd(), "content", "hobbies");

export function getHobbyContentSlugs(): string[] {
  if (!fs.existsSync(HOBBIES_DIR)) return [];
  return fs
    .readdirSync(HOBBIES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getHobbyContent(slug: string): HobbyContent | null {
  const filePath = path.join(HOBBIES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    content,
  };
}

/** Cheap existence check for rendering "has a write-up" indicators without reading file contents. */
export function hasHobbyWriteup(slug: string): boolean {
  return fs.existsSync(path.join(HOBBIES_DIR, `${slug}.md`));
}
