"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Waves,
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
  ArrowRight,
  Mic,
  Play,
  Lock,
  Sparkles,
  CheckCircle2,
  FileCheck2,
  Smile,
  Volume2,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // Waveform bars data for the realistic audio visualizer
  const waveformBars = [
    14, 26, 38, 48, 62, 54, 40, 28, 44, 58, 64, 50, 36, 48, 60, 42, 30, 22, 16, 10
  ];

  // Motion variants that gracefully respect prefers-reduced-motion
  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants1: Variants = {
    animate: shouldReduceMotion
      ? { y: 0 }
      : {
          y: [0, -6, 0],
          transition: {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
  };

  const floatingVariants2: Variants = {
    animate: shouldReduceMotion
      ? { y: 0 }
      : {
          y: [0, 6, 0],
          transition: {
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          },
        },
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#EEF4F7] via-[#F7F9F8] to-[#F7F9F8] dark:from-[#0E171E] dark:via-[#111D25] dark:to-[#111D25] transition-colors">
      {/* =========================================================================
          BACKGROUND AMBIENT ATMOSPHERE & GRADIENT MESH
          Sophisticated oceanic glows with soft teal & coral warmth accents.
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Primary Ocean Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-ocean/15 via-softblue/10 to-transparent dark:from-ocean/20 dark:via-[#1E3B4B]/20 dark:to-transparent rounded-full blur-3xl opacity-80 -translate-y-1/3" />
        
        {/* Subtle Warm Coral Accent Glow (top-right) */}
        <div className="absolute top-10 right-0 sm:right-10 w-[420px] h-[380px] bg-gradient-to-bl from-terracotta/10 via-[#E89E88]/5 to-transparent dark:from-terracotta/15 dark:via-transparent blur-3xl rounded-full opacity-70" />
        
        {/* Subtle Clinical Teal Clarity Glow (bottom-left) */}
        <div className="absolute bottom-10 left-0 w-[400px] h-[340px] bg-gradient-to-tr from-[#14B8A6]/10 via-[#2DD4BF]/5 to-transparent dark:from-[#0D9488]/15 dark:via-transparent blur-2xl rounded-full opacity-60" />

        {/* Ambient Acoustic Soundwave Concentric Rings */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-[0.035] dark:opacity-[0.06] pointer-events-none"
          viewBox="0 0 1200 1200"
          fill="none"
        >
          <circle cx="600" cy="600" r="280" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" />
          <circle cx="600" cy="600" r="380" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 10" />
          <circle cx="600" cy="600" r="480" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 12" />
          <circle cx="600" cy="600" r="580" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: HERO NARRATIVE & IMPACTFUL ACTIONS
             ========================================================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-7 text-left"
          >
            {/* Kicker Pill: Human-Centred Platform */}
            <motion.div variants={itemVariants} className="flex">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-ocean/20 bg-white/90 dark:border-[#304653] dark:bg-midnight-surface/90 px-4 py-1.5 text-xs font-medium text-midnight dark:text-[#E2E8F0] shadow-subtle backdrop-blur-md">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75 motion-reduce:hidden" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A8533E]" />
                </span>
                <span className="font-semibold text-ocean dark:text-[#83B5CC]">VocalRise</span>
                <span className="text-[#A9C4D1] dark:text-[#456170]" aria-hidden="true">•</span>
                <span>Human-Centred Speech Practice Platform</span>
              </div>
            </motion.div>

            {/* Main Headline (Exact Required Text) */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-midnight dark:text-white leading-[1.1] sm:leading-[1.08]"
            >
              Your voice. Your pace.{" "}
              <span className="relative inline-block mt-1 sm:mt-0">
                <span className="bg-gradient-to-r from-ocean via-[#296887] to-[#147B74] dark:from-[#83B5CC] dark:via-[#A7CEE0] dark:to-[#5EEAD4] bg-clip-text text-transparent">
                  Your journey.
                </span>
                {/* Subtle organic curve underline */}
                <svg
                  className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-2 text-ocean/30 dark:text-[#83B5CC]/40"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 6 Q 50 0, 100 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            {/* Supportive, Dignified Narrative */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-lg text-stone dark:text-[#BDCBD2] max-w-2xl leading-relaxed"
            >
              A supportive, technique-driven practice companion for people who stammer or navigate articulation differences. Designed around your personal communication goals, physical ease, and optional collaboration with qualified Speech-Language Therapists.
            </motion.p>

            {/* Impactful Primary Action Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1 sm:pt-2"
            >
              <Link href="/signup" className="group">
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2.5 px-8 shadow-elevated bg-gradient-to-r from-ocean to-[#264A5E] hover:from-[#264A5E] hover:to-[#1E3B4B] dark:from-[#83B5CC] dark:to-[#6C9DB3] dark:text-[#111D25] text-white font-semibold text-base transition-all duration-200"
                >
                  <span>Explore VocalRise</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-6 gap-2 text-midnight dark:text-white border-[#A9C4D1] dark:border-[#304653] hover:bg-mist/60 dark:hover:bg-midnight-surface font-medium"
                >
                  <Play className="h-3.5 w-3.5 text-ocean dark:text-[#83B5CC]" aria-hidden="true" />
                  <span>See How It Works</span>
                </Button>
              </Link>
            </motion.div>

            {/* Clinician Portal Anchor Link */}
            <motion.div variants={itemVariants} className="pt-0.5">
              <Link
                href="/therapist"
                className="inline-flex items-center gap-2 text-xs font-semibold text-ocean hover:text-ocean-hover dark:text-[#83B5CC] dark:hover:text-[#A7CEE0] transition-colors py-1 group"
              >
                <div className="h-5 w-5 rounded-md bg-ocean/10 dark:bg-[#83B5CC]/15 flex items-center justify-center text-ocean dark:text-[#83B5CC]">
                  <Stethoscope className="h-3 w-3" aria-hidden="true" />
                </div>
                <span>Are you a clinician? Explore the Therapist Portal Demo</span>
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
              </Link>
            </motion.div>

            {/* Reassurance Micro-Trust Markers */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-y-2.5 gap-x-5 sm:gap-x-6 pt-3 text-xs text-stone dark:text-[#BDCBD2] border-t border-[#D5E1E6]/80 dark:border-[#304653]/80"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#16766E] dark:text-[#2DD4BF] shrink-0" aria-hidden="true" />
                <span className="font-medium">No diagnostic pressure</span>
              </span>
              <span className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-[#16766E] dark:text-[#2DD4BF] shrink-0" aria-hidden="true" />
                <span className="font-medium">Private in-browser audio</span>
              </span>
              <span className="flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-[#A8533E] dark:text-[#D69A84] shrink-0" aria-hidden="true" />
                <span className="font-medium">Self-advocacy centred</span>
              </span>
            </motion.div>
          </motion.div>

          {/* =========================================================================
              RIGHT COLUMN: REALISTIC PRODUCT-INTERFACE COMPOSITION WITH FLOATING CARDS
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-5 relative mt-6 lg:mt-0">
            {/* Luminous Glow Backdrop */}
            <div
              className="absolute -inset-3 sm:-inset-6 bg-gradient-to-tr from-ocean/15 via-[#14B8A6]/10 to-terracotta/10 rounded-[36px] blur-2xl pointer-events-none opacity-90 dark:opacity-40"
              aria-hidden="true"
            />

            {/* -----------------------------------------------------------------------
                FLOATING CARD 1: CLINICIAN COLLABORATION & FEEDBACK NOTE (Top Right)
               ----------------------------------------------------------------------- */}
            <motion.div
              variants={floatingVariants1}
              animate="animate"
              className="absolute -top-6 -right-2 sm:-right-4 lg:-right-6 z-20 max-w-[230px] sm:max-w-[260px] hidden sm:block"
            >
              <div className="rounded-2xl border border-white/80 dark:border-[#304653]/90 bg-white/95 dark:bg-[#1A2833]/95 p-3.5 shadow-elevated backdrop-blur-xl space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-9 w-9 rounded-full bg-mist dark:bg-midnight flex items-center justify-center text-ocean dark:text-[#83B5CC] border border-[#D5E1E6] dark:border-[#304653] shrink-0">
                    <Stethoscope className="h-4 w-4" aria-hidden="true" />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#1A2833]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-midnight dark:text-white truncate">
                      Sarah Jenkins, SLT
                    </p>
                    <p className="text-[10px] text-stone dark:text-[#BDCBD2] flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-[#16766E] dark:text-[#2DD4BF]" aria-hidden="true" />
                      <span>RCSLT Specialist</span>
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-stone dark:text-[#BDCBD2] leading-snug italic bg-mist/50 dark:bg-midnight-deep/60 p-2 rounded-lg border border-[#E7EFF2] dark:border-[#243746]">
                  &ldquo;Remarkable soft onset ease on initial vowels today. Noticeably reduced jaw tension.&rdquo;
                </p>
                <div className="flex items-center justify-between text-[10px] text-stone dark:text-[#BDCBD2] pt-0.5">
                  <span className="inline-flex items-center gap-1 font-semibold text-ocean dark:text-[#83B5CC]">
                    <FileCheck2 className="h-3 w-3" aria-hidden="true" />
                    <span>Shared Clinical Review</span>
                  </span>
                  <span>10:45 AM</span>
                </div>
              </div>
            </motion.div>

            {/* -----------------------------------------------------------------------
                MAIN PRODUCT VIEWPORT WINDOW (SaaS Interface Preview)
               ----------------------------------------------------------------------- */}
            <div className="relative rounded-3xl border border-[#D5E1E6] dark:border-[#304653] bg-white/95 dark:bg-[#15232C]/95 backdrop-blur-xl shadow-elevated overflow-hidden">
              
              {/* Window Chrome / Browser Tab Bar */}
              <div className="px-4 py-3 bg-[#F0F5F7] dark:bg-[#1A2833] border-b border-[#D5E1E6] dark:border-[#304653] flex items-center justify-between gap-3">
                {/* Window Dots */}
                <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0] dark:bg-[#304653]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0] dark:bg-[#304653]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0] dark:bg-[#304653]" />
                </div>

                {/* Session Title Pill */}
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white dark:bg-midnight border border-[#D5E1E6] dark:border-[#304653] text-[11px] font-medium text-stone dark:text-[#BDCBD2] truncate">
                  <Waves className="h-3 w-3 text-ocean dark:text-[#83B5CC] shrink-0" aria-hidden="true" />
                  <span className="truncate">Practice Hub • Gentle Onset Drill</span>
                </div>

                {/* Live Drill Pulse */}
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#ECFDF5] dark:bg-[#064E3B]/50 border border-[#A7F3D0] dark:border-[#059669]/50 text-[10px] font-semibold text-[#16766E] dark:text-[#2DD4BF] shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse motion-reduce:animate-none" aria-hidden="true" />
                  <span>Active</span>
                </div>
              </div>

              {/* Window Body: Visual Speaker & Real-time Practice Surface */}
              <div className="p-4 sm:p-5 space-y-4">
                
                {/* Speaker Visual Frame with Ambient Ripple Overlay */}
                <div className="relative w-full h-[240px] sm:h-[280px] rounded-2xl overflow-hidden bg-gradient-to-br from-mist/70 via-porcelain to-white dark:from-midnight dark:via-midnight-surface dark:to-midnight-deep flex items-center justify-center border border-[#D5E1E6]/70 dark:border-[#304653]/70">
                  <Image
                    src="/images/hero/candid-speaker.svg"
                    alt="Speaker practicing gentle vocal onset techniques in a calm, supportive setting"
                    width={480}
                    height={380}
                    priority
                    className="w-full h-full object-contain p-2"
                  />

                  {/* Micro-Pill Overlay on Visual */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-midnight/90 border border-[#D5E1E6] dark:border-[#304653] backdrop-blur-md shadow-subtle flex items-center gap-1.5">
                    <Smile className="h-3.5 w-3.5 text-[#16766E] dark:text-[#2DD4BF]" aria-hidden="true" />
                    <span className="text-[10px] font-semibold text-midnight dark:text-white">Natural Pace</span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-midnight/80 dark:bg-midnight-deep/90 text-white backdrop-blur-md shadow-subtle flex items-center gap-1.5">
                    <Volume2 className="h-3.5 w-3.5 text-[#83B5CC]" aria-hidden="true" />
                    <span className="text-[10px] font-medium">Acoustic Feedback Ready</span>
                  </div>
                </div>

                {/* Real-time Waveform & Audio Practice Console */}
                <div className="rounded-2xl border border-[#D5E1E6] dark:border-[#304653] bg-[#F7F9F8] dark:bg-midnight-deep p-3.5 sm:p-4 space-y-3">
                  
                  {/* Drill Goal Header */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-lg bg-ocean/10 dark:bg-[#83B5CC]/15 text-ocean dark:text-[#83B5CC] flex items-center justify-center shrink-0">
                        <Mic className="h-3.5 w-3.5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-midnight dark:text-white">
                          Prolonged Vowel Sound & Soft Contact
                        </p>
                        <p className="text-[10px] text-stone dark:text-[#BDCBD2]">
                          Phase 1: Continuous voicing without laryngeal arrest
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-stone dark:text-[#BDCBD2] shrink-0">
                      01:42 / 03:00
                    </span>
                  </div>

                  {/* Waveform Bar Visualizer */}
                  <div
                    className="h-10 px-2 py-1.5 rounded-xl bg-white dark:bg-midnight border border-[#E7EFF2] dark:border-[#243746] flex items-center justify-between gap-1"
                    aria-label="Acoustic resonance waveform display"
                    role="img"
                  >
                    {waveformBars.map((height, i) => (
                      <div
                        key={i}
                        style={{ height: `${height}%` }}
                        className={`w-1 rounded-full transition-all duration-300 ${
                          i < 12
                            ? "bg-gradient-to-t from-ocean to-[#147B74] dark:from-[#83B5CC] dark:to-[#2DD4BF]"
                            : "bg-[#D5E1E6] dark:bg-[#304653]"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Interactive Control & Privacy Reassurance */}
                  <div className="flex items-center justify-between pt-0.5">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Practice microphone record trigger"
                        className="h-8 w-8 rounded-lg bg-[#A8533E] text-white flex items-center justify-center shadow-subtle hover:bg-[#8F4431] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8533E]"
                      >
                        <Mic className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <span className="text-[11px] font-medium text-midnight dark:text-white">
                        Recording in memory
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] font-medium text-[#16766E] dark:text-[#2DD4BF]">
                      <Lock className="h-3 w-3" aria-hidden="true" />
                      <span>Zero Audio Storage</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* -----------------------------------------------------------------------
                FLOATING CARD 2: TECHNIQUE CONSISTENCY METRIC (Bottom Left)
               ----------------------------------------------------------------------- */}
            <motion.div
              variants={floatingVariants2}
              animate="animate"
              className="absolute -bottom-6 -left-2 sm:-left-4 lg:-left-6 z-20 max-w-[240px] sm:max-w-[270px] hidden sm:block"
            >
              <div className="rounded-2xl border border-white/80 dark:border-[#304653]/90 bg-white/95 dark:bg-[#1A2833]/95 p-3.5 shadow-elevated backdrop-blur-xl space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-[#A8533E]" aria-hidden="true" />
                    <span className="text-xs font-bold text-midnight dark:text-white">
                      Technique Ease Metric
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-terracotta/15 text-[#9C5A48] dark:text-[#D69A84] text-[10px] font-semibold border border-terracotta/30">
                    Low Strain
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-2xl font-bold text-midnight dark:text-white">
                    88%
                  </span>
                  <span className="text-[11px] text-[#16766E] dark:text-[#2DD4BF] font-semibold">
                    Smooth Phonation
                  </span>
                </div>

                {/* Progress Mini Graph */}
                <div className="space-y-1">
                  <div className="h-2 w-full rounded-full bg-[#E7EFF2] dark:bg-midnight overflow-hidden flex">
                    <div className="h-full bg-gradient-to-r from-[#A8533E] via-ocean to-[#14B8A6] rounded-full" style={{ width: "88%" }} />
                  </div>
                  <p className="text-[10px] text-stone dark:text-[#BDCBD2]">
                    *Illustrative practice feedback metric
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
