"use client";

import * as React from "react";
import { BookMarked, Plus, Sparkles, Heart, AlertCircle, Smile } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { JournalEntry, SpeechPathway } from "@/types/practice";
import { formatDate } from "@/lib/utils";

interface ConfidenceJournalProps {
  entries: JournalEntry[];
  pathway: SpeechPathway;
  onAddEntry?: (entry: JournalEntry) => void;
}

export function ConfidenceJournal({
  entries: initialEntries,
  pathway,
  onAddEntry,
}: ConfidenceJournalProps) {
  const [entries, setEntries] = React.useState<JournalEntry[]>(initialEntries);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Form states
  const [situation, setSituation] = React.useState("");
  const [techniqueUsed, setTechniqueUsed] = React.useState("");
  const [confidenceScore, setConfidenceScore] = React.useState(7);
  const [reflectionNotes, setReflectionNotes] = React.useState("");
  const [tag, setTag] = React.useState<JournalEntry["tag"]>("Triumph");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!situation.trim()) return;

    const newEntry: JournalEntry = {
      id: `jrn_${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      situation,
      pathway,
      techniqueUsed: techniqueUsed || "Conscious breathing and voluntary pausing",
      confidenceScore,
      anxietyBeforeScore: 5,
      reflectionNotes,
      tag,
    };

    setEntries([newEntry, ...entries]);
    if (onAddEntry) onAddEntry(newEntry);

    // Reset & close
    setSituation("");
    setTechniqueUsed("");
    setReflectionNotes("");
    setIsModalOpen(false);
  };

  return (
    <>
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookMarked className="h-5 w-5 text-brand-600 dark:text-brand-400" />
              Confidence & Experience Journal
            </CardTitle>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Reflections on everyday communication triumphs and learning moments
            </p>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsModalOpen(true)}
            className="text-xs gap-1.5"
          >
            <Plus className="h-3.5 w-3.5" />
            Log Moment
          </Button>
        </CardHeader>

        <CardContent className="space-y-3.5">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-2 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 transition-all shadow-subtle"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {entry.situation}
                </span>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={entry.tag === "Triumph" ? "success" : "secondary"}
                    className="text-[10px]"
                  >
                    {entry.tag}
                  </Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {formatDate(entry.date)}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="bg-brand-50 text-brand-800 dark:bg-brand-950/70 dark:text-brand-300 dark:border-brand-800 px-2 py-0.5 rounded-md font-medium border border-brand-100">
                  Technique: {entry.techniqueUsed}
                </span>
                <span className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-2 py-0.5 rounded-md font-medium">
                  Confidence: {entry.confidenceScore}/10
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                {entry.reflectionNotes}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Log Reflection Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Log a Communication Moment"
        description="Every speaking experience is data for your growth, not a pass/fail test."
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
              Communication Situation
            </label>
            <input
              type="text"
              required
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              placeholder="e.g. Ordered iced latte at drive-thru, or spoke up in class"
              className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
              Technique or Mindset Applied
            </label>
            <input
              type="text"
              value={techniqueUsed}
              onChange={(e) => setTechniqueUsed(e.target.value)}
              placeholder="e.g. Voluntary repetition, gentle vowel onset, pausing"
              className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
                Confidence (1 to 10): {confidenceScore}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={confidenceScore}
                onChange={(e) => setConfidenceScore(Number(e.target.value))}
                className="w-full accent-brand-600 dark:accent-brand-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
                Experience Tag
              </label>
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value as any)}
                className="w-full rounded-xl border border-slate-200 p-2 text-xs focus:border-brand-500 focus:ring-1 focus:ring-brand-500 bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              >
                <option value="Triumph">Triumph</option>
                <option value="Learning Moment">Learning Moment</option>
                <option value="Challenging">Challenging</option>
                <option value="Neutral">Neutral</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
              Self-Reflection Note
            </label>
            <textarea
              rows={3}
              value={reflectionNotes}
              onChange={(e) => setReflectionNotes(e.target.value)}
              placeholder="What went well? How did you respond if physical tension arose?"
              className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save Entry
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
