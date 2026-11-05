"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annual">("annual");

  const plans = [
    {
      name: "Self-Guided Practice",
      target: "For individuals practising independently",
      priceMonthly: 19,
      priceAnnual: 14,
      badge: "Popular for Individuals",
      badgeVariant: "teal" as const,
      features: [
        "Full access to Stammering OR Articulation pathway",
        "Unlimited practice studio recording sessions",
        "Interactive speech prompts and visualizer",
        "Confidence & communication moment journal",
        "Self-reflection progress charts",
      ],
      cta: "Start 14-Day Free Trial",
      ctaLink: "/signup",
      popular: false,
    },
    {
      name: "Clinician-Linked Practice",
      target: "For individuals working with a speech therapist",
      priceMonthly: 34,
      priceAnnual: 27,
      badge: "Highest Clinical Efficacy",
      badgeVariant: "cerulean" as const,
      features: [
        "Everything in Self-Guided Practice",
        "Direct link to your qualified Speech-Language Therapist",
        "Asynchronous recording review and waveform notes",
        "Therapist-prescribed customized exercise regimen",
        "Both Stammering AND Articulation pathways unlocked",
        "Priority clinician support desk",
      ],
      cta: "Connect With Your Therapist",
      ctaLink: "/signup",
      popular: true,
    },
    {
      name: "Clinical Caseload Suite",
      target: "For private SLT practices & speech clinics",
      priceMonthly: 89,
      priceAnnual: 72,
      badge: "For SLTs & Clinics",
      badgeVariant: "secondary" as const,
      features: [
        "Up to 25 active patient seats included",
        "Full Therapist Portal & Asynchronous Review Deck",
        "Custom exercise and drill prescription builder",
        "Caseload adherence and progress analytics",
        "HIPAA / GDPR compliant audio storage architecture",
        "Dedicated clinical onboarding specialist",
      ],
      cta: "Explore Therapist Portal",
      ctaLink: "/therapist",
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "Can I use VocalRise if I don't currently have a speech therapist?",
      a: "Yes! Our Self-Guided tier is specifically designed for autonomous practice with structured, evidence-aligned modules. If you later choose to work with a therapist, you can link accounts seamlessly.",
    },
    {
      q: "Can I switch between the Stammering and Articulation pathways?",
      a: "Absolutely. While the two pathways maintain strict clinical separation, you can freely switch your active focus at any time from your settings or practice dashboard.",
    },
    {
      q: "Is VocalRise an automated diagnostic tool?",
      a: "No. VocalRise is explicitly a practice and collaboration companion. We do not provide automated clinical diagnosis or replace qualified diagnostic assessments by certified Speech-Language Pathologists.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal" className="px-3.5 py-1">
            Transparent, Dignified Pricing
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Invest in Your Everyday Communication Ease
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Accessible options for individual self-guided practice and seamless clinical collaboration with certified speech-language therapists.
          </p>

          {/* Billing switcher */}
          <div className="inline-flex items-center rounded-xl bg-slate-200/70 dark:bg-slate-800 p-1 text-xs font-semibold mt-4">
            <button
              onClick={() => setBillingCycle("annual")}
              className={`rounded-lg px-4 py-2 transition-all ${
                billingCycle === "annual"
                  ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-100"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              Annual Billing <span className="text-brand-700 dark:text-brand-400 font-bold">(Save 20%)</span>
            </button>
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-lg px-4 py-2 transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-100"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => {
            const price =
              billingCycle === "annual" ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={idx}
                className={`rounded-3xl border bg-white dark:bg-slate-900 p-8 flex flex-col justify-between space-y-6 transition-all ${
                  plan.popular
                    ? "border-cerulean-500 dark:border-cerulean-400 shadow-lg ring-1 ring-cerulean-500 dark:ring-cerulean-400 relative"
                    : "border-slate-200 dark:border-slate-800 shadow-subtle hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant={plan.badgeVariant} className="text-[11px]">
                      {plan.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {plan.target}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 font-mono">
                      ${price}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      / month {billingCycle === "annual" ? "(billed yearly)" : ""}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                      Included Capabilities
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                  <Link href={plan.ctaLink} className="w-full block">
                    <Button
                      variant={plan.popular ? "primary" : "outline"}
                      className={`w-full ${plan.popular ? "bg-cerulean-600 hover:bg-cerulean-700 text-white" : ""}`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Clinical, technical, and subscription details
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="space-y-1.5 pb-4 border-b border-slate-100 dark:border-slate-800 last:border-none">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {faq.q}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
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
