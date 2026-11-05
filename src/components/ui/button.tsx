import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "link"
    | "terracotta"
    | "coral";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] dark:focus-visible:ring-[#38B2A3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F5F0] dark:ring-offset-[#0A1820] disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:hover:transform-none motion-reduce:active:transform-none";

    const variantStyles = {
      primary:
        "bg-[#176B68] text-white hover:bg-[#115250] shadow-subtle hover:shadow-card dark:bg-[#38B2A3] dark:text-[#0A1820] dark:hover:bg-[#45C5B6] dark:font-semibold",
      secondary:
        "bg-[#DCEFEA] text-[#102B3A] hover:bg-[#C9E5DE] border border-[#BFDFD6] dark:bg-[#132630] dark:text-[#F4F7F5] dark:border-[#203A48] dark:hover:bg-[#1C3644]",
      outline:
        "border border-[#B2CDC8] text-[#102B3A] hover:bg-[#DCEFEA]/40 bg-white dark:bg-[#132630] dark:border-[#203A48] dark:text-[#F4F7F5] dark:hover:bg-[#1C3644] dark:hover:border-[#335669]",
      ghost:
        "text-[#4C5E67] hover:bg-[#DCEFEA]/50 hover:text-[#102B3A] dark:text-[#A2B7BF] dark:hover:bg-[#132630] dark:hover:text-[#F4F7F5]",
      danger:
        "bg-rose-600 text-white hover:bg-rose-700 shadow-subtle dark:bg-rose-600 dark:hover:bg-rose-500",
      link:
        "text-[#176B68] dark:text-[#38B2A3] underline-offset-4 hover:underline p-0 h-auto font-normal",
      terracotta:
        "bg-[#D15436] text-white hover:bg-[#B84328] shadow-subtle dark:bg-[#E26D50] dark:hover:bg-[#D15436] dark:text-white font-medium",
      coral:
        "bg-[#D15436] text-white hover:bg-[#B84328] shadow-subtle dark:bg-[#E26D50] dark:hover:bg-[#D15436] dark:text-white font-medium",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
