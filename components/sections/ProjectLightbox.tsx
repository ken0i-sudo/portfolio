"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "@/lib/data";

type ProjectLightboxProps = {
  project: Project | null;
  onClose: () => void;
};

/** Accessible modal lightbox for viewing a project's image gallery and details. */
export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setActiveImage((i) => (i + 1) % project.gallery.length);
      if (event.key === "ArrowLeft")
        setActiveImage((i) => (i - 1 + project.gallery.length) % project.gallery.length);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="glass-card relative max-h-[90vh] w-full max-w-4xl overflow-y-auto"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full
                bg-white/90 text-slate-700 shadow-md hover:bg-white dark:bg-base-900/90 dark:text-slate-200"
            >
              <FiX size={18} />
            </button>

            <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-white/5">
              <Image
                src={project.gallery[activeImage] ?? project.image}
                alt={`${project.title} screenshot ${activeImage + 1} of ${project.gallery.length}`}
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
                priority
              />

              {project.gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() => setActiveImage((i) => (i - 1 + project.gallery.length) % project.gallery.length)}
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center
                      rounded-full bg-white/90 text-slate-700 shadow-md hover:bg-white dark:bg-base-900/90 dark:text-slate-200"
                  >
                    <FiChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => setActiveImage((i) => (i + 1) % project.gallery.length)}
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center
                      rounded-full bg-white/90 text-slate-700 shadow-md hover:bg-white dark:bg-base-900/90 dark:text-slate-200"
                  >
                    <FiChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {project.gallery.map((_, index) => (
                      <button
                        key={index}
                        aria-label={`View image ${index + 1}`}
                        onClick={() => setActiveImage(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === activeImage ? "w-6 bg-white" : "w-1.5 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">{project.year}</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600 dark:text-brand-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-400">{project.longDescription}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <FiGithub size={16} /> View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
