import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "success"
    | "warning"
    | "teal"
    | "cerulean"
    | "purple"
    | "ocean"
    | "softblue"
    | "terracotta"
    | "mist";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-midnight text-white dark:bg-[#F2F6F7] dark:text-[#111D25]",
    secondary:
      "bg-mist text-stone border border-[#D5E1E6] dark:bg-[#15232C] dark:text-[#BDCBD2] dark:border-[#304653]",
    outline:
      "border border-[#A9C4D1] text-midnight bg-transparent dark:border-[#304653] dark:text-[#F2F6F7]",
    success:
      "bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800",
    warning:
      "bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800",
    ocean:
      "bg-ocean/10 text-ocean border border-ocean/25 font-medium dark:bg-[#83B5CC]/15 dark:text-[#83B5CC] dark:border-[#83B5CC]/30",
    teal:
      "bg-ocean/10 text-ocean border border-ocean/25 font-medium dark:bg-[#83B5CC]/15 dark:text-[#83B5CC] dark:border-[#83B5CC]/30",
    cerulean:
      "bg-mist text-midnight border border-[#A9C4D1]/60 font-medium dark:bg-midnight-surface dark:text-[#83B5CC] dark:border-[#304653]",
    softblue:
      "bg-softblue/20 text-midnight border border-[#A9C4D1] font-medium dark:bg-[#304653]/40 dark:text-[#BDCBD2] dark:border-[#304653]",
    terracotta:
      "bg-terracotta/10 text-[#9C5A48] border border-terracotta/25 font-medium dark:bg-terracotta/20 dark:text-[#D69A84] dark:border-terracotta/30",
    purple:
      "bg-mist text-stone border border-[#D5E1E6] dark:bg-[#15232C] dark:text-[#BDCBD2] dark:border-[#304653]",
    mist:
      "bg-mist text-stone border border-[#D5E1E6] dark:bg-[#15232C] dark:text-[#BDCBD2] dark:border-[#304653]",
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
