"use client";

import * as React from "react";
import { Flame, Stethoscope, Sparkles, SlidersHorizontal, ArrowLeftRight } from "lucide-react";
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
    <div className="rounded-[28px] border border-[#D5E1E6] bg-white p-6 sm:p-8 shadow-card dark:border-[#304653] dark:bg-midnight-surface transition-colors text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left greeting & pathway */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge
              variant={isStammering ? "ocean" : "softblue"}
              className="px-3 py-1 text-xs uppercase tracking-wide font-semibold"
            >
              {isStammering ? "Stammering & Fluency Pathway" : "Articulation & Lisping Pathway"}
            </Badge>

            {user.assignedTherapist && (
              <span className="inline-flex items-center gap-1.5 text-xs text-stone dark:text-[#BDCBD2] font-medium bg-porcelain dark:bg-midnight-deep px-3 py-1 rounded-full border border-[#D5E1E6] dark:border-[#304653]">
                <Stethoscope className="h-3.5 w-3.5 text-ocean dark:text-softblue" aria-hidden="true" />
                <span>Collaborating with {user.assignedTherapist.name}</span>
              </span>
            )}
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-midnight dark:text-white">
            Welcome back, <span className="text-ocean dark:text-softblue">{user.name}</span>
          </h1>

          <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] max-w-2xl leading-relaxed">
            {isStammering
              ? "Today's practice focuses on gentle vocal onsets and continuous voicing across phrases. Remember: steady, patient micro-practices build lasting ease."
              : "Today's practice focuses on central tongue placement and airflow channeling for clear, comfortable sibilant production."}
          </p>
        </div>

        {/* Right Pathway Switcher & Practice Habit Highlights */}
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center gap-3">
          {/* Pathway switcher pill */}
          <div className="bg-porcelain dark:bg-midnight-deep p-2.5 rounded-2xl border border-[#D5E1E6] dark:border-[#304653] shadow-subtle flex flex-col gap-1.5 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-stone/70 dark:text-[#BDCBD2]/70">
              Active Pathway Focus
            </span>
            <div
              role="radiogroup"
              aria-label="Active Pathway Focus"
              className="inline-flex p-1 bg-white dark:bg-midnight-surface rounded-xl border border-[#D5E1E6] dark:border-[#304653]"
            >
              <button
                type="button"
                role="radio"
                aria-checked={isStammering}
                onClick={() => onTogglePathway("stammering")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  isStammering
                    ? "bg-ocean text-white shadow-subtle"
                    : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
                }`}
              >
                Stammering
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={!isStammering}
                onClick={() => onTogglePathway("articulation")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  !isStammering
                    ? "bg-ocean text-white shadow-subtle"
                    : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
                }`}
              >
                Articulation / Lisp
              </button>
            </div>
          </div>

          {/* Supportive Consistency Pill */}
          <div className="bg-porcelain dark:bg-midnight-deep p-3.5 rounded-2xl border border-[#D5E1E6] dark:border-[#304653] shadow-subtle flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist dark:bg-midnight-surface text-ocean dark:text-softblue border border-[#D5E1E6] dark:border-[#304653]">
              <Flame className="h-6 w-6 text-terracotta" aria-hidden="true" />
            </div>
            <div className="text-left">
              <div className="font-heading text-lg font-bold text-midnight dark:text-white">
                {user.streakDays} Days
              </div>
              <div className="text-xs text-stone dark:text-[#BDCBD2] font-medium">
                Calm Practice Habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
