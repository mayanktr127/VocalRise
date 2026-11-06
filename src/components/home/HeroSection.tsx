"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  Lock,
  Target,
  Stethoscope,
  Smile,
  Mic,
  Sparkles,
  ChevronLeft,
  ChevronRight,
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

  // Monitor tab visibility to pause autoplay when backgrounded
  React.useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Autoplay timer: 5.5-second interval
  // Pauses on hover, keyboard focus, background tab, or prefers-reduced-motion
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

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  // Coordinated Entrance Animation Variants (Heading, Badges, CTAs)
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

  const carouselEntranceVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20, scale: shouldReduceMotion ? 1 : 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.48, ease: [0.21, 0.47, 0.32, 0.98] },
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
      className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 bg-[#F7F5F0] dark:bg-[#0A1820] text-[#122129] dark:text-[#F4F7F5] transition-colors"
      aria-label="VocalRise Hero Introduction"
    >
      {/* =========================================================================
          BACKGROUND ATMOSPHERE: Symmetrical Bilateral Ambient Halos
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Left Flank Ambient Halo: Sea Glass */}
        <div className="absolute top-1/4 -left-20 sm:-left-32 w-[550px] sm:w-[700px] h-[550px] sm:h-[650px] bg-gradient-to-br from-[#DCEFEA]/60 via-[#EBF6F3]/30 to-transparent dark:from-[#132630]/70 dark:via-[#1A3845]/40 dark:to-transparent rounded-full blur-3xl opacity-80" />

        {/* Right Flank Ambient Halo: Ocean Teal & Luminous Mint */}
        <div className="absolute top-1/4 -right-20 sm:-right-32 w-[550px] sm:w-[700px] h-[550px] sm:h-[650px] bg-gradient-to-bl from-[#176B68]/12 via-[#38B2A3]/8 to-[#E26D50]/5 dark:from-[#38B2A3]/16 dark:via-[#176B68]/14 dark:to-transparent rounded-full blur-3xl opacity-80" />

        {/* Subtle Center Wash */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-transparent via-white/40 to-transparent dark:via-white/[0.02] rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-7 sm:space-y-8">
        {/* =========================================================================
            1. EYEBROW BADGE (Stationary)
           ========================================================================= */}
        <motion.div
          variants={badgeVariants}
          initial={false}
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
            2. LARGE CENTERED DISPLAY HEADLINE (Stationary)
           ========================================================================= */}
        <motion.h1
          variants={headingVariants}
          initial={false}
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
            3. SUPPORTING EDITORIAL PARAGRAPH (Stationary)
           ========================================================================= */}
        <motion.p
          variants={descriptionVariants}
          initial={false}
          animate="visible"
          className="text-base sm:text-lg lg:text-xl text-[#4C5E67] dark:text-[#BDCBD2] max-w-2xl mx-auto leading-relaxed"
        >
          Explore communication practice at your own pace, work towards the goals that matter to you, and find supportive guidance when you need it.
        </motion.p>

        {/* =========================================================================
            4. CENTERED CALL-TO-ACTION BUTTONS (Stationary)
           ========================================================================= */}
        <motion.div
          variants={ctaVariants}
          initial={false}
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1"
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
            5. EDITORIAL PHOTOGRAPHY CAROUSEL WITH SUBTLE SOUND-WAVE ACCENT
           ========================================================================= */}
        <motion.div
          variants={carouselEntranceVariants}
          initial={false}
          animate="visible"
          className="pt-2 sm:pt-4 relative max-w-[960px] mx-auto w-full"
        >
          {/* Subtle Decorative Accent: Delicate Flowing Sound-Wave Horizon */}
          <div
            className="w-full max-w-3xl mx-auto h-8 sm:h-10 overflow-hidden opacity-60 dark:opacity-40 select-none pointer-events-none -mb-2 sm:-mb-3 relative z-0"
            aria-hidden="true"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 960 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="heroWaveAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#176B68" stopOpacity="0" />
                  <stop offset="25%" stopColor="#DCEFEA" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#176B68" stopOpacity="0.75" />
                  <stop offset="75%" stopColor="#38B2A3" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#E26D50" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 20 45 C 160 15, 260 75, 380 45 C 500 15, 600 75, 720 45 C 820 20, 880 60, 940 45"
                stroke="url(#heroWaveAccentGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 50 45 C 170 70, 270 20, 390 45 C 510 70, 610 20, 730 45 C 830 65, 890 30, 910 45"
                stroke="#38B2A3"
                strokeWidth="1.25"
                strokeOpacity="0.4"
                strokeDasharray="4 6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Luminous Ambient Glow Backdrop */}
          <div
            className="absolute -inset-3 sm:-inset-5 bg-gradient-to-tr from-[#176B68]/15 via-[#38B2A3]/10 to-[#E26D50]/8 dark:from-[#38B2A3]/20 dark:via-[#176B68]/15 dark:to-transparent rounded-3xl sm:rounded-[36px] blur-2xl pointer-events-none opacity-80"
            aria-hidden="true"
          />

          {/* Photographic Carousel Card Shell */}
          <div
            className="relative w-full h-[260px] sm:h-[350px] md:h-[400px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#102B3A] border border-[#BFDFD6]/80 dark:border-[#203A48] group select-none shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] dark:focus-visible:ring-[#38B2A3]"
            role="region"
            aria-roledescription="carousel"
            aria-label="VocalRise human connection and practice photography"
            aria-live="off"
            onMouseEnter={() => setIsHoveredOrFocused(true)}
            onMouseLeave={() => setIsHoveredOrFocused(false)}
            onFocusCapture={() => setIsHoveredOrFocused(true)}
            onBlurCapture={() => setIsHoveredOrFocused(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Crossfading Slide Photos (800ms Crossfade) */}
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
                transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeInOut" }}
              >
                <Image
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
                  priority={currentSlide === 0}
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>

            {/* Scrim Gradient for Readability and Depth */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35 pointer-events-none"
              aria-hidden="true"
            />

            {/* Top Overlay Badges */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-2 pointer-events-none z-10">
              <div className="px-3 py-1 rounded-full bg-[#102B3A]/85 dark:bg-[#0A1820]/90 text-white border border-white/20 backdrop-blur-md shadow-subtle flex items-center gap-1.5 pointer-events-auto">
                <CurrentSlideIcon className="h-3.5 w-3.5 text-[#DCEFEA]" aria-hidden="true" />
                <span className="text-[11px] font-semibold tracking-wide">
                  {activeSlide.badge}
                </span>
              </div>

              <div className="px-3 py-1 rounded-full bg-white/90 dark:bg-[#102B3A]/90 text-[#102B3A] dark:text-white border border-[#D5E1E6] dark:border-[#203A48] backdrop-blur-md shadow-subtle flex items-center gap-1.5 pointer-events-auto">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#176B68] dark:bg-[#38B2A3] animate-pulse motion-reduce:animate-none"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-medium">
                  {activeSlide.theme}
                </span>
              </div>
            </div>

            {/* Bottom Caption and Accessible Navigation Strip */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 z-10">
              <p className="text-xs sm:text-sm font-medium text-white/95 drop-shadow-md truncate max-w-full sm:max-w-[60%] text-left">
                {activeSlide.alt}
              </p>

              <div
                className="flex items-center gap-1.5 bg-[#102B3A]/85 dark:bg-[#0A1820]/90 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-1 shadow-subtle shrink-0 self-end sm:self-auto"
                role="tablist"
                aria-label="Hero photography slides"
              >
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous photograph"
                  className="h-6 w-6 sm:h-7 sm:w-7 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCEFEA] transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
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
                      aria-label={`Go to slide ${idx + 1}: ${slide.badge}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(idx);
                      }}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCEFEA] focus-visible:ring-offset-1 focus-visible:ring-offset-[#102B3A]",
                        isCurrent
                          ? "w-6 bg-white shadow-sm"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      )}
                    />
                  );
                })}

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next photograph"
                  className="h-6 w-6 sm:h-7 sm:w-7 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCEFEA] transition-colors"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            6. SUBTLE RESTRAINED TRUST STRIP (Stationary)
           ========================================================================= */}
        <motion.div
          variants={trustStripVariants}
          initial={false}
          animate="visible"
          className="pt-6 sm:pt-8 border-t border-[#D5E1E6]/70 dark:border-[#203A48] max-w-3xl mx-auto"
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
