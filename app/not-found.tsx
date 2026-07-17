import type { Metadata } from "next";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { GoBackButton } from "@/components/ui/GoBackButton";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern [background-size:44px_44px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade" />
      <div className="absolute -left-20 top-1/3 -z-10 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl animate-blob" />
      <div className="absolute right-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-accent-500/25 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="text-center">
        <p className="font-display text-8xl font-bold gradient-text sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Looks like this page took a wrong turn
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600 dark:text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist, was renamed, or moved somewhere else.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <FiHome size={16} /> Back to Home
          </Link>
          <GoBackButton />
        </div>
      </div>
    </section>
  );
}
