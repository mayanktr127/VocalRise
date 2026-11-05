import { SpeechPathway, RecordingItem } from "./practice";

export interface PatientSummary {
  id: string;
  name: string;
  email: string;
  age: number;
  pathway: SpeechPathway;
  primaryDiagnosis: string;
  assignedPlan: string;
  lastActive: string;
  weeklyAdherencePercent: number;
  totalRecordingsCount: number;
  pendingReviewCount: number;
  status: "Active" | "Maintenance" | "Onboarding";
  nextSessionDate: string;
  keyGoals: string[];
}

export interface TherapistReviewItem {
  id: string;
  patientId: string;
  patientName: string;
  recording: RecordingItem;
  exerciseTitle: string;
  submittedAt: string;
  reviewed: boolean;
  therapistNotes?: string;
  actionItemsSuggested?: string[];
}

