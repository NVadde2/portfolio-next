import type { Metadata } from "next";
import { ProjectsFilter } from "@/components/projects-filter";

export const metadata: Metadata = {
  title: "Projects — Neha Reddy Vadde",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
        Projects
      </p>
      <h1 className="font-display text-3xl font-medium text-ink">
        A showcase of what I&apos;ve built
      </h1>
      <p className="mt-4 max-w-xl text-ink-soft">
        From class projects to weekend experiments — the technologies I&apos;ve
        explored and the problems I wanted to solve.
      </p>

      <div className="mt-10">
        <ProjectsFilter />
      </div>
    </div>
  );
}
