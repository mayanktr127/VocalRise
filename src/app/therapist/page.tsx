"use client";

import * as React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Users,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  UserCircle2,
  Activity,
  Sliders,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PatientOverviewTable } from "@/components/therapist/PatientOverviewTable";
import { AssignedExercisesManager } from "@/components/therapist/AssignedExercisesManager";
import { PatientActivityFeed } from "@/components/therapist/PatientActivityFeed";
import { RecordingReviewArea } from "@/components/therapist/RecordingReviewArea";
import { TherapistMetricsChart } from "@/components/therapist/TherapistMetricsChart";
import { MOCK_THERAPIST_PATIENTS, MOCK_RECORDINGS } from "@/lib/mock-data";
import { PatientSummary } from "@/types/therapist";

export default function TherapistDashboardPage() {
  const [selectedPatient, setSelectedPatient] = React.useState<PatientSummary>(
    MOCK_THERAPIST_PATIENTS[0]
  );

  // Use mock recording corresponding to patient or fallback
  const patientRecording = MOCK_RECORDINGS[0];

  return (
    <div className="flex-1 min-h-[calc(100vh-4rem)] bg-slate-50/60 dark:bg-slate-950 p-4 sm:p-6 lg:p-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Clinician Welcome Header */}
        <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50 to-cerulean-50/40 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-cerulean-950/20 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cerulean" className="px-3 py-1 text-xs uppercase tracking-wide font-semibold">
                  Clinician Practice Portal
                </Badge>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Harbor Communication & Fluency Center
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Welcome, <span className="text-cerulean-700 dark:text-cerulean-400">Dr. Sarah Chen</span>, SLT, CCC-SLP
              </h1>

              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                Review asynchronous patient recordings, assign tailored fluency and articulation protocols, and track between-session home practice adherence.
              </p>
            </div>

            {/* Quick Action / Switch view button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link href="/dashboard">
                <Button variant="outline" size="md" className="gap-2 bg-white dark:bg-slate-900">
                  <UserCircle2 className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                  Preview Patient Experience
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Metrics KPI Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800">
            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-subtle">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Active Caseload</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">5 Clients</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">3 Stammering • 2 Articulation</div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-subtle">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Pending Audio Reviews</div>
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mt-1">3 Submissions</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Avg turnaround 8 hrs</div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-subtle">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Caseload Adherence</div>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">83.2%</div>
              <div className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-0.5">+4% from last week</div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-subtle">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Upcoming Live Session</div>
              <div className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1 truncate">Julian Mercer</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Nov 08 at 10:00 AM</div>
            </div>
          </div>
        </div>

        {/* Main Grid: Caseload Table & Recording Review */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Patient Overview Caseload */}
          <div className="lg:col-span-7">
            <PatientOverviewTable
              patients={MOCK_THERAPIST_PATIENTS}
              selectedPatientId={selectedPatient.id}
              onSelectPatient={(p) => setSelectedPatient(p)}
            />
          </div>

          {/* Recording Review Area */}
          <div className="lg:col-span-5">
            <RecordingReviewArea
              patientName={selectedPatient.name}
              recording={patientRecording}
              onSendFeedback={(msg) => {
                // illustrative mock feedback
              }}
            />
          </div>
        </div>

        {/* Middle Grid: Prescribed Exercises & Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <AssignedExercisesManager patient={selectedPatient} />
          </div>

          <div className="lg:col-span-5">
            <PatientActivityFeed />
          </div>
        </div>

        {/* Bottom Section: Progress & Caseload Analytics */}
        <div>
          <TherapistMetricsChart />
        </div>
      </div>
    </div>
  );
}
