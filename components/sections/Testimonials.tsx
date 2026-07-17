"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  if (!testimonial) return null;

  return (
    <section id="testimonials" className="scroll-mt-24 py-24 sm:py-32" aria-label="Testimonials">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say about working with me"
          description="Feedback from managers, founders and collaborators I've partnered with."
        />

        <Reveal className="mx-auto mt-16 max-w-3xl">
          <div className="glass-card relative overflow-hidden p-8 sm:p-12">
            <FiMessageSquare className="absolute -top-2 right-6 text-brand-500/10" size={110} aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200 sm:text-xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={`Portrait of ${testimonial.name}`}
                      fill
                      sizes="48px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:text-slate-300"
            >
              <FiChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-brand-500" : "w-2 bg-slate-300 dark:bg-white/15"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:text-slate-300"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
