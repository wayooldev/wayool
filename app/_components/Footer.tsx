"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, X } from "lucide-react";
import Link from "next/link";
import { WayoolBrandLogo } from "@/app/_components/brand/WayoolLogo";
import { fadeUp, staggerContainer } from "@/app/_lib/motion";

const FOOTER_COLS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      {
        label: "Luz Parroquial — Privacy",
        href: "/legal/privacy/luz-parroquial",
      },
      {
        label: "Live Countdown: for Fortnite Fans — Privacy",
        href: "/legal/privacy/live-countdown-fortnite",
      },
      { label: "Terms", href: "/legal/terms" },
      { label: "Cookies", href: "/legal/cookies" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "/support/help" },
      { label: "FAQ", href: "/support/faq" },
    ],
  },
] as const;

const footerLinkClassName =
  "min-h-[44px] inline-flex items-center text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]";

const SOCIALS = [
  { href: "https://twitter.com", label: "X", Icon: X },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://github.com", label: "GitHub", Icon: Github },
] as const;

export function Footer() {
  return (
    <footer
      className="relative z-[1] border-t border-[var(--border-subtle)] pb-10 pt-16"
      aria-labelledby="footer-brand"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between"
        >
          <motion.div variants={fadeUp} className="max-w-sm">
            <div id="footer-brand">
              <WayoolBrandLogo
                markSize={30}
                textClassName="font-display text-xl font-bold tracking-tight"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
              Web and mobile products with real polish—fast, thoughtful, and
              ready to scale.
            </p>

            <a
              href="mailto:support@wayool.com"
              className="group mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[var(--text-primary)]"
            >
              <Mail
                className="size-4 text-[var(--accent)] transition-transform group-hover:scale-110"
                aria-hidden
              />
              <span className="relative">
                support@wayool.com
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--accent)] transition-all group-hover:w-full group-hover:shadow-glow" />
              </span>
            </a>
          </motion.div>

          <motion.nav
            variants={fadeUp}
            className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-3"
            aria-label="Footer"
          >
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--highlight)]">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={footerLinkClassName}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.nav>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:justify-start"
        >
          {SOCIALS.map(({ href, label, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-muted)]"
              whileHover={{ scale: 1.08, boxShadow: "0 0 28px -4px var(--accent-glow)" }}
              whileTap={{ scale: 0.96 }}
            >
              <Icon className="size-5" strokeWidth={1.75} />
            </motion.a>
          ))}
        </motion.div>

        <div
          className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-[var(--highlight)]/45 to-transparent"
          aria-hidden
        />

        <p className="mt-8 text-center text-xs text-[var(--text-muted)]">
          © 2026 Wayool. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
