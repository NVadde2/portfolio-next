import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <dt className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
            {group.label}
          </dt>
          <dd className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line px-3 py-1 text-sm text-ink-soft"
              >
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
