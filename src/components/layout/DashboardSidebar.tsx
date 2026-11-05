"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Mic,
  Target,
  BookMarked,
  LineChart,
  Stethoscope,
  Settings,
  HelpCircle,
  Sparkles,
  LogOut,
  Sliders,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";
import { UserProfile } from "@/types/user";
import { ThemeToggle } from "@/components/theme-provider";

interface DashboardSidebarProps {
  user: UserProfile;
  activeSection: string;
  onSelectSection: (section: string) => void;
}

export function DashboardSidebar({
  user,
  activeSection,
  onSelectSection,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { id: "overview", label: "Today's Hub", icon: LayoutDashboard },
    { id: "exercises", label: "Practice Modules", icon: Mic },
    { id: "goals", label: "Personal Goals", icon: Target },
    { id: "recordings", label: "Audio Recordings", icon: LineChart },
    { id: "journal", label: "Confidence Journal", icon: BookMarked },
  ];

  return (
    <aside className="w-full lg:w-64 shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-slate-200/90 flex flex-col justify-between p-4 lg:p-6 dark:bg-slate-900 dark:border-slate-800 transition-colors">
      <div className="space-y-6">
        {/* User Mini Profile Card */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/70 dark:bg-slate-800/60 dark:border-slate-700/60">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-brand-600 to-cerulean-600 text-white font-bold flex items-center justify-center shrink-0 shadow-sm">
            {user.name.charAt(0)}
          </div>
          <div className="overflow-hidden">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
              {user.name}
            </h3>
            <p className="text-xs text-brand-700 dark:text-brand-400 font-medium truncate capitalize">
              {user.pathway} Track
            </p>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="space-y-1">
          <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 mb-2">
            Practice Menu
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors text-left",
                  isActive
                    ? "bg-brand-50 text-brand-800 font-semibold dark:bg-brand-950/60 dark:text-brand-300"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                )}
              >
                <Icon className={cn("h-4 w-4", isActive ? "text-brand-600 dark:text-brand-400" : "text-slate-400 dark:text-slate-500")} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Clinician link section */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
          <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 mb-2">
            Clinical Space
          </div>
          <Link
            href="/therapist"
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-cerulean-700 bg-cerulean-50/70 hover:bg-cerulean-100/70 dark:text-cerulean-300 dark:bg-cerulean-950/50 dark:hover:bg-cerulean-900/50 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Stethoscope className="h-4 w-4 text-cerulean-600 dark:text-cerulean-400" />
              <span>Therapist Portal</span>
            </div>
            <span className="text-[10px] font-bold bg-white text-cerulean-700 dark:bg-slate-900 dark:text-cerulean-300 px-1.5 py-0.5 rounded border border-cerulean-200 dark:border-cerulean-800">
              Demo
            </span>
          </Link>
        </div>
      </div>

      {/* Footer controls: theme toggle & logout */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
        <div className="flex items-center justify-between px-2">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Theme Mode</span>
          <ThemeToggle />
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2 pt-1 border-t border-slate-100 dark:border-slate-800">
          <Link href="/resources" className="hover:text-slate-900 dark:hover:text-slate-200 flex items-center gap-1.5">
            <HelpCircle className="h-3.5 w-3.5" /> Guides
          </Link>
          <Link href="/login" className="hover:text-slate-900 dark:hover:text-slate-200 flex items-center gap-1.5">
            <LogOut className="h-3.5 w-3.5" /> Sign out
          </Link>
        </div>
      </div>
    </aside>
  );
}
