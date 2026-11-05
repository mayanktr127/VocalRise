"use client";

import * as React from "react";
import { ClipboardList, Plus, Check, Clock, Sliders, Sparkles, Info } from "lucide-react";
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
    <Card className="rounded-[28px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-6 sm:p-7 shadow-card h-full text-left transition-colors">
      <CardHeader className="pb-4 px-0 pt-0 border-b border-[#E7EFF2] dark:border-[#304653]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <CardTitle className="font-heading text-lg font-bold flex items-center gap-2 text-midnight dark:text-white">
              <ClipboardList className="h-5 w-5 text-ocean dark:text-softblue" aria-hidden="true" />
              <span>Prescribed Exercise Regimen</span>
            </CardTitle>
            <p className="text-xs text-stone dark:text-[#BDCBD2] mt-1">
              Active plan for <strong className="text-midnight dark:text-white">{patient.name}</strong>: {patient.assignedPlan}
            </p>
          </div>
          <Badge variant="ocean" className="text-xs self-start sm:self-auto font-semibold">
            {assignedIds.length} Modules Assigned
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 pt-4 px-0 pb-0">
        <div className="text-[11px] text-stone/70 dark:text-[#BDCBD2]/70 italic pb-1">
          Demonstration Mode: Assigning modules updates the patient&apos;s active drill queue in temporary prototype state.
        </div>

        {availableExercises.map((exercise) => {
          const isAssigned = assignedIds.includes(exercise.id);

          return (
            <div
              key={exercise.id}
              className={`rounded-2xl border p-4 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isAssigned
                  ? "border-ocean bg-mist/50 dark:border-softblue dark:bg-midnight-deep"
                  : "border-[#D5E1E6] bg-porcelain opacity-70 dark:border-[#304653] dark:bg-midnight-deep/50"
              }`}
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-heading text-sm font-bold text-midnight dark:text-white">
                    {exercise.title}
                  </h4>
                  <Badge variant={isAssigned ? "ocean" : "mist"} className="text-[10px]">
                    {exercise.targetFocus}
                  </Badge>
                </div>
                <p className="text-xs text-stone dark:text-[#BDCBD2] line-clamp-1 leading-relaxed">
                  {exercise.clinicalRationale}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-stone/80 dark:text-[#BDCBD2]/80 pt-0.5">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="h-3 w-3 text-ocean dark:text-softblue" aria-hidden="true" />
                    <span>{exercise.estimatedMinutes} mins / session</span>
                  </span>
                  <span>•</span>
                  <span>{exercise.difficulty} cadence</span>
                </div>
              </div>

              <Button
                size="sm"
                variant={isAssigned ? "primary" : "outline"}
                onClick={() => toggleAssign(exercise.id)}
                className="text-xs shrink-0 font-semibold"
              >
                {isAssigned ? (
                  <span className="flex items-center gap-1">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Assigned</span>
                  </span>
                ) : (
                  <span>+ Assign Module</span>
                )}
              </Button>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
