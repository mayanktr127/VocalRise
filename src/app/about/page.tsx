import * as React from "react";
import Link from "next/link";
import {
  Waves,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  Award,
  Users,
  Sparkles,
  ArrowRight,
  Lock,
  Compass,
  FileCheck2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export default function AboutPage() {
  const principles = [
    {
      icon: ShieldCheck,
      title: "Zero Unethical 'Cure' Claims",
      description:
        "We reject toxic promises that treat stammering as a disease to be cured. We provide tools to dismantle panic, physical struggle, and avoidance so speakers can express themselves freely.",
      badgeVariant: "ocean" as const,
    },
    {
      icon: Stethoscope,
      title: "Clinician-First Collaboration",
      description:
        "Technology must never replace qualified human therapists. VocalRise is engineered to bridge weekly clinical visits with asynchronous practice notes and client-controlled audio sharing.",
      badgeVariant: "softblue" as const,
    },
    {
      icon: HeartHandshake,
      title: "Neurodiversity & Agency",
      description:
        "Every individual's communication voice is personal. Our users define what communicative success means for their own careers, social lives, and relationships.",
      badgeVariant: "terracotta" as const,
    },
    {
      icon: Lock,
      title: "Uncompromising Audio Privacy",
      description:
        "Your voice data belongs exclusively to you. Practice audio is processed in temporary browser memory with zero raw voice data stored in unencrypted browser storage.",
      badgeVariant: "ocean" as const,
    },
  ];

  const advisoryPillars = [
    {
      domain: "Fluency Modification & Speech Psychology",
      focus: "Stuttering modification protocols, desensitization ladders, and cognitive avoidance reduction.",
      standard: "Aligned with evidence from international fluency research and clinical literature.",
    },
    {
      domain: "Phonetic Placement & Motor Speech",
      focus: "Articulatory placement hierarchies, sibilant airflow channeling, and acoustic minimal pair discrimination.",
      standard: "Structured around motor learning principles and systematic generalization hierarchies.",
    },
    {
      domain: "Lived Experience & Neurodiversity Advocacy",
      focus: "Ensuring every screen, prompt, and exercise prioritizes emotional safety, dignity, and self-advocacy.",
      standard: "Guided by adults and teens with authentic lived experience of developmental stammering.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#F7F9F8] dark:bg-[#111D25] text-midnight dark:text-[#F2F6F7] min-h-screen transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="ocean" className="px-3.5 py-1 text-xs">
            Mission & Product Philosophy
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-midnight dark:text-white leading-tight">
            Building Speech Care with Dignity and Scientific Honesty
          </h1>
          <p className="text-base sm:text-lg text-stone dark:text-[#BDCBD2] leading-relaxed">
            VocalRise was born out of personal lived experience with developmental stammering and a deep respect for Speech-Language Therapy.
          </p>
        </div>

        {/* Co-Founder Lived Experience Story */}
        <div className="rounded-[32px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-8 sm:p-12 shadow-card max-w-5xl mx-auto space-y-6 text-left">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-mist dark:bg-midnight-deep text-ocean dark:text-softblue flex items-center justify-center">
              <Compass className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <span className="font-heading text-xs font-bold text-ocean dark:text-softblue uppercase tracking-wider block">
                The Origin Story
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-midnight dark:text-white">
                Why we created VocalRise
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-stone dark:text-[#BDCBD2] text-sm sm:text-base leading-relaxed">
            <p>
              Growing up with a severe stammer meant spending years navigating unexpected blocks, silent syllables, and the exhausting mental gymnastics of word substitution—ordering foods you dislike simply because the word &ldquo;coffee&rdquo; or &ldquo;water&rdquo; was stuck in your throat.
            </p>
            <p>
              While clinical speech therapy provided crucial techniques, the hardest challenge was never the 45-minute clinical appointment—it was carrying that calm into everyday life: meeting introductions, sudden telephone rings, or ordering at a busy counter.
            </p>
            <p>
              VocalRise was created to provide a calm, respectful bridge. A daily digital companion that removes high-pressure timers, rejects toxic cure promises, honors neurodiversity, and enables individuals to build genuine communicative ease alongside their qualified speech therapists.
            </p>
          </div>
        </div>

        {/* 4 Ethical Pillars */}
        <div className="space-y-8">
          <SectionHeading
            badge="Non-Negotiable Standards"
            title="Our Four Ethical Commitments"
            subtitle="The clinical and ethical boundaries that guide every product decision we make."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {principles.map((pr, idx) => {
              const Icon = pr.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-7 shadow-subtle space-y-4 text-left"
                >
                  <div className="h-10 w-10 rounded-xl bg-mist dark:bg-midnight-deep text-ocean dark:text-softblue flex items-center justify-center">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-midnight dark:text-white">
                    {pr.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                    {pr.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interdisciplinary Advisory Structure Vision */}
        <div className="rounded-[32px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-8 sm:p-12 shadow-card max-w-5xl mx-auto space-y-8 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-ocean/20 bg-mist px-3.5 py-1 text-xs font-semibold text-ocean dark:bg-midnight-deep dark:text-softblue">
              <span>Prototype Architecture • Interdisciplinary Advisory Structure</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-midnight dark:text-white">
              Grounded in Qualified Clinical Science
            </h2>
            <p className="text-sm sm:text-base text-stone dark:text-[#BDCBD2] leading-relaxed">
              VocalRise bridges clinical speech-language therapy, user-centred digital health software, and authentic lived experience. All exercise frameworks are designed around published clinical literature and professional standards (such as ASHA in North America, RCSLT in the UK, and RCI in India).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {advisingDomains(advisoryPillars)}
          </div>

          <div className="pt-4 border-t border-[#E7EFF2] dark:border-[#304653] text-xs text-stone dark:text-[#BDCBD2]">
            <strong className="text-midnight dark:text-white">Notice: </strong>
            <span>VocalRise is currently an interactive functional prototype. Clinical partnerships and clinician verification workflows will undergo independent validation against official national professional registries prior to commercial clinical deployment.</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-[32px] bg-midnight dark:bg-midnight-deep text-white p-8 sm:p-12 border border-[#304653] shadow-elevated text-center space-y-5 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-medium text-white/90">
            <Sparkles className="h-3.5 w-3.5 text-softblue" aria-hidden="true" />
            <span>Connect with VocalRise</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Explore our clinician portal or start your practice
          </h3>
          <p className="text-xs sm:text-sm text-mist/80 max-w-lg mx-auto leading-relaxed">
            Whether you are an individual speaker seeking calm practice or a speech therapist seeking between-session insights, our prototype is ready to explore.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-midnight hover:bg-mist font-semibold shadow-elevated px-8">
                Launch Practice Studio
              </Button>
            </Link>
            <Link href="/therapist" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-6">
                View Therapist Portal Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function advisingDomains(pillars: Array<{ domain: string; focus: string; standard: string }>) {
  return pillars.map((p, idx) => (
    <div
      key={idx}
      className="rounded-2xl bg-porcelain dark:bg-midnight-deep p-6 space-y-2.5 border border-[#D5E1E6] dark:border-[#304653] text-left"
    >
      <span className="font-heading text-sm font-bold text-midnight dark:text-white block">
        {p.domain}
      </span>
      <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
        {p.focus}
      </p>
      <span className="text-[11px] text-ocean dark:text-softblue font-medium block pt-1">
        {p.standard}
      </span>
    </div>
  ));
}
