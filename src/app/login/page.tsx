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
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = React.useState<"patient" | "therapist">("patient");
  const [email, setEmail] = React.useState("demo.speaker@example.com");
  const [password, setPassword] = React.useState("••••••••••••");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showForgotModal, setShowForgotModal] = React.useState(false);

  const handleRoleChange = (selectedRole: "patient" | "therapist") => {
    setRole(selectedRole);
    if (selectedRole === "patient") {
      setEmail("demo.speaker@example.com");
    } else {
      setEmail("demo.therapist@example.com");
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
    }, 500);
  };

  return (
    <div className="flex-1 min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#F7F9F8] dark:bg-[#111D25] text-midnight dark:text-[#F2F6F7] transition-colors">
      <div className="w-full max-w-md space-y-6">
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
            Welcome back
          </h1>
          <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2]">
            Sign in to continue your speech practice or caseload review
          </p>
        </div>

        {/* Prototype Demo Disclosure Banner */}
        <div className="rounded-2xl border border-ocean/30 bg-mist/60 dark:border-softblue/30 dark:bg-midnight-surface p-3.5 text-xs text-stone dark:text-[#BDCBD2] flex items-start gap-2.5 text-left shadow-subtle">
          <Info className="h-4 w-4 text-ocean dark:text-softblue shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-0.5">
            <strong className="text-midnight dark:text-white block">
              Simulation Only — Fictional Demo Accounts
            </strong>
            <p className="text-[11px] leading-relaxed">
              This prototype runs in local client memory. Credentials below are fictional simulation profiles pre-configured to let you explore the interface instantly.
            </p>
          </div>
        </div>

        {/* Role Selector Pill Tabs */}
        <div
          role="tablist"
          aria-label="Select Demo Role"
          className="bg-white dark:bg-midnight-surface p-1.5 rounded-2xl border border-[#D5E1E6] dark:border-[#304653] shadow-subtle flex text-xs font-semibold"
        >
          <button
            type="button"
            role="tab"
            aria-selected={role === "patient"}
            onClick={() => handleRoleChange("patient")}
            className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${
              role === "patient"
                ? "bg-ocean text-white shadow-subtle"
                : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
            }`}
          >
            <UserCircle2 className="h-4 w-4" aria-hidden="true" />
            <span>Speaker / Practice Hub</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={role === "therapist"}
            onClick={() => handleRoleChange("therapist")}
            className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${
              role === "therapist"
                ? "bg-ocean text-white shadow-subtle"
                : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
            }`}
          >
            <Stethoscope className="h-4 w-4" aria-hidden="true" />
            <span>Therapist Portal</span>
          </button>
        </div>

        {/* Elevated Card Box */}
        <div className="rounded-[32px] border border-[#D5E1E6] dark:border-[#304653] bg-white dark:bg-midnight-surface p-6 sm:p-8 shadow-card space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider block mb-1.5">
                Email Address (Fictional Demo Account)
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-stone/50 dark:text-[#BDCBD2]/50" aria-hidden="true" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white pl-10 pr-4 py-2.5 text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue dark:focus:ring-softblue/20 outline-none transition-colors"
                  placeholder="demo.speaker@example.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-xs text-ocean dark:text-softblue hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ocean rounded-sm"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-stone/50 dark:text-[#BDCBD2]/50" aria-hidden="true" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white pl-10 pr-4 py-2.5 text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue dark:focus:ring-softblue/20 outline-none transition-colors"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              size="lg"
              className="w-full font-semibold shadow-subtle gap-2 mt-2"
            >
              {isLoading ? (
                <span>Loading demo environment...</span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <span>Sign in as {role === "patient" ? "Speaker" : "Therapist"}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              )}
            </Button>
          </form>

          {/* Demo Hint */}
          <div className="rounded-2xl bg-porcelain dark:bg-midnight-deep border border-[#E7EFF2] dark:border-[#304653] p-3.5 text-xs text-stone dark:text-[#BDCBD2] space-y-1 text-left">
            <span className="font-semibold text-midnight dark:text-white block">
              Simulation Status:
            </span>
            <p className="text-[11px] leading-relaxed">
              Clicking &ldquo;Sign in&rdquo; immediately launches the pre-populated{" "}
              {role === "patient" ? "Patient Practice Hub" : "Therapist Caseload Portal"}.
            </p>
          </div>

          <div className="text-center text-xs text-stone dark:text-[#BDCBD2] pt-2 border-t border-[#E7EFF2] dark:border-[#304653]">
            Don&apos;t have an account yet?{" "}
            <Link
              href="/signup"
              className="font-semibold text-ocean dark:text-softblue hover:underline"
            >
              Explore account setup &rarr;
            </Link>
          </div>
        </div>

        {/* Privacy micro-reassurance */}
        <div className="text-center text-[11px] text-stone/70 dark:text-[#BDCBD2]/70 flex items-center justify-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-ocean dark:text-softblue" aria-hidden="true" />
          <span>Private by default • In-memory audio processing • Zero local storage voice data</span>
        </div>
      </div>

      {/* Accessible Informational Modal for Forgot Password Simulation */}
      <Modal
        isOpen={showForgotModal}
        onClose={() => setShowForgotModal(false)}
        title="Prototype Password Simulation"
        description="Information regarding authentication in this demonstration build."
      >
        <div className="space-y-3.5 text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed text-left">
          <p>
            VocalRise is currently running as an interactive front-end prototype. No active identity directory or email dispatch server is connected.
          </p>
          <p>
            You do not need to reset credentials or verify an email address. Simply use the pre-populated fictional credentials (<code>demo.speaker@example.com</code> or <code>demo.therapist@example.com</code>) to enter the respective demonstration spaces.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowForgotModal(false)}
              className="w-full"
            >
              Return to Sign In
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
