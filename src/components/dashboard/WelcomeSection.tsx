"use client";

import * as React from "react";
import { Flame, Clock, Stethoscope, Sparkles, SlidersHorizontal, ArrowLeftRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/types/user";
import { SpeechPathway } from "@/types/practice";

interface WelcomeSectionProps {
  user: UserProfile;
  currentPathway: SpeechPathway;
  onTogglePathway: (pathway: SpeechPathway) => void;
}

export function WelcomeSection({
  user,
  currentPathway,
  onTogglePathway,
}: WelcomeSectionProps) {
  const isStammering = currentPathway === "stammering";

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50 to-brand-50/30 p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-brand-950/20 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left greeting & pathway */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge
              variant={isStammering ? "teal" : "cerulean"}
              className="px-3 py-1 text-xs uppercase tracking-wide font-semibold"
            >
              {isStammering ? "Stammering & Fluency Pathway" : "Articulation & Lisping Pathway"}
            </Badge>

            {user.assignedTherapist && (
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium bg-white dark:bg-slate-850 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                <Stethoscope className="h-3.5 w-3.5 text-cerulean-600 dark:text-cerulean-400" />
                Collaborating with {user.assignedTherapist.name}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Welcome back, <span className="text-brand-700 dark:text-brand-400">{user.name}</span>
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {isStammering
              ? "Today's focus is on gentle vocal onsets and reducing tension during vowel transitions. Steady, patient micro-practices create lasting ease."
              : "Today's focus is on central tongue placement and air groove channeling for clear, comfortable sibilant production."}
          </p>
        </div>

        {/* Right Pathway Switcher & Streak Highlights */}
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center gap-3">
          {/* Quick pathway toggle */}
          <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-subtle flex flex-col gap-1.5 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Active Pathway Switch
            </span>
            <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              <button
                onClick={() => onTogglePathway("stammering")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  isStammering
                    ? "bg-white text-brand-700 shadow-sm dark:bg-slate-700 dark:text-brand-300"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                Stammering
              </button>
              <button
                onClick={() => onTogglePathway("articulation")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  !isStammering
                    ? "bg-white text-cerulean-700 shadow-sm dark:bg-slate-700 dark:text-cerulean-300"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                Articulation / Lisp
              </button>
            </div>
          </div>

          {/* Streak pill */}
          <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-subtle flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {user.streakDays} Days
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Consistent Routine
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
