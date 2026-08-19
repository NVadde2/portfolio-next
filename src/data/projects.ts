export interface Project {
  slug: string;
  title: string;
  tag: string;
  description: string;
  techStack: string[];
  date: string;
  codeHref?: string;
  demoHref?: string;
  deployHref?: string;
  paperHref?: string;
  hasCaseStudy?: boolean;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "tutorly",
    title: "Tutorly",
    tag: "Web Dev",
    description:
      "A virtual peer-tutoring platform built for students, by students — streamlined session booking end to end.",
    techStack: ["React", "Spring Boot", "MySQL", "Azure"],
    date: "Dec 2022",
    codeHref: "https://github.com/NVadde2/tutorly",
    demoHref: "https://www.youtube.com/watch?v=dr29ZyRU9g0",
    hasCaseStudy: true,
    image: "/images/projects/tutorly.png",
  },
  {
    slug: "tokyo-olympics-schedule-viewer",
    title: "Tokyo Olympics Schedule Viewer",
    tag: "Database Design",
    description:
      "A full-stack site covering events, schedules, venues, and medal counts for the 2021 Tokyo Olympics.",
    techStack: ["React", "Node.js", "SQL"],
    date: "May 2023",
    demoHref: "https://mediaspace.illinois.edu/media/t/1_dngejpp7",
    image: "/images/projects/olympics.png",
  },
  {
    slug: "clickbait-detector",
    title: "Detecting Clickbait on YouTube",
    tag: "Machine Learning",
    description:
      "An NLP model that flags clickbait YouTube video titles.",
    techStack: ["Python", "TensorFlow", "NLP"],
    date: "Jun 2020",
    paperHref: "http://ijses.com/wp-content/uploads/2020/06/95-IJSES-V4N5.pdf",
    image: "/images/projects/clickbait.png",
  },
  {
    slug: "drive-automation",
    title: "Google Drive Automation",
    tag: "Scripting",
    description: "Python scripts that automate routine Google Drive workflows.",
    techStack: ["Python", "Selenium"],
    date: "Jul 2019",
    image: "/images/projects/automate.png",
  },
  {
    slug: "utsav-app",
    title: "Utsav 2018 App",
    tag: "Android",
    description:
      "An Android app built for my college's annual cultural fest.",
    techStack: ["Java", "Android Studio"],
    date: "Mar 2018",
    image: "/images/projects/utsav.jpg",
  },
];
