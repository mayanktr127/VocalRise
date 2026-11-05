"use client";

import * as React from "react";
import Link from "next/link";
import { Waves, HeartHandshake, ShieldCheck } from "lucide-react";
import { Modal } from "@/components/ui/modal";

export function Footer() {
  const [activeModal, setActiveModal] = React.useState<"privacy" | "terms" | "accessibility" | null>(null);

  return (
    <footer className="border-t border-[#304653] bg-midnight text-mist dark:bg-midnight-deep transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand & Ethos */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-xl p-1 -ml-1"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ocean text-white shadow-subtle transition-transform group-hover:scale-105">
                <Waves className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-white">
                Vocal<span className="text-softblue">Rise</span>
              </span>
            </Link>
            <p className="text-sm text-mist/80 max-w-sm leading-relaxed">
              A supportive, human-centred speech practice platform. Empowering individuals who stammer or navigate articulation and lisping challenges through respectful, technique-driven practice and optional clinician collaboration.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-mist/90">
              <div className="flex items-center gap-1.5 bg-midnight-surface px-3 py-1.5 rounded-lg border border-[#304653]">
                <ShieldCheck className="h-4 w-4 text-softblue" aria-hidden="true" />
                <span>Evidence-Informed Practice</span>
              </div>
              <div className="flex items-center gap-1.5 bg-midnight-surface px-3 py-1.5 rounded-lg border border-[#304653]">
                <HeartHandshake className="h-4 w-4 text-terracotta-glow" aria-hidden="true" />
                <span>Respectful & Affirming</span>
              </div>
            </div>
          </div>

          {/* Speech Pathways */}
          <div>
            <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Speech Pathways
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/stammering"
                  className="text-mist/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
                >
                  Stammering & Fluency
                </Link>
              </li>
              <li>
                <Link
                  href="/articulation-and-lisping"
                  className="text-mist/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
                >
                  Articulation & Lisping
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-mist/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
                >
                  Practice Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-softblue font-medium hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
                >
                  Interactive Practice Hub →
                </Link>
              </li>
            </ul>
          </div>

          {/* Portals & Professionals */}
          <div>
            <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Professionals
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/therapist"
                  className="text-softblue font-medium hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
                >
                  Therapist Portal Demo →
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-mist/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
                >
                  Plans & Caseload Tiers
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-mist/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
                >
                  Practice Guides & Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-mist/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
                >
                  Our Mission & Principles
                </Link>
              </li>
            </ul>
          </div>

          {/* Account & Access */}
          <div>
            <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Account & Access
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/login"
                  className="text-mist/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="text-mist/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
                >
                  Create Free Account
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-mist/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
                >
                  Self-Reflection Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Honest Clinical Scope & Disclaimer Box */}
        <div className="rounded-2xl border border-[#304653] bg-midnight-surface/80 p-5 text-xs text-mist/80 leading-relaxed mb-8">
          <p className="font-semibold text-white mb-1">
            Clinical Scope & Medical Disclaimer:
          </p>
          <p>
            VocalRise is built around personal communication goals and supportive speech practice. It does not provide medical evaluation, automated clinical diagnosis, or promise a cure for speech variations. Stammering is recognized as a complex, multifactorial neuro-developmental communication variation, not an articulation error. All progress reflections are illustrative tools for personal growth. Please consult qualified speech-language professionals for personalized clinical guidance.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Working Informational Policy Dialogs */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[#304653] text-xs text-mist/70 gap-4">
          <p>© {new Date().getFullYear()} VocalRise Health Technologies. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <button
              type="button"
              onClick={() => setActiveModal("privacy")}
              className="hover:text-white transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
            >
              Privacy Principles
            </button>
            <button
              type="button"
              onClick={() => setActiveModal("terms")}
              className="hover:text-white transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={() => setActiveModal("accessibility")}
              className="hover:text-white transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softblue rounded-sm"
            >
              Accessibility Statement
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Working Informational Modals */}
      <Modal
        isOpen={activeModal === "privacy"}
        onClose={() => setActiveModal(null)}
        title="VocalRise Privacy Principles"
        description="Our commitment to private, respectful, and transparent voice practice."
      >
        <div className="space-y-3.5 text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
          <p>
            <strong className="text-midnight dark:text-white">1. Private by Default:</strong> Voice recordings are captured in temporary browser memory for immediate playback and self-reflection. Zero voice data is written to unencrypted local storage.
          </p>
          <p>
            <strong className="text-midnight dark:text-white">2. Explicit Sharing Only:</strong> Sharing a recording with a linked clinician requires an explicit, deliberate user action. Clinicians cannot access private unshared recordings.
          </p>
          <p>
            <strong className="text-midnight dark:text-white">3. Ethical Voice Boundaries:</strong> Voice recordings are never used for commercial advertising or unconsented automated model training.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "terms"}
        onClose={() => setActiveModal(null)}
        title="Terms of Service & Usage"
        description="Important information regarding the prototype platform."
      >
        <div className="space-y-3.5 text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
          <p>
            <strong className="text-midnight dark:text-white">1. Non-Medical Practice Companion:</strong> VocalRise provides communication practice exercises and reflection prompts. It is not an emergency service or clinical diagnostic tool.
          </p>
          <p>
            <strong className="text-midnight dark:text-white">2. Prototype Demonstration:</strong> Features shown in this prototype use illustrative demonstration data. Real-world clinician partnerships require independent verification against national licensing registries.
          </p>
          <p>
            <strong className="text-midnight dark:text-white">3. Personal Ownership:</strong> You retain ownership of your personal communication reflections and self-observation notes.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "accessibility"}
        onClose={() => setActiveModal(null)}
        title="Accessibility Statement (WCAG 2.2 AA)"
        description="Building an inclusive, sensory-friendly digital health experience."
      >
        <div className="space-y-3.5 text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
          <p>
            <strong className="text-midnight dark:text-white">1. High-Contrast Typography:</strong> All text meets or exceeds WCAG 2.2 AA contrast standards (minimum 4.5:1 for normal text, with primary headings exceeding 11:1).
          </p>
          <p>
            <strong className="text-midnight dark:text-white">2. Full Keyboard Navigability:</strong> Every control, modal, drawer, and tab is fully operable with standard keyboard keys (Tab, Enter, Space, Escape, Arrows, Home, End).
          </p>
          <p>
            <strong className="text-midnight dark:text-white">3. Sensory Safety & Reduced Motion:</strong> VocalRise avoids high-pressure countdown buzzers and respects operating system motion preferences (<code className="text-xs bg-mist dark:bg-midnight px-1 py-0.5 rounded">prefers-reduced-motion</code>).
          </p>
        </div>
      </Modal>
    </footer>
  );
}
