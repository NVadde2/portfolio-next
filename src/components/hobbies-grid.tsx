import Image from "next/image";
import Link from "next/link";
import { hobbies } from "@/data/hobbies";
import { withBasePath } from "@/lib/asset-path";
import { hasHobbyWriteup } from "@/lib/hobby-content";

export function HobbiesGrid() {
  return (
    <div className="flex flex-wrap gap-2">
      {hobbies.map((hobby) => {
        const writeup = hasHobbyWriteup(hobby.slug);
        const className =
          "group relative flex h-28 min-w-[140px] flex-1 items-end overflow-hidden rounded-md border border-line sm:h-40";
        const content = (
          <>
            <Image
              src={withBasePath(hobby.image)}
              alt={hobby.title}
              fill
              sizes="(min-width: 640px) 300px, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {writeup && (
              <span className="absolute right-2 top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-paper shadow-sm transition-transform group-hover:scale-110">
                <ReadMoreIcon className="h-3.5 w-3.5" />
                <span className="sr-only">Read more</span>
              </span>
            )}
            <div className="relative z-10 w-full bg-gradient-to-t from-ink/70 to-transparent px-3 py-2">
              <span className="text-xs font-medium text-paper">{hobby.title}</span>
            </div>
          </>
        );

        return writeup ? (
          <Link
            key={hobby.title}
            href={`/hobbies/${hobby.slug}`}
            style={{ width: hobby.width }}
            className={className}
          >
            {content}
          </Link>
        ) : (
          <div key={hobby.title} style={{ width: hobby.width }} className={className}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

function ReadMoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M17 7H9M17 7V15"
      />
    </svg>
  );
}
