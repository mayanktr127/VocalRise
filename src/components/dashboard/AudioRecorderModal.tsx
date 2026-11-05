"use client";

import * as React from "react";
import {
  Mic,
  Square,
  Play,
  Pause,
  CheckCircle2,
  RotateCcw,
  Volume2,
  Sparkles,
  Trash2,
  Info,
  AlertCircle,
  Lock,
} from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Exercise } from "@/types/practice";

interface AudioRecorderModalProps {
  isOpen: boolean;
  onClose: () => void;
  exercise: Exercise | null;
  onSaveRecording?: (recording: {
    title: string;
    duration: number;
    notes: string;
    audioUrl?: string;
  }) => void;
}

type MicState = "idle" | "requesting" | "recording" | "recorded" | "denied" | "unsupported";

export function AudioRecorderModal({
  isOpen,
  onClose,
  exercise,
  onSaveRecording,
}: AudioRecorderModalProps) {
  const [micState, setMicState] = React.useState<MicState>("idle");
  const [recordingSeconds, setRecordingSeconds] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);
  const [notes, setNotes] = React.useState("");
  const [activePromptIndex, setActivePromptIndex] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const mediaRecorderRef = React.useRef<MediaRecorder | null>(null);
  const mediaStreamRef = React.useRef<MediaStream | null>(null);
  const audioChunksRef = React.useRef<Blob[]>([]);
  const audioElementRef = React.useRef<HTMLAudioElement | null>(null);
  const timerIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Timer logic during active recording
  React.useEffect(() => {
    if (micState === "recording") {
      timerIntervalRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    }
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [micState]);

  // Cleanup on modal close or unmount
  const cleanupMedia = React.useCallback(() => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    if (audioElementRef.current) {
      audioElementRef.current.pause();
      audioElementRef.current = null;
    }
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }
    setIsPlaying(false);
    setMicState("idle");
    setRecordingSeconds(0);
    setErrorMessage(null);
  }, [audioUrl]);

  React.useEffect(() => {
    if (!isOpen) {
      cleanupMedia();
    }
  }, [isOpen, cleanupMedia]);

  const handleStartRecording = async () => {
    setErrorMessage(null);
    audioChunksRef.current = [];

    // Verify browser support
    if (typeof window === "undefined" || !navigator?.mediaDevices?.getUserMedia) {
      setMicState("unsupported");
      setErrorMessage("Live audio recording is not supported in this browser environment. Using simulation mode.");
      setMicState("recording");
      return;
    }

    try {
      setMicState("requesting");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        setMicState("recorded");

        // Stop stream tracks
        if (mediaStreamRef.current) {
          mediaStreamRef.current.getTracks().forEach((t) => t.stop());
          mediaStreamRef.current = null;
        }
      };

      mediaRecorder.start(200); // 200ms slice
      setRecordingSeconds(0);
      setMicState("recording");
    } catch (err: any) {
      console.warn("Microphone access unavailable or denied:", err);
      setMicState("denied");
      setErrorMessage(
        "Microphone permission was not granted or a microphone was not detected. You can still practice aloud with guided prompts and save your reflection notes."
      );
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    } else {
      // Fallback for simulation mode
      setMicState("recorded");
    }
  };

  const handleTogglePlayback = () => {
    if (!audioUrl) {
      // Simulation playback toggle
      setIsPlaying(!isPlaying);
      return;
    }

    if (isPlaying) {
      if (audioElementRef.current) {
        audioElementRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      if (!audioElementRef.current) {
        audioElementRef.current = new Audio(audioUrl);
        audioElementRef.current.onended = () => setIsPlaying(false);
      }
      audioElementRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleDiscard = () => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }
    if (audioElementRef.current) {
      audioElementRef.current.pause();
      audioElementRef.current = null;
    }
    setIsPlaying(false);
    setMicState("idle");
    setRecordingSeconds(0);
  };

  const handleSave = () => {
    if (onSaveRecording && exercise) {
      onSaveRecording({
        title: `${exercise.title} Session`,
        duration: recordingSeconds || 30,
        notes: notes || "Practised target technique with steady relaxed pacing.",
        audioUrl: audioUrl || undefined,
      });
    }
    cleanupMedia();
    setNotes("");
    onClose();
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
      onClose={() => {
        cleanupMedia();
        onClose();
      }}
      title={exercise.title}
      description={`Focus: ${exercise.targetFocus} • ${exercise.estimatedMinutes} mins estimated`}
      className="max-w-2xl text-left"
    >
      <div className="space-y-6">
        {/* Privacy & In-Memory Storage Disclosure */}
        <div className="rounded-2xl border border-ocean/20 bg-mist/60 dark:border-softblue/30 dark:bg-midnight-surface p-3.5 text-xs text-stone dark:text-[#BDCBD2] flex items-start gap-2.5">
          <Info className="h-4 w-4 text-ocean dark:text-softblue shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-0.5">
            <strong className="text-midnight dark:text-white block">
              In-Memory Browser Audio
            </strong>
            <p className="text-[11px] leading-relaxed">
              Recordings are held in temporary browser memory for immediate playback and self-reflection. Zero voice data is stored in unencrypted local storage. Audio clears upon browser refresh or close.
            </p>
          </div>
        </div>

        {/* Clinical Rationale Box */}
        <div className="rounded-2xl bg-porcelain dark:bg-midnight-surface border border-[#D5E1E6] dark:border-[#304653] p-4 text-xs text-stone dark:text-[#BDCBD2] flex items-start gap-2.5">
          <Sparkles className="h-4 w-4 text-ocean dark:text-softblue shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <strong className="text-midnight dark:text-white">Technique Guidance: </strong>
            <span>{exercise.clinicalRationale}</span>
          </div>
        </div>

        {/* Practice Speaking Prompt */}
        <div className="rounded-2xl border border-[#D5E1E6] dark:border-[#304653] bg-white dark:bg-midnight-surface p-5 text-center space-y-3">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-stone/80 dark:text-[#BDCBD2]/80 block">
            Speaking Prompt {activePromptIndex + 1} of {exercise.samplePrompts.length}
          </span>
          <p className="font-heading text-xl sm:text-2xl font-bold text-midnight dark:text-white tracking-tight">
            &ldquo;{exercise.samplePrompts[activePromptIndex]}&rdquo;
          </p>
          <div className="flex justify-center gap-2 pt-1">
            {exercise.samplePrompts.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePromptIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  activePromptIndex === idx
                    ? "w-8 bg-ocean dark:bg-softblue"
                    : "w-2 bg-[#D5E1E6] dark:bg-[#304653] hover:bg-stone/40"
                }`}
                aria-label={`Switch to Prompt ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Visualizer & Studio Console */}
        <div className="flex flex-col items-center justify-center p-6 rounded-[28px] bg-midnight dark:bg-midnight-deep text-white border border-[#304653] space-y-4">
          <div className="font-mono text-3xl font-medium tracking-widest text-white">
            {formatTimer(recordingSeconds)}
          </div>

          {/* Animated sound wave bars */}
          <div className="flex items-center gap-1.5 h-16 w-full max-w-xs justify-center">
            {[40, 65, 30, 85, 95, 60, 45, 80, 55, 70, 90, 40, 75, 35, 60].map((height, i) => (
              <div
                key={i}
                className={`w-1.5 rounded-full transition-all duration-150 ${
                  micState === "recording"
                    ? "bg-softblue animate-pulse"
                    : micState === "recorded"
                    ? "bg-ocean"
                    : "bg-[#304653]"
                }`}
                style={{
                  height:
                    micState === "recording"
                      ? `${Math.max(15, (height * ((recordingSeconds % 5) + 1)) % 100)}%`
                      : micState === "recorded"
                      ? `${height * 0.7}%`
                      : "15%",
                }}
              />
            ))}
          </div>

          {/* Microphone status alert if denied */}
          {errorMessage && (
            <div className="text-xs text-softblue bg-white/10 px-3 py-1.5 rounded-xl border border-white/20 max-w-sm text-center">
              {errorMessage}
            </div>
          )}

          {/* Recording Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {micState !== "recording" && micState !== "recorded" && (
              <Button
                onClick={handleStartRecording}
                size="lg"
                className="bg-ocean text-white hover:bg-ocean/90 rounded-full px-6 gap-2 shadow-elevated"
              >
                <Mic className="h-5 w-5" aria-hidden="true" />
                <span>Start Practice Recording</span>
              </Button>
            )}

            {micState === "recording" && (
              <Button
                onClick={handleStopRecording}
                size="lg"
                className="bg-terracotta hover:bg-terracotta/90 text-white rounded-full px-6 gap-2 animate-pulse shadow-elevated"
              >
                <Square className="h-4 w-4 fill-white" aria-hidden="true" />
                <span>Finish Recording</span>
              </Button>
            )}

            {micState === "recorded" && (
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  onClick={handleTogglePlayback}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-5"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-4 w-4 mr-1.5" aria-hidden="true" />
                      <span>Pause Playback</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-1.5" aria-hidden="true" />
                      <span>Listen Back</span>
                    </>
                  )}
                </Button>

                <Button
                  onClick={handleDiscard}
                  variant="ghost"
                  className="text-terracotta-glow hover:text-white hover:bg-white/10 rounded-full gap-1.5"
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                  <span>Discard & Re-record</span>
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Self-Reflection & Notes */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider block">
            Self-Observation & Reflection Notes
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="How did this repetition feel? Did you notice physical throat tension, smooth airflow, or easy phrasing?"
            rows={3}
            className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white p-3 text-xs sm:text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#E7EFF2] dark:border-[#304653]">
          <span className="text-[11px] text-stone/70 dark:text-[#BDCBD2]/70">
            Recordings remain private unless you choose to share with your clinician.
          </span>

          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              onClick={() => {
                cleanupMedia();
                onClose();
              }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={micState !== "recorded" && recordingSeconds === 0}
              onClick={handleSave}
              className="gap-2"
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              <span>Save Practice Recording</span>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
