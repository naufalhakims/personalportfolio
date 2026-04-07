"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  // Place your hero image at: /public/hero-bg-main.png
  // Then change the filename below if needed.
  const heroBgPath = "/hero.png";

  return (
    <section
      id="home"
      className="relative isolate min-h-[72vh] overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(148,163,184,0.16),transparent_40%),linear-gradient(110deg,#0f172a_0%,#0a0a0a_48%,#171717_100%)]" />

      <div
        className="absolute inset-0 opacity-35 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBgPath})` }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl py-16 md:-ml-4 lg:-ml-8"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-sm sm:text-base text-blue-300/90"
          >
            Hello! I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
          >
            NAUFAL SYAFI&apos; HAKIM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300"
          >
            Information Technology Student at Institut Teknologi Sepuluh
            Nopember. Focused on AI/ML, Software Engineering, and Data-driven
            development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3 sm:gap-4"
          >
            <Link
              href="/projects"
              className="rounded-lg border border-neutral-300/60 bg-white/5 px-6 py-2.5 text-sm sm:text-base font-medium text-neutral-100 transition hover:border-blue-300 hover:text-blue-200"
            >
              View Projects
            </Link>
            <a
              href="/Naufal-resume-11.pdf"
              download
              className="rounded-lg border border-blue-300/80 bg-blue-500/10 px-6 py-2.5 text-sm sm:text-base font-medium text-blue-200 transition hover:bg-blue-500/20"
            >
              Download Resume
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-neutral-400/70 bg-neutral-900/70 px-6 py-2.5 text-sm sm:text-base font-medium text-neutral-200 transition hover:border-blue-300 hover:text-blue-200"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
