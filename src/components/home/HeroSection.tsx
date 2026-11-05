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
  Smile,
  ChevronLeft,
  ChevronRight,
  Target,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// 4 Photographic Carousel Slides Representing Authentic Human Connection
// Sourced with commercial-use licensing; attributions recorded in:
// docs/superpowers/specs/hero-photography-attributions.md
// ---------------------------------------------------------------------------
const heroSlides = [
  {
    id: "conversation",
    src: "/images/hero/carousel-1-conversation.webp",
    alt: "Two adults engaged in natural, relaxed everyday conversation in a warmly lit setting",
    badge: "Everyday Connection",
    theme: "Natural Communication",
    icon: Smile,
  },
  {
    id: "practice",
    src: "/images/hero/carousel-2-practice.webp",
    alt: "Individual practicing speech techniques independently in a calm personal space",
    badge: "Independent Practice",
    theme: "Self-Paced Techniques",
    icon: Mic,
  },
  {
    id: "social",
    src: "/images/hero/carousel-3-social.webp",
    alt: "Diverse adults communicating comfortably and connecting in a positive social gathering",
    badge: "Social Confidence",
    theme: "Ease Without Avoidance",
    icon: Sparkles,
  },
  {
    id: "therapist",
    src: "/images/hero/carousel-4-therapist.webp",
    alt: "Speech-Language Therapist consulting supportively with a client in a modern clinic setting",
    badge: "Clinical Collaboration",
    theme: "Optional SLT Guidance",
    icon: Stethoscope,
  },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // Carousel State & Interactivity Controls
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isHoveredOrFocused, setIsHoveredOrFocused] = React.useState(false);
  const [isTabVisible, setIsTabVisible] = React.useState(true);

  // Monitor tab visibility to prevent background timer execution
  React.useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Autoplay timer: advances every 5.5s; pauses on hover, keyboard focus, background tab, or reduced motion
  React.useEffect(() => {
    if (shouldReduceMotion || isHoveredOrFocused || !isTabVisible) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => {
      clearInterval(timer);
    };
  }, [shouldReduceMotion, isHoveredOrFocused, isTabVisible]);

  const activeSlide = heroSlides[currentSlide];
  const CurrentSlideIcon = activeSlide.icon;

  // Waveform bars data for the simulated practice visualizer
  const waveformBars = [
    14, 26, 38, 48, 62, 54, 40, 28, 44, 58, 64, 50, 36, 48, 60, 42, 30, 22, 16, 10
  ];

  // Coordinated Hero Entrance Variants
  const labelVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.05, ease: "easeOut" },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.16, ease: [0.21, 0.47, 0.32, 0.98] },
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

  const trustStatementVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  const clinicianLinkVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : 0.58, ease: "easeOut" },
    },
  };

  // Right column visual container entrance (slides smoothly from right)
  const heroVisualVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: shouldReduceMotion ? 0 : 28,
      scale: shouldReduceMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : 0.24,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  // Staggered floating cards entrance + gentle float loop
  const floatingCard1Variants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : -16,
      scale: shouldReduceMotion ? 1 : 0.94,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : 0.62,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const floatingCard2Variants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 16,
      scale: shouldReduceMotion ? 1 : 0.94,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : 0.76,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const trustStripVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : 0.68,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 bg-[#F7F5F0] dark:bg-[#0A1820] text-[#122129] dark:text-[#F4F7F5] transition-colors">
      {/* =========================================================================
          BACKGROUND ATMOSPHERE: Warm Porcelain, Sea Glass Wash & Targeted Teal Glow
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Broad Sea Glass Wash across lower hero */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[1400px] h-[520px] bg-gradient-to-t from-[#DCEFEA]/45 via-[#EBF6F3]/25 to-transparent dark:from-[#132630]/65 dark:via-[#0F1E27]/35 dark:to-transparent rounded-[100%] blur-3xl opacity-80" />

        {/* Targeted Teal & Soft Coral Radial Ambient Glow specifically behind right visual */}
        <div className="absolute top-1/4 right-0 lg:right-[4%] w-[640px] h-[520px] bg-gradient-to-br from-[#176B68]/12 via-[#38B2A3]/8 to-[#E26D50]/5 dark:from-[#38B2A3]/18 dark:via-[#176B68]/15 dark:to-transparent rounded-full blur-3xl opacity-90" />

        {/* Delicate architectural curved contour */}
        <svg
          className="absolute top-0 right-0 w-[900px] h-[700px] text-[#102B3A] dark:text-[#38B2A3] opacity-[0.03] dark:opacity-[0.045] pointer-events-none"
          viewBox="0 0 900 700"
          fill="none"
        >
          <path
            d="M900 0 C 650 150, 400 400, 300 700"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <path
            d="M900 120 C 700 240, 500 480, 420 700"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="680" cy="220" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="6 10" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: EDITORIAL NARRATIVE & IMPACTFUL ACTIONS
             ========================================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* 1. Small Eyebrow Label: Fades in */}
            <motion.div
              variants={labelVariants}
              initial="hidden"
              animate="visible"
              className="flex"
            >
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#BFDFD6] dark:border-[#203A48] bg-[#DCEFEA]/90 dark:bg-[#1A3845]/90 px-4 py-1.5 text-xs font-medium text-[#102B3A] dark:text-[#E2E8F0] shadow-subtle backdrop-blur-md">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#176B68] dark:bg-[#38B2A3] opacity-75 motion-reduce:hidden" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#176B68] dark:bg-[#38B2A3]" />
                </span>
                <span className="font-semibold text-[#102B3A] dark:text-[#F4F7F5]">VocalRise</span>
                <span className="text-[#89A6B2] dark:text-[#456170]" aria-hidden="true">•</span>
                <span>Supportive Speech Practice Platform</span>
              </div>
            </motion.div>

            {/* 2. Main Heading: Slides up and fades in */}
            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              className="font-heading text-4xl sm:text-5xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-tight text-[#102B3A] dark:text-white leading-[1.1] sm:leading-[1.08]"
            >
              Your voice. Your pace.{" "}
              <span className="relative inline-block mt-1 sm:mt-0">
                <span className="bg-gradient-to-r from-[#102B3A] via-[#176B68] to-[#208A86] dark:from-[#F4F7F5] dark:via-[#72C4B4] dark:to-[#38B2A3] bg-clip-text text-transparent">
                  Your journey.
                </span>
                <svg
                  className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-2 text-[#176B68]/35 dark:text-[#38B2A3]/50"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 6 Q 50 0, 100 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            {/* 3. Supportive Lead Description */}
            <motion.p
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg lg:text-[1.125rem] text-[#4C5E67] dark:text-[#BDCBD2] max-w-2xl leading-relaxed"
            >
              A calm, technique-driven practice companion for adults who stammer or navigate articulation differences. Built around your personal communication goals, physical ease, and optional collaboration with your speech therapist.
            </motion.p>

            {/* 4. Primary & Secondary CTA Buttons */}
            <motion.div
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1 sm:pt-2"
            >
              <Link href="/signup" className="group">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-2.5 px-8 shadow-elevated bg-[#176B68] hover:bg-[#115250] text-white dark:bg-[#38B2A3] dark:hover:bg-[#2DA294] dark:text-[#0A1820] font-semibold text-base transition-all duration-200"
                  >
                    <span>Explore Practice Tracks</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/how-it-works">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto px-6 gap-2 text-[#102B3A] dark:text-white border-[#B2CDC8] dark:border-[#203A48] hover:bg-[#DCEFEA]/40 dark:hover:bg-[#132630] font-medium"
                  >
                    <Play className="h-3.5 w-3.5 text-[#176B68] dark:text-[#38B2A3]" aria-hidden="true" />
                    <span>See How It Works</span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* 5. Small Trust Statement beneath CTAs */}
            <motion.div
              variants={trustStatementVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-5 text-xs text-[#4C5E67] dark:text-[#BDCBD2] pt-1"
            >
              <span className="flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-[#176B68] dark:text-[#38B2A3] shrink-0" aria-hidden="true" />
                <span className="font-medium">In-browser audio processing</span>
              </span>
              <span className="text-[#BFDFD6] dark:text-[#203A48]" aria-hidden="true">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#176B68] dark:text-[#38B2A3] shrink-0" aria-hidden="true" />
                <span className="font-medium">No diagnostic pressure</span>
              </span>
              <span className="text-[#BFDFD6] dark:text-[#203A48]" aria-hidden="true">•</span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="h-3.5 w-3.5 text-[#D15436] dark:text-[#F08C73] shrink-0" aria-hidden="true" />
                <span className="font-medium">Self-advocacy focused</span>
              </span>
            </motion.div>

            {/* 6. Clinician Portal Invitation Link */}
            <motion.div
              variants={clinicianLinkVariants}
              initial="hidden"
              animate="visible"
              className="pt-0.5 sm:pt-1"
            >
              <Link
                href="/therapist"
                className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#176B68] hover:text-[#115250] dark:text-[#72C4B4] dark:hover:text-[#A7CEE0] transition-colors py-1 group"
              >
                <div className="h-6 w-6 rounded-md bg-[#DCEFEA] dark:bg-[#1A3845] flex items-center justify-center text-[#176B68] dark:text-[#38B2A3] shrink-0 border border-[#BFDFD6] dark:border-[#203A48]">
                  <Stethoscope className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
                <span>Are you a speech professional? Explore the Clinician Portal Demo</span>
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </Link>
            </motion.div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: BESPOKE VOCALRISE STUDIO CONSOLE WITH INTEGRATED CAROUSEL
             ========================================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 relative mt-8 lg:mt-0">
            {/* Luminous Glow Backdrop */}
            <div
              className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-[#176B68]/12 via-[#38B2A3]/10 to-[#E26D50]/5 dark:from-[#38B2A3]/20 dark:via-[#176B68]/20 dark:to-transparent rounded-[40px] blur-3xl pointer-events-none opacity-90 dark:opacity-50"
              aria-hidden="true"
            />

            {/* -----------------------------------------------------------------------
                FLOATING CARD 1: CLINICIAN BRIDGE (Docked Companion Preview)
               ----------------------------------------------------------------------- */}
            <motion.div
              variants={floatingCard1Variants}
              initial="hidden"
              animate="visible"
              className="absolute -top-5 -right-2 sm:-right-4 lg:-right-5 z-20 max-w-[230px] sm:max-w-[250px] hidden sm:block"
            >
              <motion.div
                animate={shouldReduceMotion ? { y: 0 } : { y: [0, -4, 0] }}
                transition={
                  shouldReduceMotion
                    ? {}
                    : { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.1 }
                }
                whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.02 }}
                className="rounded-2xl border border-white/90 dark:border-[#203A48] bg-white/95 dark:bg-[#132630]/95 p-3 shadow-elevated backdrop-blur-xl space-y-1.5 cursor-default transition-shadow"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#DCEFEA] dark:bg-[#1A3845] flex items-center justify-center text-[#176B68] dark:text-[#38B2A3] border border-[#BFDFD6] dark:border-[#203A48] shrink-0">
                    <Stethoscope className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#102B3A] dark:text-white truncate">
                      Clinician Bridge
                    </p>
                    <p className="text-[10px] text-[#4C5E67] dark:text-[#BDCBD2] flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-[#176B68] dark:text-[#38B2A3]" aria-hidden="true" />
                      <span>Optional SLT Notes</span>
                    </p>
                  </div>
                </div>
                <p className="text-[10px] text-[#4C5E67] dark:text-[#BDCBD2] leading-tight bg-[#F7F9F8] dark:bg-[#0E1A22] p-2 rounded-lg border border-[#E7EFF2] dark:border-[#203A48]">
                  Share select practice drills with your qualified clinician for review between sessions.
                </p>
                <div className="flex items-center justify-between text-[9px] text-[#4C5E67] dark:text-[#BDCBD2] pt-0.5">
                  <span className="font-semibold text-[#176B68] dark:text-[#38B2A3]">Client-Controlled</span>
                  <span className="italic">*Prototype preview</span>
                </div>
              </motion.div>
            </motion.div>

            {/* -----------------------------------------------------------------------
                MAIN PRODUCT VIEWPORT: Bespoke Studio Console
               ----------------------------------------------------------------------- */}
            <motion.div
              variants={heroVisualVariants}
              initial="hidden"
              animate="visible"
              className="relative rounded-3xl border border-[#D5E1E6] dark:border-[#203A48] bg-white/95 dark:bg-[#132630]/95 backdrop-blur-xl shadow-elevated overflow-hidden"
            >
              {/* Studio Console Top Bar */}
              <div className="px-4 py-3 bg-[#EEF4F6] dark:bg-[#162732] border-b border-[#D5E1E6] dark:border-[#203A48] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="h-6 w-6 rounded-lg bg-[#176B68] text-white flex items-center justify-center shadow-subtle">
                    <Waves className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold tracking-tight text-[#102B3A] dark:text-white leading-tight">
                      VocalRise Studio
                    </span>
                    <span className="text-[9px] font-medium text-[#4C5E67] dark:text-[#BDCBD2]">
                      Gentle Onset Warmup Drill
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DCEFEA] dark:bg-[#1A3845] border border-[#BFDFD6] dark:border-[#203A48] text-[10px] font-semibold text-[#102B3A] dark:text-[#72C4B4] shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#176B68] dark:bg-[#38B2A3] animate-pulse motion-reduce:animate-none" aria-hidden="true" />
                  <span>Interactive Preview</span>
                </div>
              </div>

              {/* Console Body: Photographic Carousel & Real-time Practice Surface */}
              <div className="p-3.5 sm:p-4.5 space-y-3.5">
                
                {/* Photographic Hero Carousel Representing Human Connection & Practice */}
                <div
                  className="relative w-full h-[240px] sm:h-[280px] rounded-2xl overflow-hidden bg-[#102B3A] border border-[#D5E1E6]/80 dark:border-[#203A48] group select-none shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68]"
                  role="region"
                  aria-roledescription="carousel"
                  aria-label="VocalRise human connection and practice photography carousel"
                  onMouseEnter={() => setIsHoveredOrFocused(true)}
                  onMouseLeave={() => setIsHoveredOrFocused(false)}
                  onFocusCapture={() => setIsHoveredOrFocused(true)}
                  onBlurCapture={() => setIsHoveredOrFocused(false)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowLeft") {
                      e.preventDefault();
                      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
                    } else if (e.key === "ArrowRight") {
                      e.preventDefault();
                      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
                    }
                  }}
                  tabIndex={0}
                >
                  {/* Crossfading Slide Photos via AnimatePresence */}
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={currentSlide}
                      id={`hero-slide-panel-${currentSlide}`}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Slide ${currentSlide + 1} of ${heroSlides.length}: ${activeSlide.badge}`}
                      className="absolute inset-0 w-full h-full"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeInOut" }}
                    >
                      <Image
                        src={activeSlide.src}
                        alt={activeSlide.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 540px"
                        priority={currentSlide === 0}
                        className="object-cover object-center"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Gradient Scrim for Top/Bottom Badge Contrast */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none z-10">
                    <div className="px-2.5 py-1 rounded-lg bg-[#102B3A]/85 dark:bg-[#0A1820]/90 text-white border border-white/20 backdrop-blur-md shadow-subtle flex items-center gap-1.5 pointer-events-auto">
                      <CurrentSlideIcon className="h-3.5 w-3.5 text-[#DCEFEA]" aria-hidden="true" />
                      <span className="text-[10px] font-semibold tracking-wide">
                        {activeSlide.badge}
                      </span>
                    </div>

                    <div className="px-2.5 py-1 rounded-lg bg-white/90 dark:bg-[#102B3A]/90 text-[#102B3A] dark:text-white border border-[#D5E1E6] dark:border-[#203A48] backdrop-blur-md shadow-subtle flex items-center gap-1.5 pointer-events-auto">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-[#176B68] dark:bg-[#38B2A3] animate-pulse motion-reduce:animate-none"
                        aria-hidden="true"
                      />
                      <span className="text-[10px] font-medium">
                        {activeSlide.theme}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Navigation & Accessible Indicator Controls */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <p className="text-[11px] font-medium text-white/95 drop-shadow-sm truncate max-w-[50%] sm:max-w-[62%]">
                      {activeSlide.alt}
                    </p>

                    <div
                      className="flex items-center gap-1.5 bg-[#102B3A]/85 dark:bg-[#0A1820]/90 backdrop-blur-md border border-white/20 rounded-full px-2 py-1 shadow-subtle shrink-0"
                      role="tablist"
                      aria-label="Photography carousel slides"
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
                        }}
                        aria-label="Previous photograph"
                        className="h-5 w-5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCEFEA] transition-colors"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>

                      {heroSlides.map((slide, idx) => {
                        const isCurrent = currentSlide === idx;
                        return (
                          <button
                            key={slide.id}
                            type="button"
                            role="tab"
                            id={`hero-slide-tab-${idx}`}
                            aria-selected={isCurrent}
                            aria-controls={`hero-slide-panel-${idx}`}
                            aria-label={`Slide ${idx + 1} of ${heroSlides.length}: ${slide.badge}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentSlide(idx);
                            }}
                            className={cn(
                              "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCEFEA] focus-visible:ring-offset-1 focus-visible:ring-offset-[#102B3A]",
                              isCurrent
                                ? "w-5 bg-white shadow-sm"
                                : "w-2 bg-white/40 hover:bg-white/70"
                            )}
                          />
                        );
                      })}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
                        }}
                        aria-label="Next photograph"
                        className="h-5 w-5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCEFEA] transition-colors"
                      >
                        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Real-time Waveform & Audio Practice Surface (Prototype Preview) */}
                <div className="rounded-2xl border border-[#D5E1E6] dark:border-[#203A48] bg-[#F7F9F8] dark:bg-[#0E1A22] p-3 sm:p-3.5 space-y-2.5">
                  
                  {/* Drill Goal Header */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="h-7 w-7 rounded-lg bg-[#DCEFEA] dark:bg-[#1A3845] text-[#176B68] dark:text-[#38B2A3] flex items-center justify-center shrink-0 border border-[#BFDFD6] dark:border-[#203A48]">
                        <Mic className="h-3.5 w-3.5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 truncate">
                        <p className="text-xs font-bold text-[#102B3A] dark:text-white truncate">
                          Continuous Phonation Warmup
                        </p>
                        <p className="text-[10px] text-[#4C5E67] dark:text-[#BDCBD2] truncate">
                          Drill preview: Vocal tract ease &amp; soft onset
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-[#4C5E67] dark:text-[#BDCBD2] shrink-0">
                      01:42 / 03:00
                    </span>
                  </div>

                  {/* Waveform Bar Visualizer (Animated height on entrance) */}
                  <div
                    className="h-9 px-2 py-1 rounded-xl bg-white dark:bg-[#132630] border border-[#E7EFF2] dark:border-[#203A48] flex items-center justify-between gap-1"
                    aria-label="Simulated acoustic resonance waveform display"
                    role="img"
                  >
                    {waveformBars.map((height, i) => (
                      <motion.div
                        key={i}
                        initial={shouldReduceMotion ? { height: `${height}%` } : { height: "15%" }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.5,
                          delay: shouldReduceMotion ? 0 : 0.45 + i * 0.02,
                          ease: "easeOut",
                        }}
                        className={`w-1 rounded-full ${
                          i < 12
                            ? "bg-gradient-to-t from-[#176B68] to-[#38B2A3] dark:from-[#38B2A3] dark:to-[#72C4B4]"
                            : "bg-[#D5E1E6] dark:bg-[#203A48]"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Interactive Control & Privacy Reassurance */}
                  <div className="flex items-center justify-between pt-0.5">
                    <div className="flex items-center gap-2">
                      <motion.button
                        type="button"
                        whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
                        aria-label="Practice microphone record trigger preview"
                        className="h-8 w-8 rounded-lg bg-[#D15436] text-white flex items-center justify-center shadow-subtle hover:bg-[#B84328] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D15436]"
                      >
                        <Mic className="h-4 w-4" aria-hidden="true" />
                      </motion.button>
                      <span className="text-[11px] font-medium text-[#102B3A] dark:text-white">
                        In-memory audio preview
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] font-medium text-[#176B68] dark:text-[#38B2A3]">
                      <Lock className="h-3 w-3" aria-hidden="true" />
                      <span>Local Browser Memory</span>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>

            {/* -----------------------------------------------------------------------
                FLOATING CARD 2: TODAY'S PRACTICE SESSION (Illustrative Routine Preview)
               ----------------------------------------------------------------------- */}
            <motion.div
              variants={floatingCard2Variants}
              initial="hidden"
              animate="visible"
              className="absolute -bottom-5 -left-2 sm:-left-4 lg:-left-5 z-20 max-w-[240px] sm:max-w-[260px] hidden sm:block"
            >
              <motion.div
                animate={shouldReduceMotion ? { y: 0 } : { y: [0, 4, 0] }}
                transition={
                  shouldReduceMotion
                    ? {}
                    : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
                }
                whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.02 }}
                className="rounded-2xl border border-white/90 dark:border-[#203A48] bg-white/95 dark:bg-[#132630]/95 p-3 shadow-elevated backdrop-blur-xl space-y-1.5 cursor-default transition-shadow"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <Target className="h-4 w-4 text-[#176B68] dark:text-[#38B2A3]" aria-hidden="true" />
                    <span className="text-xs font-bold text-[#102B3A] dark:text-white">
                      Personal Goal
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#DCEFEA] dark:bg-[#1A3845] text-[#102B3A] dark:text-[#72C4B4] text-[9px] font-semibold border border-[#BFDFD6] dark:border-[#203A48]">
                    Self-Paced
                  </span>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-bold text-[#102B3A] dark:text-white">
                      2 of 3 Drills Complete
                    </span>
                    <span className="text-[10px] font-semibold text-[#176B68] dark:text-[#38B2A3]">
                      Calm Pace
                    </span>
                  </div>
                  <p className="text-[10px] text-[#4C5E67] dark:text-[#BDCBD2]">
                    Technique: Prolonged vowels &amp; light contact
                  </p>
                </div>

                <div className="space-y-1 pt-0.5">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <div className="h-1.5 flex-1 rounded-full bg-[#176B68] dark:bg-[#38B2A3]" />
                    <div className="h-1.5 flex-1 rounded-full bg-[#176B68] dark:bg-[#38B2A3]" />
                    <div className="h-1.5 flex-1 rounded-full bg-[#E7EFF2] dark:bg-[#203A48]" />
                  </div>
                  <p className="text-[9px] text-[#4C5E67] dark:text-[#BDCBD2]">
                    *Illustrative personal practice goal
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile-Only Status Tray (cleanly stacked below console without overflow or occlusion) */}
            <div className="grid grid-cols-2 gap-2.5 pt-3 sm:hidden">
              <div className="p-2.5 rounded-xl border border-[#D5E1E6] dark:border-[#203A48] bg-white dark:bg-[#132630] space-y-1">
                <div className="flex items-center gap-1.5">
                  <Stethoscope className="h-3.5 w-3.5 text-[#176B68] dark:text-[#38B2A3]" aria-hidden="true" />
                  <span className="text-[11px] font-semibold text-[#102B3A] dark:text-white">SLT Bridge</span>
                </div>
                <p className="text-[10px] text-[#4C5E67] dark:text-[#BDCBD2]">
                  Optional clinician collaboration preview
                </p>
              </div>

              <div className="p-2.5 rounded-xl border border-[#D5E1E6] dark:border-[#203A48] bg-white dark:bg-[#132630] space-y-1">
                <div className="flex items-center gap-1.5">
                  <Target className="h-3.5 w-3.5 text-[#176B68] dark:text-[#38B2A3]" aria-hidden="true" />
                  <span className="text-[11px] font-semibold text-[#102B3A] dark:text-white">Self-Paced</span>
                </div>
                <p className="text-[10px] text-[#4C5E67] dark:text-[#BDCBD2]">
                  Personal practice drills at your comfort
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            INTEGRATED ARCHITECTURAL TRUST STRIP (Hero Grounding Pedestal)
           ========================================================================= */}
        <motion.div
          variants={trustStripVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 sm:mt-16 lg:mt-20 pt-8 border-t border-[#D5E1E6]/80 dark:border-[#203A48]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Principle 1: Private in Memory */}
            <div className="flex items-start gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-[#DCEFEA] dark:bg-[#1A3845] text-[#176B68] dark:text-[#38B2A3] flex items-center justify-center shrink-0 border border-[#BFDFD6] dark:border-[#203A48]">
                <Lock className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-[#102B3A] dark:text-white">
                  Private by Design (Prototype)
                </h3>
                <p className="text-xs text-[#4C5E67] dark:text-[#BDCBD2] leading-relaxed">
                  Practice audio runs in local browser memory. Zero voice recordings are stored on servers in this preview.
                </p>
              </div>
            </div>

            {/* Principle 2: Practice at Your Own Pace */}
            <div className="flex items-start gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-[#DCEFEA] dark:bg-[#1A3845] text-[#176B68] dark:text-[#38B2A3] flex items-center justify-center shrink-0 border border-[#BFDFD6] dark:border-[#203A48]">
                <HeartHandshake className="h-5 w-5 text-[#D15436] dark:text-[#F08C73]" aria-hidden="true" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-[#102B3A] dark:text-white">
                  Practice at Your Own Pace
                </h3>
                <p className="text-xs text-[#4C5E67] dark:text-[#BDCBD2] leading-relaxed">
                  Technique practice shaped by physical ease and your speaking situations, never rigid mechanical scores.
                </p>
              </div>
            </div>

            {/* Principle 3: Optional Clinician Collaboration */}
            <div className="flex items-start gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-[#DCEFEA] dark:bg-[#1A3845] text-[#176B68] dark:text-[#38B2A3] flex items-center justify-center shrink-0 border border-[#BFDFD6] dark:border-[#203A48]">
                <Stethoscope className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-[#102B3A] dark:text-white">
                  Optional Clinician Collaboration
                </h3>
                <p className="text-xs text-[#4C5E67] dark:text-[#BDCBD2] leading-relaxed">
                  Share select drill summaries with your qualified speech-language therapist whenever you choose.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
