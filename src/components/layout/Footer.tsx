import Link from "next/link";
import { Waves, HeartHandshake, ShieldCheck, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-600 to-cerulean-600 text-white shadow-sm">
                <Waves className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Vocal<span className="text-brand-600 dark:text-brand-400">Rise</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Empowering individuals who stammer or navigate articulation and lisping challenges through respectful, technique-driven practice and qualified clinical collaboration.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                <ShieldCheck className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                <span>SLT-Aligned Framework</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                <HeartHandshake className="h-4 w-4 text-cerulean-600 dark:text-cerulean-400" />
                <span>Respectful Support</span>
              </div>
            </div>
          </div>

          {/* Pathways */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4">
              Speech Pathways
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/stammering" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Stammering & Fluency
                </Link>
              </li>
              <li>
                <Link href="/articulation-and-lisping" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Articulation & Lisping
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Clinical Methodology
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-brand-700 dark:text-brand-400 font-medium hover:underline">
                  Interactive Practice Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinicians & Organization */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4">
              Professionals
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/therapist" className="text-cerulean-700 dark:text-cerulean-400 font-medium hover:underline">
                  Therapist Portal Demo
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Clinic & Solo SLT Plans
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Evidence-Based Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Our Mission & Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Access & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-4">
              Account
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/login" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Log In
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Create Account
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Patient Articles
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Clinical Disclaimer Box */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500 leading-relaxed mb-8 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
          <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Clinical Scope & Medical Disclaimer:
          </p>
          <p>
            VocalRise is a supportive practice and communication enhancement companion designed to complement work with qualified Speech and Language Therapists (SLTs / SLPs). VocalRise does not claim to cure stuttering, stammering, or speech differences, nor does it provide automated medical diagnoses. Stammering is recognized as a complex, multifactorial fluency difference and is not an issue of poor pronunciation. Any progress metrics shown are illustrative tools for self-reflection and therapeutic tracking.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-400 dark:text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} VocalRise Health Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer">Accessibility Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
