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
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function StammeringSupportPage() {
  const techniques = [
    {
      title: "Gentle Vocal Onset (Soft Glottal Initiation)",
      description:
        "Easing into vowel sounds with relaxed vocal folds and preliminary airflow (an easy 'h' onset) to prevent laryngeal lock-ups.",
      focus: "Fluency Shaping",
    },
    {
      title: "Continuous Phonation & Phrase Blending",
      description:
        "Maintaining steady vocal fold vibration through word transitions rather than shutting down voicing between consonants and vowels.",
      focus: "Aerodynamic Stability",
    },
    {
      title: "Voluntary Stuttering (Easy Bouncing)",
      description:
        "Intentionally stuttering with loose, easy repetitions to normalize speech differences, reduce anticipatory fear, and dismantle secondary physical tension.",
      focus: "Stuttering Modification & Desensitization",
    },
    {
      title: "Cancellation & Pull-Out Strategies",
      description:
        "Pausing when a tense block occurs, consciously relaxing articulators, and sliding through the target word with easy phonation.",
      focus: "Tension Release (Van Riper)",
    },
    {
      title: "Speech Avoidance Reduction",
      description:
        "Challenging word substitution habits (e.g. ordering tea because 'coffee' feels blocked) and building confidence in phone calls, presentations, and introductions.",
      focus: "Psychological Freedom",
    },
    {
      title: "Diaphragmatic Breath Pacing",
      description:
        "Grounding inhalation in relaxed abdominal expansion to avoid speaking at residual lung volume or gasping for breath.",
      focus: "Respiratory Support",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal" className="px-3.5 py-1 text-xs uppercase tracking-wide">
            Stammering & Fluency Pathway
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Fluency Support Grounded in Dignity and Control
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Stammering is a complex, neurological fluency difference — never an issue of &ldquo;bad pronunciation&rdquo; or laziness. VocalRise provides techniques designed to reduce physical struggle and speech anxiety.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <Link href="/dashboard">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 shadow-sm gap-2">
                Practice Stammering Modules
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Clinical Truth Callout */}
        <div className="rounded-3xl border border-brand-200/90 bg-gradient-to-r from-brand-50/70 via-white to-brand-50/40 dark:border-brand-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-brand-950/20 p-8 shadow-subtle max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-brand-600 dark:bg-brand-500 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Our Clinical Commitment to People Who Stammer
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                We reject toxic &ldquo;100% cure&rdquo; promises that treat stammering as a shameful defect. The true gold standard of modern Speech-Language Therapy is <strong>effective communication, freedom from physical struggle, and speaking up with authentic confidence</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Core Modules */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
              Structured Evidence-Based Techniques
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Practise each module at your own pace with interactive guided prompts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((tech, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white dark:border-slate-800 dark:bg-slate-900 p-6 space-y-3 shadow-subtle hover:border-brand-300 dark:hover:border-slate-700 transition-all"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="teal" className="text-[10px]">
                    {tech.focus}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">0{idx + 1}</span>
                </div>
                <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {tech.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-slate-900 dark:bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold">Ready to practise gentle onset and desensitization?</h3>
          <p className="text-sm text-slate-400">
            Access our pre-configured stammering exercises in the interactive user practice dashboard.
          </p>
          <div className="pt-2">
            <Link href="/dashboard">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white">
                Launch Stammering Practice Studio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
