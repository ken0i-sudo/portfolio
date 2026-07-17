import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStack, type TechStackItem } from "@/lib/data";

const iconMap: Record<TechStackItem["icon"], IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  git: SiGit,
  docker: SiDocker,
  figma: SiFigma,
};

export function TechStack() {
  const loopItems = [...techStack, ...techStack];

  return (
    <section id="tech-stack" className="scroll-mt-24 py-24 sm:py-32" aria-label="Tech stack">
      <div className="container-narrow">
        <SectionHeading eyebrow="Tech Stack" title="Tools of the trade" />
      </div>

      <div className="relative mt-14 overflow-hidden mask-fade-edges">
        <div className="flex w-max animate-marquee gap-6 [animation-play-state:running] hover:[animation-play-state:paused]">
          {loopItems.map((item, index) => {
            const Icon = iconMap[item.icon] ?? SiReact;
            return (
              <div
                key={`${item.name}-${index}`}
                className="glass-card flex w-40 shrink-0 flex-col items-center gap-3 px-6 py-8"
              >
                <Icon size={36} className="text-slate-700 dark:text-slate-200" />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
