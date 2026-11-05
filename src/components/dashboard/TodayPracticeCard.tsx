"use client";

import * as React from "react";
import { PlayCircle, Clock, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Exercise } from "@/types/practice";

interface TodayPracticeCardProps {
  exercise: Exercise;
  completedMinutes: number;
  goalMinutes: number;
  onStartExercise: (exercise: Exercise) => void;
}

export function TodayPracticeCard({
  exercise,
  completedMinutes,
  goalMinutes,
  onStartExercise,
}: TodayPracticeCardProps) {
  const percentComplete = Math.round((completedMinutes / goalMinutes) * 100);

  return (
    <Card className="border-brand-200/80 bg-gradient-to-br from-white via-white to-brand-50/20 shadow-subtle overflow-hidden dark:border-brand-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-brand-950/30 transition-colors">
      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full bg-brand-500 transition-all duration-500"
          style={{ width: `${Math.min(percentComplete, 100)}%` }}
        />
      </div>

      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 dark:bg-brand-950 dark:text-brand-300 px-2.5 py-1 rounded-full border border-brand-200/50 dark:border-brand-800">
            <Sparkles className="h-3.5 w-3.5" />
            Today&apos;s Recommended Session
          </span>
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Clock className="h-3.5 w-3.5" />
            <span>{completedMinutes} / {goalMinutes} mins done</span>
          </div>
        </div>

        <CardTitle className="text-xl sm:text-2xl mt-2 text-slate-900 dark:text-slate-100">
          {exercise.title}
        </CardTitle>

        <CardDescription className="text-slate-600 dark:text-slate-400 line-clamp-2">
          {exercise.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* Core focus pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 font-medium">
            Focus: <strong className="text-slate-900 dark:text-slate-100">{exercise.targetFocus}</strong>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 font-medium">
            Intensity: <strong className="text-slate-900 dark:text-slate-100">{exercise.difficulty}</strong>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 font-medium">
            Category: <strong className="text-slate-900 dark:text-slate-100">{exercise.category}</strong>
          </div>
        </div>

        {/* Progress summary bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span>Daily Goal Progress</span>
            <span className="text-brand-700 dark:text-brand-400 font-bold">{percentComplete}%</span>
          </div>
          <Progress value={percentComplete} />
        </div>

        {/* Start button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Practice at your own cadence. Stop anytime without penalty.
          </div>
          <Button
            onClick={() => onStartExercise(exercise)}
            size="md"
            className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-medium gap-2 shadow-sm"
          >
            <PlayCircle className="h-4 w-4" />
            Launch Practice Studio
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
