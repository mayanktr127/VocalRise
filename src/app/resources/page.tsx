import Link from "next/link";
import { BookOpen, Search, ArrowRight, ShieldCheck, Sparkles, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ResourcesPage() {
  const articles = [
    {
      title: "Stammering vs Pronunciation: Why Understanding the Distinction Changes Everything",
      category: "Fluency Science",
      badgeVariant: "teal" as const,
      readTime: "6 min read",
      author: "Dr. Sarah Chen, PhD, CCC-SLP",
      summary:
        "Why treating developmental stammering as poor articulation leads to increased physical struggle and speech avoidance, and what modern neuro-motor evidence recommends instead.",
    },
    {
      title: "The Anatomy of a Frontal vs Lateral Lisp: Lingual Mechanics Explained",
      category: "Articulation",
      badgeVariant: "cerulean" as const,
      readTime: "8 min read",
      author: "David O'Reilly, MS, Reg-SLT",
      summary:
        "A clear breakdown of alveolar placement versus lateral airflow distortion, including the bilateral molar anchoring 'butterfly' drill for central groove stability.",
    },
    {
      title: "The Iceberg Analogy: Confronting Avoidance and Secondary Speech Struggle",
      category: "Speech Psychology",
      badgeVariant: "secondary" as const,
      readTime: "5 min read",
      author: "Clinical Advisory Board",
      summary:
        "Exploring Joseph Sheehan's famous speech therapy model: why the emotional fear of stuttering creates more barrier than the physical speech block itself.",
    },
    {
      title: "Gentle Vocal Onsets: Step-by-Step Acoustic Phonation Protocol",
      category: "Practice Technique",
      badgeVariant: "teal" as const,
      readTime: "4 min read",
      author: "Dr. Sarah Chen, PhD, CCC-SLP",
      summary:
        "How preliminary airflow and soft glottal attack prevent sudden vocal cord adduction during vowel-initial speech, with sample daily practice prompts.",
    },
    {
      title: "Asynchronous Practice in Modern Speech Pathology",
      category: "Clinical Research",
      badgeVariant: "purple" as const,
      readTime: "7 min read",
      author: "VocalRise Research Team",
      summary:
        "Reviewing clinical literature on motor habituation: why brief daily recording drills yield superior retention compared to isolated bi-weekly clinic visits.",
    },
    {
      title: "Overcoming the Phone Call Barrier: A Desensitization Framework",
      category: "Everyday Confidence",
      badgeVariant: "secondary" as const,
      readTime: "5 min read",
      author: "Amara Okonkwo",
      summary:
        "Practical self-advocacy steps, intentional voluntary bouncing, and pacing techniques for high-pressure telephone communication at work.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal" className="px-3.5 py-1">
            Clinical Library & Guides
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Evidence-Based Speech & Fluency Resources
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Written and reviewed by qualified Speech-Language Therapists to support individuals, families, and speech clinicians.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200/90 bg-white dark:border-slate-800 dark:bg-slate-900 p-6 shadow-subtle flex flex-col justify-between space-y-4 hover:border-brand-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant={art.badgeVariant} className="text-[10px]">
                    {art.category}
                  </Badge>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {art.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">{art.author}</span>
                <span className="text-brand-600 dark:text-brand-400 font-semibold flex items-center gap-1 group-hover:underline cursor-pointer">
                  Read Guide &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Hub Callout */}
        <div className="rounded-3xl bg-slate-900 dark:bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold">Put theory into daily practice</h3>
          <p className="text-sm text-slate-400">
            All technique principles outlined in our guides are built directly into our interactive practice studio.
          </p>
          <div className="pt-2">
            <Link href="/dashboard">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white">
                Launch Practice Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
