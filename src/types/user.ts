import { SpeechPathway } from "./practice";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "patient" | "therapist";
  pathway: SpeechPathway;
  streakDays: number;
  totalPracticeMinutes: number;
  assignedTherapist?: {
    name: string;
    title: string;
    clinicName: string;
    avatarUrl?: string;
  };
  todayPracticeGoalMinutes: number;
  todayPracticeCompletedMinutes: number;
}

