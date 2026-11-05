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
import { TrendingUp, Activity, Info } from "lucide-react";
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
  const gridStroke = isDark ? "#304653" : "#D5E1E6";
  const axisColor = isDark ? "#BDCBD2" : "#4B555A";

  return (
    <Card className="rounded-[28px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-6 sm:p-7 shadow-card h-full text-left transition-colors">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-3 px-0 pt-0">
        <div>
          <CardTitle className="font-heading text-lg font-bold flex items-center gap-2 text-midnight dark:text-white">
            <TrendingUp className="h-5 w-5 text-ocean dark:text-softblue" aria-hidden="true" />
            <span>Practice & Comfort Trajectory</span>
          </CardTitle>
          <CardDescription className="text-xs text-stone dark:text-[#BDCBD2] mt-1">
            Illustrative self-reflection metrics over the last 7 days
          </CardDescription>
        </div>

        {/* Metric Selector Tabs */}
        <div
          role="tablist"
          aria-label="Chart Metric Selection"
          className="inline-flex rounded-xl bg-porcelain dark:bg-midnight-deep p-1 text-xs border border-[#D5E1E6] dark:border-[#304653]"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeMetric === "minutes"}
            onClick={() => setActiveMetric("minutes")}
            className={`rounded-lg px-3 py-1 font-semibold transition-all ${
              activeMetric === "minutes"
                ? "bg-ocean text-white shadow-subtle"
                : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
            }`}
          >
            Practice Minutes
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeMetric === "confidence"}
            onClick={() => setActiveMetric("confidence")}
            className={`rounded-lg px-3 py-1 font-semibold transition-all ${
              activeMetric === "confidence"
                ? "bg-ocean text-white shadow-subtle"
                : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
            }`}
          >
            Ease & Comfort (1-10)
          </button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 px-0 pb-0">
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
                      backgroundColor: "#243746",
                      borderColor: "#304653",
                      color: "#FFFFFF",
                      borderRadius: "0.75rem",
                      fontSize: "12px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    }}
                    itemStyle={{ color: "#83B5CC" }}
                    formatter={(value: any) => [`${value} mins`, "Practice Duration"]}
                  />
                  <Bar
                    dataKey="minutes"
                    fill="#315F78"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={40}
                  />
                </BarChart>
              ) : (
                <AreaChart data={MOCK_PROGRESS_METRICS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="comfortGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#83B5CC" stopOpacity={0.5} />
                      <stop offset="95%" stopColor="#83B5CC" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridStroke} />
                  <XAxis dataKey="day" stroke={axisColor} fontSize={12} tickLine={false} />
                  <YAxis domain={[1, 10]} stroke={axisColor} fontSize={12} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#243746",
                      borderColor: "#304653",
                      color: "#FFFFFF",
                      borderRadius: "0.75rem",
                      fontSize: "12px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    }}
                    itemStyle={{ color: "#83B5CC" }}
                    formatter={(value: any) => [`${value} / 10`, "Self-Reported Ease"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="confidence"
                    stroke="#83B5CC"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#comfortGrad)"
                  />
                </AreaChart>
              )}
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-stone/50 dark:text-[#BDCBD2]/50">
              Loading progress charts...
            </div>
          )}
        </div>

        {/* Subtle non-diagnostic note */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-stone dark:text-[#BDCBD2] pt-3 border-t border-[#E7EFF2] dark:border-[#304653] gap-2">
          <span className="flex items-center gap-1.5 font-medium">
            <Activity className="h-3.5 w-3.5 text-ocean dark:text-softblue" aria-hidden="true" />
            <span>105 total practice minutes logged this week</span>
          </span>
          <span className="text-stone/60 dark:text-[#BDCBD2]/60 italic">
            Illustrative self-reflection data (Prototype Demonstration)
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
