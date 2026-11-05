import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Waves,
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
  ArrowRight,
  Mic,
  BookMarked,
  CheckCircle2,
  Lock,
  ChevronRight,
  Play,
  TrendingUp,
  Layers,
  Sparkles,
  Target,
  Clock,
  Compass,
  Smile,
  Volume2,
  FileCheck2,
  UserCheck,
} from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrustIndicator } from "@/components/ui/trust-indicator";
import { PathwayCard } from "@/components/ui/pathway-card";
import { ProductPreview } from "@/components/ui/product-preview";
import { FAQAccordion } from "@/components/ui/faq-accordion";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9F8] dark:bg-[#111D25] text-midnight dark:text-[#F2F6F7] transition-colors">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          Redesigned modern health-tech SaaS hero with layered ambient oceanic mesh,
          realistic practice viewport, waveform visualizer, and floating SLT cards.
         ========================================================================= */}
      <HeroSection />

      {/* =========================================================================
          SECTION 2: TRUST INDICATORS ROW
          4 core principles establishing safety, privacy, and clinical honesty.
         ========================================================================= */}
      <section className="py-8 border-y border-[#D5E1E6] dark:border-[#304653] bg-white/60 dark:bg-midnight-deep/40 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustIndicator />
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PATHWAY SELECTION
          Clear clinical distinction between Stammering Support and Articulation.
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F7F9F8] dark:bg-[#111D25] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Dedicated Practice Tracks"
            title="Two Distinct Speech Pathways"
            subtitle="Stammering is a neuro-motor fluency difference involving laryngeal timing, never poor pronunciation or laziness. VocalRise maintains dedicated, distinct methodologies for each."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pathway 1: Stammering Support */}
            <PathwayCard
              pathway="stammering"
              title="Stammering & Fluency Support"
              badge="Fluency Modification & Ease"
              description="A supportive practice space focused on physical tension reduction, voluntary stuttering, gentle vocal onsets, and participating freely without communicative avoidance."
              pillars={[
                "Gentle vocal onsets & continuous voicing",
                "Voluntary stuttering & desensitization practice",
                "Cancellation and pull-out modification techniques",
                "Speech avoidance reduction and self-advocacy",
              ]}
              ctaText="Explore Stammering Pathway"
              ctaHref="/stammering"
              imageSrc="/images/pathways/stammering-support.svg"
              imageAlt="Stammering support technique visualization illustrating gentle vocal onset and continuous phonation"
            />

            {/* Pathway 2: Articulation Support */}
            <PathwayCard
              pathway="articulation"
              title="Articulation & Lisping Support"
              badge="Motor Placement & Sound Clarity"
              description="Structured phonetic ladders for frontal and lateral lisps, sound substitutions, and speech clarity—progressing systematically from isolation to conversational speech."
              pillars={[
                "Alveolar ridge tongue contact & central airflow",
                "Minimal pair acoustic discrimination drills",
                "Lateral lisp butterfly technique for molar elevation",
                "Systematic syllable-to-conversation carryover",
              ]}
              ctaText="Explore Articulation Pathway"
              ctaHref="/articulation-and-lisping"
              imageSrc="/images/pathways/articulation-support.svg"
              imageAlt="Articulation and lisping support illustration depicting alveolar tongue placement and acoustic airflow channeling"
            />
          </div>

          {/* Neurodiversity Clinical Callout */}
          <div className="max-w-4xl mx-auto rounded-2xl border border-ocean/30 bg-mist/50 dark:border-softblue/30 dark:bg-midnight-surface/80 p-5 sm:p-6 shadow-subtle flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="h-11 w-11 rounded-xl bg-ocean text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading text-sm font-bold text-midnight dark:text-white">
                Our Non-Diagnostic Clinical Distinction Pledge
              </h3>
              <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                We strictly reject conflating developmental stammering with phonetic articulation errors. Each pathway is built on distinct therapeutic literature, protecting speakers from inappropriate or unhelpful drills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOW VOCALRISE WORKS (6-STEP VISUAL JOURNEY)
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#D5E1E6] dark:bg-midnight-surface dark:border-[#304653] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeading
            badge="The VocalRise Experience"
            title="A mindful, 6-step path built around your life"
            subtitle="From identifying personal goals to optional clinician feedback, every stage is structured for calm, pressure-free consistency."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                icon: Target,
                title: "Choose Your Communication Goals",
                description:
                  "Identify the everyday speaking situations where you want greater ease—from introducing yourself at meetings to making phone calls.",
              },
              {
                step: "02",
                icon: Layers,
                title: "Explore Your Dedicated Pathway",
                description:
                  "Select the pathway tailored to your needs: stammering ease and desensitization, or phonetic sound placement and airflow channeling.",
              },
              {
                step: "03",
                icon: Mic,
                title: "Engage in Guided Micro-Practice",
                description:
                  "Complete 10-minute micro-drills with gentle pacing prompts, real-time waveform visualization, and zero high-pressure countdowns.",
              },
              {
                step: "04",
                icon: HeartHandshake,
                title: "Reflect on Ease & Tension",
                description:
                  "Document how your body felt during practice in your private Confidence Journal, tracking tension reduction rather than mechanical scores.",
              },
              {
                step: "05",
                icon: TrendingUp,
                title: "Celebrate Participation Milestones",
                description:
                  "Review real-world communication victories: ordering what you actually want, speaking up in discussions, and consistent practice streaks.",
              },
              {
                step: "06",
                icon: Stethoscope,
                title: "Optionally Collaborate with Clinicians",
                description:
                  "Share selected practice recordings with your speech-language therapist for asynchronous guidance and encouraging voice notes between visits.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep p-6 sm:p-7 shadow-subtle hover:border-ocean/40 dark:hover:border-softblue/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl bg-mist dark:bg-midnight-surface text-ocean dark:text-softblue flex items-center justify-center">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-heading text-xl font-bold text-stone/40 dark:text-[#BDCBD2]/40">
                        {item.step}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-lg font-bold text-midnight dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: LIVE PRODUCT EXPERIENCE SHOWCASE
          Interactive browser preview demonstrating real prototype application tabs.
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F7F9F8] border-t border-[#D5E1E6] dark:bg-[#111D25] dark:border-[#304653] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Interactive Prototype Showcase"
            title="Real tools designed for daily speaking ease"
            subtitle="Explore our interactive prototype preview below to see how the Practice Studio, Confidence Journal, and Clinician Deck interact."
          />

          <ProductPreview />
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: EDITORIAL FEATURE BREAKDOWN (ALTERNATING LAYOUTS)
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#D5E1E6] dark:bg-midnight-surface dark:border-[#304653] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Feature 1: Guided Practice (Left text, Right preview) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5 text-left">
              <Badge variant="ocean" className="px-3 py-1 text-xs">
                Consistent Micro-Drills
              </Badge>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-midnight dark:text-white leading-tight">
                Speech practice that respects your time and energy.
              </h3>
              <p className="text-sm sm:text-base text-stone dark:text-[#BDCBD2] leading-relaxed">
                Traditional drills can feel demanding or exhausting. VocalRise structures practice into 10-minute micro-drills that prevent vocal fatigue while fostering neuromuscular consistency.
              </p>
              <ul className="space-y-3 pt-2 text-sm text-midnight dark:text-[#F2F6F7]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-ocean dark:text-softblue shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Zero-pressure timers:</strong> Gentle stopwatches with zero alarms or buzzing countdowns.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-ocean dark:text-softblue shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Visual biofeedback:</strong> Real-time waveforms for continuous phonation and airflow pacing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-ocean dark:text-softblue shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Technique cards:</strong> Anatomical placement cues and easy audio examples.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 rounded-3xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep p-6 sm:p-8 shadow-card space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#D5E1E6] dark:border-[#304653]">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-ocean text-white flex items-center justify-center">
                    <Mic className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-midnight dark:text-white block">
                      Exercise: Gentle Phonation
                    </span>
                    <span className="text-[11px] text-stone dark:text-[#BDCBD2]">
                      Target: Continuous Voicing
                    </span>
                  </div>
                </div>
                <Badge variant="mist" className="text-[10px]">Step 2 of 4</Badge>
              </div>

              <div className="rounded-2xl bg-white dark:bg-midnight-surface border border-[#D5E1E6] dark:border-[#304653] p-5 space-y-3 text-left">
                <p className="text-xs text-stone dark:text-[#BDCBD2] leading-relaxed">
                  &ldquo;Begin voicing before releasing vocal fold tension. Maintain an unbroken vowel tone through the entire carrier phrase.&rdquo;
                </p>
                <div className="flex items-center gap-1.5 h-8 bg-mist/40 dark:bg-midnight-deep/60 rounded-lg px-3">
                  <span className="h-2 w-1.5 rounded-full bg-ocean animate-pulse" />
                  <span className="h-4 w-1.5 rounded-full bg-ocean animate-pulse delay-75" />
                  <span className="h-3 w-1.5 rounded-full bg-ocean animate-pulse delay-150" />
                  <span className="h-5 w-1.5 rounded-full bg-softblue" />
                  <span className="h-3 w-1.5 rounded-full bg-ocean" />
                  <span className="h-2 w-1.5 rounded-full bg-ocean" />
                  <span className="ml-auto text-[10px] text-stone dark:text-[#BDCBD2] font-mono">00:14 / 00:30</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-stone dark:text-[#BDCBD2] pt-1">
                <span>Self-reported physical ease: High</span>
                <span className="font-semibold text-ocean dark:text-softblue">Comfortable Pacing</span>
              </div>
            </div>
          </div>

          {/* Feature 2: Confidence Journal (Left preview, Right text) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 rounded-3xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep p-6 sm:p-8 shadow-card space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#D5E1E6] dark:border-[#304653]">
                <div className="flex items-center gap-2">
                  <BookMarked className="h-4 w-4 text-terracotta" aria-hidden="true" />
                  <span className="text-xs font-bold text-midnight dark:text-white">Recent Reflection</span>
                </div>
                <Badge variant="terracotta" className="text-[10px]">Personal Entry</Badge>
              </div>

              <div className="rounded-2xl bg-white dark:bg-midnight-surface border border-[#D5E1E6] dark:border-[#304653] p-4 sm:p-5 space-y-3 text-left">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-midnight dark:text-white">Ordered coffee at new bakery</span>
                  <span className="text-stone dark:text-[#BDCBD2]">Today, 11:20</span>
                </div>
                <div className="flex gap-2 flex-wrap text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-mist text-ocean dark:bg-midnight-deep dark:text-softblue font-medium">
                    #SocialSituation
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-mist text-ocean dark:bg-midnight-deep dark:text-softblue font-medium">
                    #VoluntaryStuttering
                  </span>
                </div>
                <p className="text-xs text-stone dark:text-[#BDCBD2] italic leading-relaxed">
                  &ldquo;I openly stuttered on &apos;flat white&apos; without switching words or looking away. Felt completely calm afterwards.&rdquo;
                </p>
                <div className="pt-2 border-t border-[#E7EFF2] dark:border-[#304653] flex items-center justify-between text-[11px] text-stone dark:text-[#BDCBD2]">
                  <span>Physical Tension: 2 / 5</span>
                  <span className="text-terracotta font-semibold">Avoidance: Zero</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5 text-left">
              <Badge variant="terracotta" className="px-3 py-1 text-xs">
                Psychological Grounding
              </Badge>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-midnight dark:text-white leading-tight">
                Reflecting on speaking ease, not mechanical scores.
              </h3>
              <p className="text-sm sm:text-base text-stone dark:text-[#BDCBD2] leading-relaxed">
                Speech does not happen in a vacuum—it happens during interviews, phone calls, and family dinners. Our Confidence Journal helps you log situational comfort, track avoidance reduction, and notice genuine progress.
              </p>
              <ul className="space-y-3 pt-2 text-sm text-midnight dark:text-[#F2F6F7]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Situational tagging:</strong> Categorize entries by work calls, introductions, or social orders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Tension tracking:</strong> Rate physical struggle on a low-stress scale from 1 to 5.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Strict privacy:</strong> Self-reflection notes remain 100% confidential to you.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3: Progress Beyond Numbers (Full-width editorial banner) */}
          <div className="rounded-[28px] border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep p-8 sm:p-12 shadow-card text-center space-y-6 max-w-5xl mx-auto">
            <Badge variant="softblue" className="px-3.5 py-1 text-xs">
              Neurodiversity & Dignity
            </Badge>
            <h3 className="font-heading text-2xl sm:text-4xl font-bold text-midnight dark:text-white max-w-2xl mx-auto leading-tight">
              Why VocalRise rejects arbitrary &ldquo;fluency scores&rdquo;
            </h3>
            <p className="text-sm sm:text-base text-stone dark:text-[#BDCBD2] max-w-3xl mx-auto leading-relaxed">
              Forcing speakers who stammer into arbitrary &ldquo;100% fluency&rdquo; targets creates performance anxiety and shame. True success is ordering the food you actually want, speaking up in conversations without hesitation, and feeling authentic ease in your voice.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl mx-auto text-left">
              <div className="rounded-xl border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-4 space-y-1">
                <span className="font-heading text-base font-bold text-midnight dark:text-white block">Participation</span>
                <p className="text-xs text-stone dark:text-[#BDCBD2]">Engaging in conversations you previously avoided.</p>
              </div>
              <div className="rounded-xl border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-4 space-y-1">
                <span className="font-heading text-base font-bold text-midnight dark:text-white block">Self-Advocacy</span>
                <p className="text-xs text-stone dark:text-[#BDCBD2]">Communicating boundaries and speaking without apology.</p>
              </div>
              <div className="rounded-xl border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-4 space-y-1">
                <span className="font-heading text-base font-bold text-midnight dark:text-white block">Physical Ease</span>
                <p className="text-xs text-stone dark:text-[#BDCBD2]">Releasing tension and breathing naturally through blocks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLINICIAN PARTNERSHIP & ASYNCHRONOUS REVIEW
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F7F9F8] border-t border-[#D5E1E6] dark:bg-[#111D25] dark:border-[#304653] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeading
            badge="Optional Clinician Collaboration"
            title="Closing the gap between weekly clinical visits"
            subtitle="The hardest part of speech practice is carrying techniques into everyday life. VocalRise acts as a supportive bridge between sessions."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            {/* Visual consultation graphic */}
            <div className="lg:col-span-5 rounded-[28px] overflow-hidden border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-4 shadow-card">
              <div className="w-full h-[280px] sm:h-[320px] rounded-2xl bg-mist/40 dark:bg-midnight-deep flex items-center justify-center p-4">
                <Image
                  src="/images/editorial/therapist-consultation.svg"
                  alt="Speech-Language Therapist reviewing client practice recordings asynchronously"
                  width={440}
                  height={320}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-3 text-center">
                <span className="text-[11px] text-stone dark:text-[#BDCBD2]">
                  Illustrative representation of asynchronous clinical review
                </span>
              </div>
            </div>

            {/* Narrative & Therapist Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-3">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-midnight dark:text-white">
                  Asynchronous guidance without extra appointments.
                </h3>
                <p className="text-sm sm:text-base text-stone dark:text-[#BDCBD2] leading-relaxed">
                  Qualified Speech-Language Therapists can access our dedicated Clinician Portal to review shared patient audio, leave timestamped feedback, and adjust exercise regimens between scheduled appointments.
                </p>
              </div>

              {/* Honest illustrative review mockup */}
              <div className="rounded-2xl border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-4 sm:p-5 space-y-3 shadow-subtle">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-softblue/30 text-ocean dark:text-softblue flex items-center justify-center font-bold text-xs">
                      SLT
                    </div>
                    <div>
                      <span className="font-semibold text-midnight dark:text-white block">Dr. Sarah Chen, SLT</span>
                      <span className="text-[10px] text-stone dark:text-[#BDCBD2]">Prototype Demonstration Note</span>
                    </div>
                  </div>
                  <Badge variant="mist" className="text-[10px]">Timestamp 00:12</Badge>
                </div>
                <p className="text-xs text-stone dark:text-[#BDCBD2] italic leading-relaxed bg-porcelain dark:bg-midnight-deep p-3 rounded-xl border border-[#E7EFF2] dark:border-[#304653]">
                  &ldquo;Notice how releasing airflow before the vowel dissipated tension on &apos;open&apos;. Maintain this exact pacing in your morning micro-drill.&rdquo;
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link href="/therapist">
                  <Button variant="primary" size="lg" className="gap-2">
                    <span>Explore Clinician Portal Demo</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button variant="outline" size="lg">
                    See Clinical Methodology
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: REAL-WORLD CARRYOVER & TRANSFER
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#D5E1E6] dark:bg-midnight-surface dark:border-[#304653] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <Badge variant="terracotta" className="px-3 py-1 text-xs">
                Real-World Transfer
              </Badge>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-midnight dark:text-white leading-tight">
                Building confidence for the moments that truly matter.
              </h3>
              <p className="text-sm sm:text-base text-stone dark:text-[#BDCBD2] leading-relaxed">
                Speech techniques practiced alone only matter if they help you communicate when it counts—ordering a coffee, answering unexpected phone calls, or presenting to a team. VocalRise provides structured hierarchy ladders to bridge private practice and public speech.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep p-4 space-y-1.5 text-left">
                  <span className="font-heading text-sm font-bold text-midnight dark:text-white block">
                    Situational Exposure Ladders
                  </span>
                  <p className="text-xs text-stone dark:text-[#BDCBD2]">
                    Progress gradually from quiet room practice to low-stakes public challenges.
                  </p>
                </div>
                <div className="rounded-xl border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep p-4 space-y-1.5 text-left">
                  <span className="font-heading text-sm font-bold text-midnight dark:text-white block">
                    Self-Advocacy Scripts
                  </span>
                  <p className="text-xs text-stone dark:text-[#BDCBD2]">
                    Clear, ready-to-use communication statements to disclose stammering with pride.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-5 rounded-[28px] overflow-hidden border border-[#D5E1E6] bg-porcelain dark:border-[#304653] dark:bg-midnight-deep p-4 shadow-card">
              <div className="w-full h-[280px] sm:h-[320px] rounded-2xl bg-white dark:bg-midnight-surface flex items-center justify-center p-4">
                <Image
                  src="/images/editorial/real-world-carryover.svg"
                  alt="Speaker engaging comfortably in an everyday conversation"
                  width={440}
                  height={320}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-3 text-center">
                <span className="text-[11px] text-stone dark:text-[#BDCBD2]">
                  Supporting communicative ease across diverse daily situations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: PRIVACY, VOICE OWNERSHIP & ETHICAL SAFETY PANEL
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F7F9F8] border-t border-[#D5E1E6] dark:bg-[#111D25] dark:border-[#304653] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Ethical Health-Tech Standards"
            title="Your voice data belongs exclusively to you"
            subtitle="We build with clinical responsibility, high emotional safety, and uncompromising data ethics."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Lock,
                title: "Private by Default",
                description:
                  "Practice recordings are processed in temporary browser memory. Audio is never automatically uploaded or made public.",
              },
              {
                icon: ShieldCheck,
                title: "Zero LocalStorage Audio",
                description:
                  "No raw audio files or private clinical notes are ever written to unencrypted browser local storage.",
              },
              {
                icon: UserCheck,
                title: "Explicit Sharing Only",
                description:
                  "A linked clinician can only hear an audio clip if you deliberately and explicitly toggle sharing on that specific drill.",
              },
              {
                icon: FileCheck2,
                title: "No Diagnostic AI Claims",
                description:
                  "Acoustic feedback visualizers are practice aids, never clinical diagnostic replacements for qualified speech pathologists.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-6 shadow-subtle space-y-3 text-left"
                >
                  <div className="h-10 w-10 rounded-xl bg-mist dark:bg-midnight-deep text-ocean dark:text-softblue flex items-center justify-center">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-midnight dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: PATIENT & CLINICIAN FAQ ACCORDION
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#D5E1E6] dark:bg-midnight-surface dark:border-[#304653] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Clear answers about our practice platform"
            subtitle="Transparent information regarding our methodology, clinical boundaries, and data ethics."
          />

          <FAQAccordion />
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: MIDNIGHT SLATE CLOSING CALL-TO-ACTION
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F7F9F8] border-t border-[#D5E1E6] dark:bg-[#111D25] dark:border-[#304653] transition-colors">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[32px] overflow-hidden border border-[#304653] bg-midnight dark:bg-midnight-deep text-white p-8 sm:p-14 shadow-elevated text-center space-y-6">
            {/* Ambient subtle glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-ocean/20 via-transparent to-softblue/10 pointer-events-none" />

            <div className="relative space-y-6 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-medium text-white/90">
                <Sparkles className="h-3.5 w-3.5 text-softblue" aria-hidden="true" />
                <span>Begin Your Practice Today</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Your communication journey deserves calm, steady support.
              </h2>

              <p className="text-sm sm:text-base text-mist/80 leading-relaxed">
                Explore an evidence-informed speech practice experience tailored to your personal goals, at your own pace.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link href="/signup" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-midnight hover:bg-mist font-semibold shadow-elevated px-8"
                  >
                    <span>Explore VocalRise Free</span>
                  </Button>
                </Link>
                <Link href="/dashboard" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-8"
                  >
                    <span>Launch Demo Practice Studio</span>
                  </Button>
                </Link>
              </div>

              <p className="text-[11px] text-mist/60 pt-2">
                Prototype demonstration platform • Zero credit card required • Illustrative sample data
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
