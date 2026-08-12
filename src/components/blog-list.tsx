import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogList({ posts }: { posts: BlogPostMeta[] }) {
  if (posts.length === 0) {
    return <p className="text-sm text-ink-faint">No posts yet — check back soon.</p>;
  }

  return (
    <div className="divide-y divide-line">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group flex flex-col gap-2 py-6 first:pt-0"
        >
          <div className="flex items-center gap-3 font-mono text-xs text-ink-faint">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.tag}</span>
          </div>
          <h3 className="font-display text-xl font-medium text-ink transition-colors group-hover:text-accent">
            {post.title}
          </h3>
          <p className="text-sm leading-relaxed text-ink-soft">{post.description}</p>
        </Link>
      ))}
    </div>
  );
}
