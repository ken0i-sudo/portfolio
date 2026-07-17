import { clsx, type ClassValue } from "clsx";

/** Merge conditional class names together. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Basic RFC-5322-ish email check, good enough for client-side UX validation. */
export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

/** Validates the contact form and returns a map of field errors (empty if valid). */
export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please enter a subject.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

/** Formats a number with locale-aware separators, used by animated counters. */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}
