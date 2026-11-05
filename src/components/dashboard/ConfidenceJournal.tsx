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
      <Card className="rounded-[28px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-6 sm:p-7 shadow-card h-full text-left transition-colors">
        <CardHeader className="flex flex-row items-center justify-between pb-4 px-0 pt-0">
          <div>
            <CardTitle className="font-heading text-lg font-bold flex items-center gap-2 text-midnight dark:text-white">
              <BookMarked className="h-5 w-5 text-terracotta" aria-hidden="true" />
              <span>Confidence & Experience Journal</span>
            </CardTitle>
            <p className="text-xs text-stone dark:text-[#BDCBD2] mt-1">
              Private self-reflections on everyday communication triumphs and comfort
            </p>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsModalOpen(true)}
            className="text-xs gap-1.5"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Log Moment</span>
          </Button>
        </CardHeader>

        <CardContent className="space-y-3.5 px-0 pb-0">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-2xl border border-[#D5E1E6] bg-porcelain p-4 space-y-2 hover:border-ocean/40 dark:border-[#304653] dark:bg-midnight-deep transition-all shadow-subtle"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <span className="font-heading text-xs sm:text-sm font-semibold text-midnight dark:text-white">
                  {entry.situation}
                </span>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={entry.tag === "Triumph" ? "mist" : "terracotta"}
                    className="text-[10px] font-semibold"
                  >
                    {entry.tag}
                  </Badge>
                  <span className="text-xs text-stone/80 dark:text-[#BDCBD2]/80 font-medium font-mono">
                    {formatDate(entry.date)}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="bg-white dark:bg-midnight-surface text-ocean dark:text-softblue border border-[#D5E1E6] dark:border-[#304653] px-2.5 py-0.5 rounded-lg font-medium">
                  Technique: {entry.techniqueUsed}
                </span>
                <span className="bg-white dark:bg-midnight-surface text-stone dark:text-[#BDCBD2] border border-[#D5E1E6] dark:border-[#304653] px-2.5 py-0.5 rounded-lg font-medium">
                  Ease: {entry.confidenceScore}/10
                </span>
              </div>

              <p className="text-xs text-stone dark:text-[#BDCBD2] leading-relaxed pt-1">
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
        description="Every speaking experience is data for your personal ease, not a pass/fail test."
      >
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider block mb-1.5">
              Communication Situation
            </label>
            <input
              type="text"
              required
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              placeholder="e.g. Ordered coffee at counter, or contributed to team sync"
              className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white px-3.5 py-2.5 text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider block mb-1.5">
              Technique or Mindset Applied
            </label>
            <input
              type="text"
              value={techniqueUsed}
              onChange={(e) => setTechniqueUsed(e.target.value)}
              placeholder="e.g. Voluntary easy bouncing, gentle vocal onset, unhurried breath"
              className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white px-3.5 py-2.5 text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider block mb-1.5">
                Speaking Ease (1 to 10): <span className="text-ocean dark:text-softblue font-bold">{confidenceScore}</span>
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={confidenceScore}
                onChange={(e) => setConfidenceScore(Number(e.target.value))}
                className="w-full accent-ocean"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider block mb-1.5">
                Experience Tag
              </label>
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value as any)}
                className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white px-3 py-2 text-xs focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue outline-none"
              >
                <option value="Triumph">Triumph</option>
                <option value="Learning Moment">Learning Moment</option>
                <option value="Challenging">Challenging</option>
                <option value="Neutral">Neutral</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider block mb-1.5">
              Personal Self-Reflection Note
            </label>
            <textarea
              rows={3}
              value={reflectionNotes}
              onChange={(e) => setReflectionNotes(e.target.value)}
              placeholder="What went well? How did your body feel? Did you manage physical tension with calmness?"
              className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white p-3 text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E7EFF2] dark:border-[#304653]">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save Journal Entry
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
