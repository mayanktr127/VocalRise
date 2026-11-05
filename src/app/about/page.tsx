import Link from "next/link";
import {
  Waves,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  Award,
  Users,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Sarah Chen, PhD, CCC-SLP",
      role: "Clinical Director & Fluency Specialist",
      bio: "20+ years of clinical practice specializing in fluency disorders and stammering modification protocols.",
    },
    {
      name: "David O'Reilly, MS, Reg-SLT",
      role: "Head of Motor Speech & Articulation",
      bio: "Speech pathologist focused on phonetic placement and pediatric-to-adult sibilant rehabilitation.",
    },
    {
      name: "Amara Okonkwo",
      role: "Founder & Health-Tech Architect",
      bio: "Adult who stammers, passionate about building accessible, dignified digital health experiences.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal" className="px-3.5 py-1">
            Our Mission & Clinical Advisory
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Building Speech Care with Dignity and Scientific Honesty
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            VocalRise was born out of personal lived experience with stammering and deep clinical respect for Speech-Language Therapy.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-slate-200/90 bg-white dark:border-slate-800 dark:bg-slate-900 p-8 space-y-3 shadow-subtle">
            <div className="h-10 w-10 rounded-xl bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Zero Unethical &ldquo;Cure&rdquo; Claims
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We do not treat speech differences as defects to be erased. We provide tools to dismantle panic, physical struggle, and avoidance so everyone can express themselves freely.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/90 bg-white dark:border-slate-800 dark:bg-slate-900 p-8 space-y-3 shadow-subtle">
            <div className="h-10 w-10 rounded-xl bg-cerulean-100 dark:bg-cerulean-950 text-cerulean-700 dark:text-cerulean-300 flex items-center justify-center">
              <Stethoscope className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Therapist-First Collaboration
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We never position technology as a replacement for qualified human clinicians. We build software that amplifies the clinical relationship between weekly sessions.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/90 bg-white dark:border-slate-800 dark:bg-slate-900 p-8 space-y-3 shadow-subtle">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Respectful Neurodiversity
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We honor every individual&apos;s personal voice. Our users decide what communicative success looks like for their own lives and careers.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
              Clinical Advisory & Leadership
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Combining certified speech-language therapy expertise with thoughtful product engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white dark:border-slate-800 dark:bg-slate-900 p-6 space-y-3 shadow-subtle text-center"
              >
                <div className="h-16 w-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold text-xl flex items-center justify-center mx-auto border border-slate-200 dark:border-slate-700">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">
                    {member.name}
                  </h4>
                  <p className="text-xs text-brand-700 dark:text-brand-400 font-medium">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-slate-900 dark:bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold">Partner with VocalRise</h3>
          <p className="text-sm text-slate-400">
            Are you a clinic director, private speech therapist, or hospital team? Explore our clinician portal or connect with our clinical team.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link href="/therapist">
              <Button size="lg" className="bg-cerulean-500 hover:bg-cerulean-600 text-white">
                View Therapist Portal Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
