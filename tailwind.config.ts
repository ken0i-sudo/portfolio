import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        base: {
          50: "#f7f8fc",
          100: "#eef0f9",
          900: "#0a0a0f",
          950: "#050508",
        },
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        accent: {
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
        magenta: {
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
        "brand-gradient": "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(6,182,212,0.15) 100%)",
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.18), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(99,102,241,0.55)",
        "glow-cyan": "0 0 40px -8px rgba(6,182,212,0.5)",
        card: "0 4px 30px rgba(0,0,0,0.08)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blob: "blob 18s infinite ease-in-out",
        marquee: "marquee 30s linear infinite",
        blink: "blink 1s step-start infinite",
        shimmer: "shimmer 2s infinite linear",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
