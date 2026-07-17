"use client";

import { useEffect, useState } from "react";

type TypingAnimationProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
};

/**
 * Cycles through a list of words with a typewriter effect.
 * Pure CSS/JS, no dependency needed, and respects reduced-motion by
 * simply showing the first word statically.
 */
export function TypingAnimation({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1800,
  className,
}: TypingAnimationProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(query.matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(words[0] ?? "");
      return;
    }

    const currentWord = words[wordIndex % words.length] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
    } else if (!isDeleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((index) => (index + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause, prefersReducedMotion]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-0.5 animate-blink bg-current align-middle" aria-hidden="true" />
    </span>
  );
}
