"use client";

import * as React from "react";
import { Target, Layers, Stethoscope, Lock } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface TrustIndicatorProps {
  className?: string;
}

export function TrustIndicator({ className }: TrustIndicatorProps) {
  const shouldReduceMotion = useReducedMotion();

  const principles = [
    {
      icon: Target,
      title: "Personal Goals First",
      description: "Practice tailored to your real-life speaking situations, not rigid mechanical scores.",
    },
    {
      icon: Layers,
      title: "Two Distinct Pathways",
      description: "Stammering support and phonetic sound placement are kept strictly separate.",
    },
    {
      icon: Stethoscope,
      title: "Optional Clinician Link",
      description: "Connect with a speech-language professional when you choose to share practice notes.",
    },
    {
      icon: Lock,
      title: "Privacy-Conscious Audio",
      description: "Practice recordings are processed in temporary browser memory. Zero voice data is stored in local storage.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" },
    },
  };

  return (
    <div
      role="region"
      aria-label="Core Practice Principles"
      className={cn("w-full max-w-7xl mx-auto", className)}
    >
      <h2 className="sr-only">Core Practice Principles</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {principles.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { y: -3, transition: { duration: 0.2, ease: "easeOut" } }
              }
              className="rounded-2xl border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-5 sm:p-6 shadow-subtle hover:shadow-card hover:border-[#A9C4D1] dark:hover:border-[#456170] transition-colors flex flex-col justify-between space-y-3"
            >
              <div className="h-10 w-10 rounded-xl bg-mist dark:bg-[#15232C] text-ocean dark:text-softblue flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-heading text-base font-semibold text-midnight dark:text-[#F2F6F7]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
