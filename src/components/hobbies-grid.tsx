import { hobbies } from "@/data/hobbies";

// Textured placeholder tiles until real photos are dropped into
// /public/hobbies/ (see data/hobbies.ts for exact filenames). Swap the
// div below for a next/image using hobby.image once photos exist.
export function HobbiesGrid() {
  return (
    <div className="flex flex-wrap gap-2">
      {hobbies.map((hobby, i) => (
        <div
          key={hobby.title}
          style={{ width: hobby.width }}
          className="group relative flex h-28 min-w-[140px] flex-1 items-end overflow-hidden rounded-md border border-line sm:h-40"
        >
          <div
            className="absolute inset-0 opacity-90 transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage: `repeating-linear-gradient(135deg, var(--color-paper-raised) 0px, var(--color-paper-raised) 10px, transparent 10px, transparent 20px)`,
              backgroundColor:
                i % 2 === 0 ? "var(--color-paper-raised)" : "var(--color-paper)",
            }}
          />
          <span className="relative z-10 w-full bg-gradient-to-t from-ink/70 to-transparent px-3 py-2 text-xs font-medium text-paper">
            {hobby.title}
          </span>
        </div>
      ))}
    </div>
  );
}
