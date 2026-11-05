"use client";

import * as React from "react";
import {
  Play,
  Pause,
  MessageSquareQuote,
  Trash2,
  Share2,
  Lock,
  Clock,
  Volume2,
  Shield,
  Info,
  CheckCircle2,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RecordingItem } from "@/types/practice";
import { formatDuration, formatDate } from "@/lib/utils";

interface RecentRecordingsProps {
  recordings: RecordingItem[];
  onDeleteRecording?: (id: string) => void;
  onToggleShare?: (id: string) => void;
}

export function RecentRecordings({
  recordings: initialRecordings,
  onDeleteRecording,
  onToggleShare,
}: RecentRecordingsProps) {
  const [recordings, setRecordings] = React.useState<RecordingItem[]>(initialRecordings);
  const [playingId, setPlayingId] = React.useState<string | null>(null);
  const [expandedNoteId, setExpandedNoteId] = React.useState<string | null>(null);
  const audioElementRef = React.useRef<HTMLAudioElement | null>(null);

  // Sync with prop changes if parent updates
  React.useEffect(() => {
    setRecordings(initialRecordings);
  }, [initialRecordings]);

  const togglePlay = (rec: RecordingItem) => {
    if (playingId === rec.id) {
      if (audioElementRef.current) {
        audioElementRef.current.pause();
      }
      setPlayingId(null);
    } else {
      if (rec.audioUrl) {
        if (!audioElementRef.current) {
          audioElementRef.current = new Audio(rec.audioUrl);
          audioElementRef.current.onended = () => setPlayingId(null);
        } else {
          audioElementRef.current.src = rec.audioUrl;
        }
        audioElementRef.current.play().catch(() => {});
      }
      setPlayingId(rec.id);
    }
  };

  const handleDelete = (id: string) => {
    if (audioElementRef.current && playingId === id) {
      audioElementRef.current.pause();
      setPlayingId(null);
    }
    const updated = recordings.filter((r) => r.id !== id);
    setRecordings(updated);
    if (onDeleteRecording) {
      onDeleteRecording(id);
    }
  };

  const handleToggleShare = (id: string) => {
    const updated = recordings.map((r) => {
      if (r.id === id) {
        const nextStatus =
          r.therapistStatus === "Private (Self-Practice)"
            ? ("Pending Review" as const)
            : ("Private (Self-Practice)" as const);
        return { ...r, therapistStatus: nextStatus };
      }
      return r;
    });
    setRecordings(updated);
    if (onToggleShare) {
      onToggleShare(id);
    }
  };

  const toggleFeedback = (id: string) => {
    setExpandedNoteId(expandedNoteId === id ? null : id);
  };

  return (
    <Card className="rounded-[28px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-6 sm:p-7 shadow-card h-full text-left transition-colors">
      <CardHeader className="flex flex-row items-center justify-between pb-4 px-0 pt-0">
        <div>
          <CardTitle className="font-heading text-lg font-bold flex items-center gap-2 text-midnight dark:text-white">
            <Volume2 className="h-5 w-5 text-ocean dark:text-softblue" aria-hidden="true" />
            <span>Recent Practice Recordings</span>
          </CardTitle>
          <p className="text-xs text-stone dark:text-[#BDCBD2] mt-1">
            Audio logs for personal self-review and optional clinician guidance
          </p>
        </div>
        <Badge variant="mist" className="text-xs font-semibold">
          {recordings.length} Recorded
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4 px-0 pb-0">
        {/* Temporary In-Memory Notice */}
        <div className="rounded-xl border border-ocean/20 bg-mist/50 dark:border-softblue/20 dark:bg-midnight-deep p-3 text-[11px] text-stone dark:text-[#BDCBD2] flex items-start gap-2">
          <Info className="h-4 w-4 text-ocean dark:text-softblue shrink-0 mt-0.5" aria-hidden="true" />
          <p className="leading-relaxed">
            <strong className="text-midnight dark:text-white">In-Memory Prototype Storage: </strong>
            Recordings are held in temporary browser memory for immediate review. Voice data will clear when this browser tab is closed or refreshed.
          </p>
        </div>

        {recordings.length === 0 ? (
          <div className="text-center py-8 text-xs sm:text-sm text-stone/60 dark:text-[#BDCBD2]/60">
            No recordings currently saved in browser memory. Launch an exercise above to record your first drill.
          </div>
        ) : (
          recordings.map((rec) => {
            const isPlaying = playingId === rec.id;
            const isExpanded = expandedNoteId === rec.id;
            const isShared = rec.therapistStatus !== "Private (Self-Practice)";

            return (
              <div
                key={rec.id}
                className="rounded-2xl border border-[#D5E1E6] bg-porcelain p-4 transition-all hover:border-ocean/40 dark:border-[#304653] dark:bg-midnight-deep shadow-subtle space-y-3"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <h4 className="font-heading text-sm font-bold text-midnight dark:text-white leading-snug">
                      {rec.title}
                    </h4>
                    <p className="text-xs text-stone dark:text-[#BDCBD2]">
                      {rec.exerciseTitle} • {formatDate(rec.date)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        rec.therapistStatus === "Reviewed by SLT"
                          ? "mist"
                          : rec.therapistStatus === "Pending Review"
                          ? "softblue"
                          : "ocean"
                      }
                      className="text-[10px] font-semibold"
                    >
                      {rec.therapistStatus}
                    </Badge>
                  </div>
                </div>

                {/* Simulated / Real Audio Waveform Bar */}
                <div className="flex items-center gap-3 bg-white dark:bg-midnight-surface p-2.5 rounded-xl border border-[#D5E1E6] dark:border-[#304653]">
                  <Button
                    size="sm"
                    variant={isPlaying ? "primary" : "secondary"}
                    onClick={() => togglePlay(rec)}
                    className="h-8 w-8 rounded-full p-0 shrink-0"
                    aria-label={isPlaying ? "Pause playback" : "Play practice recording"}
                  >
                    {isPlaying ? (
                      <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <Play className="h-3.5 w-3.5 ml-0.5" aria-hidden="true" />
                    )}
                  </Button>

                  {/* Waveform graphic bars */}
                  <div className="flex items-center gap-1 flex-1 h-7 px-1 overflow-hidden">
                    {rec.waveformSim.map((height, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all duration-300 ${
                          isPlaying
                            ? "bg-ocean dark:bg-softblue animate-pulse"
                            : "bg-[#D5E1E6] dark:bg-[#304653] hover:bg-stone/40"
                        }`}
                        style={{ height: `${Math.max(20, height)}%` }}
                      />
                    ))}
                  </div>

                  <span className="text-xs font-mono text-stone dark:text-[#BDCBD2] shrink-0">
                    {formatDuration(rec.durationSeconds)}
                  </span>
                </div>

                {/* Patient reflection note */}
                {rec.notes && (
                  <p className="text-xs text-stone dark:text-[#BDCBD2] bg-white/70 dark:bg-midnight-surface/70 p-2.5 rounded-xl italic border border-[#E7EFF2] dark:border-[#304653]">
                    &ldquo;{rec.notes}&rdquo;
                  </p>
                )}

                {/* Explicit Clinician Sharing & Instant Deletion Bar */}
                <div className="pt-2 border-t border-[#E7EFF2] dark:border-[#304653] flex flex-wrap items-center justify-between gap-2 text-xs">
                  {/* Share Toggle */}
                  <button
                    type="button"
                    onClick={() => handleToggleShare(rec.id)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-colors ${
                      isShared
                        ? "bg-mist text-ocean dark:bg-midnight-surface dark:text-softblue font-semibold"
                        : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
                    }`}
                  >
                    {isShared ? (
                      <>
                        <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Shared with Clinician</span>
                      </>
                    ) : (
                      <>
                        <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Private (Click to share with SLT)</span>
                      </>
                    )}
                  </button>

                  {/* Delete button */}
                  <button
                    type="button"
                    onClick={() => handleDelete(rec.id)}
                    className="inline-flex items-center gap-1 text-terracotta hover:underline font-medium text-xs ml-auto"
                    aria-label={`Delete recording ${rec.title}`}
                  >
                    <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Delete</span>
                  </button>
                </div>

                {/* SLT Feedback drawer toggle if reviewed */}
                {rec.therapistComment && (
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => toggleFeedback(rec.id)}
                      className="text-xs font-semibold text-ocean dark:text-softblue hover:underline flex items-center gap-1.5 focus:outline-none"
                    >
                      <MessageSquareQuote className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{isExpanded ? "Hide Therapist Feedback" : "View Therapist Feedback"}</span>
                    </button>

                    {isExpanded && (
                      <div className="mt-2 rounded-xl bg-mist/60 dark:bg-midnight-surface border border-[#D5E1E6] dark:border-[#304653] p-3 text-xs text-midnight dark:text-[#F2F6F7] animate-in fade-in duration-150">
                        <div className="font-semibold text-ocean dark:text-softblue mb-1 flex items-center gap-1.5">
                          <Shield className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Comment from {rec.therapistName || "Your Speech-Language Therapist"}:</span>
                        </div>
                        <p className="leading-relaxed text-stone dark:text-[#BDCBD2]">
                          {rec.therapistComment}
                        </p>
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
