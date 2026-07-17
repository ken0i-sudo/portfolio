"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Next.js remounts `template.tsx` on every navigation, which lets us apply
 * a smooth fade/slide transition between routes (e.g. Home -> 404).
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
