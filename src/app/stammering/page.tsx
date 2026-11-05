import * as React from "react";
import Link from "next/link";
import {
  Waves,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Heart,
  Volume2,
  Mic,
  Award,
  Lock,
  Target,
  Smile,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export default function StammeringSupportPage() {
  const techniques = [
    {
      title: "Gentle Vocal Onset (Soft Glottal Initiation)",
      description:
        "Easing into vowel sounds with relaxed vocal folds and preliminary airflow (an easy 'h' onset) to prevent sudden laryngeal lock-ups during initiation.",
      focus: "Fluency Shaping",
      badgeVariant: "ocean" as const,
    },
    {
      title: "Continuous Phonation & Phrase Blending",
      description:
        "Maintaining steady vocal fold vibration through word transitions rather than shutting down voicing between consonants and vowels.",
      focus: "Aerodynamic Stability",
      badgeVariant: "softblue" as const,
    },
    {
      title: "Voluntary Stuttering (Easy Bouncing)",
      description:
        "Intentionally stuttering with loose, easy repetitions to normalize speech differences, reduce anticipatory fear, and dismantle secondary physical tension.",
      focus: "Stuttering Modification",
      badgeVariant: "terracotta" as const,
    },
    {
      title: "Cancellation & Pull-Out Strategies",
      description:
        "Pausing when a tense block occurs, consciously releasing articulatory tension, and sliding through the target sound with easy phonation (Van Riper approach).",
      focus: "Tension Release",
      badgeVariant: "ocean" as const,
    },
    {
      title: "Speech Avoidance Reduction",
      description:
        "Challenging word substitution habits (e.g. ordering tea because 'coffee' feels blocked) and building confidence in phone calls, presentations, and introductions.",
      focus: "Psychological Freedom",
      badgeVariant: "terracotta" as const,
    },
    {
      title: "Diaphragmatic Breath Pacing",
      description:
        "Grounding speech in relaxed abdominal breathing to avoid speaking at residual lung volume or gasping for breath during communication moments.",
      focus: "Respiratory Support",
      badgeVariant: "softblue" as const,
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#F7F9F8] dark:bg-[#111D25] text-midnight dark:text-[#F2F6F7] min-h-screen transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="ocean" className="px-3.5 py-1 text-xs uppercase tracking-wide">
            Stammering & Fluency Pathway
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-midnight dark:text-white leading-tight">
            Fluency Support Grounded in Dignity and Control
          </h1>
          <p className="text-base sm:text-lg text-stone dark:text-[#BDCBD2] leading-relaxed">
            Stammering is a neuro-motor fluency difference involving laryngeal timing—never poor pronunciation or lack of effort. VocalRise provides evidence-informed techniques to reduce physical struggle, build speaking ease, and encourage self-advocacy.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2 px-7">
                <span>Practice Stammering Modules</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-6">
                Explore Clinical Rationale
              </Button>
            </Link>
          </div>
        </div>

        {/* Clinical Affirmation Callout */}
        <div className="rounded-[32px] border border-ocean/30 bg-white dark:border-[#304653] dark:bg-midnight-surface p-8 sm:p-10 shadow-card max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="h-12 w-12 rounded-2xl bg-ocean text-white flex items-center justify-center shrink-0 shadow-subtle">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="space-y-3 text-left">
              <h3 className="font-heading text-xl font-bold text-midnight dark:text-white">
                Our Ethical Commitment to People Who Stammer
              </h3>
              <p className="text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                We strictly reject unethical &ldquo;100% cure&rdquo; promises that treat stammering as a defect to be eliminated. Modern speech-language therapy recognizes that fluency is variable and that true progress is defined by <strong>communicative ease, freedom from physical struggle, self-advocacy, and speaking freely without apology</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Core Modules */}
        <div className="space-y-8">
          <SectionHeading
            badge="Evidence-Based Modules"
            title="Techniques designed for daily ease"
            subtitle="Explore each guided technique module at your own pace with interactive visual cues and gentle pacing prompts."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((tech, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-7 space-y-4 shadow-subtle hover:border-ocean/40 dark:hover:border-softblue/40 transition-all flex flex-col justify-between text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={tech.badgeVariant} className="text-[10px]">
                      {tech.focus}
                    </Badge>
                    <span className="font-heading text-xs font-bold text-stone/50 dark:text-[#BDCBD2]/50 font-mono">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-midnight dark:text-white leading-snug">
                    {tech.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7EFF2] dark:border-[#304653] flex items-center justify-between text-xs text-ocean dark:text-softblue font-medium">
                  <span>Guided Exercise Ready</span>
                  <Link href="/dashboard" className="hover:underline flex items-center gap-1">
                    <span>Try Drill</span> &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carryover & Situational Confidence */}
        <div className="rounded-[32px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-8 sm:p-12 shadow-card space-y-8 text-left">
          <div className="max-w-3xl space-y-3">
            <Badge variant="terracotta" className="text-xs">
              Everyday Application
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-midnight dark:text-white">
              Transferring ease from the bedroom mirror into the world
            </h2>
            <p className="text-sm sm:text-base text-stone dark:text-[#BDCBD2] leading-relaxed">
              Practicing in a quiet room is only the starting point. VocalRise structures situational exposure ladders to help you apply techniques in daily interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="rounded-2xl bg-porcelain dark:bg-midnight-deep p-6 space-y-2 border border-[#D5E1E6] dark:border-[#304653]">
              <span className="font-heading text-base font-bold text-midnight dark:text-white block">
                1. Solitary Practice
              </span>
              <p className="text-xs text-stone dark:text-[#BDCBD2] leading-relaxed">
                Establish neuromuscular memory for gentle onsets and continuous voicing during low-stakes solitary drills.
              </p>
            </div>
            <div className="rounded-2xl bg-porcelain dark:bg-midnight-deep p-6 space-y-2 border border-[#D5E1E6] dark:border-[#304653]">
              <span className="font-heading text-base font-bold text-midnight dark:text-white block">
                2. Low-Stakes Situations
              </span>
              <p className="text-xs text-stone dark:text-[#BDCBD2] leading-relaxed">
                Order a drink without substituting words, ask for transit directions, or say your name deliberately without tension.
              </p>
            </div>
            <div className="rounded-2xl bg-porcelain dark:bg-midnight-deep p-6 space-y-2 border border-[#D5E1E6] dark:border-[#304653]">
              <span className="font-heading text-base font-bold text-midnight dark:text-white block">
                3. High-Value Speaking
              </span>
              <p className="text-xs text-stone dark:text-[#BDCBD2] leading-relaxed">
                Present at meetings, participate in social dinners, and disclose stammering comfortably with ready self-advocacy scripts.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-[32px] bg-midnight dark:bg-midnight-deep text-white p-8 sm:p-12 border border-[#304653] shadow-elevated text-center space-y-5 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-medium text-white/90">
            <Sparkles className="h-3.5 w-3.5 text-softblue" aria-hidden="true" />
            <span>Interactive Practice Studio</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Ready to practise gentle onset and desensitization?
          </h3>
          <p className="text-xs sm:text-sm text-mist/80 max-w-lg mx-auto leading-relaxed">
            Access pre-configured stammering exercises in the interactive prototype practice dashboard.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-midnight hover:bg-mist font-semibold shadow-elevated px-8">
                Launch Stammering Practice Studio
              </Button>
            </Link>
            <Link href="/therapist" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-6">
                Clinician Portal Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
