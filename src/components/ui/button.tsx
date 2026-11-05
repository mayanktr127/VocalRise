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
    | "terracotta";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean dark:focus-visible:ring-[#83B5CC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F9F8] dark:ring-offset-[#111D25] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-ocean text-white hover:bg-ocean-hover shadow-subtle hover:shadow-card dark:bg-[#83B5CC] dark:text-[#111D25] dark:hover:bg-[#9EC6D9] dark:font-semibold",
      secondary:
        "bg-mist text-midnight hover:bg-[#DCE5E9] border border-[#D5E1E6] dark:bg-midnight-surface dark:text-[#F2F6F7] dark:border-[#304653] dark:hover:bg-[#203542]",
      outline:
        "border border-[#A9C4D1] text-midnight hover:bg-mist/50 bg-white dark:bg-midnight-surface dark:border-[#304653] dark:text-[#F2F6F7] dark:hover:bg-[#203542] dark:hover:border-[#456170]",
      ghost:
        "text-stone hover:bg-mist/60 hover:text-midnight dark:text-[#BDCBD2] dark:hover:bg-midnight-surface dark:hover:text-[#F2F6F7]",
      danger:
        "bg-rose-600 text-white hover:bg-rose-700 shadow-subtle dark:bg-rose-600 dark:hover:bg-rose-500",
      link:
        "text-ocean dark:text-[#83B5CC] underline-offset-4 hover:underline p-0 h-auto font-normal",
      terracotta:
        "bg-[#A8533E] text-white hover:bg-[#8F4431] shadow-subtle dark:bg-[#A8533E] dark:hover:bg-[#BD6049] dark:text-white font-medium",
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
