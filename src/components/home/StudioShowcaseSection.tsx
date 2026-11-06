"use client";

import * as React from "react";
import {
  Waves,
  Stethoscope,
  Mic,
  Lock,
  Sparkles,
  CheckCircle2,
  Target,
  Volume2,
  RotateCcw,
  Info,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

// Practice Drill Modes for the VocalRise Studio Preview
const practiceDrills = [
  {
    id: "phonation",
    title: "Continuous Phonation",
    technique: "Gentle vocal cord onset & steady airflow",
    target: "Paced vowel connection without sudden tension",
    duration: "01:42 / 03:00",
    pace: "Steady (68 bpm pace)",
  },
  {
    id: "reading",
    title: "Paced Phrase Reading",
    technique: "Voluntary pauses & breath coordination",
    target: "Comfortable rhythm across natural phrase boundaries",
    duration: "00:45 / 02:30",
    pace: "Relaxed (62 bpm pace)",
  },
  {
    id: "resonance",
    title: "Resonance & Soft Contact",
    technique: "Easy articulatory contacts & vocal ease",
    target: "Reducing speech muscle pressure on plosives",
    duration: "02:10 / 03:00",
    pace: "Gentle (65 bpm pace)",
  },
];

export function StudioShowcaseSection() {
  const shouldReduceMotion = useReducedMotion();

  // Practice Console State
  const [activeDrillIndex, setActiveDrillIndex] = React.useState(0);
  const [isRecordingPreview, setIsRecordingPreview] = React.useState(false);

  const activeDrill = practiceDrills[activeDrillIndex];

  // Dynamic waveform bars for the simulated practice visualizer
  const defaultWaveformHeights = [
    18, 32, 45, 58, 72, 64, 48, 36, 52, 68, 78, 62, 44, 56, 70, 52, 38, 28, 20, 14, 26, 42, 60, 48, 34, 22, 16, 12
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
      className="scroll-mt-16 py-16 sm:py-24 bg-[#F7F9F8] dark:bg-[#0E1A22] border-t border-[#D5E1E6]/80 dark:border-[#203A48] relative overflow-hidden transition-colors"
      aria-label="VocalRise Studio Practice Hub Showcase"
    >
      {/* Symmetrical Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#DCEFEA]/35 via-[#176B68]/10 to-transparent dark:from-[#132630]/60 dark:via-[#1A3845]/20 dark:to-transparent rounded-full blur-3xl opacity-80" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
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
          initial={false}
          animate="visible"
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
            initial={false}
            animate="visible"
            className="absolute -top-6 -right-2 sm:-right-4 lg:-right-6 z-20 max-w-[230px] sm:max-w-[250px] hidden sm:block"
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
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="h-7 w-7 rounded-lg bg-[#176B68] text-white flex items-center justify-center shadow-subtle">
                  <Waves className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-tight text-[#102B3A] dark:text-white leading-tight">
                    VocalRise Studio Console
                  </span>
                  <span className="text-[10px] font-medium text-[#4C5E67] dark:text-[#BDCBD2]">
                    Interactive Technique &amp; Practice Preview
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DCEFEA] dark:bg-[#1A3845] border border-[#BFDFD6] dark:border-[#203A48] text-[10px] font-semibold text-[#102B3A] dark:text-[#72C4B4] shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-[#176B68] dark:bg-[#38B2A3] animate-pulse motion-reduce:animate-none" aria-hidden="true" />
                <span>Simulated Practice Preview</span>
              </div>
            </div>

            {/* Console Body: Interactive Practice Workspace */}
            <div className="p-4 sm:p-6 space-y-5">
              
              {/* Practice Technique Drill Selector Tabs */}
              <div className="flex flex-wrap items-center gap-2 border-b border-[#E7EFF2] dark:border-[#203A48] pb-3" role="tablist" aria-label="Technique drill modes">
                {practiceDrills.map((drill, index) => {
                  const isActive = activeDrillIndex === index;
                  return (
                    <button
                      key={drill.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveDrillIndex(index)}
                      className={cn(
                        "px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] dark:focus-visible:ring-[#38B2A3]",
                        isActive
                          ? "bg-[#176B68] text-white dark:bg-[#38B2A3] dark:text-[#0A1820] shadow-subtle"
                          : "bg-[#F0F5F4] dark:bg-[#162732] text-[#4C5E67] dark:text-[#BDCBD2] hover:bg-[#DCEFEA]/60 dark:hover:bg-[#1A3845]"
                      )}
                    >
                      <span>{drill.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Drill Guidance Card */}
              <div className="rounded-2xl border border-[#BFDFD6]/70 dark:border-[#203A48] bg-[#F7F9F8] dark:bg-[#0E1A22] p-4 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-[#102B3A] dark:text-white flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#176B68] dark:text-[#38B2A3]" aria-hidden="true" />
                      <span>{activeDrill.title}</span>
                    </h3>
                    <p className="text-xs text-[#4C5E67] dark:text-[#BDCBD2] mt-0.5">
                      {activeDrill.technique}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#4C5E67] dark:text-[#BDCBD2] bg-white dark:bg-[#132630] px-2.5 py-1 rounded-lg border border-[#E7EFF2] dark:border-[#203A48] self-start sm:self-auto">
                    <span>{activeDrill.duration}</span>
                    <span className="text-[#BFDFD6] dark:text-[#203A48]">•</span>
                    <span>{activeDrill.pace}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white dark:bg-[#132630] border border-[#E7EFF2] dark:border-[#203A48] text-xs text-[#4C5E67] dark:text-[#BDCBD2] leading-relaxed">
                  <span className="font-semibold text-[#102B3A] dark:text-white">Practice Focus: </span>
                  {activeDrill.target}
                </div>
              </div>

              {/* Simulated Waveform & Acoustic Resonance Surface */}
              <div className="rounded-2xl border border-[#D5E1E6] dark:border-[#203A48] bg-[#F7F9F8] dark:bg-[#0E1A22] p-4 space-y-3.5">
                
                {/* Surface Header with Simulation Disclaimer */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#176B68] dark:bg-[#38B2A3] animate-pulse motion-reduce:animate-none" aria-hidden="true" />
                    <span className="font-semibold text-[#102B3A] dark:text-white">
                      {isRecordingPreview ? "Practice Mic: Listening (Interactive Preview)" : "Simulated Acoustic Waveform"}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#4C5E67] dark:text-[#BDCBD2] flex items-center gap-1">
                    <Info className="h-3 w-3 text-[#176B68] dark:text-[#38B2A3]" aria-hidden="true" />
                    <span>*Preview representation, not a clinical diagnostic measure</span>
                  </span>
                </div>

                {/* Animated Waveform Display */}
                <div
                  className="h-14 sm:h-16 px-3 py-2 rounded-xl bg-white dark:bg-[#132630] border border-[#E7EFF2] dark:border-[#203A48] flex items-center justify-between gap-1 sm:gap-1.5"
                  aria-label="Simulated acoustic resonance waveform display preview"
                  role="img"
                >
                  {defaultWaveformHeights.map((height, i) => {
                    const dynamicHeight = isRecordingPreview
                      ? Math.min(95, Math.max(15, (height * (i % 2 === 0 ? 1.3 : 0.8)) % 100))
                      : height;

                    return (
                      <motion.div
                        key={i}
                        initial={shouldReduceMotion ? { height: `${height}%` } : { height: "15%" }}
                        animate={{ height: `${dynamicHeight}%` }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.4,
                          delay: shouldReduceMotion ? 0 : (i % 8) * 0.04,
                          ease: "easeInOut",
                        }}
                        className={cn(
                          "w-1 sm:w-1.5 rounded-full transition-colors",
                          i < 18
                            ? "bg-gradient-to-t from-[#176B68] to-[#38B2A3] dark:from-[#38B2A3] dark:to-[#72C4B4]"
                            : "bg-[#D5E1E6] dark:bg-[#203A48]"
                        )}
                      />
                    );
                  })}
                </div>

                {/* Interactive Controls & Privacy Assurance */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-2.5">
                    <motion.button
                      type="button"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                      onClick={() => setIsRecordingPreview((prev) => !prev)}
                      aria-label={isRecordingPreview ? "Pause simulated mic preview" : "Start simulated mic preview"}
                      className={cn(
                        "h-9 px-3.5 rounded-xl font-semibold text-xs flex items-center gap-2 shadow-subtle transition-colors focus-visible:outline-none focus-visible:ring-2",
                        isRecordingPreview
                          ? "bg-[#D15436] text-white focus-visible:ring-[#D15436]"
                          : "bg-[#176B68] text-white dark:bg-[#38B2A3] dark:text-[#0A1820] focus-visible:ring-[#176B68]"
                      )}
                    >
                      <Mic className="h-4 w-4" aria-hidden="true" />
                      <span>{isRecordingPreview ? "Stop Preview" : "Test Mic Preview"}</span>
                    </motion.button>

                    <button
                      type="button"
                      onClick={() => setIsRecordingPreview(false)}
                      aria-label="Reset drill preview"
                      className="h-9 w-9 rounded-xl border border-[#D5E1E6] dark:border-[#203A48] bg-white dark:bg-[#132630] text-[#4C5E67] dark:text-[#BDCBD2] hover:text-[#102B3A] dark:hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68]"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    </button>

                    <span className="text-[11px] font-medium text-[#4C5E67] dark:text-[#BDCBD2]">
                      {isRecordingPreview ? "Listening (in-memory simulation)..." : "Click to test in-memory audio"}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#176B68] dark:text-[#38B2A3] bg-[#DCEFEA]/60 dark:bg-[#1A3845]/60 px-2.5 py-1 rounded-lg border border-[#BFDFD6] dark:border-[#203A48]">
                    <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>In-Memory Only • Client-Controlled</span>
                  </div>
                </div>

              </div>

              {/* Clarification Notice Banner */}
              <div className="p-3 rounded-xl bg-[#F0F5F4] dark:bg-[#162732] border border-[#BFDFD6]/60 dark:border-[#203A48] flex items-start gap-2.5">
                <Info className="h-4 w-4 text-[#176B68] dark:text-[#38B2A3] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[11px] text-[#4C5E67] dark:text-[#BDCBD2] leading-relaxed">
                  <span className="font-semibold text-[#102B3A] dark:text-white">Note on technology: </span>
                  VocalRise audio tools process speech exercises directly inside your browser memory for private practice. The visualizations above are illustrative interactive prototypes and do not constitute clinical acoustic diagnoses or medical treatment outcomes.
                </p>
              </div>

            </div>
          </div>

          {/* Floating Card 2: Today's Practice Session (Bottom-Left) */}
          <motion.div
            variants={floatingCard2Variants}
            initial={false}
            animate="visible"
            className="absolute -bottom-6 -left-2 sm:-left-4 lg:-left-6 z-20 max-w-[240px] sm:max-w-[260px] hidden sm:block"
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
