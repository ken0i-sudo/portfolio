"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools & DevOps" },
  { key: "design", label: "Design" },
] as const;

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32" aria-label="Skills">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A snapshot of the languages, frameworks and tools I use daily to design and ship products."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {categories.map((category, categoryIndex) => {
            const items = skills.filter((skill) => skill.category === category.key);
            if (items.length === 0) return null;

            return (
              <Reveal key={category.key} delay={categoryIndex * 0.1}>
                <div className="glass-card h-full p-6 sm:p-8">
                  <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">{category.label}</h3>
                  <div className="space-y-5">
                    {items.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                          <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                        </div>
                        <div
                          className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10"
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency`}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full rounded-full bg-brand-gradient"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
