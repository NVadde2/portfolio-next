import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { BlogThumbnail } from "@/components/blog-thumbnail";

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
          className="group flex items-start gap-5 py-6 first:pt-0"
        >
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-line sm:h-20 sm:w-20">
            <BlogThumbnail slug={post.slug} />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex items-center gap-3 font-mono text-xs text-ink-faint">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.tag}</span>
            </div>
            <h3 className="font-display text-xl font-medium text-ink transition-colors group-hover:text-accent">
              {post.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft">{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
