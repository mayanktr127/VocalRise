"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

// =============================================================================
// 1. MOTION FADE IN (SCROLL REVEAL WRAPPER)
// Animates once when scrolled into view using viewport settings.
// =============================================================================

export interface MotionFadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
}

export function MotionFadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className,
  amount = 0.15,
  ...props
}: MotionFadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion || direction === "none") return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: 24 };
      case "down":
        return { x: 0, y: -24 };
      case "left":
        return { x: 28, y: 0 };
      case "right":
        return { x: -28, y: 0 };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialPos }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// =============================================================================
// 2. MOTION STAGGER CONTAINER & ITEMS
// Renders groups of cards with staggered reveal as they enter viewport.
// =============================================================================

export interface MotionStaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  amount?: number;
}

export function MotionStaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.05,
  className,
  amount = 0.1,
  ...props
}: MotionStaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface MotionStaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function MotionStaggerItem({
  children,
  className,
  ...props
}: MotionStaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

// =============================================================================
// 3. MOTION CARD (VIEWPORT REVEAL + SUBTLE HOVER LIFT)
// =============================================================================

export interface MotionCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverLift?: number;
}

export function MotionCard({
  children,
  className,
  hoverLift = -4,
  ...props
}: MotionCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: hoverLift,
              transition: { duration: 0.2, ease: "easeOut" },
            }
      }
      className={cn("transition-shadow duration-200", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// =============================================================================
// 4. MOTION PROGRESS BAR (SMOOTH WIDTH FILL ON SCROLL)
// =============================================================================

export interface MotionProgressBarProps {
  percentage: number;
  className?: string;
  barClassName?: string;
  delay?: number;
}

export function MotionProgressBar({
  percentage,
  className,
  barClassName,
  delay = 0.2,
}: MotionProgressBarProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("h-2 w-full rounded-full bg-[#E7EFF2] dark:bg-midnight overflow-hidden", className)}>
      <motion.div
        initial={shouldReduceMotion ? { width: `${percentage}%` } : { width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.85,
          delay: shouldReduceMotion ? 0 : delay,
          ease: "easeOut",
        }}
        className={cn("h-full rounded-full bg-ocean dark:bg-softblue", barClassName)}
      />
    </div>
  );
}
