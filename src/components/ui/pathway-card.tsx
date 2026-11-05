import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface PathwayCardProps {
  pathway: "stammering" | "articulation";
  title: string;
  badge: string;
  description: string;
  pillars: string[];
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function PathwayCard({
  pathway,
  title,
  badge,
  description,
  pillars,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  className,
}: PathwayCardProps) {
  const isStammering = pathway === "stammering";

  return (
    <div
      className={cn(
        "rounded-[28px] border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-6 sm:p-8 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group",
        isStammering ? "hover:border-ocean/40" : "hover:border-softblue/40",
        className
      )}
    >
      <div className="space-y-5">
        {/* Header & Badge */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <Badge
            variant={isStammering ? "ocean" : "softblue"}
            className="px-3 py-1 text-xs font-semibold"
          >
            {badge}
          </Badge>
          <span className="text-[11px] font-medium uppercase tracking-wider text-stone/80 dark:text-[#BDCBD2]/80">
            Dedicated Track
          </span>
        </div>

        {/* Visual Asset */}
        <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-[#E7EFF2] dark:border-[#304653]/60 bg-mist/30 dark:bg-midnight-deep/40 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={480}
            height={320}
            className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        {/* Title & Description */}
        <div className="space-y-2.5">
          <h3 className="font-heading text-2xl font-bold text-midnight dark:text-[#F2F6F7]">
            {title}
          </h3>
          <p className="text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Technique Pillars */}
        <div className="space-y-2 pt-2 border-t border-[#E7EFF2] dark:border-[#304653]">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone/90 dark:text-[#BDCBD2]/90 block mb-2">
            Key Practice Pillars
          </span>
          <ul className="space-y-2">
            {pillars.map((pillar, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-midnight dark:text-[#F2F6F7]"
              >
                <CheckCircle2
                  className={cn(
                    "h-4 w-4 shrink-0 mt-0.5",
                    isStammering ? "text-ocean dark:text-softblue" : "text-softblue dark:text-ocean"
                  )}
                  aria-hidden="true"
                />
                <span>{pillar}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-4">
        <Link href={ctaHref} className="block w-full">
          <Button
            variant={isStammering ? "primary" : "outline"}
            size="lg"
            className="w-full gap-2 justify-between"
          >
            <span>{ctaText}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

