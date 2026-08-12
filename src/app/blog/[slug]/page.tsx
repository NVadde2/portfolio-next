import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/markdown";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return { title: post ? `${post.title} — Neha Reddy Vadde` : "Post not found" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm text-ink-faint hover:text-accent"
      >
        ← Back to blog
      </Link>

      <div className="mb-3 flex items-center gap-3 font-mono text-xs text-ink-faint">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.tag}</span>
      </div>
      <h1 className="font-display text-3xl font-medium text-ink sm:text-4xl">
        {post.title}
      </h1>

      <div className="mt-8">
        <Markdown content={post.content} />
      </div>
    </article>
  );
}
