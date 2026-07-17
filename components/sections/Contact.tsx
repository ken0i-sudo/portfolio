"use client";

import { useState, type FormEvent } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/constants";
import { validateContactForm, type ContactFormErrors, type ContactFormValues } from "@/lib/utils";

const initialValues: ContactFormValues = { name: "", email: "", subject: "", message: "" };

type SubmitState = "idle" | "submitting" | "success" | "error";

const contactInfo = [
  { icon: FiMail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: FiPhone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: FiMapPin, label: "Location", value: siteConfig.location },
];

export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitState>("idle");

  function handleChange(field: keyof ContactFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    try {
      if (!siteConfig.formspreeId) {
        // No endpoint configured yet — simulate success so the UX can still be reviewed/demoed.
        await new Promise((resolve) => setTimeout(resolve, 900));
        setStatus("success");
        setValues(initialValues);
        return;
      }

      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32" aria-label="Contact">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="glass-card flex items-center gap-4 p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-600 dark:text-brand-300">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {item.label}
                      </p>
                      <p className="font-medium text-slate-800 dark:text-slate-100">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}

              <div className="glass-card p-5">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Prefer email? Reach out directly and I&apos;ll respond within 24-48 hours, Monday to Friday.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="glass-card space-y-5 p-6 sm:p-8" aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                      <FiAlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                      <FiAlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                  placeholder="Project inquiry"
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                    <FiAlertCircle size={12} /> {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                  placeholder="Tell me a bit about your project..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                    <FiAlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-70">
                {status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend size={16} /> Send Message
                  </>
                )}
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <FiCheckCircle size={16} /> Thanks! Your message has been sent — I&apos;ll be in touch soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm text-red-500">
                    <FiAlertCircle size={16} /> Something went wrong. Please try emailing me directly.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
