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
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ArticulationAndLispingPage() {
  const categories = [
    {
      title: "Frontal / Interdental Lisp Correction",
      description:
        "Retraining the tongue tip to anchor securely on the alveolar ridge behind the upper front teeth instead of protruding between teeth on /s/ and /z/.",
      mechanics: "Alveolar contact & Central airstream",
      badge: "Frontal Lisp",
    },
    {
      title: "Lateral Lisp Airflow Channeling",
      description:
        "Eliminating wet, slushy lateral air escape by elevating the lateral edges of the tongue against upper molars (the 'Butterfly' technique) so air exhausts only down the center.",
      mechanics: "Bilateral molar seal & Central groove",
      badge: "Lateral Lisp",
    },
    {
      title: "Minimal Pairs Auditory Discrimination",
      description:
        "Developing sharp perceptual and motor contrast between interdental /θ/ and alveolar /s/ ('think' vs 'sink', 'mouth' vs 'mouse').",
      mechanics: "Acoustic feedback & Motor contrast",
      badge: "Auditory Contrast",
    },
    {
      title: "Rhotic /r/ Precision (Bunched & Retroflex)",
      description:
        "Guiding lingual posture for vocalic and consonantal /r/ through systematic syllable ladders ('ray', 'ree', 'rye', 'roe', 'roo').",
      mechanics: "Lingual root retraction & Pharyngeal constriction",
      badge: "Rhotic Sounds",
    },
    {
      title: "Sound Generalization Hierarchy",
      description:
        "Transitioning newly mastered sounds from isolated syllables into multisyllabic words, phrases, sentences, and spontaneous conversation.",
      mechanics: "Motor carryover protocol",
      badge: "Carryover",
    },
    {
      title: "Tactile & Visual Biofeedback Drills",
      description:
        "Using straw feedback and tactile prompts to give real-time confirmation of central air focus and proper dental occlusion.",
      mechanics: "Sensory biofeedback",
      badge: "Biofeedback",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="cerulean" className="px-3.5 py-1 text-xs uppercase tracking-wide">
            Phonetic Placement & Motor Pathway
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Precision Articulation & Lisping Support
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Address frontal lisps, lateral airflow distortions, and speech sound precision through systematic motor placement drills, acoustic contrast, and SLT-supervised practice.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <Link href="/dashboard">
              <Button size="lg" className="bg-cerulean-600 hover:bg-cerulean-700 shadow-sm gap-2 text-white">
                Practice Articulation Modules
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Anatomical & Motor Placement Explainer */}
        <div className="rounded-3xl border border-cerulean-200/90 bg-gradient-to-r from-cerulean-50/70 via-white to-cerulean-50/40 dark:border-cerulean-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-cerulean-950/20 p-8 shadow-subtle max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-cerulean-600 dark:bg-cerulean-500 text-white flex items-center justify-center shrink-0">
              <Target className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Understanding Sound Production Mechanics
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Articulation challenges occur when articulators (tongue tip, tongue body, teeth, or alveolar ridge) take slightly misdirected physical positions during fast speech. Our modules provide clear anatomical cues, tactile reference points, and ladder-based practice.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Modules Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
              Phonetic Modules & Motor Ladders
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Practise at isolation, syllable, and phrase levels with audio recording review
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white dark:border-slate-800 dark:bg-slate-900 p-6 space-y-3 shadow-subtle hover:border-cerulean-300 dark:hover:border-slate-700 transition-all"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="cerulean" className="text-[10px]">
                    {item.badge}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">0{idx + 1}</span>
                </div>
                <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 text-[11px] text-cerulean-800 dark:text-cerulean-300 font-medium">
                  Focus: {item.mechanics}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-slate-900 dark:bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold">Ready to practise alveolar placement?</h3>
          <p className="text-sm text-slate-400">
            Open the practice studio to test minimal pairs and straw drills with simulated audio feedback.
          </p>
          <div className="pt-2">
            <Link href="/dashboard">
              <Button size="lg" className="bg-cerulean-500 hover:bg-cerulean-600 text-white">
                Launch Articulation Studio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
