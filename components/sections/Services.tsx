import { FiCode, FiFigma, FiSmartphone, FiSearch, FiZap, FiServer } from "react-icons/fi";
import type { IconType } from "react-icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services, type Service } from "@/lib/data";

const icons: Record<Service["icon"], IconType> = {
  code: FiCode,
  design: FiFigma,
  mobile: FiSmartphone,
  seo: FiSearch,
  performance: FiZap,
  api: FiServer,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-32" aria-label="Services">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Services"
          title="What I can help you build"
          description="From a single landing page to a full product build — here's how I can add value to your team."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon] ?? FiCode;
            return (
              <Reveal key={service.title} delay={(index % 3) * 0.1}>
                <div className="glass-card group h-full p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-600
                      transition-colors group-hover:bg-brand-gradient group-hover:text-white dark:text-brand-300"
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
