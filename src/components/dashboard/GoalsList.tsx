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
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-brand-600 dark:text-brand-400" />
              Personal Goals
            </CardTitle>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Desensitization targets & technique carryover
            </p>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsModalOpen(true)}
            className="text-xs gap-1.5"
          >
            <Plus className="h-3.5 w-3.5" />
            New Goal
          </Button>
        </CardHeader>

        <CardContent className="space-y-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 transition-all hover:bg-slate-50 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:bg-slate-800/70 dark:hover:border-slate-700"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  {goal.title}
                </span>
                <Badge
                  variant={goal.status === "Achieved" ? "success" : "teal"}
                  className="shrink-0 text-[10px]"
                >
                  {goal.status}
                </Badge>
              </div>

              <div className="space-y-1.5 mb-3">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>{goal.category}</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {goal.progressPercent}%
                  </span>
                </div>
                <Progress value={goal.progressPercent} className="h-1.5" />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200/60 dark:border-slate-800">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> Target: {goal.targetDate}
                </span>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {goal.completedThisWeek}/{goal.weeklyTargetSessions} sessions this week
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Add Goal Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Set a New Goal"
        description="Pick a realistic, communication-focused target that matters to your daily life."
      >
        <form onSubmit={handleCreate} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
              Goal Statement
            </label>
            <input
              type="text"
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. Introduce myself in morning standup without avoiding my name"
              className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
              Target Category
            </label>
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value as any)}
              className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <option value="Speech Anxiety & Avoidance">Speech Anxiety & Avoidance</option>
              <option value="Fluency Management">Fluency Management</option>
              <option value="Motor Articulation">Motor Articulation</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
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
