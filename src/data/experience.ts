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
      "Designed, developed, and maintained responsive, accessible UI components for the high-traffic insurance platform using React, Next.js, TypeScript, and Tailwind CSS while incorporating engineering excellence and best practices.",
      "Enforced typed, deterministic data contracts between backend microservices and the frontend using Zod schema validation, ensuring API payloads were verified and safe to render across the platform.",
      "Architected a hexagonal frontend structure for the React/Next.js platform, establishing a canonical domain layer across core business entities and a standardized, typed error hierarchy for API error handling.",
      "Contributed to and maintained an agent-governance framework encoding TypeScript strictness, security conventions and human-in-the-loop review protocols, ensuring helping ensure AI-generated code conformed strictly to team engineering standards.",
      "Collaborated with cross-functional engineering teams to rapidly launch, iterate, ship core platform features, driving production bug resolution, rigorous code reviews, and high unit test coverage to ensure low-latency, resilient UI systems.",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zod", "AI Integration", "Agile", "Unit Testing"],
  },
  {
    logo: "/images/logos/verizon.svg",
    jobTitle: "Software Developer",
    employer: "Verizon",
    jobType: "Full-time",
    startDate: "Mar 2024",
    endDate: "Dec 2025",
    location: "Basking Ridge, NJ",
    description: [
      "Engineered a React-based self-service portal supporting 12 platforms and 60 applications, streamlining user access management and application onboarding.",
      "Scaled platform operations to handle 5,600+ automated requests for 4,000+ users, reducing average request completion time from days to minutes (a 98% reduction).",
      "Contributed to full-stack development by architecting complex SQL queries and relational schemas to support new features; developed and integrated Python APIs with React to optimize data flow for 33,000+ user sessions.",
      "Developed high-performance, interactive dashboards translating complex backend metrics into intuitive user experience.",
      "Translated user-centered designs from Figma into production-ready features while maintaining high-quality code through unit and integration testing and Agile practices."
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
      "Delivering comprehensive instruction on contemporary web development encompassing foundational web technologies (HTML, CSS, JavaScript, DOM), data exchange protocols (HTTP, JSON, RESTful APIs), and database systems (SQL/NoSQL), with a strong emphasis on front-end development utilizing React.",
      "Guided over 500 students, including working professionals, in an online collaborative environment through the practical application and understanding of various AWS services including EC2, Lambda, S3, DynamoDB, Aurora, ElastiCache, and more, providing a holistic view of cloud service utilization.",
      "Proactively assisted students in their hands-on projects using Python and Java, while also addressing queries on big data frameworks, particularly Spark, MapReduce, and HBase, and core technologies like containerization."
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
      "Expertise in the design and development of SAP HANA Calculation views, Procedures, and Table Functions (SQLScript) while spearheading 2 Full lifecycle projects.",
      "Proficient in ETL processes, skilled in SQL querying, performance tuning, and handling large-scale data transformations.",
      "Assisted end users with the definition and implementation of technical and business strategies."
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
      "Implemented efficient coding practices and conducted code reviews, resulting in a 20% increase in team productivity and adherence to coding standards.",
      "Was introduced to agile methodology and handled the design and implementation using C#, JAVA and Neo4j."
    ],
    skills: ["Java", "C#", "Neo4j", "Agile"],
  },
];
