export type SpeechPathway = "stammering" | "articulation";

export interface Exercise {
  id: string;
  title: string;
  description: string;
  pathway: SpeechPathway;
  targetFocus: string; // e.g. "Gentle Onset", "Frontal Lisp (/s/ placement)", "Continuous Phonation"
  difficulty: "Gentle" | "Moderate" | "Challenging";
  estimatedMinutes: number;
  category: "Warm-up" | "Technique Drill" | "Real-world Simulation" | "Desensitization";
  instructions: string[];
  samplePrompts: string[];
  clinicalRationale: string;
  completedToday?: boolean;
}

export interface RecordingItem {
  id: string;
  title: string;
  date: string;
  durationSeconds: number;
  pathway: SpeechPathway;
  exerciseTitle: string;
  notes: string;
  therapistStatus: "Pending Review" | "Reviewed by SLT" | "Private (Self-Practice)";
  therapistComment?: string;
  therapistName?: string;
  confidenceRating: number; // 1-5
  waveformSim: number[]; // simulated amplitude data for visualizer
}

export interface JournalEntry {
  id: string;
  date: string;
  situation: string; // e.g. "Called customer support", "Weekly team standup"
  pathway: SpeechPathway;
  techniqueUsed: string;
  confidenceScore: number; // 1 to 10
  anxietyBeforeScore: number; // 1 to 10
  reflectionNotes: string;
  tag: "Triumph" | "Learning Moment" | "Neutral" | "Challenging";
}

export interface PersonalGoal {
  id: string;
  title: string;
  targetDate: string;
  pathway: SpeechPathway;
  progressPercent: number;
  status: "In Progress" | "Achieved" | "Upcoming";
  category: "Fluency Management" | "Motor Articulation" | "Speech Anxiety & Avoidance";
  weeklyTargetSessions: number;
  completedThisWeek: number;
}

