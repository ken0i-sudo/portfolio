import { FiBriefcase } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32" aria-label="Work experience">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
          description="A timeline of the roles and teams I've contributed to over the past few years."
        />

        <ol className="relative mt-16 border-l border-slate-200 pl-8 dark:border-white/10 sm:pl-10">
          {experience.map((item, index) => (
            <li key={`${item.company}-${item.period}`} className="relative pb-12 last:pb-0">
              <Reveal delay={index * 0.1}>
                <span
                  className="absolute -left-[calc(2rem+1px)] flex h-8 w-8 items-center justify-center rounded-full
                    bg-brand-gradient text-white shadow-glow sm:-left-[calc(2.5rem+1px)]"
                  aria-hidden="true"
                >
                  <FiBriefcase size={14} />
                </span>

                <div className="glass-card p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                    <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600 dark:text-brand-300">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {item.company} · {item.location}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.description.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
