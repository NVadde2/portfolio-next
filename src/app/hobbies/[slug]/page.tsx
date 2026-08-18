import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/markdown";
import { getHobbyContent, getHobbyContentSlugs } from "@/lib/hobby-content";

export function generateStaticParams() {
  return getHobbyContentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getHobbyContent(slug);
  return { title: post ? `${post.title} — Neha Reddy Vadde` : "Not found" };
}

export default async function HobbyWriteupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getHobbyContent(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-ink-faint hover:text-accent"
      >
        ← Back
      </Link>

      <div className="mb-3 font-mono text-xs text-ink-faint">{post.date}</div>
      <h1 className="font-display text-3xl font-medium text-ink sm:text-4xl">
        {post.title}
      </h1>

      <div className="mt-8">
        <Markdown content={post.content} />
      </div>
    </article>
  );
}
