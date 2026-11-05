"use client";

import * as React from "react";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { WelcomeSection } from "@/components/dashboard/WelcomeSection";
import { TodayPracticeCard } from "@/components/dashboard/TodayPracticeCard";
import { GoalsList } from "@/components/dashboard/GoalsList";
import { ProgressOverviewChart } from "@/components/dashboard/ProgressOverviewChart";
import { RecentRecordings } from "@/components/dashboard/RecentRecordings";
import { RecommendedExercises } from "@/components/dashboard/RecommendedExercises";
import { ConfidenceJournal } from "@/components/dashboard/ConfidenceJournal";
import { AudioRecorderModal } from "@/components/dashboard/AudioRecorderModal";
import {
  MOCK_USER,
  MOCK_EXERCISES,
  MOCK_RECORDINGS,
  MOCK_JOURNAL_ENTRIES,
  MOCK_GOALS,
} from "@/lib/mock-data";
import { Exercise, RecordingItem, SpeechPathway } from "@/types/practice";

export default function UserDashboardPage() {
  const [currentPathway, setCurrentPathway] = React.useState<SpeechPathway>(MOCK_USER.pathway);
  const [activeSection, setActiveSection] = React.useState("overview");
  const [activeExerciseForStudio, setActiveExerciseForStudio] = React.useState<Exercise | null>(null);
  const [recordings, setRecordings] = React.useState<RecordingItem[]>(MOCK_RECORDINGS);

  // Find today's recommended exercise based on current pathway
  const todayExercise =
    MOCK_EXERCISES.find((ex) => ex.pathway === currentPathway) || MOCK_EXERCISES[0];

  const handleStartExercise = (exercise: Exercise) => {
    setActiveExerciseForStudio(exercise);
  };

  const handleSaveRecording = (data: {
    title: string;
    duration: number;
    notes: string;
  }) => {
    const newRecording: RecordingItem = {
      id: `rec_${Date.now()}`,
      title: data.title,
      date: new Date().toISOString(),
      durationSeconds: data.duration,
      pathway: currentPathway,
      exerciseTitle: activeExerciseForStudio?.title || "Technique Practice",
      notes: data.notes,
      therapistStatus: "Pending Review",
      confidenceRating: 4,
      waveformSim: [25, 45, 65, 80, 50, 30, 60, 85, 70, 40, 55, 75, 45, 30],
    };
    setRecordings([newRecording, ...recordings]);
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] bg-slate-50/50 dark:bg-slate-950 transition-colors">
      {/* Navigation Sidebar */}
      <DashboardSidebar
        user={{ ...MOCK_USER, pathway: currentPathway }}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8 w-full">
        {/* Welcome and Pathway Switcher */}
        <WelcomeSection
          user={MOCK_USER}
          currentPathway={currentPathway}
          onTogglePathway={(p) => setCurrentPathway(p)}
        />

        {/* Top Grid: Today's Practice & Progress Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 xl:col-span-5">
            <TodayPracticeCard
              exercise={todayExercise}
              completedMinutes={MOCK_USER.todayPracticeCompletedMinutes}
              goalMinutes={MOCK_USER.todayPracticeGoalMinutes}
              onStartExercise={handleStartExercise}
            />
          </div>
          <div className="lg:col-span-6 xl:col-span-7">
            <ProgressOverviewChart />
          </div>
        </div>

        {/* Middle Grid: Recommended Exercises & Personal Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <RecommendedExercises
              exercises={MOCK_EXERCISES}
              pathway={currentPathway}
              onSelectExercise={handleStartExercise}
            />
          </div>
          <div className="lg:col-span-5">
            <GoalsList goals={MOCK_GOALS} />
          </div>
        </div>

        {/* Bottom Grid: Recent Recordings & Confidence Journal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6">
            <RecentRecordings recordings={recordings} />
          </div>
          <div className="lg:col-span-6">
            <ConfidenceJournal
              entries={MOCK_JOURNAL_ENTRIES}
              pathway={currentPathway}
            />
          </div>
        </div>
      </main>

      {/* Practice Studio Audio Recorder Modal */}
      <AudioRecorderModal
        isOpen={Boolean(activeExerciseForStudio)}
        onClose={() => setActiveExerciseForStudio(null)}
        exercise={activeExerciseForStudio}
        onSaveRecording={handleSaveRecording}
      />
    </div>
  );
}

