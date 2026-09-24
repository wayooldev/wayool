"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GlowButton } from "@/app/_components/ui/GlowButton";
import { fadeUp, staggerContainer } from "@/app/_lib/motion";

const blobTransition = {
  duration: 10,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

function PhoneMockup() {
  return (
    <div className="relative mx-auto aspect-[9/18] w-full max-w-[260px] lg:max-w-[300px]">
      <div
        className="pointer-events-none absolute -inset-[18%] rounded-[3rem] bg-[radial-gradient(circle_at_40%_35%,var(--accent-glow),transparent_62%)] blur-2xl"
        aria-hidden
      />
      <motion.div
        className="relative h-full w-full rounded-[2.25rem] border border-[var(--border-subtle)] bg-gradient-to-br from-[#27272a] via-[#18181b] to-[#09090b] p-2 shadow-card"
        initial={{ rotate: -6, y: 16 }}
        animate={{ rotate: -3, y: 8 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      >
        <div className="relative h-full overflow-hidden rounded-[1.85rem] bg-[#0c0c0e]">
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute inset-x-8 top-10 h-3 rounded-full bg-[var(--surface)]" />
          <motion.div
            className="absolute left-8 right-8 top-[3.25rem] space-y-3"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.2, repeat: Infinity, repeatType: "mirror" }}
          >
            <div className="h-10 rounded-xl bg-gradient-to-r from-[var(--accent)]/25 to-transparent" />
            <div className="h-10 rounded-xl bg-[var(--surface)]/90" />
            <div className="h-10 rounded-xl bg-[var(--surface)]/70" />
          </motion.div>
          <div className="absolute bottom-10 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-[var(--text-muted)]/35" />
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-24 pt-28 sm:pt-32 lg:pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-[20%] top-[10%] h-[420px] w-[420px] rounded-full bg-[var(--accent)] opacity-[0.14] blur-[100px]"
          animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
          transition={blobTransition}
        />
        <motion.div
          className="absolute -right-[15%] top-[28%] h-[380px] w-[380px] rounded-full bg-[var(--accent-secondary)] opacity-[0.12] blur-[90px]"
          animate={{ x: [0, -32, 0], y: [0, 36, 0] }}
          transition={{ ...blobTransition, duration: 12 }}
        />
        <motion.div
          className="absolute left-[18%] bottom-[-20%] h-[360px] w-[360px] rounded-full bg-cyan-200 opacity-[0.08] blur-[110px]"
          animate={{ x: [0, 24, 0], y: [0, -20, 0] }}
          transition={{ ...blobTransition, duration: 9 }}
        />
      </div>

      <div className="relative z-[1] mx-auto grid max-w-6xl gap-12 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="font-display max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Web and mobile apps you can feel in every tap.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-prose text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
          >
            We design and ship web apps and mobile experiences with clean
            architecture, snappy interactions, and product polish—every screen
            considered, every release intentional.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
          >
            <GlowButton
              type="button"
              onClick={() =>
                document
                  .querySelector("#apps")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View apps
            </GlowButton>
            <GlowButton
              variant="outline"
              type="button"
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About Wayool
            </GlowButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="relative w-full max-w-md"
            style={{ transitionDelay: "0.15s" }}
          >
            <p className="font-display pointer-events-none absolute -left-4 top-1/4 hidden max-w-[11rem] -rotate-6 text-left text-2xl font-bold leading-none lg:block xl:-left-14 xl:text-3xl">
              <span className="text-[var(--accent)]/20">Web</span>
              <br />
              <span className="text-[var(--highlight)]/25">Mobile</span>
            </p>
            <PhoneMockup />
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#apps"
        className="absolute bottom-6 left-1/2 z-[1] flex min-h-[44px] min-w-[44px] -translate-x-1/2 items-center justify-center text-[var(--accent)]"
        aria-label="Scroll to apps section"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} strokeWidth={2.2} />
      </motion.a>
    </section>
  );
}
