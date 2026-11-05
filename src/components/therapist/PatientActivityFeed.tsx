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
      badgeVariant: "warning" as const,
    },
    {
      id: "act_2",
      patient: "Maya Patel",
      action: "Logged confidence journal",
      detail: "Presentation at work using alveolar /s/ placement • Confidence 8/10",
      time: "5 hours ago",
      icon: BookMarked,
      badge: "Triumph",
      badgeVariant: "success" as const,
    },
    {
      id: "act_3",
      patient: "Liam O'Connor",
      action: "Completed daily session",
      detail: "Maintenance Routine • 15 minutes",
      time: "Yesterday at 18:20",
      icon: CheckCircle2,
      badge: "Completed",
      badgeVariant: "secondary" as const,
    },
    {
      id: "act_4",
      patient: "Elena Rostova",
      action: "Submitted practice recording",
      detail: "Lateral Lisp Straw Placement Drill (1:15)",
      time: "Nov 03, 2026",
      icon: Mic,
      badge: "Reviewed",
      badgeVariant: "success" as const,
    },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
        <CardTitle className="text-lg flex items-center gap-2">
          <Activity className="h-5 w-5 text-cerulean-600 dark:text-cerulean-400" />
          Recent Caseload Activity
        </CardTitle>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Real-time practice logs and submissions from your clients
        </p>
      </CardHeader>

      <CardContent className="space-y-4 pt-4">
        {activities.map((act) => {
          const Icon = act.icon;
          return (
            <div
              key={act.id}
              className="flex items-start gap-3 p-3 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
            >
              <div className="h-8 w-8 rounded-lg bg-cerulean-50 text-cerulean-600 dark:bg-cerulean-950 dark:text-cerulean-400 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="h-4 w-4" />
              </div>

              <div className="flex-1 space-y-0.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    {act.patient}
                  </span>
                  <Badge variant={act.badgeVariant} className="text-[10px]">
                    {act.badge}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {act.action}: <span className="font-normal text-slate-500 dark:text-slate-400">{act.detail}</span>
                </p>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1 pt-0.5">
                  <Clock className="h-2.5 w-2.5" /> {act.time}
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
