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
import { BarChart3, Users, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useTheme } from "@/components/theme-provider";

export function TherapistMetricsChart() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const gridStroke = isDark ? "#334155" : "#E2E8F0";
  const axisColor = isDark ? "#94A3B8" : "#64748B";

  const data = [
    { name: "Julian M.", adherence: 92, target: 80 },
    { name: "Maya P.", adherence: 86, target: 80 },
    { name: "Marcus V.", adherence: 78, target: 80 },
    { name: "Elena R.", adherence: 65, target: 80 },
    { name: "Liam O.", adherence: 95, target: 80 },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-cerulean-600 dark:text-cerulean-400" />
            Patient Practice Adherence (% Target)
          </CardTitle>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Weekly home practice completion relative to prescribed target
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-cerulean-600" /> Adherence
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" /> Clinic Target (80%)
          </span>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <div className="h-60 w-full">
          {mounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridStroke} />
                <XAxis dataKey="name" stroke={axisColor} fontSize={11} tickLine={false} />
                <YAxis domain={[0, 100]} stroke={axisColor} fontSize={11} tickLine={false} unit="%" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0F172A",
                    borderColor: "#334155",
                    color: "#FFFFFF",
                    borderRadius: "0.75rem",
                    fontSize: "12px",
                  }}
                  formatter={(val: any) => [`${val}%`, "Adherence"]}
                />
                <Bar dataKey="adherence" fill="#0284C7" radius={[6, 6, 0, 0]} maxBarSize={36} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-slate-400">
              Loading caseload metrics...
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
