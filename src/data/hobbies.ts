// Drop your own photos into /public/images/hobbies/ using these exact
// filenames to replace the current placeholders.
//
// To add a write-up for a hobby: create content/hobbies/<slug>.md (same
// frontmatter shape as content/blog/*.md — title, date, description) and
// it'll automatically get a "Read more" link on its tile, linking to
// /hobbies/<slug>. No slug list to maintain — presence of the file is
// the source of truth.
export const hobbies = [
  { title: "Paragliding", slug: "paragliding", image: "/images/hobbies/paragliding.jpg", width: "40%" },
  { title: "Swimming", slug: "swimming", image: "/images/hobbies/swimming.jpg", width: "25%" },
  { title: "Hiking", slug: "hiking", image: "/images/hobbies/hiking.jpg", width: "35%" },
  { title: "Piano", slug: "piano", image: "/images/hobbies/piano.jpg", width: "38%" },
  { title: "Cooking", slug: "cooking", image: "/images/hobbies/cooking.jpg", width: "38%" },
  { title: "Badminton", slug: "badminton", image: "/images/hobbies/badminton.jpg", width: "24%" },
  { title: "Rubik's Cube", slug: "rubiks-cube", image: "/images/hobbies/rubiks-cube.jpg", width: "40%" },
  { title: "Reading", slug: "reading", image: "/images/hobbies/reading.jpg", width: "36%" },
] as const;
