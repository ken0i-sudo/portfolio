"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gradient bar fixed to the top of the viewport, indicating scroll
 * progress through the whole page.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-brand-gradient"
      aria-hidden="true"
    />
  );
}
