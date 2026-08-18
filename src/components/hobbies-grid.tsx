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
            <div className="relative z-10 flex w-full items-center justify-between gap-2 bg-gradient-to-t from-ink/70 to-transparent px-3 py-2">
              <span className="text-xs font-medium text-paper">{hobby.title}</span>
              {writeup && (
                <span className="shrink-0 text-[10px] text-paper/80 underline underline-offset-2 group-hover:text-paper">
                  Read more
                </span>
              )}
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
