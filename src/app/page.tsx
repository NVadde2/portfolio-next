import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SkillsSection } from "@/components/skills-section";
import { ProjectCard } from "@/components/project-card";
import { HobbiesGrid } from "@/components/hobbies-grid";
import { education } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <>
      <Hero />

      <Section index="01" title="Experience">
        <ExperienceTimeline />
      </Section>

      <Section index="02" title="Skills">
        <SkillsSection />
      </Section>

      <Section index="03" title="Education">
        <ul className="space-y-3">
          {education.map((item) => (
            <li key={item.school} className="flex flex-col gap-0.5">
              <span className="font-medium text-ink">{item.degree}</span>
              <span className="text-sm text-ink-soft">
                {item.school} · {item.date} · {item.detail}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section index="04" title="Selected projects">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-block text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
        >
          View all projects →
        </Link>
      </Section>

      <Section index="05" title="Outside of work">
        <HobbiesGrid />
      </Section>
    </>
  );
}
