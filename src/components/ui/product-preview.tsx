"use client";

import * as React from "react";
import {
  Mic,
  BookMarked,
  Stethoscope,
  Play,
  RotateCcw,
  Sparkles,
  Lock,
  Volume2,
  Calendar,
  MessageSquare,
  Info,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductPreviewProps {
  className?: string;
}

type TabId = "studio" | "journal" | "therapist";

export function ProductPreview({ className }: ProductPreviewProps) {
  const [activeTab, setActiveTab] = React.useState<TabId>("studio");
  const tabRefs = React.useRef<Record<TabId, HTMLButtonElement | null>>({
    studio: null,
    journal: null,
    therapist: null,
  });

  const tabs: Array<{ id: TabId; label: string; icon: React.ElementType }> = [
    { id: "studio", label: "Daily Practice Studio", icon: Mic },
    { id: "journal", label: "Confidence Journal", icon: BookMarked },
    { id: "therapist", label: "Clinician Review Deck", icon: Stethoscope },
  ];

  const selectTab = (id: TabId) => {
    setActiveTab(id);
    tabRefs.current[id]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent, currentId: TabId) => {
    const currentIndex = tabs.findIndex((t) => t.id === currentId);

    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % tabs.length;
      selectTab(tabs[nextIndex].id);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      selectTab(tabs[prevIndex].id);
    } else if (e.key === "Home") {
      e.preventDefault();
      selectTab(tabs[0].id);
    } else if (e.key === "End") {
      e.preventDefault();
      selectTab(tabs[tabs.length - 1].id);
    }
  };

  return (
    <div
      role="region"
      aria-label="Interactive Product Preview"
      className={cn(
        "w-full max-w-5xl mx-auto rounded-[32px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface shadow-elevated overflow-hidden",
        className
      )}
    >
      {/* Browser Chrome Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-5 sm:px-6 py-4 bg-[#F0F5F7] dark:bg-midnight-deep border-b border-[#D5E1E6] dark:border-[#304653]">
        {/* Window controls & URL bar */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-rose-400/90" />
            <span className="h-3 w-3 rounded-full bg-amber-400/90" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-midnight-surface border border-[#D5E1E6] dark:border-[#304653] text-[11px] font-mono text-stone dark:text-[#BDCBD2]">
            <Lock className="h-3 w-3 text-ocean dark:text-softblue" aria-hidden="true" />
            <span>vocalrise.app/practice</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#E7EFF2] dark:bg-[#15232C] text-stone dark:text-[#BDCBD2] border border-[#D5E1E6] dark:border-[#304653]">
            Illustrative Demo
          </span>
        </div>

        {/* Accessible Tab Controls (WAI-ARIA with Arrow, Home, End navigation) */}
        <div
          role="tablist"
          aria-label="Product feature preview tabs"
          className="flex items-center gap-1 p-1 rounded-xl bg-mist dark:bg-midnight-surface border border-[#D5E1E6] dark:border-[#304653] self-stretch sm:self-auto overflow-x-auto"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el;
                }}
                role="tab"
                id={`preview-tab-${tab.id}`}
                tabIndex={isSelected ? 0 : -1}
                aria-selected={isSelected}
                aria-controls={`preview-panel-${tab.id}`}
                onClick={() => selectTab(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, tab.id)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean dark:focus-visible:ring-softblue",
                  isSelected
                    ? "bg-white text-midnight shadow-subtle dark:bg-ocean dark:text-white"
                    : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
                )}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Tab Panels */}
      <div className="p-6 sm:p-8">
        {/* TAB 1: DAILY PRACTICE STUDIO */}
        {activeTab === "studio" && (
          <div
            id="preview-panel-studio"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby="preview-tab-studio"
            className="space-y-6 animate-in fade-in duration-200 outline-none"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E7EFF2] dark:border-[#304653]">
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <Badge variant="ocean">Gentle Phonation Technique</Badge>
                  <span className="text-[11px] text-stone dark:text-[#BDCBD2]">
                    [Illustrative Prototype View]
                  </span>
                </div>
                <h4 className="font-heading text-xl font-bold text-midnight dark:text-[#F2F6F7]">
                  Micro-Drill: Easy Onset with Continuous Phonation
                </h4>
                <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2]">
                  Focus on soft vocal initiation. Allow an easy &ldquo;h&rdquo; sound to precede your vowel voicing.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs px-2.5 py-1 rounded-md bg-mist dark:bg-midnight-deep font-mono text-midnight dark:text-mist">
                  00:24 / 02:00
                </span>
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" aria-label="Microphone active indicator" />
              </div>
            </div>

            {/* Prompt Card */}
            <div className="rounded-2xl bg-mist/40 dark:bg-midnight-deep/50 border border-[#D5E1E6] dark:border-[#304653] p-6 text-center space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone dark:text-[#BDCBD2]">
                Sample Practice Prompt
              </span>
              <p className="font-heading text-2xl sm:text-3xl font-medium text-midnight dark:text-[#F2F6F7]">
                &ldquo;Every morning brings calm focus.&rdquo;
              </p>
              <p className="text-xs text-ocean dark:text-softblue">
                Tip: Feel the air flow smoothly before phonation begins. Zero pressure to rush.
              </p>
            </div>

            {/* Simulated Live Waveform Bars */}
            <div className="space-y-1.5">
              <div className="h-16 flex items-center justify-center gap-1.5 px-4 bg-white dark:bg-midnight-surface rounded-xl border border-[#D5E1E6] dark:border-[#304653]">
                {[20, 35, 60, 85, 45, 30, 70, 95, 65, 40, 55, 80, 50, 25, 40, 70, 90, 60, 35, 20].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}%` }}
                    className={cn(
                      "w-1.5 rounded-full transition-all duration-150",
                      i > 6 && i < 14 ? "bg-ocean dark:bg-softblue" : "bg-[#D5E1E6] dark:bg-[#304653]"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-[11px] text-center text-stone/80 dark:text-[#BDCBD2]/80">
                Illustrative waveform visual for demonstration only.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="gap-1.5 text-xs">
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Sample Demo Audio</span>
                </Button>
                <Button size="sm" variant="ghost" className="gap-1.5 text-xs">
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Reset Exercise</span>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-stone dark:text-[#BDCBD2] hidden sm:inline">
                  Audio handled in temporary memory
                </span>
                <Button size="sm" variant="primary" className="text-xs">
                  Save Practice Note
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CONFIDENCE JOURNAL */}
        {activeTab === "journal" && (
          <div
            id="preview-panel-journal"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby="preview-tab-journal"
            className="space-y-6 animate-in fade-in duration-200 outline-none"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E7EFF2] dark:border-[#304653]">
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <Badge variant="terracotta">Personal Reflection</Badge>
                  <span className="text-[11px] text-stone dark:text-[#BDCBD2]">
                    [Fictional Demonstration Entries]
                  </span>
                </div>
                <h4 className="font-heading text-xl font-bold text-midnight dark:text-[#F2F6F7]">
                  Everyday Communication Log
                </h4>
                <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2]">
                  Reflect on speaking situations, self-advocacy moments, and ease—without pressure or scoring.
                </p>
              </div>
              <Button size="sm" variant="primary" className="text-xs">
                + New Log Entry
              </Button>
            </div>

            {/* Sample Journal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#D5E1E6] bg-mist/20 dark:border-[#304653] dark:bg-midnight-deep/40 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-ocean dark:text-softblue">Work Team Standup</span>
                  <span className="text-stone dark:text-[#BDCBD2]">Demo Log • Today</span>
                </div>
                <p className="text-sm text-midnight dark:text-[#F2F6F7] leading-relaxed">
                  &ldquo;Introduced our project update using voluntary pausing. Felt some tension on the first word, but let it release naturally instead of switching words.&rdquo;
                </p>
                <div className="flex items-center gap-2 pt-1 flex-wrap">
                  <Badge variant="secondary" className="text-[10px]">Tension: 2/5 (Low)</Badge>
                  <Badge variant="success" className="text-[10px]">Self-Advocacy Moment</Badge>
                  <span className="text-[10px] text-stone/80 dark:text-[#BDCBD2]/80">[Demo Entry]</span>
                </div>
              </div>

              <div className="rounded-2xl border border-[#D5E1E6] bg-mist/20 dark:border-[#304653] dark:bg-midnight-deep/40 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-ocean dark:text-softblue">Phone Call Inquiry</span>
                  <span className="text-stone dark:text-[#BDCBD2]">Demo Log • Yesterday</span>
                </div>
                <p className="text-sm text-midnight dark:text-[#F2F6F7] leading-relaxed">
                  &ldquo;Answered the unexpected call without letting it ring through to voicemail. Took a calm breath and paced my opening sentence.&rdquo;
                </p>
                <div className="flex items-center gap-2 pt-1 flex-wrap">
                  <Badge variant="secondary" className="text-[10px]">Tension: 3/5 (Moderate)</Badge>
                  <Badge variant="softblue" className="text-[10px]">Everyday Participation</Badge>
                  <span className="text-[10px] text-stone/80 dark:text-[#BDCBD2]/80">[Demo Entry]</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CLINICIAN REVIEW DECK */}
        {activeTab === "therapist" && (
          <div
            id="preview-panel-therapist"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby="preview-tab-therapist"
            className="space-y-6 animate-in fade-in duration-200 outline-none"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E7EFF2] dark:border-[#304653]">
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <Badge variant="ocean">Clinician Review Bridge</Badge>
                  <Badge variant="warning" className="text-[10px]">
                    [Simulated Permission — Demo State]
                  </Badge>
                </div>
                <h4 className="font-heading text-xl font-bold text-midnight dark:text-[#F2F6F7]">
                  Asynchronous Practice Review
                </h4>
                <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2]">
                  Clinicians can review practice submissions when granted permission and provide constructive between-session feedback.
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-mist dark:bg-midnight-deep text-midnight dark:text-mist font-medium">
                Prototype Demo
              </span>
            </div>

            {/* Review Area */}
            <div className="rounded-2xl border border-[#D5E1E6] bg-[#F7F9F8] dark:border-[#304653] dark:bg-midnight-deep/40 p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <span className="font-bold text-midnight dark:text-[#F2F6F7]">Fictional Practice Submission: </span>
                  <span className="text-stone dark:text-[#BDCBD2]">Continuous Voicing Drill #4</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-stone dark:text-[#BDCBD2]">Speed:</span>
                  <span className="font-semibold text-ocean dark:text-softblue">1.0x</span>
                </div>
              </div>

              {/* Clinician Feedback Note Box */}
              <div className="p-4 rounded-xl bg-white dark:bg-midnight-surface border border-[#D5E1E6] dark:border-[#304653] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-ocean dark:text-softblue">
                  <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Illustrative Clinician Note (Fictional Demo)</span>
                </div>
                <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                  &ldquo;Notice how natural your transition sounded between the consonants in phrase two. The physical vocal tension is visibly lower. Let&apos;s keep this pacing for next week.&rdquo;
                </p>
                <div className="pt-2 border-t border-[#E7EFF2] dark:border-[#304653]/60 flex items-center gap-1.5 text-[11px] text-stone/80 dark:text-[#BDCBD2]/80">
                  <Info className="h-3 w-3 shrink-0" aria-hidden="true" />
                  <span>Illustrative feedback for practice reflection only; not a validated clinical measurement.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
