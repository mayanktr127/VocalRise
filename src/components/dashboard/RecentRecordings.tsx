"use client";

import * as React from "react";
import { Play, Pause, MessageSquareQuote, CheckCircle, Clock, Volume2, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RecordingItem } from "@/types/practice";
import { formatDuration, formatDate } from "@/lib/utils";

interface RecentRecordingsProps {
  recordings: RecordingItem[];
}

export function RecentRecordings({ recordings }: RecentRecordingsProps) {
  const [playingId, setPlayingId] = React.useState<string | null>(null);
  const [expandedNoteId, setExpandedNoteId] = React.useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  const toggleFeedback = (id: string) => {
    setExpandedNoteId(expandedNoteId === id ? null : id);
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle className="text-lg flex items-center gap-2">
            <Volume2 className="h-5 w-5 text-brand-600 dark:text-brand-400" />
            Recent Practice Recordings
          </CardTitle>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Audio logs for personal review and therapist feedback
          </p>
        </div>
        <Badge variant="secondary" className="text-xs">
          {recordings.length} Saved
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        {recordings.length === 0 ? (
          <div className="text-center py-8 text-sm text-slate-400 dark:text-slate-500">
            No recordings yet. Complete today&apos;s exercise to save your first practice audio.
          </div>
        ) : (
          recordings.map((rec) => {
            const isPlaying = playingId === rec.id;
            const isExpanded = expandedNoteId === rec.id;

            return (
              <div
                key={rec.id}
                className="rounded-xl border border-slate-200/90 bg-white p-4 transition-all hover:border-slate-300 dark:border-slate-800 dark:bg-slate-850 dark:bg-slate-900/60 dark:hover:border-slate-700 shadow-subtle space-y-3"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                      {rec.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {rec.exerciseTitle} • {formatDate(rec.date)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        rec.therapistStatus === "Reviewed by SLT"
                          ? "success"
                          : rec.therapistStatus === "Pending Review"
                          ? "warning"
                          : "secondary"
                      }
                      className="text-[11px]"
                    >
                      {rec.therapistStatus}
                    </Badge>
                  </div>
                </div>

                {/* Simulated Audio Waveform Bar */}
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                  <Button
                    size="sm"
                    variant={isPlaying ? "primary" : "secondary"}
                    onClick={() => togglePlay(rec.id)}
                    className="h-8 w-8 rounded-full p-0 shrink-0"
                    aria-label={isPlaying ? "Pause playback" : "Play playback"}
                  >
                    {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
                  </Button>

                  {/* Waveform graphic bars */}
                  <div className="flex items-center gap-1 flex-1 h-7 px-1 overflow-hidden">
                    {rec.waveformSim.map((height, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all duration-300 ${
                          isPlaying
                            ? "bg-brand-500 dark:bg-brand-400 animate-pulse"
                            : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                        }`}
                        style={{ height: `${Math.max(20, height)}%` }}
                      />
                    ))}
                  </div>

                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                    {formatDuration(rec.durationSeconds)}
                  </span>
                </div>

                {/* Patient reflection note */}
                {rec.notes && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50/70 dark:bg-slate-800/50 p-2 rounded-lg italic">
                    &ldquo;{rec.notes}&rdquo;
                  </p>
                )}

                {/* SLT Feedback drawer toggle if reviewed */}
                {rec.therapistComment && (
                  <div className="pt-1">
                    <button
                      onClick={() => toggleFeedback(rec.id)}
                      className="text-xs font-medium text-brand-700 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 flex items-center gap-1.5 focus:outline-none"
                    >
                      <MessageSquareQuote className="h-3.5 w-3.5" />
                      {isExpanded ? "Hide Therapist Feedback" : "View Therapist Feedback"}
                    </button>

                    {isExpanded && (
                      <div className="mt-2 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/80 p-3 text-xs text-emerald-950 dark:text-emerald-200 animate-in fade-in duration-150">
                        <div className="font-semibold text-emerald-900 dark:text-emerald-300 mb-1 flex items-center gap-1.5">
                          <Shield className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
                          Comment from {rec.therapistName || "Your Therapist"}:
                        </div>
                        <p className="leading-relaxed">{rec.therapistComment}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
