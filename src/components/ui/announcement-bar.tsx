"use client";

import * as React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnnouncementBarProps {
  className?: string;
}

export function AnnouncementBar({ className }: AnnouncementBarProps) {
  return (
    <aside
      aria-label="Prototype preview and communication practice notice"
      className={cn(
        "bg-midnight text-mist dark:bg-midnight-deep dark:border-b dark:border-[#304653] px-4 py-2 text-xs transition-colors",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Grounded communication practice statement */}
        <div className="flex items-center gap-2 text-left truncate">
          <ShieldCheck className="h-4 w-4 text-softblue shrink-0" aria-hidden="true" />
          <span className="font-normal truncate">
            <strong className="font-medium text-white">Built around personal communication goals and supportive speech practice</strong> — prototype preview for speech techniques.
          </span>
        </div>

        {/* Clinician demo link */}
        <Link
          href="/therapist"
          className="inline-flex items-center gap-1 font-medium text-softblue hover:text-white shrink-0 transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
        >
          <span>Explore Clinician Portal Demo</span>
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
