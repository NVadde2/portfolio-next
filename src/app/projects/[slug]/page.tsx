import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/markdown";
import { getProjectContent, getProjectContentSlugs } from "@/lib/project-content";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return getProjectContentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getProjectContent(slug);
  return { title: post ? `${post.title} — Neha Reddy Vadde` : "Project not found" };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getProjectContent(slug);
  if (!post) notFound();

  const project = projects.find((p) => p.slug === slug);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <Link
        href="/projects"
        className="mb-8 inline-block text-sm text-ink-faint hover:text-accent"
      >
        ← Back to projects
      </Link>

      <div className="mb-3 flex items-center gap-3 font-mono text-xs text-ink-faint">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.tag}</span>
      </div>
      <h1 className="font-display text-3xl font-medium text-ink sm:text-4xl">
        {post.title}
      </h1>

      {project && project.techStack.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-faint"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="mt-8">
        <Markdown content={post.content} />
      </div>
    </article>
  );
}
