"use client";

import * as React from "react";
import { Activity, Mic, BookMarked, CheckCircle2, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PatientActivityFeed() {
  const activities = [
    {
      id: "act_1",
      patient: "Julian Mercer",
      action: "Submitted practice recording",
      detail: "Gentle Vocal Onset & Easy Vowel Initiation (1:34)",
      time: "2 hours ago",
      icon: Mic,
      badge: "Review Needed",
      badgeVariant: "terracotta" as const,
    },
    {
      id: "act_2",
      patient: "Maya Patel",
      action: "Logged confidence journal",
      detail: "Presentation at work using alveolar /s/ placement • Comfort 8/10",
      time: "5 hours ago",
      icon: BookMarked,
      badge: "Triumph",
      badgeVariant: "mist" as const,
    },
    {
      id: "act_3",
      patient: "Liam O'Connor",
      action: "Completed daily session",
      detail: "Continuous Phonation Routine • 15 minutes",
      time: "Yesterday at 18:20",
      icon: CheckCircle2,
      badge: "Completed",
      badgeVariant: "ocean" as const,
    },
    {
      id: "act_4",
      patient: "Elena Rostova",
      action: "Submitted practice recording",
      detail: "Lateral Lisp Straw Placement Drill (1:15)",
      time: "Nov 03, 2026",
      icon: Mic,
      badge: "Reviewed",
      badgeVariant: "mist" as const,
    },
  ];

  return (
    <Card className="rounded-[28px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-6 sm:p-7 shadow-card h-full text-left transition-colors">
      <CardHeader className="pb-4 px-0 pt-0 border-b border-[#E7EFF2] dark:border-[#304653]">
        <CardTitle className="font-heading text-lg font-bold flex items-center gap-2 text-midnight dark:text-white">
          <Activity className="h-5 w-5 text-ocean dark:text-softblue" aria-hidden="true" />
          <span>Recent Caseload Activity</span>
        </CardTitle>
        <p className="text-xs text-stone dark:text-[#BDCBD2] mt-1">
          Demonstration practice logs and submissions from your linked clients
        </p>
      </CardHeader>

      <CardContent className="space-y-3.5 pt-4 px-0 pb-0">
        {activities.map((act) => {
          const Icon = act.icon;
          return (
            <div
              key={act.id}
              className="flex items-start gap-3 p-3.5 rounded-2xl border border-[#D5E1E6] dark:border-[#304653] bg-porcelain dark:bg-midnight-deep hover:border-ocean/40 transition-colors"
            >
              <div className="h-8 w-8 rounded-xl bg-mist text-ocean dark:bg-midnight-surface dark:text-softblue flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>

              <div className="flex-1 space-y-0.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-heading text-xs font-bold text-midnight dark:text-white">
                    {act.patient}
                  </span>
                  <Badge variant={act.badgeVariant} className="text-[10px] font-semibold">
                    {act.badge}
                  </Badge>
                </div>
                <p className="text-xs text-stone dark:text-[#BDCBD2]">
                  <strong className="text-midnight dark:text-white">{act.action}: </strong>
                  <span>{act.detail}</span>
                </p>
                <div className="text-[10px] text-stone/70 dark:text-[#BDCBD2]/70 flex items-center gap-1 pt-0.5 font-mono">
                  <Clock className="h-2.5 w-2.5" aria-hidden="true" />
                  <span>{act.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
