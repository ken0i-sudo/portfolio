/**
 * Central site configuration.
 * Update these values to re-brand the entire portfolio in one place.
 */
export const siteConfig = {
  name: "Dhavan Chaudhari",
  role: "Full-Stack Web Developer",
  tagline: "I design & build fast, accessible, delightful web experiences.",
  description:
    "Portfolio of Dhavan Chaudhari, a Full-Stack Web Developer specializing in React, TypeScript and modern UI/UX. Explore projects, skills, experience and get in touch.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-pied-xi-30.vercel.app/",
  email: "dhavanvip@gmail.com",
  phone: "+91 94280 22598",
  location: "Vadodara, India",
  resumeUrl: "/resume.pdf",
  keywords: [
    "Dhavan Chaudhari",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Web Developer Portfolio",
    "UI UX Designer",
    "TypeScript Developer",
  ],
  social: {
    github: "https://github.com/ken0i-sudo",
    linkedin: "https://linkedin.com/in/dhavan-chaudhari-10a932284",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/itz_kirishima",
    dribbble: "https://dribbble.com/yourusername",
  },
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || "",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;
