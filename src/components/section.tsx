import type { ReactNode } from "react";

export function Section({
  index,
  title,
  children,
  className = "",
}: {
  index?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-4xl px-6 py-16 sm:px-8 ${className}`}>
      {title && (
        <div className="mb-10 flex items-baseline gap-3">
          {index && (
            <span className="font-mono text-xs text-ink-faint">{index}</span>
          )}
          <h2 className="font-display text-2xl font-medium text-ink">{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}
