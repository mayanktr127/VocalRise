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
  Sparkles,
  Lock,
  Mail,
  User,
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
    }, 600);
  };

  return (
    <div className="flex-1 min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="w-full max-w-lg space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-600 to-cerulean-600 text-white shadow-sm">
              <Waves className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Vocal<span className="text-brand-600 dark:text-brand-400">Rise</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Begin Your Practice Journey
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Structured daily technique routines designed for lasting communication confidence
          </p>
        </div>

        {/* Card Box */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Account Type Toggle */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Account Type:</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsTherapist(false)}
                  className={`px-3 py-1 rounded-lg font-medium transition-all ${
                    !isTherapist
                      ? "bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300 font-bold"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                >
                  Individual
                </button>
                <button
                  type="button"
                  onClick={() => setIsTherapist(true)}
                  className={`px-3 py-1 rounded-lg font-medium transition-all ${
                    isTherapist
                      ? "bg-cerulean-50 text-cerulean-700 dark:bg-cerulean-950 dark:text-cerulean-300 font-bold"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                >
                  Speech Therapist
                </button>
              </div>
            </div>

            {/* Pathway Selector (if not therapist) */}
            {!isTherapist && (
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                  Select Primary Focus Pathway
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => setPathway("stammering")}
                    className={`cursor-pointer rounded-2xl border p-3.5 space-y-1 transition-all ${
                      pathway === "stammering"
                        ? "border-brand-500 bg-brand-50/50 dark:border-brand-400 dark:bg-brand-950/40 shadow-sm"
                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      Stammering Support
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                      Fluency shaping, gentle onset & desensitization.
                    </p>
                  </div>

                  <div
                    onClick={() => setPathway("articulation")}
                    className={`cursor-pointer rounded-2xl border p-3.5 space-y-1 transition-all ${
                      pathway === "articulation"
                        ? "border-cerulean-500 bg-cerulean-50/50 dark:border-cerulean-400 dark:bg-cerulean-950/40 shadow-sm"
                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      Articulation & Lisp
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                      Frontal/lateral lisp & alveolar placement drills.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 pl-10 pr-4 py-2.5 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="e.g. Julian Mercer"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 pl-10 pr-4 py-2.5 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 pl-10 pr-4 py-2.5 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="Create a secure password"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 rounded-xl text-white font-semibold bg-brand-600 hover:bg-brand-700 transition-all mt-2"
            >
              {isLoading ? (
                "Setting up your practice environment..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Create Account & Start Practice
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>

          <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-brand-600 dark:text-brand-400 hover:underline">
              Log in &rarr;
            </Link>
          </div>
        </div>

        <div className="text-center text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
          <span>Compliant with health data confidentiality standards</span>
        </div>
      </div>
    </div>
  );
}
