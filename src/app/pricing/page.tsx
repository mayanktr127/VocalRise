"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, HelpCircle, ArrowRight, Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annual">("annual");

  const plans = [
    {
      name: "Self-Guided Practice",
      target: "For autonomous speakers practising at their own pace",
      priceMonthly: 19,
      priceAnnual: 14,
      badge: "Proposed Tier: Individual",
      badgeVariant: "ocean" as const,
      features: [
        "Full access to Stammering OR Articulation pathway",
        "Unlimited practice studio recording sessions",
        "Continuous phonation & gentle onset visualizers",
        "Private Confidence & Communication Journal",
        "Participation streak & personal tension reflection charts",
        "Zero audio saved in local storage (in-memory processing)",
      ],
      cta: "Explore in Free Prototype",
      ctaLink: "/signup",
      popular: false,
    },
    {
      name: "Clinician-Linked Practice",
      target: "For individuals collaborating with their speech therapist",
      priceMonthly: 34,
      priceAnnual: 27,
      badge: "Proposed Tier: Collaborative",
      badgeVariant: "softblue" as const,
      features: [
        "Everything in Self-Guided Practice",
        "Direct link to your qualified Speech-Language Therapist",
        "Client-controlled asynchronous audio sharing",
        "Timestamped clinician audio feedback & advice",
        "Clinician-prescribed customized exercise regimens",
        "Both Stammering AND Articulation pathways available",
      ],
      cta: "Explore in Free Prototype",
      ctaLink: "/signup",
      popular: true,
    },
    {
      name: "Clinical Caseload Suite",
      target: "For private SLT clinics and speech therapy teams",
      priceMonthly: 89,
      priceAnnual: 72,
      badge: "Proposed Tier: Clinicians",
      badgeVariant: "terracotta" as const,
      features: [
        "Up to 25 active client seats included",
        "Full Therapist Portal & Asynchronous Review Deck",
        "Custom exercise and drill prescription builder",
        "Caseload practice consistency and comfort analytics",
        "Zero-knowledge encrypted voice storage architecture",
        "Dedicated clinical onboarding & client invite codes",
      ],
      cta: "Launch Therapist Portal Demo",
      ctaLink: "/therapist",
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "Is payment processing active in this prototype?",
      a: "No. VocalRise is currently an interactive functional prototype. No payment gateway, credit card fields, or subscription billing are active. All practice modules, journal features, and clinician portals are free to explore.",
    },
    {
      q: "Can I use VocalRise if I don't currently work with a speech therapist?",
      a: "Yes. Our Self-Guided tier is specifically designed for autonomous practice with structured, evidence-informed modules. If you later choose to link with a therapist, you can connect accounts seamlessly using an invite code.",
    },
    {
      q: "Can I switch between the Stammering and Articulation pathways?",
      a: "Yes. While the two pathways maintain strict clinical separation, you can freely switch your active focus at any time from your settings or practice dashboard.",
    },
    {
      q: "Is VocalRise an automated diagnostic tool?",
      a: "No. VocalRise is explicitly a practice and collaboration companion. It does not provide automated clinical diagnosis or replace diagnostic evaluations by qualified Speech-Language Therapists.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#F7F9F8] dark:bg-[#111D25] text-midnight dark:text-[#F2F6F7] min-h-screen transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="ocean" className="px-3.5 py-1 text-xs">
            Transparent Plan Architecture
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-midnight dark:text-white leading-tight">
            Proposed Plans for Sustainable Practice
          </h1>
          <p className="text-base sm:text-lg text-stone dark:text-[#BDCBD2] leading-relaxed">
            Accessible options for individual self-guided practice and seamless clinical collaboration with qualified speech professionals.
          </p>

          {/* Prototype Honest Notice */}
          <div className="mt-4 rounded-2xl border border-ocean/30 bg-mist/60 dark:border-softblue/30 dark:bg-midnight-surface p-4 text-xs sm:text-sm text-midnight dark:text-[#F2F6F7] flex items-center gap-3 text-left">
            <Info className="h-5 w-5 text-ocean dark:text-softblue shrink-0" aria-hidden="true" />
            <div>
              <strong className="text-ocean dark:text-softblue">Prototype Demonstration Notice: </strong>
              <span>
                These tiers represent our proposed commercial plan architecture. All features are currently 100% free to explore in this prototype with zero credit cards, charges, or paywalls.
              </span>
            </div>
          </div>

          {/* Billing Switcher */}
          <div
            role="radiogroup"
            aria-label="Billing cycle selector"
            className="inline-flex items-center rounded-2xl bg-white dark:bg-midnight-surface p-1.5 border border-[#D5E1E6] dark:border-[#304653] shadow-subtle text-xs font-semibold mt-6"
          >
            <button
              type="button"
              role="radio"
              aria-checked={billingCycle === "annual"}
              onClick={() => setBillingCycle("annual")}
              className={`rounded-xl px-4 py-2 transition-all ${
                billingCycle === "annual"
                  ? "bg-ocean text-white shadow-sm"
                  : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
              }`}
            >
              Annual Billing <span className="text-softblue font-bold ml-1">(Save 20%)</span>
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={billingCycle === "monthly"}
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-xl px-4 py-2 transition-all ${
                billingCycle === "monthly"
                  ? "bg-ocean text-white shadow-sm"
                  : "text-stone hover:text-midnight dark:text-[#BDCBD2] dark:hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <section aria-labelledby="pricing-tiers-heading">
          <h2 id="pricing-tiers-heading" className="sr-only">
            Available Practice Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => {
            const price = billingCycle === "annual" ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={idx}
                className={`rounded-[32px] border bg-white dark:bg-midnight-surface p-8 flex flex-col justify-between space-y-6 transition-all text-left ${
                  plan.popular
                    ? "border-ocean dark:border-softblue shadow-elevated relative ring-2 ring-ocean/20 dark:ring-softblue/20"
                    : "border-[#D5E1E6] dark:border-[#304653] shadow-card hover:border-ocean/40 dark:hover:border-softblue/40"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant={plan.badgeVariant} className="text-[11px]">
                      {plan.badge}
                    </Badge>
                    {plan.popular && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-ocean dark:text-softblue">
                        Most Flexible
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-bold text-midnight dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-stone dark:text-[#BDCBD2] mt-1.5 leading-relaxed">
                      {plan.target}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="font-heading text-4xl font-extrabold text-midnight dark:text-white">
                      ${price}
                    </span>
                    <span className="text-xs text-stone dark:text-[#BDCBD2]">
                      / month {billingCycle === "annual" ? "(proposed annual rate)" : "(proposed rate)"}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-[#E7EFF2] dark:border-[#304653] space-y-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone/80 dark:text-[#BDCBD2]/80 block mb-2">
                      Included Capabilities
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-midnight dark:text-[#F2F6F7]">
                        <CheckCircle2 className="h-4 w-4 text-ocean dark:text-softblue shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E7EFF2] dark:border-[#304653]">
                  <Link href={plan.ctaLink} className="w-full block">
                    <Button
                      variant={plan.popular ? "primary" : "outline"}
                      size="lg"
                      className="w-full font-semibold"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
          </div>
        </section>

        {/* Comparison Feature Matrix */}
        <div className="max-w-5xl mx-auto rounded-[32px] border border-[#D5E1E6] dark:border-[#304653] bg-white dark:bg-midnight-surface p-8 sm:p-10 shadow-card space-y-6 text-left overflow-x-auto">
          <div className="space-y-1">
            <h2 className="font-heading text-xl font-bold text-midnight dark:text-white">
              Plan Comparison Breakdown
            </h2>
            <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2]">
              Review planned capabilities across our individual and clinician tiers.
            </p>
          </div>

          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-[#E7EFF2] dark:border-[#304653] text-stone dark:text-[#BDCBD2]">
                <th className="py-3 font-semibold">Capability</th>
                <th className="py-3 font-semibold text-center">Self-Guided</th>
                <th className="py-3 font-semibold text-center">Clinician-Linked</th>
                <th className="py-3 font-semibold text-center">Caseload Suite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7EFF2] dark:divide-[#304653] text-midnight dark:text-[#F2F6F7]">
              <tr>
                <td className="py-3 font-medium">Practice Studio Recording</td>
                <td className="py-3 text-center text-ocean dark:text-softblue font-bold">✓</td>
                <td className="py-3 text-center text-ocean dark:text-softblue font-bold">✓</td>
                <td className="py-3 text-center text-ocean dark:text-softblue font-bold">✓</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Private Confidence Journal</td>
                <td className="py-3 text-center text-ocean dark:text-softblue font-bold">✓</td>
                <td className="py-3 text-center text-ocean dark:text-softblue font-bold">✓</td>
                <td className="py-3 text-center text-ocean dark:text-softblue font-bold">✓</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Dual Pathways (Stammering & Articulation)</td>
                <td className="py-3 text-center text-stone/70 dark:text-[#BDCBD2]/70">1 Pathway</td>
                <td className="py-3 text-center text-ocean dark:text-softblue font-bold">Both Included</td>
                <td className="py-3 text-center text-ocean dark:text-softblue font-bold">Both Included</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Asynchronous Clinician Audio Sharing</td>
                <td className="py-3 text-center text-stone/50">—</td>
                <td className="py-3 text-center text-ocean dark:text-softblue font-bold">✓</td>
                <td className="py-3 text-center text-ocean dark:text-softblue font-bold">✓</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Custom Exercise Regimen Prescription</td>
                <td className="py-3 text-center text-stone/50">—</td>
                <td className="py-3 text-center text-ocean dark:text-softblue font-bold">✓</td>
                <td className="py-3 text-center text-ocean dark:text-softblue font-bold">✓</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Clinician Review Deck & Caseload Portal</td>
                <td className="py-3 text-center text-stone/50">—</td>
                <td className="py-3 text-center text-stone/50">—</td>
                <td className="py-3 text-center text-ocean dark:text-softblue font-bold">Up to 25 seats</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto rounded-[32px] border border-[#D5E1E6] dark:border-[#304653] bg-white dark:bg-midnight-surface p-8 sm:p-12 space-y-8 text-left shadow-card">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="font-heading text-2xl font-bold text-midnight dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2]">
              Clinical, technical, and planned subscription details
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="space-y-1.5 pb-5 border-b border-[#E7EFF2] dark:border-[#304653] last:border-none">
                <h3 className="font-heading text-base font-semibold text-midnight dark:text-white">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
