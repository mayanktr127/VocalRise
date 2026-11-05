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
    | "coral"
    | "sand"
    | "seaglass"
    | "fjord"
    | "mist";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-[#102B3A] text-white dark:bg-[#F4F7F5] dark:text-[#0A1820]",
    secondary:
      "bg-[#DCEFEA] text-[#102B3A] border border-[#BFDFD6] dark:bg-[#132630] dark:text-[#A2B7BF] dark:border-[#203A48]",
    outline:
      "border border-[#B2CDC8] text-[#102B3A] bg-transparent dark:border-[#203A48] dark:text-[#F4F7F5]",
    success:
      "bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800",
    warning:
      "bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800",
    ocean:
      "bg-[#DCEFEA] text-[#102B3A] border border-[#BFDFD6] font-medium dark:bg-[#163842] dark:text-[#72C4B4] dark:border-[#204E5C]",
    teal:
      "bg-[#DCEFEA] text-[#102B3A] border border-[#BFDFD6] font-medium dark:bg-[#163842] dark:text-[#72C4B4] dark:border-[#204E5C]",
    cerulean:
      "bg-[#DCEFEA] text-[#102B3A] border border-[#B2CDC8] font-medium dark:bg-[#132630] dark:text-[#38B2A3] dark:border-[#203A48]",
    softblue:
      "bg-[#DCEFEA] text-[#102B3A] border border-[#B2CDC8] font-medium dark:bg-[#203A48]/50 dark:text-[#A2B7BF] dark:border-[#203A48]",
    terracotta:
      "bg-[#FBE8E2] text-[#9E3922] border border-[#F4C5B8] font-medium dark:bg-[#3B1E17] dark:text-[#F4A896] dark:border-[#5C2B1F]",
    coral:
      "bg-[#FBE8E2] text-[#9E3922] border border-[#F4C5B8] font-medium dark:bg-[#3B1E17] dark:text-[#F4A896] dark:border-[#5C2B1F]",
    sand:
      "bg-[#FDF4DC] text-[#7A5912] border border-[#F3DD9C] font-medium dark:bg-[#382B0D] dark:text-[#E9C46A] dark:border-[#574415]",
    seaglass:
      "bg-[#DCEFEA] text-[#102B3A] border border-[#BFDFD6] font-medium dark:bg-[#132B34] dark:text-[#A2D8CD] dark:border-[#1E4350]",
    fjord:
      "bg-[#102B3A] text-white font-medium dark:bg-[#132630] dark:text-[#F4F7F5] dark:border-[#203A48]",
    purple:
      "bg-[#DCEFEA] text-[#102B3A] border border-[#BFDFD6] dark:bg-[#132630] dark:text-[#A2B7BF] dark:border-[#203A48]",
    mist:
      "bg-[#DCEFEA]/70 text-[#4C5E67] border border-[#BFDFD6] dark:bg-[#132630] dark:text-[#A2B7BF] dark:border-[#203A48]",
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
