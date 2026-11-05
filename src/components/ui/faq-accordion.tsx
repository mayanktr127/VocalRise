"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const DEFAULT_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is VocalRise?",
    answer:
      "VocalRise is a supportive web platform designed to help people who stammer or have articulation and lisping difficulties practice speech techniques at their own pace, work toward personal communication goals, and optionally collaborate with speech-language professionals.",
  },
  {
    id: "faq-2",
    question: "Is VocalRise a replacement for speech-language therapy?",
    answer:
      "No. VocalRise is not a replacement for qualified speech-language therapy or clinical evaluation. It is built around personal communication goals and supportive speech practice to serve as an asynchronous practice bridge alongside professional care or for self-guided exploration.",
  },
  {
    id: "faq-3",
    question: "Does VocalRise claim to cure stammering?",
    answer:
      "No. VocalRise makes zero cure claims. Stammering is a complex neuro-developmental communication variation. Success on our platform is not measured by forced fluency; it focuses on ease of communication, reducing physical tension, self-advocacy, and building personal speaking confidence.",
  },
  {
    id: "faq-4",
    question: "What is the difference between the two practice pathways?",
    answer:
      "Stammering and articulation difficulties involve distinct speech mechanics. The Stammering Support track focuses on gentle vocal onset, continuous voicing, desensitization, and speaking freedom. The Articulation and Lisping track focuses on phonetic placement, airflow channeling, and sound precision (such as /s/, /z/, and /r/). They are kept strictly separate so practice remains relevant to your needs.",
  },
  {
    id: "faq-5",
    question: "Do I need a speech therapist to use VocalRise?",
    answer:
      "No. You can use VocalRise independently for personal technique practice and self-reflection. If you already work with a qualified clinician, you can optionally connect using a clinic invite code to share practice notes and receive asynchronous guidance.",
  },
  {
    id: "faq-6",
    question: "Are my voice recordings automatically shared with anyone?",
    answer:
      "No. Recordings are private by default. In this prototype, audio is handled in temporary browser memory without being written to local storage. Sharing with a linked clinician requires an explicit action on each practice recording.",
  },
  {
    id: "faq-7",
    question: "How is my progress represented without arbitrary scores?",
    answer:
      "We avoid fabricated clinical percentages or automated 'fluency ratings.' Instead, your progress is reflected through tangible personal milestones: practice consistency, self-reported speaking comfort, goal completion, and situational reflections.",
  },
  {
    id: "faq-8",
    question: "Is automated feedback considered a clinical diagnosis?",
    answer:
      "No. Automated acoustic feedback in VocalRise is designed strictly as a practice aid and self-reflection mirror, never as a clinical diagnosis or medical evaluation. True diagnosis requires a qualified speech-language professional.",
  },
];

interface FAQAccordionProps {
  items?: FAQItem[];
  className?: string;
}

export function FAQAccordion({
  items = DEFAULT_FAQS,
  className,
}: FAQAccordionProps) {
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({
    "faq-1": true, // First open by default for clear affordance
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      role="region"
      aria-label="Frequently Asked Questions"
      className={cn("w-full max-w-3xl mx-auto space-y-3.5", className)}
    >
      {items.map((item) => {
        const isOpen = Boolean(openItems[item.id]);
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface overflow-hidden shadow-subtle transition-colors"
          >
            <button
              type="button"
              id={`faq-btn-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean dark:focus-visible:ring-softblue focus-visible:ring-inset transition-colors hover:bg-mist/30 dark:hover:bg-midnight-deep/30"
            >
              <span className="font-heading text-base sm:text-lg font-semibold text-midnight dark:text-[#F2F6F7] pr-4">
                {item.question}
              </span>
              <span
                className={cn(
                  "h-8 w-8 rounded-full bg-mist dark:bg-[#15232C] text-ocean dark:text-softblue flex items-center justify-center shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180 bg-ocean text-white dark:bg-softblue dark:text-midnight"
                )}
                aria-hidden="true"
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            {isOpen && (
              <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 animate-in fade-in duration-200"
              >
                <div className="pt-3 border-t border-[#E7EFF2] dark:border-[#304653]/60">
                  <p className="text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
