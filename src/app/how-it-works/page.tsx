import * as React from "react";
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
  HeartHandshake,
  Compass,
  Target,
  Clock,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      title: "Communication Preferences & Goals Check-in",
      description:
        "Begin with a calm, non-diagnostic check-in. Identify everyday speaking situations where you want greater ease—ordering food, work presentations, or phone calls—and select your dedicated pathway.",
      badge: "Personal Focus",
      icon: Target,
    },
    {
      step: "02",
      title: "Daily 10-Minute Asynchronous Micro-Drills",
      description:
        "Practice in our pressure-free web studio. Guided visual prompts, continuous voicing waveforms, and gentle stopwatches let you repeat techniques consistently without vocal fatigue.",
      badge: "Consistent Practice",
      icon: Mic,
    },
    {
      step: "03",
      title: "Optional Clinician Asynchronous Feedback",
      description:
        "Connect with a qualified Speech-Language Therapist using an invite code. Share selected practice recordings for timestamped clinician notes and customized exercise prescriptions between visits.",
      badge: "Clinical Bridge",
      icon: Stethoscope,
    },
    {
      step: "04",
      title: "Confidence Journaling & Real-World Carryover",
      description:
        "Document everyday communication victories in your private journal. Track physical ease, note tension reduction on a 1–5 scale, and practice situational self-advocacy without chasing mechanical perfection.",
      badge: "Life Carryover",
      icon: BookMarked,
    },
  ];

  const techniques = [
    {
      name: "Gentle Vocal Onset",
      pathway: "Stammering Support",
      summary: "Initiating vowel sounds with relaxed vocal fold approximation and light preliminary airflow to prevent sudden glottal blocking.",
      benefit: "Reduces physical struggle and laryngeal tension during speech initiation.",
    },
    {
      name: "Continuous Phonation",
      pathway: "Stammering Support",
      summary: "Maintaining steady vocal cord vibration across consonant-vowel transitions rather than stopping voicing between words.",
      benefit: "Smoothes aerodynamic flow and builds connected speech rhythm.",
    },
    {
      name: "Voluntary Stuttering (Easy Bouncing)",
      pathway: "Stammering Support",
      summary: "Deliberately and loosely repeating sounds in a controlled, relaxed manner to demystify speech blocks and reduce anticipatory fear.",
      benefit: "Dismantles panic, shame, and physical avoidance in everyday conversations.",
    },
    {
      name: "Alveolar Contact & Central Airflow",
      pathway: "Articulation Support",
      summary: "Guiding the tongue tip to anchor securely on the alveolar ridge behind the upper teeth while channeling airflow down the center.",
      benefit: "Eliminates frontal tongue protrusion and lateral slushiness on sibilants like /s/ and /z/.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#F7F9F8] dark:bg-[#111D25] text-midnight dark:text-[#F2F6F7] min-h-screen transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="ocean" className="px-3.5 py-1 text-xs">
            Evidence-Informed Methodology
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-midnight dark:text-white leading-tight">
            How VocalRise Works
          </h1>
          <p className="text-base sm:text-lg text-stone dark:text-[#BDCBD2] leading-relaxed">
            A structured, human-centred framework designed to turn speech techniques into sustainable daily habits through low-pressure repetition and optional clinician collaboration.
          </p>
        </div>

        {/* 4-Step Narrative Flow */}
        <div className="space-y-8">
          <SectionHeading
            badge="The 4-Stage Pathway"
            title="A calm, step-by-step approach to speech ease"
            subtitle="Designed around your everyday life, personal agency, and communication freedom."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-6 shadow-subtle flex flex-col justify-between space-y-6 hover:border-ocean/40 dark:hover:border-softblue/40 transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-3xl font-extrabold text-ocean dark:text-softblue">
                        {st.step}
                      </span>
                      <Badge variant="mist" className="text-[10px]">
                        {st.badge}
                      </Badge>
                    </div>
                    <div className="h-9 w-9 rounded-xl bg-mist dark:bg-midnight-deep text-ocean dark:text-softblue flex items-center justify-center">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-midnight dark:text-white">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                      {st.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E7EFF2] dark:border-[#304653] flex items-center text-xs font-semibold text-ocean dark:text-softblue">
                    Stage {idx + 1} of 4
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Signature Technique Showcases */}
        <div className="space-y-8">
          <SectionHeading
            badge="Core Techniques"
            title="Evidence-informed drills for speech ease"
            subtitle="Explore how specific motor and desensitization techniques are structured in the practice studio."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {techniques.map((tech, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-7 shadow-subtle space-y-4 text-left"
              >
                <div className="flex items-center justify-between gap-2">
                  <Badge variant={tech.pathway.includes("Stammering") ? "ocean" : "softblue"} className="text-xs">
                    {tech.pathway}
                  </Badge>
                  <span className="text-xs text-stone dark:text-[#BDCBD2] font-mono">
                    Technique 0{idx + 1}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-midnight dark:text-white">
                  {tech.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                  {tech.summary}
                </p>
                <div className="pt-3 border-t border-[#E7EFF2] dark:border-[#304653] text-xs text-midnight dark:text-[#F2F6F7]">
                  <strong className="text-ocean dark:text-softblue">Primary Benefit: </strong>
                  <span>{tech.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motor Learning & Participation Deep Dive */}
        <div className="rounded-[32px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-8 sm:p-12 shadow-card space-y-8">
          <div className="max-w-3xl space-y-3 text-left">
            <Badge variant="terracotta" className="text-xs">
              Scientific Rationale
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-midnight dark:text-white">
              Why 10 minutes of daily home practice builds sustainable ease
            </h2>
            <p className="text-sm sm:text-base text-stone dark:text-[#BDCBD2] leading-relaxed">
              Motor learning and speech psychology research demonstrate that brief, low-pressure daily repetition (10 minutes, 4–5 days a week) yields greater retention and lower speaking anxiety than relying solely on infrequent clinical visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="rounded-2xl bg-porcelain dark:bg-midnight-deep p-6 space-y-2.5 border border-[#D5E1E6] dark:border-[#304653] text-left">
              <span className="font-heading text-base font-bold text-midnight dark:text-white block">
                Neuro-Motor Plasticity
              </span>
              <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                Repetitive, calm activation of motor pathways reinforces relaxed vocal fold vibration and precise tongue placement without tension.
              </p>
            </div>

            <div className="rounded-2xl bg-porcelain dark:bg-midnight-deep p-6 space-y-2.5 border border-[#D5E1E6] dark:border-[#304653] text-left">
              <span className="font-heading text-base font-bold text-midnight dark:text-white block">
                Desensitization to Speech Fear
              </span>
              <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                Voluntary stuttering and reflective self-observation gradually dissolve anticipatory anxiety around speaking blocks in real life.
              </p>
            </div>

            <div className="rounded-2xl bg-porcelain dark:bg-midnight-deep p-6 space-y-2.5 border border-[#D5E1E6] dark:border-[#304653] text-left">
              <span className="font-heading text-base font-bold text-midnight dark:text-white block">
                Asynchronous Clinician Bridge
              </span>
              <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                Speech therapists can hear natural home practice recordings rather than relying solely on patient recall or in-clinic performance.
              </p>
            </div>
          </div>
        </div>

        {/* Prototype Interactive Demo CTA */}
        <div className="rounded-[32px] bg-midnight dark:bg-midnight-deep text-white p-8 sm:p-12 border border-[#304653] shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-xs font-medium text-white/90">
              <Sparkles className="h-3.5 w-3.5 text-softblue" aria-hidden="true" />
              <span>Interactive Prototype Preview</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Experience the practice flow in real time
            </h3>
            <p className="text-xs sm:text-sm text-mist/80 max-w-xl">
              Explore our interactive practice studio or review deck using realistic prototype demonstration data.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-midnight hover:bg-mist font-semibold shadow-elevated gap-2">
                <span>Launch Practice Studio</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/therapist">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Clinician Portal Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
