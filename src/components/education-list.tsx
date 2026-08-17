import Image from "next/image";
import { education } from "@/data/profile";
import { withBasePath } from "@/lib/asset-path";

export function EducationList() {
  return (
    <ul className="space-y-4">
      {education.map((item) => (
        <li key={item.school} className="flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded bg-paper-raised">
            <Image
              src={withBasePath(item.logo)}
              alt=""
              fill
              sizes="40px"
              className="object-contain p-1.5"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-medium text-ink">{item.degree}</span>
            <span className="text-sm text-ink-soft">{item.school}</span>
            <div className="flex items-center gap-2 text-xs text-ink-faint">
              <span>{item.date}</span>
              <span className="rounded-full border border-line px-2 py-0.5">
                {item.detail}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
