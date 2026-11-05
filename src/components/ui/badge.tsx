import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "teal" | "cerulean" | "purple";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900",
    secondary: "bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    outline: "border border-slate-300 text-slate-700 bg-transparent dark:border-slate-700 dark:text-slate-300",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800",
    warning: "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800",
    teal: "bg-brand-50 text-brand-700 border border-brand-200 font-medium dark:bg-brand-950/70 dark:text-brand-300 dark:border-brand-800",
    cerulean: "bg-cerulean-50 text-cerulean-700 border border-cerulean-200 font-medium dark:bg-cerulean-950/70 dark:text-cerulean-300 dark:border-cerulean-800",
    purple: "bg-purple-50 text-purple-700 border border-purple-200 font-medium dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
