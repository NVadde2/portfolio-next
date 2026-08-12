// Drop your own photos into /public/images/hobbies/ using these exact
// filenames, then swap the placeholder <div> in hobbies-grid.tsx for a
// next/image pointed at hobby.image — no other code changes needed.
export const hobbies = [
  { title: "Paragliding", image: "/images/hobbies/paragliding.jpg", width: "40%" },
  { title: "Swimming", image: "/images/hobbies/swimming.jpg", width: "25%" },
  { title: "Hiking", image: "/images/hobbies/hiking.jpg", width: "35%" },
  { title: "Piano", image: "/images/hobbies/piano.jpg", width: "38%" },
  { title: "Cooking", image: "/images/hobbies/cooking.jpg", width: "38%" },
  { title: "Badminton", image: "/images/hobbies/badminton.jpg", width: "24%" },
  { title: "Rubik's Cube", image: "/images/hobbies/rubiks-cube.jpg", width: "40%" },
  { title: "Reading", image: "/images/hobbies/reading.jpg", width: "36%" },
] as const;
