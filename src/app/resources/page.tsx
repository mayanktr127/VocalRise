"use client";

import * as React from "react";
import Link from "next/link";
import {
  BookOpen,
  Search,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Clock,
  FileText,
  Layers,
  HeartHandshake,
  Mic,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { SectionHeading } from "@/components/ui/section-heading";

interface Article {
  id: string;
  title: string;
  category: "Fluency Science" | "Articulation & Placement" | "Speech Psychology" | "Practice Techniques" | "Everyday Confidence";
  badgeVariant: "ocean" | "softblue" | "terracotta" | "mist";
  readTime: string;
  attribution: string;
  summary: string;
  modalContent: {
    overview: string;
    keyPoints: string[];
    practicalTakeaway: string;
  };
}

const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Stammering vs Pronunciation: Why Understanding the Distinction Changes Everything",
    category: "Fluency Science",
    badgeVariant: "ocean",
    readTime: "6 min read",
    attribution: "Adapted from Fluency & Neuro-Motor Research",
    summary:
      "Why treating developmental stammering as poor articulation leads to physical struggle and speech avoidance, and what modern neuro-motor evidence recommends instead.",
    modalContent: {
      overview:
        "Stammering (stuttering) is fundamentally a neuro-developmental difference in speech motor planning and laryngeal timing. It is not caused by poor muscular coordination of the tongue, laziness, or an inability to pronounce sounds. When speakers are misinformed that stammering is 'mispronunciation,' they often push harder, resulting in physical struggle and secondary tension.",
      keyPoints: [
        "Laryngeal Timing: Stammering blocks occur at the level of the vocal folds and breathing coordination, not the lips or tongue tip.",
        "Harm of Forced Pronunciation: Forcing individuals who stammer to 'slow down and pronounce clearly' increases performance anxiety and exacerbates blocks.",
        "Technique Alignment: Effective support focuses on gentle onsets, continuous phonation, and voluntary desensitization rather than repetitive phonetic drills.",
      ],
      practicalTakeaway:
        "Recognize that fluency variations are neuro-motor in origin. Focus on reducing physical tension and vocal struggle rather than mechanical perfection.",
    },
  },
  {
    id: "art-2",
    title: "The Anatomy of Frontal vs Lateral Lisps: Lingual Mechanics Explained",
    category: "Articulation & Placement",
    badgeVariant: "softblue",
    readTime: "8 min read",
    attribution: "Phonetic Placement & Motor Speech Series",
    summary:
      "A clear breakdown of alveolar placement versus lateral airflow distortion, including the bilateral molar anchoring 'butterfly' drill for central groove stability.",
    modalContent: {
      overview:
        "Lisps represent distinct phonetic motor placement variations. An interdental (frontal) lisp occurs when the tongue tip protrudes between the incisors on /s/ and /z/. A lateral lisp occurs when the tongue tip contacts the roof of the mouth too firmly, forcing the airstream to escape over the sides of the molars with a wet, slushy acoustic quality.",
      keyPoints: [
        "Frontal Lisp Mechanics: Requires retraining the tongue tip to anchor securely on the alveolar ridge directly behind the upper central incisors.",
        "Lateral Lisp Mechanics: Requires establishing a bilateral molar seal using the 'butterfly technique'—elevating lateral tongue margins while creating a central trough.",
        "Acoustic Minimal Pairs: Contrasting target sibilants with error patterns (/s/ vs /θ/) sharpens self-monitoring.",
      ],
      practicalTakeaway:
        "Use tactile cues (such as straws or dental contact points) to build awareness of where your tongue rests and where the air flows.",
    },
  },
  {
    id: "art-3",
    title: "The Iceberg Analogy: Confronting Avoidance and Secondary Speech Struggle",
    category: "Speech Psychology",
    badgeVariant: "terracotta",
    readTime: "5 min read",
    attribution: "Based on Joseph Sheehan's Speech Modification Framework",
    summary:
      "Exploring Joseph Sheehan's famous speech therapy model: why the emotional fear of stuttering creates more struggle than the physical block itself.",
    modalContent: {
      overview:
        "In 1970, speech psychologist Joseph Sheehan introduced the Iceberg Model of Stuttering. The visible tip of the iceberg represents overt speech behaviors: repetitions, prolongations, and blocks. The massive submerged portion represents covert emotions: fear, shame, guilt, anxiety, word substitution, and situational avoidance.",
      keyPoints: [
        "The Trap of Avoidance: Constantly substituting words or avoiding phone calls reinforces the subconscious belief that stammering is catastrophic.",
        "Desensitization: By openly acknowledging speech variations and using voluntary stuttering, speakers reduce the emotional charge beneath the surface.",
        "Communicative Freedom: True liberation occurs when speakers say what they want, when they want, regardless of whether a block occurs.",
      ],
      practicalTakeaway:
        "Track avoidance moments in your Confidence Journal. Practice ordering what you actually want rather than the easiest word to pronounce.",
    },
  },
  {
    id: "art-4",
    title: "Gentle Vocal Onsets: Step-by-Step Acoustic Phonation Protocol",
    category: "Practice Techniques",
    badgeVariant: "ocean",
    readTime: "4 min read",
    attribution: "Voice Initiation & Fluency Shaping Series",
    summary:
      "How preliminary airflow and soft glottal attack prevent sudden vocal cord adduction during vowel-initial speech, with sample daily practice prompts.",
    modalContent: {
      overview:
        "Hard glottal attacks occur when the vocal folds are pressed together tightly before breath begins, causing a sudden burst or locked block on vowel-initial words (such as 'open', 'always', or 'enter'). Gentle Vocal Onset (GVO) teaches speakers to start airflow slightly ahead of vocal fold vibration.",
      keyPoints: [
        "Light Breathy Initiation: Precede the target vowel with a soft, nearly imperceptible /h/ aspiration (e.g. 'h-open').",
        "Gradual Amplitude Swell: Start with low vocal intensity and gently swell volume over the first 200 milliseconds.",
        "Continuous Breath Support: Maintain unbroken diaphragmatic exhalation throughout the entire phrase.",
      ],
      practicalTakeaway:
        "Practice with single vowels ('ah', 'ee', 'oh') for 3 minutes every morning before transitioning into two-word combinations.",
    },
  },
  {
    id: "art-5",
    title: "Asynchronous Motor Learning in Speech Pathology",
    category: "Fluency Science",
    badgeVariant: "softblue",
    readTime: "7 min read",
    attribution: "Motor Learning & Distributed Practice Principles",
    summary:
      "Reviewing clinical literature on motor habituation: why brief daily recording drills yield superior retention compared to isolated bi-weekly clinic visits.",
    modalContent: {
      overview:
        "Speech motor skills require frequent, low-cognitive-load repetition to become automatic habits. When practice is restricted to a single weekly or bi-weekly 45-minute clinical appointment, skill decay between sessions is high.",
      keyPoints: [
        "Distributed vs Massed Practice: Five 10-minute sessions throughout the week yield significantly higher retention than one 50-minute session.",
        "Asynchronous Clinician Bridge: Recording short daily drills at home gives clinicians real-world data to offer timestamped adjustments.",
        "Reduced Vocal Fatigue: Short micro-drills prevent physical strain on the larynx while keeping motivation steady.",
      ],
      practicalTakeaway:
        "Keep daily practice to a strict 10–15 minute window. Consistency over consecutive days is far more powerful than long weekend marathons.",
    },
  },
  {
    id: "art-6",
    title: "Overcoming the Phone Call Barrier: A Desensitization Framework",
    category: "Everyday Confidence",
    badgeVariant: "terracotta",
    readTime: "5 min read",
    attribution: "Situational Desensitization & Self-Advocacy Series",
    summary:
      "Practical self-advocacy steps, intentional voluntary bouncing, and pacing techniques for high-pressure telephone communication at work.",
    modalContent: {
      overview:
        "Telephone calls frequently trigger intense anticipatory anxiety for people who stammer because visual feedback is absent, time pressure feels amplified, and the speaker fears the listener will assume the line has disconnected during a silent block.",
      keyPoints: [
        "Self-Advocacy Disclosure: Beginning the call with a simple disclosure ('Hi, I stammer occasionally, so please bear with me') immediately removes panic.",
        "Voluntary Stuttering on the Greeting: Intentionally bouncing on the first word ('H-h-hello') releases tension before an involuntary block forms.",
        "Tactile Grounding: Placing both feet firmly on the floor and breathing into the abdomen before dialing prevents shallow panic breathing.",
      ],
      practicalTakeaway:
        "Draft a simple 1-sentence opening script on a sticky note beside your phone. Practice on automated service numbers before high-stakes calls.",
    },
  },
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [activeArticle, setActiveArticle] = React.useState<Article | null>(null);

  const categories = [
    "All",
    "Fluency Science",
    "Articulation & Placement",
    "Speech Psychology",
    "Practice Techniques",
    "Everyday Confidence",
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? ARTICLES
      : ARTICLES.filter((art) => art.category === selectedCategory);

  return (
    <div className="py-16 sm:py-24 bg-[#F7F9F8] dark:bg-[#111D25] text-midnight dark:text-[#F2F6F7] min-h-screen transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="ocean" className="px-3.5 py-1 text-xs">
            Educational & Clinical Library
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-midnight dark:text-white leading-tight">
            Evidence-Informed Speech & Fluency Guides
          </h1>
          <p className="text-base sm:text-lg text-stone dark:text-[#BDCBD2] leading-relaxed">
            Educational guides, technique overviews, and self-advocacy frameworks adapted from speech-language pathology literature to support speakers, families, and clinicians.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter guides by category"
          className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-ocean text-white shadow-subtle"
                  : "bg-white dark:bg-midnight-surface text-stone dark:text-[#BDCBD2] border border-[#D5E1E6] dark:border-[#304653] hover:text-midnight dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <section aria-labelledby="articles-heading">
          <h2 id="articles-heading" className="sr-only">
            Clinical and Practice Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="rounded-3xl border border-[#D5E1E6] bg-white dark:border-[#304653] dark:bg-midnight-surface p-7 shadow-subtle flex flex-col justify-between space-y-5 hover:border-ocean/40 dark:hover:border-softblue/40 transition-all text-left"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <Badge variant={art.badgeVariant} className="text-[10px]">
                    {art.category}
                  </Badge>
                  <span className="text-[11px] text-stone dark:text-[#BDCBD2] flex items-center gap-1 font-mono">
                    <Clock className="h-3 w-3" aria-hidden="true" /> {art.readTime}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-midnight dark:text-white leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7EFF2] dark:border-[#304653] space-y-3">
                <span className="text-[11px] text-stone/80 dark:text-[#BDCBD2]/80 block truncate">
                  {art.attribution}
                </span>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveArticle(art)}
                  className="w-full text-xs font-semibold justify-between text-ocean dark:text-softblue"
                >
                  <span>Read Guide & Key Takeaways</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          ))}
          </div>
        </section>

        {/* Practice Studio Callout */}
        <div className="rounded-[32px] bg-midnight dark:bg-midnight-deep text-white p-8 sm:p-12 border border-[#304653] shadow-elevated text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-medium text-white/90">
            <Sparkles className="h-3.5 w-3.5 text-softblue" aria-hidden="true" />
            <span>Interactive Application</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Put speech science into daily practice
          </h2>
          <p className="text-xs sm:text-sm text-mist/80 max-w-lg mx-auto leading-relaxed">
            All technique principles outlined in our clinical library are implemented directly in our interactive web practice studio.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-midnight hover:bg-mist font-semibold shadow-elevated px-8">
                Launch Practice Studio
              </Button>
            </Link>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-6">
                Explore 4-Step Flow
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Modal for Full Guide & Key Takeaways */}
      <Modal
        isOpen={activeArticle !== null}
        onClose={() => setActiveArticle(null)}
        title={activeArticle?.title || "Clinical Guide"}
        description={activeArticle?.attribution || "VocalRise Educational Series"}
      >
        {activeArticle && (
          <div className="space-y-4 text-xs sm:text-sm text-stone dark:text-[#BDCBD2] leading-relaxed text-left">
            <div>
              <h4 className="font-heading font-bold text-midnight dark:text-white text-sm mb-1">
                Clinical Overview
              </h4>
              <p>{activeArticle.modalContent.overview}</p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-midnight dark:text-white text-sm mb-2">
                Core Principles & Mechanisms
              </h4>
              <ul className="space-y-2">
                {activeArticle.modalContent.keyPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ocean dark:bg-softblue mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-2xl bg-mist/60 dark:bg-midnight-deep border border-[#D5E1E6] dark:border-[#304653]">
              <h4 className="font-heading font-bold text-ocean dark:text-softblue text-xs uppercase tracking-wider mb-1">
                Practical Takeaway for Practice
              </h4>
              <p className="text-midnight dark:text-[#F2F6F7]">
                {activeArticle.modalContent.practicalTakeaway}
              </p>
            </div>

            <div className="pt-2 text-[11px] text-stone/70 dark:text-[#BDCBD2]/70 border-t border-[#E7EFF2] dark:border-[#304653]">
              <strong>Disclaimer: </strong>
              <span>
                This guide provides educational and supportive technique information. It does not replace individualized clinical evaluation by a certified Speech-Language Therapist.
              </span>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
