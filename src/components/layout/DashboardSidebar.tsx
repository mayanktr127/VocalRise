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
  Award,
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
    <aside className="w-full lg:w-64 shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-[#D5E1E6] flex flex-col justify-between p-4 lg:p-6 dark:bg-midnight-deep dark:border-[#304653] transition-colors">
      <div className="space-y-6">
        {/* User Mini Profile Card */}
        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-porcelain border border-[#D5E1E6] dark:bg-midnight-surface dark:border-[#304653]">
          <div className="h-10 w-10 rounded-xl bg-ocean text-white font-heading font-bold text-base flex items-center justify-center shrink-0 shadow-subtle">
            {user.name.charAt(0)}
          </div>
          <div className="overflow-hidden text-left">
            <h3 className="font-heading text-sm font-bold text-midnight dark:text-white truncate">
              {user.name}
            </h3>
            <p className="text-xs text-ocean dark:text-softblue font-medium truncate capitalize">
              {user.pathway} Track
            </p>
          </div>
        </div>

        {/* Navigation list */}
        <nav aria-label="Practice Dashboard Sections" className="space-y-1">
          <div className="text-[11px] font-semibold text-stone/70 dark:text-[#BDCBD2]/70 uppercase tracking-wider px-3 mb-2 text-left">
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
                  "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors text-left",
                  isActive
                    ? "bg-mist text-ocean font-semibold dark:bg-midnight-surface dark:text-softblue"
                    : "text-stone hover:bg-mist/40 hover:text-midnight dark:text-[#BDCBD2] dark:hover:bg-midnight-surface dark:hover:text-white"
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4 shrink-0",
                    isActive ? "text-ocean dark:text-softblue" : "text-stone/60 dark:text-[#BDCBD2]/60"
                  )}
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Clinician link section */}
        <div className="pt-2 border-t border-[#E7EFF2] dark:border-[#304653] space-y-1 text-left">
          <div className="text-[11px] font-semibold text-stone/70 dark:text-[#BDCBD2]/70 uppercase tracking-wider px-3 mb-2">
            Clinical Space
          </div>
          <Link
            href="/therapist"
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-ocean bg-mist/60 hover:bg-mist dark:text-softblue dark:bg-midnight-surface dark:hover:bg-midnight-surface/80 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Stethoscope className="h-4 w-4 text-ocean dark:text-softblue" aria-hidden="true" />
              <span>Therapist Portal</span>
            </div>
            <span className="text-[10px] font-bold bg-white dark:bg-midnight-deep px-2 py-0.5 rounded-md border border-[#D5E1E6] dark:border-[#304653]">
              Demo
            </span>
          </Link>
        </div>
      </div>

      {/* Footer quick action bar */}
      <div className="pt-4 border-t border-[#E7EFF2] dark:border-[#304653] flex items-center justify-between">
        <Link
          href="/"
          className="text-xs text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white flex items-center gap-1.5"
        >
          <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Exit Hub</span>
        </Link>
        <ThemeToggle />
      </div>
    </aside>
  );
}
