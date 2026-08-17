// Next.js's `basePath` config (set to "/portfolio" for GitHub Pages) is
// applied automatically to `next/link` hrefs, but NOT to raw string `src`
// values passed to `next/image` or plain anchor hrefs — those have to be
// prefixed by hand. See next.config.ts, which exposes the same value as
// NEXT_PUBLIC_BASE_PATH for this purpose.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a root-relative public asset path (e.g. "/images/foo.png") with basePath. */
export function withBasePath(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${basePath}${path}`;
}
