"use client";

import * as React from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Activity, HelpCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MOCK_PROGRESS_METRICS } from "@/lib/mock-data";
import { useTheme } from "@/components/theme-provider";

export function ProgressOverviewChart() {
  const [mounted, setMounted] = React.useState(false);
  const [activeMetric, setActiveMetric] = React.useState<"minutes" | "confidence">("minutes");
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const gridStroke = isDark ? "#334155" : "#E2E8F0";
  const axisColor = isDark ? "#94A3B8" : "#64748B";

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-3">
        <div>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-brand-600 dark:text-brand-400" />
            Practice & Confidence Trajectory
          </CardTitle>
          <CardDescription className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Illustrative self-reflection metrics over the last 7 days
          </CardDescription>
        </div>

        {/* Metric Selector Tabs */}
        <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 text-xs">
          <button
            onClick={() => setActiveMetric("minutes")}
            className={`rounded-lg px-3 py-1 font-medium transition-all ${
              activeMetric === "minutes"
                ? "bg-white text-brand-700 shadow-sm dark:bg-slate-700 dark:text-brand-300"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            Practice Minutes
          </button>
          <button
            onClick={() => setActiveMetric("confidence")}
            className={`rounded-lg px-3 py-1 font-medium transition-all ${
              activeMetric === "confidence"
                ? "bg-white text-cerulean-700 shadow-sm dark:bg-slate-700 dark:text-cerulean-300"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            Confidence (1-10)
          </button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="h-64 w-full">
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              {activeMetric === "minutes" ? (
                <BarChart data={MOCK_PROGRESS_METRICS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridStroke} />
                  <XAxis dataKey="day" stroke={axisColor} fontSize={12} tickLine={false} />
                  <YAxis stroke={axisColor} fontSize={12} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? "#0F172A" : "#0F172A",
                      borderColor: isDark ? "#334155" : "#334155",
                      color: "#FFFFFF",
                      borderRadius: "0.75rem",
                      fontSize: "12px",
                    }}
                    itemStyle={{ color: "#2DD4BF" }}
                    formatter={(value: any) => [`${value} mins`, "Practice Duration"]}
                  />
                  <Bar
                    dataKey="minutes"
                    fill="#0D9488"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={40}
                  />
                </BarChart>
              ) : (
                <AreaChart data={MOCK_PROGRESS_METRICS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="confidenceGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0284C7" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#0284C7" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridStroke} />
                  <XAxis dataKey="day" stroke={axisColor} fontSize={12} tickLine={false} />
                  <YAxis domain={[1, 10]} stroke={axisColor} fontSize={12} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0F172A",
                      borderColor: "#334155",
                      color: "#FFFFFF",
                      borderRadius: "0.75rem",
                      fontSize: "12px",
                    }}
                    itemStyle={{ color: "#38BDF8" }}
                    formatter={(value: any) => [`${value} / 10`, "Self-Reported Confidence"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="confidence"
                    stroke="#0284C7"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#confidenceGrad)"
                  />
                </AreaChart>
              )}
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-slate-400">
              Loading progress charts...
            </div>
          )}
        </div>

        {/* Subtle clinical note */}
        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
          <span className="flex items-center gap-1">
            <Activity className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" /> Total 105 mins logged this week
          </span>
          <span className="text-slate-400 dark:text-slate-500 italic">Self-reported illustrative trends</span>
        </div>
      </CardContent>
    </Card>
  );
}
