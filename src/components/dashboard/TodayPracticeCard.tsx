"use client";

import * as React from "react";
import { PlayCircle, Clock, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
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
  const percentComplete = Math.min(100, Math.round((completedMinutes / goalMinutes) * 100));

  return (
    <Card className="rounded-[28px] border border-[#D5E1E6] bg-white shadow-card overflow-hidden dark:border-[#304653] dark:bg-midnight-surface transition-colors text-left">
      <div className="h-1.5 w-full bg-mist dark:bg-midnight-deep">
        <div
          className="h-full bg-ocean dark:bg-softblue transition-all duration-500"
          style={{ width: `${percentComplete}%` }}
        />
      </div>

      <CardHeader className="pb-4">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <Badge variant="ocean" className="px-3 py-1 text-xs font-semibold gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-softblue" aria-hidden="true" />
            <span>Today&apos;s Recommended Session</span>
          </Badge>
          <div className="flex items-center gap-1.5 text-xs font-medium text-stone dark:text-[#BDCBD2]">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{completedMinutes} / {goalMinutes} mins logged</span>
          </div>
        </div>

        <CardTitle className="font-heading text-xl sm:text-2xl mt-2 text-midnight dark:text-white">
          {exercise.title}
        </CardTitle>

        <CardDescription className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] line-clamp-2 leading-relaxed">
          {exercise.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* Core focus pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="bg-porcelain dark:bg-midnight-deep border border-[#D5E1E6] dark:border-[#304653] px-3 py-1.5 rounded-xl text-stone dark:text-[#BDCBD2]">
            Focus: <strong className="text-midnight dark:text-white">{exercise.targetFocus}</strong>
          </div>
          <div className="bg-porcelain dark:bg-midnight-deep border border-[#D5E1E6] dark:border-[#304653] px-3 py-1.5 rounded-xl text-stone dark:text-[#BDCBD2]">
            Cadence: <strong className="text-midnight dark:text-white">{exercise.difficulty}</strong>
          </div>
          <div className="bg-porcelain dark:bg-midnight-deep border border-[#D5E1E6] dark:border-[#304653] px-3 py-1.5 rounded-xl text-stone dark:text-[#BDCBD2]">
            Track: <strong className="text-midnight dark:text-white capitalize">{exercise.pathway}</strong>
          </div>
        </div>

        {/* Progress summary bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-stone dark:text-[#BDCBD2] font-medium">
            <span>Daily Practice Commitment</span>
            <span className="text-ocean dark:text-softblue font-bold">{percentComplete}%</span>
          </div>
          <Progress value={percentComplete} />
        </div>

        {/* Launch button & zero pressure reassurance */}
        <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#E7EFF2] dark:border-[#304653]">
          <div className="text-xs text-stone dark:text-[#BDCBD2] leading-tight">
            Practice at your own cadence. Stop anytime without penalty.
          </div>
          <Button
            onClick={() => onStartExercise(exercise)}
            size="md"
            className="w-full sm:w-auto font-semibold gap-2 shadow-subtle shrink-0"
          >
            <PlayCircle className="h-4 w-4" aria-hidden="true" />
            <span>Launch Practice Studio</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
