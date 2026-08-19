import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-8 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {profile.name}. Built with Next.js &amp; Tailwind.
        </p>
        <div className="flex gap-4">
          <a href={profile.social.github} className="hover:text-ink" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.social.linkedin} className="hover:text-ink" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.social.email} className="hover:text-ink">
            Email
          </a>
          <a
            href={profile.previousPortfolioHref}
            className="hover:text-ink"
            target="_blank"
            rel="noreferrer"
          >
            Previous version
          </a>
        </div>
      </div>
    </footer>
  );
}
