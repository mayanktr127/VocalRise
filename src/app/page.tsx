import Link from "next/link";
import {
  Waves,
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
  ArrowRight,
  Mic,
  BookMarked,
  Sparkles,
  CheckCircle2,
  Lock,
  ChevronRight,
  Play,
  TrendingUp,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-16 pb-20 sm:pt-24 sm:pb-32 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
            {/* Clinical Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-brand-50/80 dark:border-brand-800/80 dark:bg-brand-950/80 px-4 py-1.5 text-xs font-semibold text-brand-900 dark:text-brand-300 shadow-subtle">
              <ShieldCheck className="h-4 w-4 text-brand-600 dark:text-brand-400" />
              <span>Aligned with Speech-Language Pathology Standards</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl leading-[1.15]">
              Speech practice grounded in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-cerulean-600 dark:from-brand-400 dark:via-brand-300 dark:to-cerulean-400">
                technique, dignity,
              </span>{" "}
              and evidence.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              VocalRise provides structured, calming daily practice for people who stammer or navigate articulation and lisping challenges — fostering communication confidence and seamless therapist collaboration.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 w-full max-w-md">
              <Link href="/dashboard" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-brand-600 hover:bg-brand-700 shadow-md gap-2">
                  Launch Interactive Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/how-it-works" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full bg-white dark:bg-slate-900">
                  See Clinical Approach
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                No diagnostic exaggeration
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                Distinct, respectful pathways
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                Therapist-friendly review deck
              </span>
            </div>
          </div>

          {/* Interactive Preview Mockup Showcase */}
          <div className="mt-14 max-w-5xl mx-auto rounded-3xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 p-4 sm:p-6 shadow-xl relative transition-colors">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 font-mono text-slate-400 dark:text-slate-500">vocalrise.app/dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="teal">Stammering Track</Badge>
                <Badge variant="cerulean">Articulation Track</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {/* Card 1 */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-800/40 p-5 space-y-3">
                <div className="h-9 w-9 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 flex items-center justify-center">
                  <Mic className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  Targeted Micro-Drills
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Gentle onsets, continuous phonation, or central tongue placement drills designed for 10-15 minute daily consistency.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-800/40 p-5 space-y-3">
                <div className="h-9 w-9 rounded-xl bg-cerulean-100 dark:bg-cerulean-950 text-cerulean-700 dark:text-cerulean-300 flex items-center justify-center">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  SLT Collaboration Hub
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Share practice audio asynchronously with your qualified speech therapist for precise commentary between visits.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-800/40 p-5 space-y-3">
                <div className="h-9 w-9 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center">
                  <BookMarked className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  Confidence & Exposure Log
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Document real-world communication victories, track situational avoidance reduction, and celebrate authentic progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Comparison Section */}
      <section className="py-20 bg-white border-t border-slate-200/80 dark:bg-slate-950 dark:border-slate-800 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-400">
              Clear Clinical Distinction
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Two Dedicated Speech Pathways
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Stammering is a complex fluency difference involving laryngeal timing and neuro-motor coordination — never poor pronunciation. VocalRise strictly separates fluency support from phonetic articulation drills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Stammering Pathway Card */}
            <div className="rounded-3xl border border-brand-200/90 bg-gradient-to-br from-white to-brand-50/30 dark:border-brand-900/60 dark:from-slate-900 dark:to-brand-950/20 p-8 space-y-6 shadow-subtle relative">
              <div className="flex items-center justify-between">
                <Badge variant="teal" className="text-xs px-3 py-1 uppercase tracking-wide">
                  Fluency Track
                </Badge>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Adults & Teens</span>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Stammering & Fluency Support
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  For people who experience repetitions, prolongations, blocks, and communication anxiety. Focuses on physical struggle reduction, voluntary stuttering, and ease.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Core Evidence Techniques
                </div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>Gentle vocal onset & easy vowel initiation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>Continuous phonation across word boundaries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>Voluntary stuttering & desensitization practice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>Cancellation and pull-out modification techniques</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-brand-100 dark:border-brand-900/60">
                <Link href="/stammering">
                  <Button variant="outline" className="w-full border-brand-300 text-brand-800 dark:border-brand-800 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-950">
                    Explore Stammering Pathway &rarr;
                  </Button>
                </Link>
              </div>
            </div>

            {/* Articulation & Lisping Pathway Card */}
            <div className="rounded-3xl border border-cerulean-200/90 bg-gradient-to-br from-white to-cerulean-50/30 dark:border-cerulean-900/60 dark:from-slate-900 dark:to-cerulean-950/20 p-8 space-y-6 shadow-subtle relative">
              <div className="flex items-center justify-between">
                <Badge variant="cerulean" className="text-xs px-3 py-1 uppercase tracking-wide">
                  Motor Track
                </Badge>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Children, Teens & Adults</span>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Articulation & Lisping Support
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  For people working on frontal/interdental lisps, lateral airflow distortions, or sound substitutions (/s/, /z/, /r/). Focuses on tongue placement and acoustic clarity.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Core Evidence Techniques
                </div>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cerulean-600 dark:text-cerulean-400 shrink-0" />
                    <span>Alveolar ridge anchoring & central groove air shaping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cerulean-600 dark:text-cerulean-400 shrink-0" />
                    <span>Minimal pair acoustic discrimination drills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cerulean-600 dark:text-cerulean-400 shrink-0" />
                    <span>Lateral lisp butterfly technique for molar elevation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cerulean-600 dark:text-cerulean-400 shrink-0" />
                    <span>Systematic syllable-to-conversation hierarchy</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-cerulean-100 dark:border-cerulean-900/60">
                <Link href="/articulation-and-lisping">
                  <Button variant="outline" className="w-full border-cerulean-300 text-cerulean-800 dark:border-cerulean-800 dark:text-cerulean-300 hover:bg-cerulean-50 dark:hover:bg-cerulean-950">
                    Explore Articulation Pathway &rarr;
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Bridges With Therapists */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="cerulean">Designed For Qualified Collaboration</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Closing the gap between weekly clinical visits.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                The hardest part of speech therapy is not the 45-minute clinical session — it is remembering to practise calmly during stressful everyday moments.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                VocalRise provides speech-language therapists with an asynchronous review portal: patients record short drills at home, and clinicians can leave timestamped, encouraging voice notes or adjustments without scheduling extra clinic visits.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <Link href="/therapist">
                  <Button variant="primary" className="bg-cerulean-600 hover:bg-cerulean-700 gap-2">
                    View Therapist Portal
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button variant="ghost">Learn Methodology</Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-cerulean-100 dark:bg-cerulean-950 text-cerulean-700 dark:text-cerulean-300 flex items-center justify-center">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    Therapist Review Deck
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Asynchronous feedback from qualified clinicians
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 p-4 space-y-2 text-xs">
                <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                  <span>Dr. Sarah Chen, SLT</span>
                  <span className="text-slate-400 dark:text-slate-500 font-normal">Yesterday at 17:15</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  &ldquo;Notice how releasing breath before the vowel dissolved the tension on &apos;open&apos; before it formed. Maintain this exact pacing in your morning drills.&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-slate-100 dark:border-slate-800 p-3 bg-slate-50/50 dark:bg-slate-800/40">
                  <span className="font-bold text-slate-900 dark:text-slate-100 block text-base">83%</span>
                  <span className="text-slate-500 dark:text-slate-400">Home adherence rate</span>
                </div>
                <div className="rounded-xl border border-slate-100 dark:border-slate-800 p-3 bg-slate-50/50 dark:bg-slate-800/40">
                  <span className="font-bold text-slate-900 dark:text-slate-100 block text-base">&lt; 24h</span>
                  <span className="text-slate-500 dark:text-slate-400">Average review response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Health-Tech Principles */}
      <section className="py-20 bg-white border-t border-slate-200 dark:bg-slate-950 dark:border-slate-800 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Our Ethical Standards
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Trust Built on Scientific Honesty
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                No &ldquo;Cure&rdquo; Claims
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Stammering is not a disease to be &ldquo;cured&rdquo;. We focus on communicative ease, self-advocacy, reduction of physical struggle, and building speaking confidence.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers className="h-5 w-5 text-cerulean-600 dark:text-cerulean-400" />
                Distinct Diagnostic Boundaries
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We never conflate articulation placement with developmental fluency. Each pathway is built on distinct therapeutic literature and clinical protocols.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <HeartHandshake className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                Patient Self-Determination
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Users choose their own communication goals — whether that is ordering at a restaurant without avoidance or mastering alveolar placement for /s/.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-tr from-brand-900 via-slate-900 to-cerulean-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to experience a calmer approach to speech practice?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Explore our interactive user dashboard or therapist demo portal today with realistic clinical data.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/dashboard">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white font-medium px-8 shadow-lg">
                Enter User Practice Hub
              </Button>
            </Link>
            <Link href="/therapist">
              <Button size="lg" variant="outline" className="border-slate-500 text-slate-200 hover:bg-slate-800">
                Enter Therapist Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
