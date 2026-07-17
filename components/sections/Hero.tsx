"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { siteConfig } from "@/lib/constants";
import { TypingAnimation } from "@/components/ui/TypingAnimation";

const roles = ["Full-Stack Developer", "UI/UX Enthusiast", "React & Next.js Specialist", "Problem Solver"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 sm:pt-16"
      aria-label="Introduction"
    >
      {/* Decorative animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern [background-size:44px_44px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade" />
      <div
        className="absolute -left-32 top-16 -z-10 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl animate-blob sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 top-56 -z-10 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl animate-blob sm:h-96 sm:w-96"
        style={{ animationDelay: "4s" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-magenta-500/20 blur-3xl animate-blob sm:h-96 sm:w-96"
        style={{ animationDelay: "8s" }}
        aria-hidden="true"
      />

      <div className="container-narrow grid items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-0">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-heading-eyebrow"
          >
            👋 Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m {siteConfig.name.split(" ")[0]} —{" "}
            <span className="block gradient-text">
              <TypingAnimation words={roles} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {siteConfig.tagline} I turn complex problems into elegant, accessible, high-performance
            products — from the first Figma frame to production deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link href="#projects" className="btn-primary">
              View My Work
            </Link>
            <a href={siteConfig.resumeUrl} download className="btn-secondary">
              <FiDownload size={16} /> Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-full lg:max-w-md"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-brand-gradient opacity-20 blur-2xl" aria-hidden="true" />
          <div className="glass-card relative h-full w-full overflow-hidden rounded-[2.5rem] p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/images/avatars/portrait.png"
                alt={`Portrait of ${siteConfig.name}, ${siteConfig.role}`}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 320px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="glass-card absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl px-4 py-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Open to work</span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs
          font-medium text-slate-500 dark:text-slate-400 sm:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <FiArrowDown />
        </motion.span>
      </motion.a>
    </section>
  );
}
