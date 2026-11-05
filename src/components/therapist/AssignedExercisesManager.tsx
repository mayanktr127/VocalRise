"use client";

import * as React from "react";
import { ClipboardList, Plus, Check, Clock, Sliders, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PatientSummary } from "@/types/therapist";
import { Exercise } from "@/types/practice";
import { MOCK_EXERCISES } from "@/lib/mock-data";

interface AssignedExercisesManagerProps {
  patient: PatientSummary;
}

export function AssignedExercisesManager({
  patient,
}: AssignedExercisesManagerProps) {
  // Exercises matching patient pathway
  const availableExercises = MOCK_EXERCISES.filter(
    (ex) => ex.pathway === patient.pathway
  );

  const [assignedIds, setAssignedIds] = React.useState<string[]>([
    availableExercises[0]?.id || "",
    availableExercises[1]?.id || "",
  ]);

  const toggleAssign = (id: string) => {
    if (assignedIds.includes(id)) {
      setAssignedIds(assignedIds.filter((item) => item !== id));
    } else {
      setAssignedIds([...assignedIds, id]);
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-cerulean-600 dark:text-cerulean-400" />
              Prescribed Exercise Regimen
            </CardTitle>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Active plan: <strong className="text-slate-800 dark:text-slate-200">{patient.assignedPlan}</strong>
            </p>
          </div>
          <Badge variant="cerulean" className="text-xs self-start sm:self-auto">
            {assignedIds.length} Modules Active
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 pt-4">
        {availableExercises.map((exercise) => {
          const isAssigned = assignedIds.includes(exercise.id);

          return (
            <div
              key={exercise.id}
              className={`rounded-xl border p-3.5 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isAssigned
                  ? "border-emerald-200 bg-emerald-50/30 dark:border-emerald-900/60 dark:bg-emerald-950/20"
                  : "border-slate-200/90 bg-white opacity-70 dark:border-slate-800 dark:bg-slate-900/40"
              }`}
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {exercise.title}
                  </h4>
                  <Badge variant="outline" className="text-[10px]">
                    {exercise.targetFocus}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                  {exercise.clinicalRationale}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {exercise.estimatedMinutes} mins / session
                  </span>
                  <span>•</span>
                  <span>{exercise.difficulty} pace</span>
                </div>
              </div>

              <Button
                size="sm"
                variant={isAssigned ? "outline" : "primary"}
                onClick={() => toggleAssign(exercise.id)}
                className="text-xs shrink-0"
              >
                {isAssigned ? (
                  <>
                    <Check className="h-3.5 w-3.5 mr-1 text-emerald-600 dark:text-emerald-400" /> Assigned
                  </>
                ) : (
                  <>
                    <Plus className="h-3.5 w-3.5 mr-1" /> Assign Module
                  </>
                )}
              </Button>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
