"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

/**
 * Accessible light/dark theme toggle.
 * Avoids hydration mismatch by only rendering the icon after mount.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200
        bg-white/60 text-slate-700 transition-colors duration-200 hover:border-brand-500 hover:text-brand-600
        dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
    >
      {mounted && (isDark ? <FiSun size={18} /> : <FiMoon size={18} />)}
    </button>
  );
}
