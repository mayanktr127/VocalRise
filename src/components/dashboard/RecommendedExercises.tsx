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
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-brand-600 dark:text-brand-400" />
            Recommended Practice Modules
          </CardTitle>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Curated exercises for {pathway === "stammering" ? "Fluency Shaping & Modification" : "Articulation & Placement"}
          </p>
        </div>
        <Badge variant={pathway === "stammering" ? "teal" : "cerulean"} className="capitalize">
          {pathway} Library
        </Badge>
      </CardHeader>

      <CardContent className="space-y-3">
        {filtered.map((exercise) => (
          <div
            key={exercise.id}
            className="group rounded-2xl border border-slate-200/90 bg-white p-4 transition-all hover:border-brand-300 hover:shadow-subtle dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant={
                    exercise.difficulty === "Gentle"
                      ? "success"
                      : exercise.difficulty === "Moderate"
                      ? "teal"
                      : "warning"
                  }
                  className="text-[10px]"
                >
                  {exercise.difficulty}
                </Badge>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {exercise.category}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {exercise.estimatedMinutes} mins
                </span>
                {exercise.completedToday && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="h-3 w-3" /> Done Today
                  </span>
                )}
              </div>

              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                {exercise.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {exercise.description}
              </p>
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={() => onSelectExercise(exercise)}
              className="group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 text-xs shrink-0 gap-1.5"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Practice
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
