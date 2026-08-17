import { profile } from "@/data/profile";
import { withBasePath } from "@/lib/asset-path";

export function Hero() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-16 pb-8 sm:px-8 sm:pt-24">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
        {profile.role} · {profile.location}
      </p>
      <h1 className="font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
        {profile.tagline}
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
        {profile.summary}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={withBasePath(profile.resumeHref)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          View résumé
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          LinkedIn
        </a>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          GitHub
        </a>
        <a
          href={profile.social.leetcode}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          LeetCode
        </a>
      </div>
    </div>
  );
}
