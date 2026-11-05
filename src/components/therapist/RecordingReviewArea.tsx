"use client";

import * as React from "react";
import { Play, Pause, Send, CheckCircle2, ShieldCheck, UserCheck, Volume2, Sparkles, Clock, Info } from "lucide-react";
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
  const [selectedTimestamp, setSelectedTimestamp] = React.useState("00:14");
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
    <Card className="rounded-[28px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-6 sm:p-7 shadow-card h-full text-left transition-colors">
      <CardHeader className="pb-4 px-0 pt-0 border-b border-[#E7EFF2] dark:border-[#304653]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-ocean bg-mist dark:bg-midnight-deep dark:text-softblue px-2.5 py-0.5 rounded-md">
                Asynchronous Audio Review
              </span>
              <span className="text-xs text-stone dark:text-[#BDCBD2]">
                Client: <strong className="text-midnight dark:text-white">{patientName}</strong>
              </span>
            </div>
            <CardTitle className="font-heading text-lg font-bold mt-1 text-midnight dark:text-white">
              {recording.title}
            </CardTitle>
          </div>

          <Badge
            variant={submitted ? "mist" : "terracotta"}
            className="text-xs self-start sm:self-auto font-semibold"
          >
            {submitted ? "Feedback Delivered" : "Review Pending"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-5 pt-4 px-0 pb-0">
        {/* Prototype Simulation Notice */}
        <div className="rounded-xl border border-ocean/20 bg-mist/50 dark:border-softblue/20 dark:bg-midnight-deep p-2.5 text-[11px] text-stone dark:text-[#BDCBD2] flex items-start gap-2">
          <Info className="h-4 w-4 text-ocean dark:text-softblue shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            <strong className="text-midnight dark:text-white">Prototype Review Deck: </strong>
            Illustrative sample recording. Feedback submitted here is saved in browser memory for prototype demonstration.
          </p>
        </div>

        {/* Audio Waveform Player */}
        <div className="rounded-2xl bg-midnight dark:bg-midnight-deep p-4 text-white border border-[#304653] flex flex-col sm:flex-row items-center gap-4">
          <Button
            size="sm"
            variant="primary"
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-10 w-10 rounded-full p-0 bg-ocean hover:bg-ocean/90 shrink-0"
            aria-label={isPlaying ? "Pause audio review" : "Play audio review"}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Play className="h-4 w-4 ml-0.5" aria-hidden="true" />
            )}
          </Button>

          {/* Waveform graphic */}
          <div className="flex items-center gap-1.5 flex-1 h-9 w-full px-2">
            {recording.waveformSim.map((height, i) => (
              <div
                key={i}
                className={`w-1 rounded-full transition-all duration-200 ${
                  isPlaying ? "bg-softblue animate-pulse" : "bg-[#304653]"
                }`}
                style={{ height: `${Math.max(25, height)}%` }}
              />
            ))}
          </div>

          <div className="text-xs font-mono text-mist/80 shrink-0">
            {formatDuration(recording.durationSeconds)} • {formatDate(recording.date)}
          </div>
        </div>

        {/* Patient's Notes */}
        <div className="rounded-xl bg-porcelain dark:bg-midnight-deep border border-[#D5E1E6] dark:border-[#304653] p-3.5 space-y-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-stone/70 dark:text-[#BDCBD2]/70 block">
            Client Self-Observation Note
          </span>
          <p className="text-xs text-stone dark:text-[#BDCBD2] italic leading-relaxed">
            &ldquo;{recording.notes}&rdquo;
          </p>
        </div>

        {/* Timestamped Clinical Observation Form */}
        <form onSubmit={handleFeedbackSubmit} className="space-y-3 pt-1">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-stone dark:text-[#BDCBD2]">
              Timestamped Clinician Guidance
            </label>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[11px] text-stone/70 dark:text-[#BDCBD2]/70">At:</span>
              {["00:08", "00:14", "00:26"].map((ts) => (
                <button
                  key={ts}
                  type="button"
                  onClick={() => setSelectedTimestamp(ts)}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-medium transition-all ${
                    selectedTimestamp === ts
                      ? "bg-ocean text-white shadow-subtle"
                      : "bg-porcelain text-stone hover:text-midnight dark:bg-midnight-deep dark:text-[#BDCBD2]"
                  }`}
                >
                  {ts}
                </button>
              ))}
            </div>
          </div>

          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="e.g. Excellent preliminary airflow before vowel release at 00:14. Dissolved tension before it formed."
            rows={3}
            className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white p-3 text-xs sm:text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue outline-none"
          />

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-stone/60 dark:text-[#BDCBD2]/60">
              {submitted ? "Feedback recorded in prototype session" : "Ready to deliver to client"}
            </span>

            <Button type="submit" size="sm" variant="primary" className="gap-2 font-semibold">
              <Send className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Deliver Feedback</span>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
