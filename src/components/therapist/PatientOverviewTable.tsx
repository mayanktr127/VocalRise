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
    <Card className="rounded-[28px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-6 sm:p-7 shadow-card h-full text-left transition-colors">
      <CardHeader className="pb-4 px-0 pt-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <CardTitle className="font-heading text-lg font-bold flex items-center gap-2 text-midnight dark:text-white">
              <Users className="h-5 w-5 text-ocean dark:text-softblue" aria-hidden="true" />
              <span>Patient Caseload Overview</span>
            </CardTitle>
            <p className="text-xs text-stone dark:text-[#BDCBD2] mt-1">
              {patients.length} demonstration clients across Fluency & Articulation pathways
            </p>
          </div>

          {/* Pathway Filter Pill Tabs */}
          <div
            role="tablist"
            aria-label="Filter Caseload by Pathway"
            className="inline-flex rounded-xl bg-porcelain dark:bg-midnight-deep p-1 text-xs border border-[#D5E1E6] dark:border-[#304653]"
          >
            <button
              type="button"
              role="tab"
              aria-selected={filterPathway === "all"}
              onClick={() => setFilterPathway("all")}
              className={`rounded-lg px-2.5 py-1 font-semibold transition-all ${
                filterPathway === "all"
                  ? "bg-ocean text-white shadow-subtle"
                  : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
              }`}
            >
              All ({patients.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filterPathway === "stammering"}
              onClick={() => setFilterPathway("stammering")}
              className={`rounded-lg px-2.5 py-1 font-semibold transition-all ${
                filterPathway === "stammering"
                  ? "bg-ocean text-white shadow-subtle"
                  : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
              }`}
            >
              Stammering
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filterPathway === "articulation"}
              onClick={() => setFilterPathway("articulation")}
              className={`rounded-lg px-2.5 py-1 font-semibold transition-all ${
                filterPathway === "articulation"
                  ? "bg-ocean text-white shadow-subtle"
                  : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
              }`}
            >
              Articulation
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mt-3">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-stone/50 dark:text-[#BDCBD2]/50" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by client name or technique focus..."
            className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white pl-9 pr-4 py-2 text-xs focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue outline-none"
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-2.5 px-0 pb-0">
        {filtered.map((patient) => {
          const isSelected = selectedPatientId === patient.id;

          return (
            <div
              key={patient.id}
              tabIndex={0}
              role="button"
              aria-pressed={isSelected}
              onClick={() => onSelectPatient(patient)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectPatient(patient);
                }
              }}
              className={`cursor-pointer rounded-2xl border p-4 transition-all text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 outline-none focus-visible:ring-2 focus-visible:ring-ocean ${
                isSelected
                  ? "border-ocean bg-mist/60 dark:border-softblue dark:bg-midnight-deep shadow-subtle ring-1 ring-ocean/30"
                  : "border-[#D5E1E6] bg-porcelain hover:border-ocean/30 dark:border-[#304653] dark:bg-midnight-deep/60"
              }`}
            >
              {/* Left Patient Summary */}
              <div className="space-y-1 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-heading text-sm font-bold text-midnight dark:text-white">
                    {patient.name}
                  </h4>
                  <span className="text-xs text-stone/70 dark:text-[#BDCBD2]/70 font-mono">
                    ({patient.age}y)
                  </span>
                  <Badge
                    variant={patient.pathway === "stammering" ? "ocean" : "softblue"}
                    className="text-[10px] font-semibold"
                  >
                    {patient.pathway === "stammering" ? "Stammering Track" : "Articulation Track"}
                  </Badge>
                  {patient.pendingReviewCount > 0 && (
                    <Badge variant="terracotta" className="text-[10px] font-semibold">
                      {patient.pendingReviewCount} Review Needed
                    </Badge>
                  )}
                </div>

                <p className="text-xs text-stone dark:text-[#BDCBD2] line-clamp-1">
                  Focus: {patient.primaryDiagnosis}
                </p>

                <div className="flex items-center gap-3 text-[11px] text-stone/80 dark:text-[#BDCBD2]/80 pt-0.5">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="h-3 w-3 text-ocean dark:text-softblue" aria-hidden="true" />
                    <span>Next consultation: {patient.nextSessionDate}</span>
                  </span>
                </div>
              </div>

              {/* Right Adherence Progress */}
              <div className="sm:w-36 space-y-1 shrink-0">
                <div className="flex justify-between text-[11px] text-stone dark:text-[#BDCBD2]">
                  <span>Home Adherence</span>
                  <span className="font-bold text-midnight dark:text-white">
                    {patient.weeklyAdherencePercent}%
                  </span>
                </div>
                <Progress value={patient.weeklyAdherencePercent} className="h-1.5" />
              </div>

              <ChevronRight
                className={`h-4 w-4 hidden sm:block shrink-0 ${
                  isSelected ? "text-ocean dark:text-softblue" : "text-stone/30 dark:text-[#BDCBD2]/30"
                }`}
                aria-hidden="true"
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
