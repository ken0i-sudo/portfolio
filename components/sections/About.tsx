import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";
import { siteConfig } from "@/lib/constants";

const highlights = [
  "45+ days building production web applications",
  "Deep focus on performance, accessibility & SEO",
  "Comfortable across the full stack, from Figma to deployment",
  "Clear communicator who thrives in cross-functional teams",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32" aria-label="About me">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into polished digital products"
          description="A quick introduction to who I am, how I work, and what drives me as a developer."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-brand-gradient-soft blur-xl" aria-hidden="true" />
              <div className="glass-card overflow-hidden rounded-[2rem] p-2">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.6rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1783538771515-78a987fcdbbf?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`${siteConfig.name} working at a desk with a laptop`}
                    fill
                    sizes="(min-width: 1024px) 420px, 320px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-2xl font-bold sm:text-3xl">
              I&apos;m {siteConfig.name}, a {siteConfig.role.toLowerCase()} based in {siteConfig.location}.
            </h3>
            <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-400">
              I specialize in building fast, accessible, and visually refined web experiences using
              React, Next.js and TypeScript. My background spans agency work, in-house product teams
              and freelance collaborations, which taught me to balance design ambition with real
              engineering constraints.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              When I&apos;m not shipping code, I&apos;m usually exploring new design systems, contributing
              to open source, or mentoring aspiring developers.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-brand-500" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="glass-card px-4 py-8 text-center">
                <p className="font-display text-3xl font-bold gradient-text sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
