import * as React from "react";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: BadgeProps["variant"];
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "ocean",
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "space-y-3.5 max-w-3xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <Badge variant={badgeVariant} className="px-3.5 py-1 text-xs">
          {badge}
        </Badge>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-midnight dark:text-[#F2F6F7] leading-[1.2]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-stone dark:text-[#BDCBD2] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

