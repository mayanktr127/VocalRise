"use client";

import * as React from "react";
import { Target, Plus, CheckCircle2, Calendar, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Modal } from "@/components/ui/modal";
import { PersonalGoal } from "@/types/practice";

interface GoalsListProps {
  goals: PersonalGoal[];
  onAddGoal?: (goal: Partial<PersonalGoal>) => void;
}

export function GoalsList({ goals: initialGoals, onAddGoal }: GoalsListProps) {
  const [goals, setGoals] = React.useState<PersonalGoal[]>(initialGoals);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState("");
  const [newCategory, setNewCategory] = React.useState<PersonalGoal["category"]>("Fluency Management");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newGoal: PersonalGoal = {
      id: `goal_${Date.now()}`,
      title: newTitle,
      targetDate: "Dec 30, 2026",
      pathway: "stammering",
      progressPercent: 10,
      status: "In Progress",
      category: newCategory,
      weeklyTargetSessions: 3,
      completedThisWeek: 0,
    };

    setGoals([newGoal, ...goals]);
    if (onAddGoal) onAddGoal(newGoal);
    setNewTitle("");
    setIsModalOpen(false);
  };

  return (
    <>
      <Card className="rounded-[28px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-6 sm:p-7 shadow-card h-full text-left">
        <CardHeader className="flex flex-row items-center justify-between pb-4 px-0 pt-0">
          <div>
            <CardTitle className="font-heading text-lg font-bold flex items-center gap-2 text-midnight dark:text-white">
              <Target className="h-5 w-5 text-ocean dark:text-softblue" aria-hidden="true" />
              <span>Personal Goals</span>
            </CardTitle>
            <p className="text-xs text-stone dark:text-[#BDCBD2] mt-1">
              Situational comfort, participation & technique transfer
            </p>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsModalOpen(true)}
            className="text-xs gap-1.5"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            <span>New Goal</span>
          </Button>
        </CardHeader>

        <CardContent className="space-y-3.5 px-0 pb-0">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="rounded-2xl border border-[#D5E1E6] bg-porcelain p-4 transition-all hover:border-ocean/40 dark:border-[#304653] dark:bg-midnight-deep shadow-subtle space-y-2.5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-heading text-xs sm:text-sm font-semibold text-midnight dark:text-white leading-snug">
                  {goal.title}
                </span>
                <Badge
                  variant={goal.status === "Achieved" ? "mist" : "ocean"}
                  className="shrink-0 text-[10px]"
                >
                  {goal.status}
                </Badge>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-stone dark:text-[#BDCBD2]">
                  <span>{goal.category}</span>
                  <span className="font-bold text-ocean dark:text-softblue">
                    {goal.progressPercent}%
                  </span>
                </div>
                <Progress value={goal.progressPercent} className="h-1.5" />
              </div>

              <div className="flex items-center justify-between text-[11px] text-stone dark:text-[#BDCBD2] pt-1 border-t border-[#E7EFF2] dark:border-[#304653]">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-stone/60 dark:text-[#BDCBD2]/60" aria-hidden="true" />
                  <span>Target: {goal.targetDate}</span>
                </span>
                <span>{goal.weeklyTargetSessions} sessions / week</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Accessible Goal Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create a Personal Goal"
        description="Set a communication situation or technique milestone that is meaningful to you."
      >
        <form onSubmit={handleCreate} className="space-y-4 text-left">
          <div>
            <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider block mb-1.5">
              Goal Description
            </label>
            <input
              type="text"
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. Order coffee at a new cafe without word substitution"
              className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white px-3.5 py-2.5 text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-stone dark:text-[#BDCBD2] uppercase tracking-wider block mb-1.5">
              Category
            </label>
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value as PersonalGoal["category"])}
              className="w-full rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep dark:text-white px-3.5 py-2.5 text-sm focus:border-ocean focus:ring-2 focus:ring-ocean/20 dark:focus:border-softblue outline-none"
            >
              <option value="Fluency Management">Fluency Management</option>
              <option value="Motor Articulation">Motor Articulation</option>
              <option value="Speech Anxiety & Avoidance">Speech Anxiety & Avoidance</option>
            </select>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E7EFF2] dark:border-[#304653]">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save Goal
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
