import Link from "next/link";
import { WayoolLogoMark } from "@/app/_components/brand/WayoolLogo";

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <WayoolLogoMark size={72} className="mb-6" />
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
        Offline
      </p>
      <h1 className="font-display text-3xl font-semibold text-balance sm:text-4xl">
        You&apos;re not connected
      </h1>
      <p className="mt-4 max-w-md text-[var(--text-muted)]">
        Check your internet connection and try again. Cached pages may still be
        available once you&apos;re back online.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
      >
        Back to home
      </Link>
    </main>
  );
}
