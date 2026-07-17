import { FiAward, FiBookOpen, FiExternalLink } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { education, certifications } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24 sm:py-32" aria-label="Education and certifications">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Academic background & continued learning"
          description="Formal education paired with ongoing, industry-recognized certifications."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card h-full p-7 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-600 dark:text-brand-300">
                  <FiBookOpen size={20} />
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((item) => (
                  <div key={item.degree} className="border-l-2 border-brand-500/30 pl-4">
                    <p className="text-xs font-medium text-brand-600 dark:text-brand-300">{item.period}</p>
                    <h4 className="mt-1 font-semibold text-slate-900 dark:text-white">{item.degree}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.institution} · {item.location}
                    </p>
                    {item.description && (
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card h-full p-7 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-600 dark:text-brand-300">
                  <FiAward size={20} />
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li
                    key={cert.title}
                    className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0 dark:border-white/5"
                  >
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-100">{cert.title}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View credential: ${cert.title}`}
                        className="mt-1 shrink-0 text-brand-600 dark:text-brand-300"
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
