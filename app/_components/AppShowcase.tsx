"use client";

import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BookMarked,
  ExternalLink,
  Flame,
  PhoneCall,
  Pill,
  ShieldCheck,
  Rocket,
  Smartphone,
  Sun,
  Timer,
  TrendingUp,
  Tv,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "@/app/_components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/app/_lib/motion";

type TileAccent = {
  /** Soft wash behind the card */
  wash: string;
  /** Icon / CTA / accents */
  solid: string;
  glow: string;
  /** Icon well background */
  well: string;
  /** Border tint on hover */
  border: string;
};

type TileMotion = {
  enter: Variants;
  hover: Record<string, number | string>;
  iconHover: Record<string, number | string | number[]>;
  iconTransition?: Record<string, number | string | boolean>;
};

type AppShowcaseItem = {
  name: string;
  category: string;
  icon: LucideIcon;
  benefit: string;
  playSoonLabel?: string;
  privacyHref?: string;
  visitHref?: string;
  version: string;
  status: string;
  accent: TileAccent;
  motion: TileMotion;
  iconShape: "rounded-2xl" | "rounded-full" | "rounded-xl" | "rounded-[1.25rem]";
};

const enterFrom = (
  dx: number,
  dy: number,
  rotate = 0,
  delay = 0,
): Variants => ({
  hidden: { opacity: 0, x: dx, y: dy, rotate, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const APPS: AppShowcaseItem[] = [
  {
    name: "Passward",
    category: "Security & subscriptions",
    icon: ShieldCheck,
    benefit:
      "Store service credentials safely and track monthly costs in one responsive PWA with shared vault access, payment visibility, and reminder workflows.",
    visitHref: "https://passward.wayool.com",
    version: "v1.0.0",
    status: "Live",
    accent: {
      wash: "radial-gradient(120% 80% at 0% 0%, rgba(52,211,153,0.18), transparent 55%)",
      solid: "#34d399",
      glow: "rgba(52,211,153,0.45)",
      well: "rgba(52,211,153,0.16)",
      border: "rgba(52,211,153,0.45)",
    },
    motion: {
      enter: enterFrom(-28, 24, -2),
      hover: { y: -8, scale: 1.02 },
      iconHover: { rotate: [0, -8, 8, 0], scale: 1.08 },
      iconTransition: { duration: 0.55 },
    },
    iconShape: "rounded-2xl",
  },
  {
    name: "Luz Parroquial — Prayer",
    category: "Prayer",
    icon: Sun,
    benefit:
      "Catholic prayer and devotion in Spanish—classic prayers, novenas, the rosary, and guided audio for when you want to pray without staring at the screen. Create an account to keep favorites and progress in sync across devices.",
    privacyHref: "/legal/privacy/luz-parroquial",
    visitHref: "https://luzparroquial-prayer.wayool.com",
    version: "v0.1.0",
    status: "Live",
    accent: {
      wash: "radial-gradient(110% 90% at 100% 0%, rgba(251,191,36,0.2), transparent 58%)",
      solid: "#fbbf24",
      glow: "rgba(251,191,36,0.4)",
      well: "rgba(251,191,36,0.16)",
      border: "rgba(251,191,36,0.45)",
    },
    motion: {
      enter: enterFrom(0, 36, 0, 0.04),
      hover: { y: -6, scale: 1.025 },
      iconHover: { rotate: 90, scale: 1.1 },
      iconTransition: { type: "spring", stiffness: 220, damping: 14 },
    },
    iconShape: "rounded-full",
  },
  {
    name: "Live Countdown: for Fortnite Fans",
    category: "Fortnite",
    icon: Timer,
    benefit:
      "Live countdowns for Fortnite seasons, events, and shop resets—timed consistently from event schedules so you never miss a drop. Browse the shop and jam tracks, star favorites, and keep history in sync when you sign in.",
    playSoonLabel: "Coming soon · Google Play",
    privacyHref: "/legal/privacy/live-countdown-fortnite",
    visitHref: "https://livecountdown.wayool.com",
    version: "v1.0.0",
    status: "Live",
    accent: {
      wash: "radial-gradient(100% 80% at 50% 0%, rgba(56,189,248,0.22), transparent 60%)",
      solid: "#38bdf8",
      glow: "rgba(56,189,248,0.5)",
      well: "rgba(56,189,248,0.16)",
      border: "rgba(56,189,248,0.5)",
    },
    motion: {
      enter: enterFrom(28, 24, 2, 0.08),
      hover: { y: -10, rotate: -0.6 },
      iconHover: { rotate: 360 },
      iconTransition: { duration: 0.7, ease: "easeInOut" },
    },
    iconShape: "rounded-xl",
  },
  {
    name: "Watchily",
    category: "TV & streaming",
    icon: Tv,
    benefit:
      "Track what you watch across shows and seasons—pick up where you left off without the spreadsheet chaos.",
    visitHref: "https://watchily-ho.vercel.app",
    version: "v1.0.0",
    status: "Live",
    accent: {
      wash: "radial-gradient(120% 90% at 0% 100%, rgba(244,63,94,0.18), transparent 55%)",
      solid: "#fb7185",
      glow: "rgba(244,63,94,0.42)",
      well: "rgba(244,63,94,0.15)",
      border: "rgba(251,113,133,0.45)",
    },
    motion: {
      enter: enterFrom(-20, 30, 0, 0.06),
      hover: { y: -8, scale: 1.03 },
      iconHover: { scale: [1, 1.15, 1], y: [0, -3, 0] },
      iconTransition: { duration: 0.45 },
    },
    iconShape: "rounded-[1.25rem]",
  },
  {
    name: "MangaTrack",
    category: "Manga & reading",
    icon: BookMarked,
    benefit:
      "Follow manga series and reading progress in one place—know what’s next without losing your place.",
    visitHref: "https://mangatrack.wayool.com",
    version: "v1.0.0",
    status: "Live",
    accent: {
      wash: "radial-gradient(110% 85% at 100% 20%, rgba(45,212,191,0.2), transparent 55%)",
      solid: "#2dd4bf",
      glow: "rgba(45,212,191,0.45)",
      well: "rgba(45,212,191,0.15)",
      border: "rgba(45,212,191,0.45)",
    },
    motion: {
      enter: enterFrom(0, 40, 0, 0.1),
      hover: { y: -7, x: 2 },
      iconHover: { rotate: -12, scale: 1.12 },
      iconTransition: { type: "spring", stiffness: 300, damping: 16 },
    },
    iconShape: "rounded-2xl",
  },
  {
    name: "Health Erino",
    category: "Medications",
    icon: Pill,
    benefit:
      "Manage medications from Google Sheets with an AI voice assistant—check stock, expiry, and answers hands-free on web or mobile.",
    visitHref: "https://health-erino.vercel.app",
    version: "v1.0.0",
    status: "Live",
    accent: {
      wash: "radial-gradient(100% 80% at 0% 50%, rgba(74,222,128,0.18), transparent 58%)",
      solid: "#4ade80",
      glow: "rgba(74,222,128,0.4)",
      well: "rgba(74,222,128,0.15)",
      border: "rgba(74,222,128,0.45)",
    },
    motion: {
      enter: enterFrom(24, 28, 1.5, 0.12),
      hover: { y: -9, scale: 1.02 },
      iconHover: { rotate: [0, 15, -10, 0] },
      iconTransition: { duration: 0.5 },
    },
    iconShape: "rounded-full",
  },
  {
    name: "CRT Líneas",
    category: "Telecom",
    icon: PhoneCall,
    benefit:
      "Verify phone lines against Mexico’s CRT company portals—track activation status across carriers from one dashboard.",
    visitHref: "https://crt-lineas.vercel.app",
    version: "v1.0.0",
    status: "Live",
    accent: {
      wash: "radial-gradient(115% 90% at 80% 0%, rgba(96,165,250,0.2), transparent 55%)",
      solid: "#60a5fa",
      glow: "rgba(96,165,250,0.45)",
      well: "rgba(96,165,250,0.15)",
      border: "rgba(96,165,250,0.45)",
    },
    motion: {
      enter: enterFrom(-30, 20, -1.5, 0.08),
      hover: { y: -6, rotate: 0.5 },
      iconHover: { x: [0, 2, -2, 0], scale: 1.08 },
      iconTransition: { duration: 0.4 },
    },
    iconShape: "rounded-xl",
  },
  {
    name: "ArbPulse",
    category: "Markets & arbitrage",
    icon: TrendingUp,
    benefit:
      "Spot arbitrage opportunities at a glance—live signals that surface price gaps before they close.",
    visitHref: "https://arbpulse.wayool.com",
    version: "v1.0.0",
    status: "Live",
    accent: {
      wash: "radial-gradient(110% 85% at 50% 100%, rgba(250,204,21,0.16), transparent 55%)",
      solid: "#facc15",
      glow: "rgba(250,204,21,0.4)",
      well: "rgba(250,204,21,0.14)",
      border: "rgba(250,204,21,0.45)",
    },
    motion: {
      enter: enterFrom(0, 32, 0, 0.14),
      hover: { y: -11, scale: 1.025 },
      iconHover: { y: -4, scale: 1.12 },
      iconTransition: { type: "spring", stiffness: 400, damping: 18 },
    },
    iconShape: "rounded-2xl",
  },
  {
    name: "te-kae",
    category: "Hackathons",
    icon: Rocket,
    benefit:
      "Discover active online hackathons in one place—filter by platform, track deadlines, and jump into the next build challenge.",
    visitHref: "https://te-kae.wayool.com",
    version: "v1.0.0",
    status: "Live",
    accent: {
      wash: "radial-gradient(120% 90% at 0% 0%, rgba(251,146,60,0.2), transparent 55%)",
      solid: "#fb923c",
      glow: "rgba(251,146,60,0.45)",
      well: "rgba(251,146,60,0.15)",
      border: "rgba(251,146,60,0.5)",
    },
    motion: {
      enter: enterFrom(20, 36, 2, 0.1),
      hover: { y: -12, rotate: -1 },
      iconHover: { y: -6, rotate: -18, scale: 1.1 },
      iconTransition: { type: "spring", stiffness: 280, damping: 14 },
    },
    iconShape: "rounded-[1.25rem]",
  },
  {
    name: "FinSos",
    category: "Personal finance",
    icon: Wallet,
    benefit:
      "Upload bank statement PDFs, track income and expenses in one dashboard, and ask Gemini about your cashflow.",
    visitHref: "https://finsos.vercel.app",
    version: "v0.1.0",
    status: "Live",
    accent: {
      wash: "radial-gradient(110% 85% at 100% 80%, rgba(34,211,238,0.2), transparent 55%)",
      solid: "#22d3ee",
      glow: "rgba(34,211,238,0.45)",
      well: "rgba(34,211,238,0.15)",
      border: "rgba(34,211,238,0.5)",
    },
    motion: {
      enter: enterFrom(-16, 28, 0, 0.16),
      hover: { y: -8, scale: 1.02 },
      iconHover: { rotate: [0, -6, 6, 0], scale: 1.08 },
      iconTransition: { duration: 0.5 },
    },
    iconShape: "rounded-full",
  },
  {
    name: "Dragon Territory",
    category: "Kids games",
    icon: Flame,
    benefit:
      "Arcade Othello for kids—Fire vs Ice dragons, flip eggs into dragons, and claim the arena with your clan.",
    visitHref: "https://dragon-territory.wayool.com",
    version: "v0.1.0",
    status: "Live",
    accent: {
      wash: "radial-gradient(120% 90% at 0% 0%, rgba(251,146,60,0.22), transparent 55%), radial-gradient(100% 80% at 100% 100%, rgba(56,189,248,0.18), transparent 50%)",
      solid: "#fb923c",
      glow: "rgba(251,146,60,0.45)",
      well: "rgba(251,146,60,0.16)",
      border: "rgba(56,189,248,0.45)",
    },
    motion: {
      enter: enterFrom(18, 30, 1.5, 0.18),
      hover: { y: -10, scale: 1.025 },
      iconHover: { rotate: [0, -10, 10, 0], scale: 1.1 },
      iconTransition: { duration: 0.55 },
    },
    iconShape: "rounded-2xl",
  },
];

function PlaySoonBadge({
  label = "Coming soon · Web & mobile",
  color,
}: {
  label?: string;
  color: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold"
      style={{
        color,
        borderColor: `${color}55`,
        backgroundColor: `${color}18`,
      }}
    >
      <Smartphone className="size-3.5 shrink-0" aria-hidden />
      {label}
    </span>
  );
}

function VisitSiteButton({
  href,
  name,
  color,
}: {
  href: string;
  name: string;
  color: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        color,
        borderColor: `${color}66`,
        backgroundColor: `${color}14`,
        outlineColor: color,
      }}
      whileHover={{ scale: 1.05, backgroundColor: `${color}28` }}
      whileTap={{ scale: 0.97 }}
      aria-label={`Open ${name} website`}
    >
      Visit site
      <ExternalLink className="size-3.5 shrink-0" aria-hidden />
    </motion.a>
  );
}

function AppCard({ app, index }: { app: AppShowcaseItem; index: number }) {
  const Icon = app.icon;
  const { accent, motion: tileMotion } = app;

  return (
    <motion.li variants={tileMotion.enter} className="m-0 min-w-0 list-none">
      <motion.article
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-6 shadow-card backdrop-blur-md sm:p-7"
        whileHover={{
          ...tileMotion.hover,
          borderColor: accent.border,
          boxShadow: `0 28px 80px -28px rgba(0,0,0,0.85), 0 0 40px -10px ${accent.glow}`,
        }}
        transition={{ type: "spring", stiffness: 360, damping: 24 }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: accent.wash }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full opacity-40 blur-2xl transition-transform duration-500 group-hover:scale-125"
          style={{ background: accent.solid }}
          aria-hidden
        />

        <div className="relative flex items-start justify-between gap-3">
          <motion.div
            className={`flex size-12 shrink-0 items-center justify-center ${app.iconShape}`}
            style={{ backgroundColor: accent.well, color: accent.solid }}
            whileHover={tileMotion.iconHover}
            transition={tileMotion.iconTransition}
            aria-hidden
          >
            <Icon className="size-6" strokeWidth={1.75} />
          </motion.div>
          <div className="flex flex-wrap items-center justify-end gap-2">
            {app.visitHref ? (
              <VisitSiteButton
                href={app.visitHref}
                name={app.name}
                color={accent.solid}
              />
            ) : null}
            {app.playSoonLabel ? (
              <PlaySoonBadge label={app.playSoonLabel} color={accent.solid} />
            ) : null}
          </div>
        </div>

        <p
          className="relative mt-4 text-xs font-semibold uppercase tracking-wider"
          style={{ color: accent.solid }}
        >
          {app.category}
        </p>
        <h3 className="font-display relative mt-1 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
          {app.name}
        </h3>
        <p className="relative mt-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          {app.benefit}
        </p>

        <div className="relative mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-[var(--border-subtle)] pt-5 text-xs text-[var(--text-muted)]">
          <span
            className="rounded-md px-2 py-1 font-mono text-[11px]"
            style={{
              backgroundColor: accent.well,
              color: accent.solid,
            }}
          >
            {app.version}
          </span>
          <span aria-hidden>·</span>
          <span
            className="inline-flex items-center gap-1.5 font-semibold"
            style={{ color: accent.solid }}
          >
            <span
              className="size-1.5 animate-pulse rounded-full"
              style={{
                backgroundColor: accent.solid,
                animationDelay: `${index * 120}ms`,
              }}
              aria-hidden
            />
            {app.status}
          </span>
          {app.privacyHref ? (
            <>
              <span aria-hidden>·</span>
              <Link
                href={app.privacyHref}
                className="font-semibold transition-opacity hover:opacity-80"
                style={{ color: accent.solid }}
              >
                Privacy policy
              </Link>
            </>
          ) : null}
        </div>
      </motion.article>
    </motion.li>
  );
}

export function AppShowcase() {
  return (
    <SectionWrapper id="apps" className="relative z-[1] scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]"
          >
            Our apps
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl"
          >
            Products built for daily rituals.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[var(--text-muted)]">
            Each one is built for responsive web and mobile—and as installable
            PWAs you can add to your home screen. Smooth flows, clear trust
            signals, and time back for the people who use them.
          </motion.p>
        </motion.div>

        <motion.ul
          className="mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.07, delayChildren: 0.04 },
            },
          }}
          aria-label="Wayool apps"
        >
          {APPS.map((app, index) => (
            <AppCard key={app.name} app={app} index={index} />
          ))}
        </motion.ul>
      </div>
    </SectionWrapper>
  );
}
