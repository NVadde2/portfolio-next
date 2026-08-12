export interface ExperienceEntry {
  logo: string;
  jobTitle: string;
  employer: string;
  jobType: string;
  startDate: string;
  endDate: string; // "Present" for current role
  location: string;
  description: string[];
  skills: string[];
}

export const experience: ExperienceEntry[] = [
  {
    logo: "/images/logos/intact.png",
    jobTitle: "Frontend Engineer",
    employer: "Intact Insurance Specialty Solutions",
    jobType: "Full-time",
    startDate: "Jan 2026",
    endDate: "Present",
    location: "New York, NY",
    description: [
      "Develop and maintain responsive, accessible UI components for a high-traffic insurance platform using Next.js, TypeScript, and Tailwind CSS.",
      "Collaborate with product and backend teams to implement complex workflows for policy submissions, quotes, and account management.",
      "Write unit tests and take part in code review to keep quality and consistency high across the codebase.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Agile", "Unit Testing"],
  },
  {
    logo: "/images/logos/verizon.png",
    jobTitle: "Software Developer",
    employer: "Verizon",
    jobType: "Full-time",
    startDate: "Mar 2024",
    endDate: "Dec 2025",
    location: "Basking Ridge, NJ",
    description: [
      "Built a React-based self-service portal supporting 12 platforms and 60 applications, streamlining access management and application onboarding.",
      "Scaled the platform to handle 5,600+ automated requests for 4,000+ users, cutting average request completion time from days to minutes — a 98% reduction.",
      "Architected SQL queries and relational schemas for new features, and integrated Python APIs with React to optimize data flow across 33,000+ user sessions.",
      "Translated Figma designs into production-ready features, backed by unit and integration testing in an Agile team.",
    ],
    skills: ["React", "JavaScript", "SQL", "Python", "Figma"],
  },
  {
    logo: "/images/logos/uiuc.png",
    jobTitle: "Graduate Teaching Assistant",
    employer: "University of Illinois Urbana-Champaign",
    jobType: "Full-time",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    location: "Champaign, IL",
    description: [
      "Taught modern web development — HTML, CSS, JavaScript, DOM, REST APIs, SQL/NoSQL — with a focus on React.",
      "Prototyped and demoed solutions in Figma to help students find the right approach to assignments.",
    ],
    skills: ["React", "JavaScript", "HTML", "CSS", "Figma"],
  },
  {
    logo: "/images/logos/shell.png",
    jobTitle: "Data Engineer",
    employer: "Shell India Markets Pvt. Ltd.",
    jobType: "Full-time",
    startDate: "Sep 2020",
    endDate: "Jul 2022",
    location: "Bengaluru, India",
    description: [
      "Designed and built SAP HANA calculation views, procedures, and table functions (SQLScript) across two full project lifecycles.",
      "Handled ETL processes, SQL query performance tuning, and large-scale data transformations.",
      "Worked directly with end users to define and implement technical and business strategy.",
    ],
    skills: ["SQL", "SAP HANA", "ETL"],
  },
  {
    logo: "/images/logos/honeywell.png",
    jobTitle: "Software Engineering Intern",
    employer: "Honeywell Technology Solutions Lab",
    jobType: "Internship",
    startDate: "Jan 2020",
    endDate: "Jul 2020",
    location: "Bengaluru, India",
    description: [
      "Practiced disciplined coding and code review habits that contributed to a 20% increase in team productivity.",
      "Learned Agile methodology while designing and implementing features in C#, Java, and Neo4j.",
    ],
    skills: ["Java", "C#", "Neo4j", "Agile"],
  },
];
