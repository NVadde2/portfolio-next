import Image from "next/image";
import { experience } from "@/data/experience";
import { withBasePath } from "@/lib/asset-path";

function duration(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth() + 1;

  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }
  if (months <= 0) {
    years -= 1;
    months += 12;
  }

  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ");
}

export function ExperienceTimeline() {
  return (
    <ol className="relative border-l border-line pl-8">
      {experience.map((role, i) => (
        <li key={role.employer + role.startDate} className="mb-10 last:mb-0">
          <span
            className={`absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full ${
              i === 0 ? "bg-accent" : "bg-line"
            }`}
            aria-hidden="true"
          />
          <details open={i === 0} className="group">
            <summary className="flex cursor-pointer list-none flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded bg-paper-raised">
                  <Image
                    src={withBasePath(role.logo)}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div>
                  <p className="font-medium text-ink">
                    {role.jobTitle}{" "}
                    <span className="font-normal text-ink-soft">
                      · {role.employer}
                    </span>
                  </p>
                  <p className="text-sm text-ink-faint">
                    {role.startDate} – {role.endDate} ({duration(role.startDate, role.endDate)}) · {role.location}
                  </p>
                </div>
              </div>
              <ChevronIcon className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-open:rotate-180" />
            </summary>

            <div className="mt-4 pl-[52px]">
              <ul className="space-y-2 text-sm leading-relaxed text-ink-soft">
                {role.description.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-accent">—</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-faint"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 9l6 6 6-6"
      />
    </svg>
  );
}
