"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Lock,
  Target,
  Stethoscope,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // Coordinated Entrance Animation Variants
  const badgeVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.05, ease: "easeOut" },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.28, ease: "easeOut" },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" },
    },
  };

  const soundwaveVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const trustStripVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : 0.65, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32 bg-[#F7F5F0] dark:bg-[#0A1820] text-[#122129] dark:text-[#F4F7F5] transition-colors"
      aria-label="VocalRise Hero Introduction"
    >
      {/* =========================================================================
          BACKGROUND ATMOSPHERE: Symmetrical Symmetrical Bilateral Ambient Halos
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Left Flank Ambient Halo: Sea Glass */}
        <div className="absolute top-1/4 -left-20 sm:-left-32 w-[550px] sm:w-[700px] h-[550px] sm:h-[650px] bg-gradient-to-br from-[#DCEFEA]/60 via-[#EBF6F3]/30 to-transparent dark:from-[#132630]/70 dark:via-[#1A3845]/40 dark:to-transparent rounded-full blur-3xl opacity-80" />

        {/* Right Flank Ambient Halo: Ocean Teal & Luminous Mint */}
        <div className="absolute top-1/4 -right-20 sm:-right-32 w-[550px] sm:w-[700px] h-[550px] sm:h-[650px] bg-gradient-to-bl from-[#176B68]/12 via-[#38B2A3]/8 to-[#E26D50]/5 dark:from-[#38B2A3]/16 dark:via-[#176B68]/14 dark:to-transparent rounded-full blur-3xl opacity-80" />

        {/* Subtle Center Wash */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-transparent via-white/40 to-transparent dark:via-white/[0.02] rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-10">
        {/* =========================================================================
            1. EYEBROW BADGE
           ========================================================================= */}
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#BFDFD6] dark:border-[#203A48] bg-[#DCEFEA]/80 dark:bg-[#1A3845]/80 px-4 py-1.5 shadow-subtle backdrop-blur-md">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#176B68] dark:bg-[#38B2A3] opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#176B68] dark:bg-[#38B2A3]" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#102B3A] dark:text-[#E2E8F0]">
              Communication, at your own pace
            </span>
          </div>
        </motion.div>

        {/* =========================================================================
            2. LARGE CENTERED DISPLAY HEADLINE
           ========================================================================= */}
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#102B3A] dark:text-white leading-[1.1] sm:leading-[1.08] max-w-4xl mx-auto"
        >
          Your voice deserves{" "}
          <span className="block mt-1 sm:mt-2">
            <span className="bg-gradient-to-r from-[#102B3A] via-[#176B68] to-[#208A86] dark:from-[#F4F7F5] dark:via-[#72C4B4] dark:to-[#38B2A3] bg-clip-text text-transparent">
              room to grow.
            </span>
          </span>
        </motion.h1>

        {/* =========================================================================
            3. SUPPORTING EDITORIAL PARAGRAPH
           ========================================================================= */}
        <motion.p
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg lg:text-xl text-[#4C5E67] dark:text-[#BDCBD2] max-w-2xl mx-auto leading-relaxed"
        >
          Explore communication practice at your own pace, work towards the goals that matter to you, and find supportive guidance when you need it.
        </motion.p>

        {/* =========================================================================
            4. CENTERED CALL-TO-ACTION BUTTONS
           ========================================================================= */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
        >
          <Link href="/signup" className="w-full sm:w-auto">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full gap-2.5 px-8 h-12 sm:h-13 shadow-elevated bg-[#176B68] hover:bg-[#115250] text-white dark:bg-[#38B2A3] dark:hover:bg-[#2DA294] dark:text-[#0A1820] font-semibold text-base transition-all duration-200"
              >
                <span>Begin your journey</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </motion.div>
          </Link>

          <a href="#studio-showcase" className="w-full sm:w-auto">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full px-7 h-12 sm:h-13 gap-2 text-[#102B3A] dark:text-white border-[#B2CDC8] dark:border-[#203A48] hover:bg-[#DCEFEA]/40 dark:hover:bg-[#132630] font-medium text-base transition-all duration-200"
              >
                <Play className="h-3.5 w-3.5 text-[#176B68] dark:text-[#38B2A3]" aria-hidden="true" />
                <span>Discover VocalRise</span>
              </Button>
            </motion.div>
          </a>
        </motion.div>

        {/* =========================================================================
            5. ABSTRACT SOUND-WAVE CENTERPIECE (Flowing Harmonic Ribbons)
           ========================================================================= */}
        <motion.div
          variants={soundwaveVariants}
          initial="hidden"
          animate="visible"
          className="pt-4 sm:pt-6 relative max-w-4xl mx-auto"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, -5, 0] }}
            transition={
              shouldReduceMotion
                ? {}
                : { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }
            className="relative"
          >
            {/* Luminous Core Glow behind Sound-Wave */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#DCEFEA]/40 via-[#176B68]/15 to-[#E26D50]/10 dark:from-[#132630]/60 dark:via-[#38B2A3]/20 dark:to-transparent blur-2xl rounded-full pointer-events-none"
              aria-hidden="true"
            />

            {/* Custom Organic Flowing Vector Sculpture */}
            <svg
              className="w-full h-auto max-h-[180px] sm:max-h-[220px] drop-shadow-sm select-none"
              viewBox="0 0 960 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Abstract harmonic sound wave representing human vocal resonance, breath ease, and personal pacing"
              role="img"
            >
              <defs>
                {/* Sea Glass Diffuse Wash Gradient */}
                <linearGradient id="seaGlassWash" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DCEFEA" stopOpacity="0.1" />
                  <stop offset="30%" stopColor="#DCEFEA" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#72C4B4" stopOpacity="0.35" />
                  <stop offset="70%" stopColor="#DCEFEA" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#DCEFEA" stopOpacity="0.1" />
                </linearGradient>

                {/* Ocean Teal Primary Wave Gradient */}
                <linearGradient id="tealWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#176B68" stopOpacity="0.2" />
                  <stop offset="25%" stopColor="#176B68" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#38B2A3" stopOpacity="1" />
                  <stop offset="75%" stopColor="#176B68" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#176B68" stopOpacity="0.2" />
                </linearGradient>

                {/* Coral Resonant Accent Gradient */}
                <linearGradient id="coralAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E26D50" stopOpacity="0" />
                  <stop offset="35%" stopColor="#E26D50" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#E26D50" stopOpacity="0.75" />
                  <stop offset="65%" stopColor="#E26D50" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#E26D50" stopOpacity="0" />
                </linearGradient>

                {/* Golden Sand Harmonic Filament */}
                <linearGradient id="sandFilamentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4A338" stopOpacity="0" />
                  <stop offset="40%" stopColor="#D4A338" stopOpacity="0.5" />
                  <stop offset="60%" stopColor="#D4A338" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#D4A338" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Layer 1: Ethereal Sea Glass Base Wash Ribbon */}
              <path
                d="M 40 110 C 160 70, 260 150, 380 110 C 500 70, 600 150, 720 110 C 820 75, 880 120, 920 110 L 920 130 C 880 140, 820 100, 720 135 C 600 175, 500 95, 380 135 C 260 175, 160 95, 40 130 Z"
                fill="url(#seaGlassWash)"
              />

              {/* Layer 2: Deep Sea Glass Soft Contour Wave */}
              <path
                d="M 20 115 C 140 85, 240 145, 360 115 C 480 85, 580 145, 700 115 C 800 90, 880 125, 940 115"
                stroke="#BFDFD6"
                strokeWidth="1.5"
                strokeOpacity="0.7"
                fill="none"
              />

              {/* Layer 3: Main Ocean Teal Primary Harmonic Ribbon */}
              <path
                d="M 30 110 C 150 55, 250 165, 370 110 C 490 55, 590 165, 710 110 C 810 65, 890 140, 930 110"
                stroke="url(#tealWaveGrad)"
                strokeWidth="2.75"
                strokeLinecap="round"
                fill="none"
              />

              {/* Layer 4: Intersecting Counter-Wave Ribbon (Luminous Mint) */}
              <path
                d="M 50 110 C 170 160, 270 60, 390 110 C 510 160, 610 60, 730 110 C 830 150, 890 80, 910 110"
                stroke="#38B2A3"
                strokeWidth="1.75"
                strokeOpacity="0.65"
                strokeDasharray="6 8"
                strokeLinecap="round"
                fill="none"
              />

              {/* Layer 5: Warm Coral Resonant Individuality Accent */}
              <path
                d="M 80 110 C 200 80, 300 140, 420 110 C 540 80, 640 140, 760 110 C 840 90, 870 120, 880 110"
                stroke="url(#coralAccentGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Layer 6: Golden Sand Harmonic Milestone Filament */}
              <path
                d="M 120 110 C 240 130, 340 90, 460 110 C 580 130, 680 90, 800 110 C 830 115, 840 105, 840 110"
                stroke="url(#sandFilamentGrad)"
                strokeWidth="1.25"
                strokeDasharray="3 7"
                strokeLinecap="round"
                fill="none"
              />

              {/* Layer 7: Subtle Micro Resonance Nodes (Breath Points) */}
              <circle cx="370" cy="110" r="3.5" fill="#176B68" className="dark:fill-[#38B2A3]" opacity="0.8" />
              <circle cx="480" cy="110" r="4.5" fill="#38B2A3" opacity="0.9" />
              <circle cx="590" cy="110" r="3.5" fill="#176B68" className="dark:fill-[#38B2A3]" opacity="0.8" />
              <circle cx="480" cy="85" r="2.5" fill="#E26D50" opacity="0.7" />
              <circle cx="480" cy="135" r="2.5" fill="#E26D50" opacity="0.7" />
            </svg>
          </motion.div>
        </motion.div>

        {/* =========================================================================
            6. SUBTLE RESTRAINED TRUST STRIP
           ========================================================================= */}
        <motion.div
          variants={trustStripVariants}
          initial="hidden"
          animate="visible"
          className="pt-6 sm:pt-10 border-t border-[#D5E1E6]/70 dark:border-[#203A48] max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-[#4C5E67] dark:text-[#BDCBD2]">
            <span className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-[#176B68] dark:text-[#38B2A3] shrink-0" aria-hidden="true" />
              <span className="font-medium">Practice at your own pace</span>
            </span>

            <span className="hidden sm:inline text-[#BFDFD6] dark:text-[#203A48]" aria-hidden="true">•</span>

            <span className="flex items-center gap-2">
              <Target className="h-4 w-4 text-[#176B68] dark:text-[#38B2A3] shrink-0" aria-hidden="true" />
              <span className="font-medium">Personal communication goals</span>
            </span>

            <span className="hidden sm:inline text-[#BFDFD6] dark:text-[#203A48]" aria-hidden="true">•</span>

            <span className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-[#176B68] dark:text-[#38B2A3] shrink-0" aria-hidden="true" />
              <span className="font-medium">Optional speech-language therapist support</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
