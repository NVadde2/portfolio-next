import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { withBasePath } from "@/lib/asset-path";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-line transition-colors hover:border-accent">
      <div className="relative h-40 w-full overflow-hidden bg-paper-raised">
        <Image
          src={withBasePath(project.image)}
          alt={project.title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-medium text-ink">
            {project.title}
          </h3>
          <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-faint">
            {project.tag}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="font-mono text-xs text-ink-faint">
              {tech}
              {tech !== project.techStack[project.techStack.length - 1] && " ·"}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex gap-4 text-sm">
            {project.codeHref && (
              <a
                href={project.codeHref}
                target="_blank"
                rel="noreferrer"
                className="text-ink-soft underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                Code
              </a>
            )}
            {project.demoHref && (
              <a
                href={project.demoHref}
                target="_blank"
                rel="noreferrer"
                className="text-ink-soft underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                Demo
              </a>
            )}
            {project.paperHref && (
              <a
                href={project.paperHref}
                target="_blank"
                rel="noreferrer"
                className="text-ink-soft underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                Paper
              </a>
            )}
            {project.hasCaseStudy && (
              <Link
                href={`/projects/${project.slug}`}
                className="text-ink-soft underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                Case study
              </Link>
            )}
            {project.deployHref && (
              <a
                href={project.deployHref}
                target="_blank"
                rel="noreferrer"
                className="text-ink-soft underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                Live
              </a>
            )}
          </div>
          <span className="font-mono text-xs text-ink-faint">{project.date}</span>
        </div>
      </div>
    </article>
  );
}
