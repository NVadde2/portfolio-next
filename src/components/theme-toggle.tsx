"use client";

import { useEffect, useState } from "react";
import { hydrateThemeStore, useThemeStore } from "@/lib/theme-store";

export function ThemeToggle() {
  const theme = useThemeStore((s) => s.theme);
  const toggle = useThemeStore((s) => s.toggle);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // One-time sync of Zustand state from localStorage/matchMedia on
    // mount — the actual theme class is already applied to <html> by
    // the inline script in layout.tsx, this just brings React state
    // in line with it so the icon reflects reality.
    hydrateThemeStore();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from a browser-only API, can't be computed during render
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="group relative flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent cursor-pointer"
    >
      {mounted && theme === "dark" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z"
      />
    </svg>
  );
}
