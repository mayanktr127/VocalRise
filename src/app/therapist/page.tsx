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
  Info,
  LogOut,
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
    <div className="flex-1 min-h-[calc(100vh-4rem)] bg-[#F7F9F8] dark:bg-[#111D25] text-midnight dark:text-[#F2F6F7] p-4 sm:p-6 lg:p-8 transition-colors text-left">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Clinician Welcome Header */}
        <div className="rounded-[28px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-6 sm:p-8 shadow-card space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="ocean" className="px-3 py-1 text-xs uppercase tracking-wide font-semibold">
                  Prototype Mode — Demo Account
                </Badge>
                <span className="text-xs text-stone dark:text-[#BDCBD2] font-medium bg-porcelain dark:bg-midnight-deep px-3 py-1 rounded-full border border-[#D5E1E6] dark:border-[#304653]">
                  Harbor Fluency Center (Demonstration Clinic)
                </span>
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-midnight dark:text-white">
                Welcome, <span className="text-ocean dark:text-softblue">Dr. Sarah Chen</span>, SLT, CCC-SLP
              </h1>

              <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] max-w-2xl leading-relaxed">
                Asynchronous clinician workspace. Review shared patient recordings, leave timestamped feedback, assign tailored exercises, and monitor between-session practice consistency.
              </p>
            </div>

            {/* Quick Action Navigation */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link href="/dashboard">
                <Button variant="outline" size="md" className="gap-2 font-semibold">
                  <UserCircle2 className="h-4 w-4 text-ocean dark:text-softblue" aria-hidden="true" />
                  <span>Preview Patient Hub</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Prototype Honest Disclaimer Banner */}
          <div className="rounded-2xl border border-ocean/20 bg-mist/60 dark:border-softblue/20 dark:bg-midnight-deep p-3.5 text-xs text-stone dark:text-[#BDCBD2] flex items-start gap-2.5 shadow-subtle">
            <Info className="h-4 w-4 text-ocean dark:text-softblue shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-0.5">
              <strong className="text-midnight dark:text-white block">
                Demonstration Caseload Data Notice
              </strong>
              <p className="text-[11px] leading-relaxed">
                All patient profiles, audio clips, and clinician notes below are simulated demonstration datasets. In this prototype, recordings and assignments are processed locally in your browser without external server transmission.
              </p>
            </div>
          </div>

          {/* Quick Metrics KPI Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="bg-porcelain dark:bg-midnight-deep p-4 rounded-2xl border border-[#D5E1E6] dark:border-[#304653] shadow-subtle space-y-1">
              <div className="text-xs font-medium text-stone dark:text-[#BDCBD2]">Active Caseload</div>
              <div className="font-heading text-2xl font-bold text-midnight dark:text-white">5 Clients</div>
              <div className="text-[11px] text-stone/80 dark:text-[#BDCBD2]/80">3 Stammering • 2 Articulation</div>
            </div>

            <div className="bg-porcelain dark:bg-midnight-deep p-4 rounded-2xl border border-[#D5E1E6] dark:border-[#304653] shadow-subtle space-y-1">
              <div className="text-xs font-medium text-stone dark:text-[#BDCBD2]">Pending Audio Reviews</div>
              <div className="font-heading text-2xl font-bold text-terracotta">3 Submissions</div>
              <div className="text-[11px] text-stone/80 dark:text-[#BDCBD2]/80">Avg turnaround ~8 hrs</div>
            </div>

            <div className="bg-porcelain dark:bg-midnight-deep p-4 rounded-2xl border border-[#D5E1E6] dark:border-[#304653] shadow-subtle space-y-1">
              <div className="text-xs font-medium text-stone dark:text-[#BDCBD2]">Caseload Practice Consistency</div>
              <div className="font-heading text-2xl font-bold text-ocean dark:text-softblue">83.2%</div>
              <div className="text-[11px] text-stone/80 dark:text-[#BDCBD2]/80">+4% home consistency</div>
            </div>

            <div className="bg-porcelain dark:bg-midnight-deep p-4 rounded-2xl border border-[#D5E1E6] dark:border-[#304653] shadow-subtle space-y-1">
              <div className="text-xs font-medium text-stone dark:text-[#BDCBD2]">Upcoming Consultation</div>
              <div className="font-heading text-lg font-bold text-midnight dark:text-white truncate">Julian Mercer</div>
              <div className="text-[11px] text-stone/80 dark:text-[#BDCBD2]/80">Nov 08 at 10:00 AM</div>
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
                // Illustrative mock feedback handler
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
