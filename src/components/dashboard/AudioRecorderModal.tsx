"use client";

import * as React from "react";
import { Mic, Square, Play, Pause, CheckCircle2, RotateCcw, Volume2, Sparkles } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Exercise } from "@/types/practice";

interface AudioRecorderModalProps {
  isOpen: boolean;
  onClose: () => void;
  exercise: Exercise | null;
  onSaveRecording?: (recording: {
    title: string;
    duration: number;
    notes: string;
  }) => void;
}

export function AudioRecorderModal({
  isOpen,
  onClose,
  exercise,
  onSaveRecording,
}: AudioRecorderModalProps) {
  const [isRecording, setIsRecording] = React.useState(false);
  const [recordingSeconds, setRecordingSeconds] = React.useState(0);
  const [hasRecorded, setHasRecorded] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [notes, setNotes] = React.useState("");
  const [activePromptIndex, setActivePromptIndex] = React.useState(0);

  // Timer logic
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRecording]);

  const handleStartRecording = () => {
    setIsRecording(true);
    setHasRecorded(false);
    setRecordingSeconds(0);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setHasRecorded(true);
  };

  const handleReset = () => {
    setIsRecording(false);
    setHasRecorded(false);
    setRecordingSeconds(0);
    setIsPlaying(false);
  };

  const handleSave = () => {
    if (onSaveRecording && exercise) {
      onSaveRecording({
        title: `${exercise.title} Session`,
        duration: recordingSeconds || 45,
        notes: notes || "Practised target technique with steady relaxed cadence.",
      });
    }
    onClose();
    handleReset();
    setNotes("");
  };

  if (!exercise) return null;

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={exercise.title}
      description={`Target Focus: ${exercise.targetFocus} • ${exercise.estimatedMinutes} mins`}
      className="max-w-2xl"
    >
      <div className="space-y-6">
        {/* Clinical Rationale Box */}
        <div className="rounded-xl bg-brand-50/70 dark:bg-brand-950/40 border border-brand-200/60 dark:border-brand-800/60 p-3.5 text-xs text-brand-900 dark:text-brand-200 flex items-start gap-2.5">
          <Sparkles className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Technique Guidance: </span>
            {exercise.clinicalRationale}
          </div>
        </div>

        {/* Practice Prompt Display */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-5 text-center">
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
            Speaking Prompt {activePromptIndex + 1} of {exercise.samplePrompts.length}
          </span>
          <p className="mt-2 text-2xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
            &ldquo;{exercise.samplePrompts[activePromptIndex]}&rdquo;
          </p>
          <div className="mt-4 flex justify-center gap-2">
            {exercise.samplePrompts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActivePromptIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  activePromptIndex === idx
                    ? "w-8 bg-brand-600 dark:bg-brand-500"
                    : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
                aria-label={`Prompt ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Visualizer Simulation Area */}
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-800">
          <div className="text-3xl font-mono font-medium tracking-widest mb-4">
            {formatTimer(recordingSeconds)}
          </div>

          {/* Animated sound wave bars */}
          <div className="flex items-center gap-1.5 h-16 w-full max-w-xs justify-center mb-6">
            {[40, 65, 30, 85, 95, 60, 45, 80, 55, 70, 90, 40, 75, 35, 60].map(
              (height, i) => (
                <div
                  key={i}
                  className={`w-1.5 rounded-full transition-all duration-150 ${
                    isRecording
                      ? "bg-brand-400 animate-pulse"
                      : hasRecorded
                      ? "bg-emerald-400"
                      : "bg-slate-700"
                  }`}
                  style={{
                    height: isRecording
                      ? `${Math.max(15, (height * (recordingSeconds % 5 + 1)) % 100)}%`
                      : hasRecorded
                      ? `${height * 0.7}%`
                      : "15%",
                  }}
                />
              )
            )}
          </div>

          {/* Recording Controls */}
          <div className="flex items-center gap-4">
            {!isRecording && !hasRecorded && (
              <Button
                onClick={handleStartRecording}
                size="lg"
                className="bg-brand-500 hover:bg-brand-600 text-white rounded-full px-6 gap-2 shadow-lg shadow-brand-500/20"
              >
                <Mic className="h-5 w-5" />
                Start Recording
              </Button>
            )}

            {isRecording && (
              <Button
                onClick={handleStopRecording}
                size="lg"
                className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6 gap-2 animate-pulse"
              >
                <Square className="h-4 w-4 fill-white" />
                Finish Recording
              </Button>
            )}

            {hasRecorded && (
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  variant="outline"
                  className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 rounded-full"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-4 w-4 mr-1.5" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-1.5" /> Listen Back
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleReset}
                  variant="ghost"
                  className="text-slate-400 hover:text-white"
                >
                  <RotateCcw className="h-4 w-4 mr-1.5" /> Re-record
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Self-Reflection & Notes */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Self-Observation & Reflection Notes
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="How did this repetition feel? Did you notice physical throat tension, smooth airflow, or easy phrasing?"
            rows={3}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 bg-slate-50/50 dark:bg-slate-800 dark:text-slate-100"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            disabled={!hasRecorded && recordingSeconds === 0}
            onClick={handleSave}
            className="gap-2"
          >
            <CheckCircle2 className="h-4 w-4" />
            Save Practice Recording
          </Button>
        </div>
      </div>
    </Modal>
  );
}
