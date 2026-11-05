"use client";

import * as React from "react";
import { BookOpen, Sparkles, Clock, CheckCircle2, ChevronRight, Play } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Exercise, SpeechPathway } from "@/types/practice";

interface RecommendedExercisesProps {
  exercises: Exercise[];
  pathway: SpeechPathway;
  onSelectExercise: (exercise: Exercise) => void;
}

export function RecommendedExercises({
  exercises,
  pathway,
  onSelectExercise,
}: RecommendedExercisesProps) {
  // Filter exercises strictly by the active pathway
  const filtered = exercises.filter((ex) => ex.pathway === pathway);

  return (
    <Card className="rounded-[28px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-6 sm:p-7 shadow-card h-full text-left transition-colors">
      <CardHeader className="flex flex-row items-center justify-between pb-4 px-0 pt-0">
        <div>
          <CardTitle className="font-heading text-lg font-bold flex items-center gap-2 text-midnight dark:text-white">
            <BookOpen className="h-5 w-5 text-ocean dark:text-softblue" aria-hidden="true" />
            <span>Recommended Practice Modules</span>
          </CardTitle>
          <p className="text-xs text-stone dark:text-[#BDCBD2] mt-1">
            Curated exercises for {pathway === "stammering" ? "Fluency Shaping & Modification" : "Articulation & Placement"}
          </p>
        </div>
        <Badge
          variant={pathway === "stammering" ? "ocean" : "softblue"}
          className="capitalize font-semibold text-xs"
        >
          {pathway} Library
        </Badge>
      </CardHeader>

      <CardContent className="space-y-3 px-0 pb-0">
        {filtered.map((exercise) => (
          <div
            key={exercise.id}
            className="group rounded-2xl border border-[#D5E1E6] bg-porcelain p-4 transition-all hover:border-ocean/40 hover:shadow-subtle dark:border-[#304653] dark:bg-midnight-deep flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant={
                    exercise.difficulty === "Gentle"
                      ? "mist"
                      : exercise.difficulty === "Moderate"
                      ? "ocean"
                      : "terracotta"
                  }
                  className="text-[10px]"
                >
                  {exercise.difficulty}
                </Badge>
                <span className="text-xs text-stone dark:text-[#BDCBD2] font-medium">
                  {exercise.category}
                </span>
                <span className="text-xs text-stone/50">•</span>
                <span className="text-xs text-stone dark:text-[#BDCBD2] flex items-center gap-1 font-mono">
                  <Clock className="h-3 w-3" aria-hidden="true" /> {exercise.estimatedMinutes} mins
                </span>
                {exercise.completedToday && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-ocean bg-mist dark:bg-midnight-surface dark:text-softblue px-2 py-0.5 rounded-full border border-ocean/20">
                    <CheckCircle2 className="h-3 w-3" aria-hidden="true" /> Done Today
                  </span>
                )}
              </div>

              <h4 className="font-heading text-sm font-bold text-midnight dark:text-white group-hover:text-ocean dark:group-hover:text-softblue transition-colors">
                {exercise.title}
              </h4>
              <p className="text-xs text-stone dark:text-[#BDCBD2] line-clamp-2 leading-relaxed">
                {exercise.description}
              </p>
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={() => onSelectExercise(exercise)}
              className="group-hover:bg-ocean group-hover:text-white group-hover:border-ocean text-xs shrink-0 gap-1.5 font-semibold"
            >
              <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              <span>Practice</span>
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
