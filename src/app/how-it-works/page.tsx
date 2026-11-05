import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Mic,
  Stethoscope,
  TrendingUp,
  BookMarked,
  ArrowRight,
  Layers,
  HeartHandshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      title: "Pathway Assessment & Clinical Focus",
      description:
        "Select your dedicated pathway — Stammering & Fluency or Articulation & Lisping. We establish specific baseline goals, whether that means mastering gentle onsets or correcting central airflow.",
      badge: "Foundation",
    },
    {
      step: "02",
      title: "Daily 10-Minute Asynchronous Micro-Drills",
      description:
        "Short, focused daily sessions in our web practice studio. Guided prompts, simulated visual feedback, and calm pacing allow repetition without fatigue or anxiety.",
      badge: "Daily Practice",
    },
    {
      step: "03",
      title: "Qualified Therapist Asynchronous Feedback",
      description:
        "Submit selected audio recordings to your Speech-Language Therapist. Your clinician reviews waveforms, notes vocal fold tension or placement precision, and provides guidance between clinic appointments.",
      badge: "SLT Collaboration",
    },
    {
      step: "04",
      title: "Real-World Carryover & Confidence Journaling",
      description:
        "Track situational communication: ordering coffee, answering phones, or speaking in team syncs. Celebrate self-advocacy and desensitization rather than chasing perfection.",
      badge: "Life Carryover",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal" className="px-3 py-1">
            Clinical Methodology
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            How VocalRise Works
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A structured framework designed to turn speech therapy techniques into second-nature habits through low-pressure daily repetition and qualified clinician oversight.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200/90 bg-white dark:border-slate-800 dark:bg-slate-900 p-6 shadow-subtle flex flex-col justify-between space-y-6 relative hover:border-brand-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-brand-600 dark:text-brand-400 font-mono">
                    {st.step}
                  </span>
                  <Badge variant="outline" className="text-[10px]">
                    {st.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {st.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs text-brand-700 dark:text-brand-400 font-medium">
                Step {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Deep Dive Comparison */}
        <div className="rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Why Asynchronous Home Practice Outperforms Infrequent Clinic Visits
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Research in motor learning and speech psychology consistently shows that frequent, low-stakes practice (10 minutes 5 days a week) yields superior retention and lower speech anxiety than relying solely on a single 45-minute clinical appointment every fortnight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-6 space-y-2 border border-slate-100 dark:border-slate-800">
              <span className="text-base font-bold text-slate-900 dark:text-slate-100 block">
                Neurological Plasticity
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Repetitive, calm activation of motor cortex pathways reinforces relaxed phonation and correct lingual positioning.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-6 space-y-2 border border-slate-100 dark:border-slate-800">
              <span className="text-base font-bold text-slate-900 dark:text-slate-100 block">
                Desensitization to Speech Fear
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Voluntary stuttering and recorded self-observation dismantle catastrophic anticipatory anxiety around speech blocks.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-6 space-y-2 border border-slate-100 dark:border-slate-800">
              <span className="text-base font-bold text-slate-900 dark:text-slate-100 block">
                Continuous Clinician Oversight
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Therapists listen to genuine home audio samples rather than relying solely on patient recall or in-clinic performance.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Demo CTA */}
        <div className="rounded-3xl bg-slate-900 dark:bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold">Experience the practice flow in real time</h3>
            <p className="text-sm text-slate-400 max-w-lg">
              Explore our live interactive user dashboard or therapist review deck using realistic sample data.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white gap-2">
                Launch Practice Studio
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
