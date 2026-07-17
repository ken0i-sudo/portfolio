/**
 * All portfolio content lives here. Keeping content separate from
 * presentation makes the site easy to re-brand or hook up to a CMS later.
 */

export type Skill = {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "tools" | "design";
};

export const skills: Skill[] = [
  { name: "React / Next.js", level: 82, category: "frontend" },
  { name: "TypeScript", level: 72, category: "frontend" },
  { name: "Tailwind CSS", level: 62, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 72, category: "frontend" },
  { name: "HTML5 & CSS3", level: 96, category: "frontend" },
  { name: "Framer Motion", level: 65, category: "frontend" },
  { name: "Node.js / Express", level: 87, category: "backend" },
  { name: "MongoDB", level: 82, category: "backend" },
  { name: "REST & GraphQL APIs", level: 85, category: "backend" },
  { name: "Git & GitHub", level: 94, category: "tools" },
  { name: "Docker", level: 30, category: "tools" },
  { name: "Figma", level: 32, category: "design" },
];

export type Service = {
  title: string;
  description: string;
  icon: "code" | "design" | "mobile" | "seo" | "performance" | "api";
};

export const services: Service[] = [
  {
    title: "Web Application Development",
    description:
      "End-to-end development of fast, scalable web apps using React, Next.js and modern tooling.",
    icon: "code",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered interface design with wireframes, prototypes and design systems in Figma.",
    icon: "design",
  },
  {
    title: "Responsive Development",
    description:
      "Pixel-perfect, mobile-first layouts that work flawlessly across every device and screen size.",
    icon: "mobile",
  },
  {
    title: "SEO & Accessibility",
    description:
      "Technical SEO, semantic markup and WCAG-conscious builds that rank well and reach everyone.",
    icon: "seo",
  },
  {
    title: "Performance Optimization",
    description:
      "Auditing and tuning Core Web Vitals, bundle size, images and rendering for sub-second loads.",
    icon: "performance",
  },
  {
    title: "API & Backend Integration",
    description:
      "Designing REST 8APIs and integrating third-party services, auth and databases.",
    icon: "api",
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  category: "web" | "mobile" | "design" | "fullstack";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "meridian-consultant",
    title: "Meridian",
    description: "Meridian is a modern, responsive business landing page featuring clean design, smooth interactions, and a professional user experience.",
    longDescription:
      "Meridian is a modern, responsive business website designed to showcase a company's services, brand, and values through a clean and engaging interface. Built with modern frontend technologies, it features responsive layouts, interactive UI components, smooth user interactions, and a professional design that emphasizes usability, performance, and maintainable code.",
    image: "/images/projects/meridian/hero.png",
    gallery: [
      "/images/projects/meridian/hero.png",
      "/images/projects/meridian/about.png",
      "/images/projects/meridian/price.png",
    ],
    tags: ["HTML", "JavaScript", "CSS", "MongoDB"],
    category: "design",
    liveUrl: "https://ken0i-sudo.github.io/Meridian/",
    githubUrl: "https://github.com/ken0i-sudo/meridian",
    featured: true,
    year: "2025",
  },
  {
    slug: "Inventory Management System",
    title: "InventoryHub",
    description: "A production-quality Inventory Management System built with the MERN stack (MongoDB, Express, React, Node).",
    longDescription:
      "InventoryHub provides a complete inventory management solution: user authentication, product CRUD with search & filtering, supplier management, and a dashboard with real-time metrics (total products, suppliers, low-stock alerts, inventory value).",
    image: "/images/projects/InventoryHub/image1.png",
    gallery: [
      "/images/projects/InventoryHub/image1.png",
      "/images/projects/InventoryHub/image2.png",
      "/images/projects/InventoryHub/image3.png",
    ],
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    category: "fullstack",
    githubUrl: "https://github.com/ken0i-sudo/InventoryHub",
    featured: true,
    year: "2026",
  },
  {
    slug: "PeopleFlow-HRMS",
    title: "PeopleFlow",
    description: "PeopleFlow is a production-ready, full-stack HR Management System built with the MERN stack.",
    longDescription:
      "PeopleFlow streamlines HR operations for small-to-medium organizations by centralizing employee data, attendance, leave workflows, and department management. The system enforces role-based permissions at both API and UI layers, ensuring each user sees only what they're authorized to access.",
    image: "/images/projects/PeopleFlow/image1.png",
    gallery: [
      "/images/projects/PeopleFlow/image1.png",
      "/images/projects/PeopleFlow/image2.png",
      "/images/projects/PeopleFlow/image3.png",
    ],
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Vite"],
    category: "fullstack",
    githubUrl: "https://github.com/ken0i-sudo/PeopleFlow",
    featured: true,
    year: "2026",
  },
  {
    slug: "TaskFlow",
    title: "TaskFlow",
    description: "A production-grade project management SaaS application built with the MERN stack",
    longDescription:
      "TaskFlow is a full-stack project management platform designed for modern software teams. It provides a complete workflow for organizing workspaces, managing projects, tracking tasks, and visualizing progress — all within a polished, responsive UI with dark/light theme support.",
    image: "/images/projects/TaskFlow/image1.png",
    gallery: [
      "/images/projects/TaskFlow/image1.png",
      "/images/projects/TaskFlow/image2.png",
      "/images/projects/TaskFlow/image3.png",
    ],
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "TanStack Query"],
    category: "fullstack",
    githubUrl: "https://github.com/ken0i-sudo/TaskFlow",
    featured: true,
    year: "2023",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  type: "work";
};

export const experience: ExperienceItem[] = [
  {
    role: "Internship",
    company: "LinuxWorld Informatics Pvt. Ltd.",
    period: "2026 — Present",
    location: "Jaipur India",
    description: [
      " Jaipur-based tech training company specializing in emerging technologies and hands-on skill development.",
      "Led by World Record Holder & CTO Mr. Vimal Daga, known for mentorship-driven, industry-aligned programs.",
      "Bridges the gap between academic learning and industry readiness through real-world projects and intensive training.",
    ],
    type: "work",
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "ITM SLS Borada University",
    period: "2023 — 2027",
    location: "India",
    description:
      "Capstone project: this portfolio platform. Coursework in Data Structures, Web Engineering, Databases and Human-Computer Interaction.",
  },
  {
    degree: "Higher Secondary Education (PCM)",
    institution: "Delhi Public School",
    period: "2018 — 2023",
    location: "India",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  url?: string;
};

export const certifications: Certification[] = [
  { title: "Meta Front-End Developer Professional Certificate", issuer: "Meta / Coursera", date: "2024" },
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "2023" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "2022" },
  { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", date: "2022" },
  { title: "UI/UX Design Specialization", issuer: "Google / Coursera", date: "2023" },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Product Manager",
    company: "Nova Digital Studio",
    avatar: "https://i.pravatar.cc/150?img=47",
    quote:
      "Dhavan consistently delivers pixel-perfect, high-performance UI ahead of schedule. His attention to accessibility and detail raised the bar for our whole team.",
  },
  {
    name: "Daniel Ortiz",
    role: "CTO",
    company: "Brightloop Technologies",
    avatar: "https://i.pravatar.cc/150?img=12",
    quote:
      "One of the most reliable engineers I've worked with. He turns ambiguous requirements into clean, scalable code without needing much hand-holding.",
  },
  {
    name: "Meera Nair",
    role: "Founder",
    company: "Pixel Forge Agency",
    avatar: "https://i.pravatar.cc/150?img=32",
    quote:
      "Clients loved working with Dhavan directly — he explains technical tradeoffs in plain language and always ships something that looks and feels premium.",
  },
  {
    name: "Jonas Weber",
    role: "Design Lead",
    company: "Orbit Systems",
    avatar: "https://i.pravatar.cc/150?img=15",
    quote:
      "A rare developer who genuinely cares about design fidelity. Our Figma files translated to the browser with almost zero drift.",
  },
];

export type TechStackItem = {
  name: string;
  icon: string; // react-icon key resolved in TechStack component
};

export const techStack: TechStackItem[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Git", icon: "git" },
  { name: "Docker", icon: "docker" },
  { name: "Figma", icon: "figma" },
];

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export const stats: Stat[] = [
  { label: "Days of Experience", value: 45, suffix: "+" },
  { label: "Projects Completed", value: 6, suffix: "+" },
//   { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Lighthouse Avg. Score", value: 97, suffix: "%" },
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Mobile", value: "mobile" },
  { label: "Design", value: "design" },
] as const;
