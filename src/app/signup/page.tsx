"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Waves,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  UserCircle2,
  Stethoscope,
  Sparkles,
  Lock,
  Mail,
  User,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SpeechPathway } from "@/types/practice";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pathway, setPathway] = React.useState<SpeechPathway>("stammering");
  const [isTherapist, setIsTherapist] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (isTherapist) {
        router.push("/therapist");
      } else {
        router.push("/dashboard");
      }
    }, 500);
  };

  return (
    <div className="flex-1 min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#F7F9F8] dark:bg-[#111D25] text-midnight dark:text-[#F2F6F7] transition-colors">
      <div className="w-full max-w-lg space-y-6">
        {/* Header with Logo */}
        <div className="text-center space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 mb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean dark:focus-visible:ring-softblue rounded-xl p-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ocean text-white shadow-subtle">
              <Waves className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="font-heading text-2xl font-bold tracking-tight text-midnight dark:text-white">
              Vocal<span className="text-ocean dark:text-softblue">Rise</span>
            </span>
          </Link>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-midnight dark:text-white">
            Begin Your Practice Journey
          </h1>
          <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2]">
            Structured daily technique routines designed for lasting communication confidence
          </p>
        </div>

        {/* Prototype Exploration Banner */}
        <div className="rounded-2xl border border-ocean/30 bg-mist/60 dark:border-softblue/30 dark:bg-midnight-surface p-3.5 text-xs text-stone dark:text-[#BDCBD2] flex items-start gap-2.5 text-left shadow-subtle">
          <Info className="h-4 w-4 text-ocean dark:text-softblue shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-0.5">
            <strong className="text-midnight dark:text-white block">
              Prototype Demonstration — Instant Client Session
            </strong>
            <p className="text-[11px] leading-relaxed">
              Submitting initializes an interactive in-browser practice workspace. No real personal data, credit cards, or external verification are required.
            </p>
          </div>
        </div>

        {/* Elevated Form Card */}
        <div className="rounded-[32px] border border-[#D5E1E6] dark:border-[#304653] bg-white dark:bg-midnight-surface p-6 sm:p-8 shadow-card space-y-6 text-left">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Account Type Toggle */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E7EFF2] dark:border-[#304653] text-xs">
              <span className="font-semibold text-stone dark:text-[#BDCBD2]">Select Account Role:</span>
              <div
                role="radiogroup"
                aria-label="Account Role"
                className="flex items-center gap-1.5 bg-porcelain dark:bg-midnight-deep p-1 rounded-xl border border-[#D5E1E6] dark:border-[#304653]"
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked={!isTherapist}
                  onClick={() => setIsTherapist(false)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    !isTherapist
                      ? "bg-ocean text-white shadow-subtle"
                      : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
                  }`}
                >
                  <UserCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Speaker</span>
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={isTherapist}
                  onClick={() => setIsTherapist(true)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isTherapist
                      ? "bg-ocean text-white shadow-subtle"
                      : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
                  }`}
                >
                  <Stethoscope className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Therapist</span>
                </button>
              </div>
            </div>

            {/* Pathway Selector (Speaker Role only) */}
            {!isTherapist && (
              <div className="space-y-2.5">
                <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider block">
                  Select Initial Focus Pathway
                </label>
                <div
                  role="radiogroup"
                  aria-label="Initial Speech Pathway"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <div
                    role="radio"
                    aria-checked={pathway === "stammering"}
                    tabIndex={0}
                    onClick={() => setPathway("stammering")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setPathway("stammering");
                      }
                    }}
                    className={`cursor-pointer rounded-2xl border p-4 space-y-1.5 transition-all outline-none focus-visible:ring-2 focus-visible:ring-ocean ${
                      pathway === "stammering"
                        ? "border-ocean bg-mist/60 dark:border-softblue dark:bg-midnight-deep shadow-subtle ring-1 ring-ocean/30"
                        : "border-[#D5E1E6] dark:border-[#304653] bg-white dark:bg-midnight-surface hover:border-ocean/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xs font-bold text-midnight dark:text-white">
                        Stammering Support
                      </span>
                      {pathway === "stammering" && (
                        <CheckCircle2 className="h-4 w-4 text-ocean dark:text-softblue" aria-hidden="true" />
                      )}
                    </div>
                    <p className="text-[11px] text-stone dark:text-[#BDCBD2] leading-relaxed">
                      Fluency modification, gentle vocal onsets, and desensitization.
                    </p>
                  </div>

                  <div
                    role="radio"
                    aria-checked={pathway === "articulation"}
                    tabIndex={0}
                    onClick={() => setPathway("articulation")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setPathway("articulation");
                      }
                    }}
                    className={`cursor-pointer rounded-2xl border p-4 space-y-1.5 transition-all outline-none focus-visible:ring-2 focus-visible:ring-ocean ${
                      pathway === "articulation"
                        ? "border-ocean bg-mist/60 dark:border-softblue dark:bg-midnight-deep shadow-subtle ring-1 ring-ocean/30"
                        : "border-[#D5E1E6] dark:border-[#304653] bg-white dark:bg-midnight-surface hover:border-ocean/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xs font-bold text-midnight dark:text-white">
                        Articulation & Lisp
                      </span>
                      {pathway === "articulation" && (
                        <CheckCircle2 className="h-4 w-4 text-ocean dark:text-softblue" aria-hidden="true" />
                      )}
                    </div>
                    <p className="text-[11px] text-stone dark:text-[#BDCBD2] leading-relaxed">
                      Frontal/lateral lisps, alveolar contact, and sound carryover.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider block mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 h-4 w-4 text-stone/50 dark:text-[#BDCBD2]/50" aria-hidden="true" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white pl-10 pr-4 py-2.5 text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue dark:focus:ring-softblue/20 outline-none transition-colors"
                  placeholder="e.g. Alex Morgan"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider block mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-stone/50 dark:text-[#BDCBD2]/50" aria-hidden="true" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white pl-10 pr-4 py-2.5 text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue dark:focus:ring-softblue/20 outline-none transition-colors"
                  placeholder="alex@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider block mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-stone/50 dark:text-[#BDCBD2]/50" aria-hidden="true" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white pl-10 pr-4 py-2.5 text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue dark:focus:ring-softblue/20 outline-none transition-colors"
                  placeholder="Create a password for this device"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              size="lg"
              className="w-full font-semibold shadow-subtle gap-2 mt-3"
            >
              {isLoading ? (
                <span>Initializing practice environment...</span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <span>Start Practice Session</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              )}
            </Button>
          </form>

          <div className="text-center text-xs text-stone dark:text-[#BDCBD2] pt-2 border-t border-[#E7EFF2] dark:border-[#304653]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-ocean dark:text-softblue hover:underline"
            >
              Log in &rarr;
            </Link>
          </div>
        </div>

        {/* Privacy micro-reassurance */}
        <div className="text-center text-[11px] text-stone/70 dark:text-[#BDCBD2]/70 flex items-center justify-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-ocean dark:text-softblue" aria-hidden="true" />
          <span>Your voice data belongs to you. Zero audio is stored in unencrypted local storage.</span>
        </div>
      </div>
    </div>
  );
}
