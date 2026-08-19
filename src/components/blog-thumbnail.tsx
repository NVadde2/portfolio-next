// Deterministic, theme-adaptive geometric thumbnail — no stock photos, no
// per-post image to source. Two overlapping hexagon outlines, rotated based
// on a hash of the slug, so every post gets a distinct-but-consistent look.
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

const HEX_POINTS = "60,20 90,37 90,73 60,90 30,73 30,37";
const HEX_POINTS_INNER = "60,35 80,47 80,73 60,85 40,73 40,47";

export function BlogThumbnail({ slug }: { slug: string }) {
  const hash = hashString(slug);
  const rotate1 = hash % 40;
  const rotate2 = (hash >> 4) % 40;
  const offsetX = (hash % 16) - 8;
  const offsetY = ((hash >> 3) % 16) - 8;

  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <rect width="120" height="120" fill="var(--color-paper-raised)" />
      <polygon
        points={HEX_POINTS}
        transform={`rotate(${rotate1} 60 60) translate(${offsetX} ${offsetY})`}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <polygon
        points={HEX_POINTS_INNER}
        transform={`rotate(${rotate2} 60 60)`}
        fill="none"
        stroke="var(--color-accent-soft)"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  );
}
