import type { Metadata } from "next";
import { BlogList } from "@/components/blog-list";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Neha Reddy Vadde",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
        Blog
      </p>
      <h1 className="font-display text-3xl font-medium text-ink">
        Notes on tech, career, and building things
      </h1>
      <div className="mt-10">
        <BlogList posts={posts} />
      </div>
    </div>
  );
}
