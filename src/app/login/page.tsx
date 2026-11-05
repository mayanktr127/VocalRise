"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Waves,
  ShieldCheck,
  UserCircle2,
  Stethoscope,
  ArrowRight,
  Lock,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = React.useState<"patient" | "therapist">("patient");
  const [email, setEmail] = React.useState("julian.mercer@example.com");
  const [password, setPassword] = React.useState("••••••••••••");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleRoleChange = (selectedRole: "patient" | "therapist") => {
    setRole(selectedRole);
    if (selectedRole === "patient") {
      setEmail("julian.mercer@example.com");
    } else {
      setEmail("dr.chen@harborfluency.org");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (role === "patient") {
        router.push("/dashboard");
      } else {
        router.push("/therapist");
      }
    }, 600);
  };

  return (
    <div className="flex-1 min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="w-full max-w-md space-y-6">
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
            Welcome back
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Sign in to continue your speech practice or clinical caseload review
          </p>
        </div>

        {/* Role Selector Pill */}
        <div className="bg-slate-200/80 dark:bg-slate-800 p-1 rounded-2xl flex text-xs font-semibold">
          <button
            type="button"
            onClick={() => handleRoleChange("patient")}
            className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${
              role === "patient"
                ? "bg-white text-brand-700 shadow-sm dark:bg-slate-700 dark:text-brand-300"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            <UserCircle2 className="h-4 w-4" />
            Patient / Practice Hub
          </button>
          <button
            type="button"
            onClick={() => handleRoleChange("therapist")}
            className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${
              role === "therapist"
                ? "bg-white text-cerulean-700 shadow-sm dark:bg-slate-700 dark:text-cerulean-300"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            <Stethoscope className="h-4 w-4" />
            Therapist Portal
          </button>
        </div>

        {/* Card Box */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Password
                </label>
                <span className="text-xs text-brand-600 dark:text-brand-400 hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 pl-10 pr-4 py-2.5 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2.5 rounded-xl text-white font-semibold transition-all ${
                role === "patient"
                  ? "bg-brand-600 hover:bg-brand-700"
                  : "bg-cerulean-600 hover:bg-cerulean-700"
              }`}
            >
              {isLoading ? (
                "Signing in..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Sign in as {role === "patient" ? "Patient" : "Therapist"}
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>

          {/* Quick Demo Login Hint */}
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 p-3.5 text-xs text-slate-600 dark:text-slate-400 space-y-1">
            <span className="font-semibold text-slate-800 dark:text-slate-200 block">
              Demo Mode Active:
            </span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Clicking &ldquo;Sign in&rdquo; will immediately launch the pre-populated{" "}
              {role === "patient" ? "Patient Practice Hub" : "Therapist Caseload Portal"}.
            </p>
          </div>

          <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            Don&apos;t have an account yet?{" "}
            <Link href="/signup" className="font-semibold text-brand-600 dark:text-brand-400 hover:underline">
              Create an account &rarr;
            </Link>
          </div>
        </div>

        {/* Medical disclaimer note */}
        <div className="text-center text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
          <span>Encrypted, privacy-first communication platform</span>
        </div>
      </div>
    </div>
  );
}
