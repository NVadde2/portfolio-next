"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectsFilter() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");

  const tags = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.tag)))],
    []
  );

  const filtered = projects.filter((p) => {
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
    const matchesTag = tag === "All" || p.tag === tag;
    return matchesQuery && matchesTag;
  });

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(t)}
              className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                tag === t
                  ? "border-accent text-accent"
                  : "border-line text-ink-soft hover:text-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder="Search projects…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-md border border-line bg-transparent px-3 py-1.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none sm:w-56"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-ink-faint">No projects match that search.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
