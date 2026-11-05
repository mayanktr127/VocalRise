"use client";

import * as React from "react";
import { Play, Pause, Send, CheckCircle2, ShieldCheck, UserCheck, Volume2, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RecordingItem } from "@/types/practice";
import { formatDuration, formatDate } from "@/lib/utils";

interface RecordingReviewAreaProps {
  patientName: string;
  recording: RecordingItem;
  onSendFeedback?: (feedback: string) => void;
}

export function RecordingReviewArea({
  patientName,
  recording,
  onSendFeedback,
}: RecordingReviewAreaProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [feedbackText, setFeedbackText] = React.useState(
    recording.therapistComment || ""
  );
  const [submitted, setSubmitted] = React.useState(Boolean(recording.therapistComment));

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    if (onSendFeedback) onSendFeedback(feedbackText);
    setSubmitted(true);
  };

  return (
    <Card className="border-cerulean-200/80 bg-white shadow-subtle dark:border-cerulean-900/60 dark:bg-slate-900 transition-colors">
      <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-cerulean-700 bg-cerulean-50 dark:bg-cerulean-950 dark:text-cerulean-300 px-2 py-0.5 rounded-md">
                Clinical Audio Review
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Submitted by <strong className="text-slate-800 dark:text-slate-200">{patientName}</strong>
              </span>
            </div>
            <CardTitle className="text-lg mt-1 text-slate-900 dark:text-slate-100">
              {recording.title}
            </CardTitle>
          </div>

          <Badge
            variant={submitted ? "success" : "warning"}
            className="text-xs self-start sm:self-auto"
          >
            {submitted ? "Feedback Delivered" : "Awaiting Review"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-5 pt-4">
        {/* Audio Waveform Player */}
        <div className="rounded-2xl bg-slate-900 dark:bg-slate-950 p-4 text-white border border-slate-800 flex flex-col sm:flex-row items-center gap-4">
          <Button
            size="sm"
            variant="primary"
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-10 w-10 rounded-full p-0 bg-cerulean-500 hover:bg-cerulean-600 shrink-0"
            aria-label={isPlaying ? "Pause audio review" : "Play audio review"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
          </Button>

          {/* Waveform */}
          <div className="flex items-center gap-1.5 flex-1 h-9 w-full px-2">
            {recording.waveformSim.map((height, i) => (
              <div
                key={i}
                className={`w-1 rounded-full transition-all duration-200 ${
                  isPlaying ? "bg-cerulean-400 animate-pulse" : "bg-slate-600"
                }`}
                style={{ height: `${Math.max(25, height)}%` }}
              />
            ))}
          </div>

          <div className="text-xs font-mono text-slate-300 shrink-0">
            {formatDuration(recording.durationSeconds)} • {formatDate(recording.date)}
          </div>
        </div>

        {/* Patient's Notes */}
        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 p-3.5 space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Patient Self-Observation
          </span>
          <p className="text-xs text-slate-700 dark:text-slate-300 italic">
            &ldquo;{recording.notes}&rdquo;
          </p>
        </div>

        {/* Clinician Feedback Form */}
        <form onSubmit={handleFeedbackSubmit} className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-cerulean-600 dark:text-cerulean-400" />
              Speech-Language Therapist Feedback
            </label>
            {submitted && (
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Sent to patient
              </span>
            )}
          </div>

          <textarea
            rows={3}
            value={feedbackText}
            onChange={(e) => {
              setFeedbackText(e.target.value);
              setSubmitted(false);
            }}
            placeholder="Provide constructive technique adjustments, vocal onset feedback, or positive reinforcement..."
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm focus:border-cerulean-500 focus:ring-1 focus:ring-cerulean-500 bg-white dark:bg-slate-800 dark:text-slate-100"
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              size="sm"
              disabled={!feedbackText.trim() || submitted}
              className="bg-cerulean-600 hover:bg-cerulean-700 text-white gap-1.5"
            >
              <Send className="h-3.5 w-3.5" />
              {submitted ? "Feedback Saved" : "Send Clinical Note to Patient"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
