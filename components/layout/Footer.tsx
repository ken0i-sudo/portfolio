import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUpRight } from "react-icons/fi";
import { NAV_LINKS, siteConfig } from "@/lib/constants";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, icon: FiGithub },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: FiLinkedin },
  { label: "Twitter", href: siteConfig.social.twitter, icon: FiTwitter },
  { label: "Instagram", href: siteConfig.social.instagram, icon: FiInstagram },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-white dark:border-white/10 dark:bg-base-950">
      <div className="container-narrow grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="#home" className="font-display text-xl font-bold text-slate-900 dark:text-white">
            {siteConfig.name}<span className="gradient-text">.dev</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {siteConfig.tagline} Based in {siteConfig.location}, available for freelance and full-time
            opportunities worldwide.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200
                  text-slate-600 transition-colors hover:border-brand-500 hover:text-brand-600
                  dark:border-white/10 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Navigate
          </h2>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Get in touch
          </h2>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-600 dark:hover:text-brand-300">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-brand-600 dark:hover:text-brand-300">
                {siteConfig.phone}
              </a>
            </li>
            <li>{siteConfig.location}</li>
            <li>
              <a
                href={siteConfig.resumeUrl}
                download
                className="inline-flex items-center gap-1 font-medium text-brand-600 hover:underline dark:text-brand-300"
              >
                Download Resume <FiArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-narrow flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 py-6 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>Designed &amp; built with Next.js, TypeScript and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
