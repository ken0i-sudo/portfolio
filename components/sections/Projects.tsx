"use client";

import { useMemo, useState, useTransition } from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SkeletonCard } from "@/components/ui/SkeletonCard";
import { projects, projectFilters, type Project } from "@/lib/data";
import { ProjectLightbox } from "./ProjectLightbox";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);

  const filteredProjects = useMemo(
    () => (filter === "all" ? projects : projects.filter((project) => project.category === filter)),
    [filter]
  );

  function handleFilterChange(value: string) {
    if (value === filter) return;
    setLoading(true);
    startTransition(() => {
      setFilter(value);
      // Brief, deliberate skeleton window so filtering feels responsive rather than instant/jarring.
      window.setTimeout(() => setLoading(false), 350);
    });
  }

  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-32" aria-label="Featured projects">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Featured Projects"
          title="A selection of my recent work"
          description="Case studies from client, agency and personal projects — filter by category to explore."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {projectFilters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => handleFilterChange(item.value)}
              aria-pressed={filter === item.value}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200",
                filter === item.value
                  ? "border-transparent bg-brand-gradient text-white shadow-glow"
                  : "border-slate-200 text-slate-600 hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {loading || isPending
            ? Array.from({ length: 3 }).map((_, index) => <SkeletonCard key={index} />)
            : filteredProjects.map((project, index) => (
                <Reveal key={project.slug} delay={(index % 3) * 0.08}>
                  <article className="glass-card group flex h-full flex-col overflow-hidden">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`Preview screenshot of ${project.title}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-950/0 opacity-0 transition-all duration-300 group-hover:bg-slate-950/50 group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          aria-label={`View details for ${project.title}`}
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-800 transition-transform hover:scale-110"
                        >
                          <FiEye size={18} />
                        </button>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live demo of ${project.title}`}
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-800 transition-transform hover:scale-110"
                          >
                            <FiExternalLink size={18} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code for ${project.title}`}
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-800 transition-transform hover:scale-110"
                          >
                            <FiGithub size={18} />
                          </a>
                        )}
                      </div>
                      {project.featured && (
                        <span className="absolute left-3 top-3 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                        <span className="text-xs text-slate-400">{project.year}</span>
                      </div>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="mt-5 text-left text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300"
                      >
                        View case study →
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
        </div>

        {!loading && !isPending && filteredProjects.length === 0 && (
          <p className="mt-12 text-center text-slate-500 dark:text-slate-400">
            No projects found in this category yet.
          </p>
        )}
      </div>

      <ProjectLightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
