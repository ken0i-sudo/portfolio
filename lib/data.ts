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
  { name: "React / Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 93, category: "frontend" },
  { name: "HTML5 & CSS3", level: 96, category: "frontend" },
  { name: "Framer Motion", level: 85, category: "frontend" },
  { name: "Node.js / Express", level: 87, category: "backend" },
  { name: "PostgreSQL / MongoDB", level: 82, category: "backend" },
  { name: "REST & GraphQL APIs", level: 85, category: "backend" },
  { name: "Git & GitHub", level: 94, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 88, category: "design" },
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
    slug: "nimbus-finance-dashboard",
    title: "Nimbus Finance Dashboard",
    description: "A real-time analytics dashboard for personal finance tracking.",
    longDescription:
      "Nimbus is a full-stack finance dashboard that aggregates bank, investment and crypto data into a single real-time view. Built with Next.js, TypeScript and a Node.js/GraphQL backend, it features animated charts, budget forecasting and secure OAuth-based account linking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop",
    ],
    tags: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS", "PostgreSQL"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/nimbus-finance",
    featured: true,
    year: "2025",
  },
  {
    slug: "aurora-ecommerce",
    title: "Aurora E-Commerce Platform",
    description: "Headless e-commerce storefront with a custom checkout flow.",
    longDescription:
      "Aurora is a headless storefront built on Next.js App Router and Shopify's Storefront API. It includes a custom multi-step checkout, animated product galleries, wishlist syncing and a >95 Lighthouse performance score.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    ],
    tags: ["Next.js", "Shopify API", "Framer Motion", "Stripe"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/aurora-ecommerce",
    featured: true,
    year: "2024",
  },
  {
    slug: "pulse-fitness-app",
    title: "Pulse Fitness Tracker",
    description: "Cross-platform mobile app for workout planning and tracking.",
    longDescription:
      "Pulse is a React Native fitness companion with offline-first workout logging, progress charts and social challenges. Designed with an emphasis on motion design and micro-interactions to keep users engaged.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1600&auto=format&fit=crop",
    ],
    tags: ["React Native", "TypeScript", "Firebase"],
    category: "mobile",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/pulse-fitness",
    featured: true,
    year: "2024",
  },
  {
    slug: "orbit-design-system",
    title: "Orbit Design System",
    description: "A themeable component library and design system.",
    longDescription:
      "Orbit is a token-based design system with a Figma library and a corresponding React/Tailwind component package, used to keep five internal products visually consistent and accessible.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1600&auto=format&fit=crop",
    ],
    tags: ["Figma", "React", "Storybook", "Design Tokens"],
    category: "design",
    githubUrl: "https://github.com/yourusername/orbit-design-system",
    featured: false,
    year: "2023",
  },
  {
    slug: "horizon-travel-blog",
    title: "Horizon Travel Blog",
    description: "A statically generated travel blog with a custom CMS.",
    longDescription:
      "Horizon uses Next.js static generation with MDX content and a lightweight custom CMS built on top of a headless Sanity backend, achieving near-instant page loads worldwide via edge caching.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1600&auto=format&fit=crop",
    ],
    tags: ["Next.js", "MDX", "Sanity CMS", "Vercel Edge"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/horizon-blog",
    featured: false,
    year: "2023",
  },
  {
    slug: "vertex-analytics-api",
    title: "Vertex Analytics API",
    description: "A high-throughput event analytics API and ingestion pipeline.",
    longDescription:
      "Vertex is a Node.js/Express API for ingesting and aggregating millions of product analytics events per day, with a Redis-backed queue, PostgreSQL storage and a React dashboard for querying results.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop",
    ],
    tags: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker"],
    category: "fullstack",
    githubUrl: "https://github.com/yourusername/vertex-analytics",
    featured: false,
    year: "2022",
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
    role: "Senior Frontend Engineer",
    company: "Nova Digital Studio",
    period: "2023 — Present",
    location: "Remote",
    description: [
      "Led the rebuild of the flagship product's UI in Next.js and TypeScript, improving Lighthouse performance score from 61 to 97.",
      "Established a component and design token library adopted across 4 product teams.",
      "Mentored 3 junior engineers through code review and pairing sessions.",
    ],
    type: "work",
  },
  {
    role: "Frontend Developer",
    company: "Brightloop Technologies",
    period: "2021 — 2023",
    location: "Bengaluru, India",
    description: [
      "Built and shipped 12+ customer-facing features for a B2B SaaS platform using React and Redux.",
      "Reduced bundle size by 38% through code-splitting and dependency audits.",
      "Collaborated directly with designers to translate Figma files into production UI.",
    ],
    type: "work",
  },
  {
    role: "Junior Web Developer",
    company: "Pixel Forge Agency",
    period: "2020 — 2021",
    location: "Pune, India",
    description: [
      "Developed marketing websites and landing pages for 20+ clients using HTML, CSS and JavaScript.",
      "Introduced automated accessibility testing into the agency's delivery workflow.",
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
    institution: "Indian Institute of Information Technology",
    period: "2020 — 2024",
    location: "India",
    description:
      "Capstone project: this portfolio platform. Coursework in Data Structures, Web Engineering, Databases and Human-Computer Interaction.",
  },
  {
    degree: "Higher Secondary Education (PCM)",
    institution: "Delhi Public School",
    period: "2018 — 2020",
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
      "Aarav consistently delivers pixel-perfect, high-performance UI ahead of schedule. His attention to accessibility and detail raised the bar for our whole team.",
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
      "Clients loved working with Aarav directly — he explains technical tradeoffs in plain language and always ships something that looks and feels premium.",
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
  { label: "Years of Experience", value: 4, suffix: "+" },
  { label: "Projects Completed", value: 45, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Lighthouse Avg. Score", value: 97, suffix: "%" },
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Mobile", value: "mobile" },
  { label: "Design", value: "design" },
] as const;
