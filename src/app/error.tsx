"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:px-8">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        Error
      </p>
      <h1 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        An unexpected error occurred. You can try again, or head back home.
      </p>
      <div className="mt-8 flex items-center gap-6">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Try again
        </button>
        <Link
          href="/"
          className="text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
