"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Waves, 
  Menu, 
  X, 
  Sparkles, 
  Stethoscope, 
  UserCircle2, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Close mobile menu upon navigation
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/stammering", label: "Stammering Support" },
    { href: "/articulation-and-lisping", label: "Articulation & Lisping" },
    { href: "/about", label: "About Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/resources", label: "Resources" },
  ];

  const isDashboard = pathname.startsWith("/dashboard") || pathname.startsWith("/therapist");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 transition-colors">
      {/* Top Clinical Reassurance Bar */}
      <div className="bg-slate-900 text-slate-300 dark:bg-slate-950 dark:border-b dark:border-slate-800/80 px-4 py-1.5 text-xs text-center flex items-center justify-center gap-2">
        <ShieldCheck className="h-3.5 w-3.5 text-brand-400" />
        <span>
          Clinician-aligned practice platform — designed in partnership with certified Speech-Language Therapists.
        </span>
        <span className="hidden sm:inline text-slate-500">|</span>
        <Link 
          href="/therapist" 
          className="hidden sm:inline font-medium text-brand-300 hover:text-white transition-colors underline"
        >
          Are you a therapist? View clinician portal &rarr;
        </Link>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-600 to-cerulean-600 text-white shadow-sm transition-transform group-hover:scale-105">
            <Waves className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Vocal<span className="text-brand-600 dark:text-brand-400">Rise</span>
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400">
              Speech & Fluency SaaS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-slate-100 text-brand-700 font-semibold dark:bg-slate-800 dark:text-brand-300"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls & Dashboard Short-cuts */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {isDashboard ? (
            <div className="flex items-center gap-2">
              <Link href="/dashboard">
                <Button 
                  size="sm" 
                  variant={pathname.startsWith("/dashboard") ? "primary" : "outline"}
                  className="rounded-lg gap-1.5"
                >
                  <UserCircle2 className="h-4 w-4" />
                  User Dashboard
                </Button>
              </Link>
              <Link href="/therapist">
                <Button 
                  size="sm" 
                  variant={pathname.startsWith("/therapist") ? "primary" : "outline"}
                  className="rounded-lg gap-1.5"
                >
                  <Stethoscope className="h-4 w-4" />
                  Therapist Portal
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <Link href="/dashboard" className="text-xs font-medium text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 px-2 py-1">
                Demo App
              </Link>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="primary" size="sm" className="gap-1.5">
                  Start Practice
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button & Theme toggle */}
        <div className="flex lg:hidden items-center gap-1.5">
          <ThemeToggle />
          <Link href="/dashboard" className="text-xs bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300 px-2.5 py-1 rounded-full font-medium sm:hidden">
            Demo
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 dark:border-slate-800 dark:bg-slate-900">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <Link href="/dashboard" className="w-full">
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                <UserCircle2 className="h-3.5 w-3.5 mr-1.5 text-brand-600 dark:text-brand-400" />
                User Dashboard
              </Button>
            </Link>
            <Link href="/therapist" className="w-full">
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                <Stethoscope className="h-3.5 w-3.5 mr-1.5 text-cerulean-600 dark:text-cerulean-400" />
                Therapist Portal
              </Button>
            </Link>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-brand-50 text-brand-700 font-semibold dark:bg-brand-950 dark:text-brand-300"
                    : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <Link href="/login" className="w-full">
              <Button variant="outline" className="w-full">
                Log In
              </Button>
            </Link>
            <Link href="/signup" className="w-full">
              <Button variant="primary" className="w-full">
                Start Free Practice
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
