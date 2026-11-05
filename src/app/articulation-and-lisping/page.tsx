import * as React from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Mic,
  Sliders,
  Target,
  Layers,
  Award,
  Volume2,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ArticulationAndLispingPage() {
  const categories = [
    {
      title: "Frontal / Interdental Lisp Correction",
      description:
        "Retraining the tongue tip to anchor securely on the alveolar ridge behind the upper front teeth instead of protruding forward between teeth on /s/ and /z/.",
      mechanics: "Alveolar contact & Central airstream",
      badge: "Frontal Lisp",
      badgeVariant: "softblue" as const,
    },
    {
      title: "Lateral Lisp Airflow Channeling",
      description:
        "Eliminating wet, slushy lateral air escape by elevating the lateral edges of the tongue against upper molars (the 'Butterfly' technique) so air exhausts only down the center groove.",
      mechanics: "Bilateral molar seal & Central groove",
      badge: "Lateral Lisp",
      badgeVariant: "ocean" as const,
    },
    {
      title: "Minimal Pairs Auditory Discrimination",
      description:
        "Developing sharp perceptual and motor contrast between interdental /θ/ and alveolar /s/ ('think' vs 'sink', 'mouth' vs 'mouse') before moving to conversational speech.",
      mechanics: "Acoustic feedback & Motor contrast",
      badge: "Auditory Contrast",
      badgeVariant: "terracotta" as const,
    },
    {
      title: "Rhotic /r/ Precision (Bunched & Retroflex)",
      description:
        "Guiding lingual posture for vocalic and consonantal /r/ through systematic syllable ladders ('ray', 'ree', 'rye', 'roe', 'roo') with pharyngeal constriction.",
      mechanics: "Lingual root retraction & Pharyngeal stability",
      badge: "Rhotic Sounds",
      badgeVariant: "softblue" as const,
    },
    {
      title: "Sound Generalization Hierarchy",
      description:
        "Transitioning newly mastered sounds from isolated syllables into multisyllabic words, carrier phrases, sentences, and spontaneous daily conversation.",
      mechanics: "Motor carryover protocol",
      badge: "Carryover Ladder",
      badgeVariant: "ocean" as const,
    },
    {
      title: "Tactile & Visual Biofeedback Drills",
      description:
        "Using straw feedback and tactile prompts to give real-time sensory confirmation of central air focus and proper dental occlusion.",
      mechanics: "Sensory biofeedback",
      badge: "Biofeedback",
      badgeVariant: "terracotta" as const,
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#F7F9F8] dark:bg-[#111D25] text-midnight dark:text-[#F2F6F7] min-h-screen transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="softblue" className="px-3.5 py-1 text-xs uppercase tracking-wide">
            Phonetic Placement & Motor Pathway
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-midnight dark:text-white leading-tight">
            Precision Articulation & Lisping Support
          </h1>
          <p className="text-base sm:text-lg text-stone dark:text-[#BDCBD2] leading-relaxed">
            Address frontal lisps, lateral airflow distortions, and speech sound precision through systematic motor placement ladders, acoustic contrast drills, and technique repetition.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2 px-7">
                <span>Practice Articulation Modules</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-6">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>

        {/* Anatomical Mechanics Explainer */}
        <div className="rounded-[32px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-8 sm:p-10 shadow-card max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="h-12 w-12 rounded-2xl bg-softblue/30 text-ocean dark:text-softblue flex items-center justify-center shrink-0">
              <Target className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="space-y-3 text-left">
              <h3 className="font-heading text-xl font-bold text-midnight dark:text-white">
                Understanding Articulatory Placement Mechanics
              </h3>
              <p className="text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                Articulation challenges happen when articulators (tongue tip, tongue blade, dental margins, or alveolar ridge) take slightly misdirected physical positions during continuous speech. Our modules provide clear anatomical landmarks, tactile reference cues, and structured syllable hierarchies to retrain motor pathways.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Core Modules Grid */}
        <div className="space-y-8">
          <SectionHeading
            badge="Phonetic Ladders"
            title="Systematic placement modules"
            subtitle="Practice at isolation, syllable, carrier phrase, and conversational levels with real-time acoustic visualizers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-7 space-y-4 shadow-subtle hover:border-softblue/40 dark:hover:border-ocean/40 transition-all flex flex-col justify-between text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={item.badgeVariant} className="text-[10px]">
                      {item.badge}
                    </Badge>
                    <span className="font-heading text-xs font-bold text-stone/50 dark:text-[#BDCBD2]/50 font-mono">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-midnight dark:text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7EFF2] dark:border-[#304653] space-y-2">
                  <div className="text-[11px] text-stone dark:text-[#BDCBD2]">
                    <strong className="text-ocean dark:text-softblue">Focus: </strong>
                    <span>{item.mechanics}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-ocean dark:text-softblue font-medium pt-1">
                    <span>Ladder Module Ready</span>
                    <Link href="/dashboard" className="hover:underline flex items-center gap-1">
                      <span>Launch</span> &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Generalization Hierarchy Ladder */}
        <div className="rounded-[32px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-8 sm:p-12 shadow-card space-y-8 text-left">
          <div className="max-w-3xl space-y-3">
            <Badge variant="ocean" className="text-xs">
              Motor Generalization Hierarchy
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-midnight dark:text-white">
              The 5-step ladder from isolated sound to spontaneous speech
            </h2>
            <p className="text-sm sm:text-base text-stone dark:text-[#BDCBD2] leading-relaxed">
              Correct sound placement is learned in stages. Jumping straight into conversation before anchoring tongue posture causes motor frustration. VocalRise guides you through the clinical motor ladder.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 pt-2">
            {[
              { step: "1", level: "Sound in Isolation", desc: "Producing /s/ cleanly without vowels." },
              { step: "2", level: "CV Syllables", desc: "Pairing sound with vowels ('sa', 'see', 'so')." },
              { step: "3", level: "Single Words", desc: "Initial, medial, and final word positions." },
              { step: "4", level: "Carrier Phrases", desc: "'I see a...', 'Pass the...', 'Sun is...'." },
              { step: "5", level: "Spontaneous Speech", desc: "Transferring placement into conversations." },
            ].map((st, i) => (
              <div key={i} className="rounded-2xl bg-porcelain dark:bg-midnight-deep p-5 space-y-2 border border-[#D5E1E6] dark:border-[#304653] text-left">
                <span className="font-heading text-xs font-bold text-ocean dark:text-softblue block">
                  Step 0{st.step}
                </span>
                <span className="font-heading text-sm font-bold text-midnight dark:text-white block">
                  {st.level}
                </span>
                <p className="text-[11px] text-stone dark:text-[#BDCBD2] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-[32px] bg-midnight dark:bg-midnight-deep text-white p-8 sm:p-12 border border-[#304653] shadow-elevated text-center space-y-5 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-medium text-white/90">
            <Sparkles className="h-3.5 w-3.5 text-softblue" aria-hidden="true" />
            <span>Interactive Placement Studio</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Ready to practise alveolar placement?
          </h3>
          <p className="text-xs sm:text-sm text-mist/80 max-w-lg mx-auto leading-relaxed">
            Open the practice studio to test minimal pairs and butterfly drills with simulated audio feedback.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-midnight hover:bg-mist font-semibold shadow-elevated px-8">
                Launch Articulation Studio
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
