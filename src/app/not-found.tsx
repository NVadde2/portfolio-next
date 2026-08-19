import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:px-8">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist, or maybe it moved.
        Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
      >
        Back to home
      </Link>
    </div>
  );
}
