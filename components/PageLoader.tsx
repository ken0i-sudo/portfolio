"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Full-screen splash animation shown briefly on first load.
 * Purely presentational — improves perceived performance and gives the
 * brand a moment on screen before the page reveals itself.
 */
export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-base-50 dark:bg-base-950"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="font-display text-2xl font-bold">
              Dhavan Chaudhari<span className="gradient-text">.dev</span>
            </span>
            <div className="h-1 w-32 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full bg-brand-gradient"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
