"use client";

import * as React from "react";
import Image from "next/image";
import {
  Waves,
  Stethoscope,
  Mic,
  Lock,
  Sparkles,
  CheckCircle2,
  Smile,
  ChevronLeft,
  ChevronRight,
  Target,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// 4 Photographic Carousel Slides Representing Authentic Human Connection
// Sourced with commercial-use licensing; attributions recorded in:
// docs/superpowers/specs/hero-photography-attributions.md
// ---------------------------------------------------------------------------
const studioSlides = [
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

export function StudioShowcaseSection() {
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
      setCurrentSlide((prev) => (prev + 1) % studioSlides.length);
    }, 5500);

    return () => {
      clearInterval(timer);
    };
  }, [shouldReduceMotion, isHoveredOrFocused, isTabVisible]);

  const activeSlide = studioSlides[currentSlide];
  const CurrentSlideIcon = activeSlide.icon;

  // Waveform bars data for the simulated practice visualizer
  const waveformBars = [
    14, 26, 38, 48, 62, 54, 40, 28, 44, 58, 64, 50, 36, 48, 60, 42, 30, 22, 16, 10
  ];

  // Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

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
        delay: shouldReduceMotion ? 0 : 0.3,
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
        delay: shouldReduceMotion ? 0 : 0.45,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section
      id="studio-showcase"
      className="scroll-mt-16 py-20 sm:py-28 bg-[#F7F9F8] dark:bg-[#0E1A22] border-t border-[#D5E1E6]/80 dark:border-[#203A48] relative overflow-hidden transition-colors"
      aria-label="VocalRise Studio Practice Hub Showcase"
    >
      {/* Symmetrical Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#DCEFEA]/35 via-[#176B68]/10 to-transparent dark:from-[#132630]/60 dark:via-[#1A3845]/20 dark:to-transparent rounded-full blur-3xl opacity-80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDFD6] dark:border-[#203A48] bg-[#DCEFEA]/80 dark:bg-[#1A3845]/80 px-3.5 py-1 text-xs font-semibold text-[#102B3A] dark:text-[#E2E8F0] shadow-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-[#176B68] dark:bg-[#38B2A3]" aria-hidden="true" />
            <span>THE VOCALRISE PRACTICE HUB</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#102B3A] dark:text-white">
            Human Connection Meets Technique Practice
          </h2>

          <p className="text-base sm:text-lg text-[#4C5E67] dark:text-[#BDCBD2] leading-relaxed">
            <span className="font-semibold text-[#102B3A] dark:text-white">Your voice. Your pace. Your journey.</span> Explore how VocalRise bridges independent practice, authentic conversations, and optional clinician collaboration in an encouraging, pressure-free environment.
          </p>
        </div>

        {/* Centerpiece: The Bespoke VocalRise Studio Console */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Luminous Glow Backdrop */}
          <div
            className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#176B68]/12 via-[#38B2A3]/10 to-[#E26D50]/5 dark:from-[#38B2A3]/20 dark:via-[#176B68]/15 dark:to-transparent rounded-[36px] blur-2xl pointer-events-none opacity-90 dark:opacity-40"
            aria-hidden="true"
          />

          {/* Floating Card 1: Clinician Bridge (Top-Right) */}
          <motion.div
            variants={floatingCard1Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

          {/* Main Product Console Shell */}
          <div className="relative rounded-3xl border border-[#D5E1E6] dark:border-[#203A48] bg-white/95 dark:bg-[#132630]/95 backdrop-blur-xl shadow-elevated overflow-hidden">
            
            {/* Console Header Bar */}
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

            {/* Console Body: Carousel + Audio Practice Console */}
            <div className="p-3.5 sm:p-5 space-y-4">
              
              {/* Photographic Hero Carousel */}
              <div
                className="relative w-full h-[250px] sm:h-[300px] md:h-[340px] rounded-2xl overflow-hidden bg-[#102B3A] border border-[#D5E1E6]/80 dark:border-[#203A48] group select-none shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68]"
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
                    setCurrentSlide((prev) => (prev - 1 + studioSlides.length) % studioSlides.length);
                  } else if (e.key === "ArrowRight") {
                    e.preventDefault();
                    setCurrentSlide((prev) => (prev + 1) % studioSlides.length);
                  }
                }}
                tabIndex={0}
              >
                {/* Crossfading Slide Photos */}
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={currentSlide}
                    id={`studio-slide-panel-${currentSlide}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Slide ${currentSlide + 1} of ${studioSlides.length}: ${activeSlide.badge}`}
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
                      sizes="(max-width: 768px) 100vw, 840px"
                      priority={currentSlide === 0}
                      className="object-cover object-center"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Scrim Gradient */}
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
                        setCurrentSlide((prev) => (prev - 1 + studioSlides.length) % studioSlides.length);
                      }}
                      aria-label="Previous photograph"
                      className="h-5 w-5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCEFEA] transition-colors"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>

                    {studioSlides.map((slide, idx) => {
                      const isCurrent = currentSlide === idx;
                      return (
                        <button
                          key={slide.id}
                          type="button"
                          role="tab"
                          id={`studio-slide-tab-${idx}`}
                          aria-selected={isCurrent}
                          aria-controls={`studio-slide-panel-${idx}`}
                          aria-label={`Slide ${idx + 1} of ${studioSlides.length}: ${slide.badge}`}
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
                        setCurrentSlide((prev) => (prev + 1) % studioSlides.length);
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
              <div className="rounded-2xl border border-[#D5E1E6] dark:border-[#203A48] bg-[#F7F9F8] dark:bg-[#0E1A22] p-3.5 sm:p-4 space-y-3">
                
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

                {/* Waveform Bar Visualizer */}
                <div
                  className="h-10 px-2 py-1 rounded-xl bg-white dark:bg-[#132630] border border-[#E7EFF2] dark:border-[#203A48] flex items-center justify-between gap-1"
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
                        delay: shouldReduceMotion ? 0 : 0.3 + i * 0.02,
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
          </div>

          {/* Floating Card 2: Today's Practice Session (Bottom-Left) */}
          <motion.div
            variants={floatingCard2Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

          {/* Mobile-Only Companion Status Tray */}
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

        </motion.div>

      </div>
    </section>
  );
}
