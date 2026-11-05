"use client";

import * as React from "react";
import { Users, Search, Filter, Stethoscope, ChevronRight, CheckCircle2, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PatientSummary } from "@/types/therapist";
import { SpeechPathway } from "@/types/practice";

interface PatientOverviewTableProps {
  patients: PatientSummary[];
  selectedPatientId: string;
  onSelectPatient: (patient: PatientSummary) => void;
}

export function PatientOverviewTable({
  patients,
  selectedPatientId,
  onSelectPatient,
}: PatientOverviewTableProps) {
  const [filterPathway, setFilterPathway] = React.useState<"all" | SpeechPathway>("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filtered = patients.filter((pat) => {
    const matchesFilter = filterPathway === "all" || pat.pathway === filterPathway;
    const matchesSearch =
      pat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pat.primaryDiagnosis.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-cerulean-600 dark:text-cerulean-400" />
              Patient Caseload Overview
            </CardTitle>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {patients.length} active clients across Fluency & Articulation pathways
            </p>
          </div>

          {/* Pathway Filter Pill */}
          <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 text-xs">
            <button
              onClick={() => setFilterPathway("all")}
              className={`rounded-lg px-2.5 py-1 font-medium transition-all ${
                filterPathway === "all"
                  ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-100"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              All ({patients.length})
            </button>
            <button
              onClick={() => setFilterPathway("stammering")}
              className={`rounded-lg px-2.5 py-1 font-medium transition-all ${
                filterPathway === "stammering"
                  ? "bg-white text-brand-700 shadow-sm dark:bg-slate-700 dark:text-brand-300"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              Stammering
            </button>
            <button
              onClick={() => setFilterPathway("articulation")}
              className={`rounded-lg px-2.5 py-1 font-medium transition-all ${
                filterPathway === "articulation"
                  ? "bg-white text-cerulean-700 shadow-sm dark:bg-slate-700 dark:text-cerulean-300"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              Articulation
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mt-3">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by client name or speech focus..."
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 pl-9 pr-4 py-2 text-xs focus:border-cerulean-500 focus:ring-1 focus:ring-cerulean-500"
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-2.5">
        {filtered.map((patient) => {
          const isSelected = selectedPatientId === patient.id;

          return (
            <div
              key={patient.id}
              onClick={() => onSelectPatient(patient)}
              className={`cursor-pointer rounded-xl border p-3.5 transition-all text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isSelected
                  ? "border-cerulean-500 bg-cerulean-50/40 dark:border-cerulean-400 dark:bg-cerulean-950/40 shadow-sm"
                  : "border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:bg-slate-800/40"
              }`}
            >
              {/* Left Patient Summary */}
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {patient.name}
                  </h4>
                  <span className="text-xs text-slate-400 dark:text-slate-500">({patient.age}y)</span>
                  <Badge
                    variant={patient.pathway === "stammering" ? "teal" : "cerulean"}
                    className="text-[10px]"
                  >
                    {patient.pathway === "stammering" ? "Stammering" : "Articulation"}
                  </Badge>
                  {patient.pendingReviewCount > 0 && (
                    <Badge variant="warning" className="text-[10px]">
                      {patient.pendingReviewCount} Review Needed
                    </Badge>
                  )}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                  {patient.primaryDiagnosis}
                </p>

                <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Next session: {patient.nextSessionDate}
                  </span>
                </div>
              </div>

              {/* Right Adherence Progress */}
              <div className="sm:w-36 space-y-1 shrink-0">
                <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400">
                  <span>Weekly Adherence</span>
                  <span className="font-bold text-slate-900 dark:text-slate-100">
                    {patient.weeklyAdherencePercent}%
                  </span>
                </div>
                <Progress
                  value={patient.weeklyAdherencePercent}
                  className="h-1.5"
                  indicatorClassName={
                    patient.weeklyAdherencePercent >= 85
                      ? "bg-emerald-500"
                      : "bg-cerulean-600"
                  }
                />
              </div>

              <ChevronRight
                className={`h-4 w-4 hidden sm:block ${
                  isSelected ? "text-cerulean-600 dark:text-cerulean-400" : "text-slate-300 dark:text-slate-600"
                }`}
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
