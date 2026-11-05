"use client";

import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { BarChart3, Users, CheckCircle2, Info } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useTheme } from "@/components/theme-provider";

export function TherapistMetricsChart() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const gridStroke = isDark ? "#203A48" : "#D5E1E6";
  const axisColor = isDark ? "#A2B7BF" : "#4C5E67";

  const data = [
    { name: "Julian M.", adherence: 92, target: 80 },
    { name: "Maya P.", adherence: 86, target: 80 },
    { name: "Marcus V.", adherence: 78, target: 80 },
    { name: "Elena R.", adherence: 65, target: 80 },
    { name: "Liam O.", adherence: 95, target: 80 },
  ];

  return (
    <Card className="rounded-[28px] border border-[#D5E1E6] bg-white dark:border-[#203A48] dark:bg-[#132630] p-6 sm:p-7 shadow-card h-full text-left transition-colors">
      <CardHeader className="pb-4 px-0 pt-0 border-b border-[#DCEFEA]/60 dark:border-[#203A48] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <CardTitle className="font-heading text-lg font-bold flex items-center gap-2 text-[#102B3A] dark:text-[#F4F7F5]">
            <BarChart3 className="h-5 w-5 text-[#176B68] dark:text-[#38B2A3]" aria-hidden="true" />
            <span>Caseload Practice Adherence (% Target)</span>
          </CardTitle>
          <p className="text-xs text-[#4C5E67] dark:text-[#A2B7BF] mt-1">
            Weekly home practice completion relative to prescribed drill target (Demonstration Caseload)
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#4C5E67] dark:text-[#A2B7BF]">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#176B68] dark:bg-[#38B2A3]" aria-hidden="true" /> Home Adherence
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#DCEFEA] dark:bg-[#203A48]" aria-hidden="true" /> Target Benchmark (80%)
          </span>
        </div>
      </CardHeader>

      <CardContent className="pt-4 px-0 pb-0 space-y-3">
        <div className="h-60 w-full">
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridStroke} />
                <XAxis dataKey="name" stroke={axisColor} fontSize={11} tickLine={false} />
                <YAxis domain={[0, 100]} stroke={axisColor} fontSize={11} tickLine={false} unit="%" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "#132630" : "#102B3A",
                    borderColor: isDark ? "#203A48" : "#D5E1E6",
                    color: "#FFFFFF",
                    borderRadius: "0.75rem",
                    fontSize: "12px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                  itemStyle={{ color: isDark ? "#38B2A3" : "#DCEFEA" }}
                  formatter={(val: any) => [`${val}%`, "Adherence"]}
                />
                <Bar dataKey="adherence" fill={isDark ? "#38B2A3" : "#176B68"} radius={[6, 6, 0, 0]} maxBarSize={36} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-[#4C5E67]/50 dark:text-[#A2B7BF]/50">
              Loading caseload metrics...
            </div>
          )}
        </div>

        <div className="pt-2 border-t border-[#DCEFEA]/60 dark:border-[#203A48] flex items-center justify-between text-[11px] text-[#4C5E67]/70 dark:text-[#A2B7BF]/70">
          <span>Benchmark target set at 80% weekly consistency for habit reinforcement</span>
          <span className="italic">Demonstration Data (Prototype Simulation)</span>
        </div>
      </CardContent>
    </Card>
  );
}
