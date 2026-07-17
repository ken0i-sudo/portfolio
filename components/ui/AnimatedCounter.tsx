"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { formatNumber } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

/** Animates a number counting up from 0 once it scrolls into view. */
export function AnimatedCounter({ value, suffix = "", duration = 1.6 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);

  useMotionValueEvent(motionValue, "change", (latest) => {
    if (ref.current) {
      ref.current.textContent = `${formatNumber(latest)}${suffix}`;
    }
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
  }, [inView, value, duration, motionValue]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      0{suffix}
    </span>
  );
}
