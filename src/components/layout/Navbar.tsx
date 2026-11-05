"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Waves,
  Menu,
  X,
  Stethoscope,
  UserCircle2,
  ArrowRight,
} from "lucide-react";
import { AnnouncementBar } from "@/components/ui/announcement-bar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const drawerRef = React.useRef<HTMLDivElement>(null);

  // Close mobile menu upon navigation
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle Escape key & body scroll locking for mobile drawer
  React.useEffect(() => {
    if (!mobileMenuOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

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
    <header className="sticky top-0 z-40 w-full border-b border-[#D5E1E6] bg-white/90 backdrop-blur-md dark:border-[#304653] dark:bg-midnight-deep/90 transition-colors">
      {/* Top Evidence-Informed Practice Bar */}
      <AnnouncementBar />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean dark:focus-visible:ring-softblue rounded-xl p-1 -ml-1 transition-transform"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ocean text-white shadow-subtle transition-transform group-hover:scale-105">
            <Waves className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold tracking-tight text-midnight dark:text-[#F2F6F7]">
              Vocal<span className="text-ocean dark:text-softblue">Rise</span>
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-stone dark:text-[#BDCBD2]">
              Speech Practice Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="hidden lg:flex items-center space-x-1"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean dark:focus-visible:ring-softblue hover:-translate-y-0.5 motion-reduce:hover:transform-none",
                  isActive
                    ? "bg-mist/75 text-ocean font-semibold dark:bg-midnight-surface dark:text-softblue shadow-subtle"
                    : "text-stone hover:bg-mist/40 hover:text-midnight dark:text-[#BDCBD2] dark:hover:bg-midnight-surface/60 dark:hover:text-[#F2F6F7]"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls & Authentication Short-cuts */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          {isDashboard ? (
            <div className="flex items-center gap-2">
              <Link href="/dashboard">
                <Button
                  size="sm"
                  variant={pathname.startsWith("/dashboard") ? "primary" : "outline"}
                  className="gap-1.5 text-xs font-semibold"
                >
                  <UserCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Practice Hub</span>
                </Button>
              </Link>
              <Link href="/therapist">
                <Button
                  size="sm"
                  variant={pathname.startsWith("/therapist") ? "primary" : "outline"}
                  className="gap-1.5 text-xs font-semibold"
                >
                  <Stethoscope className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Therapist Portal</span>
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/dashboard" className="text-xs font-medium text-stone hover:text-ocean dark:text-[#BDCBD2] dark:hover:text-softblue px-2 py-1">
                Demo Hub
              </Link>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-xs">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="primary" size="sm" className="text-xs gap-1.5">
                  <span>Explore Practice</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu trigger & Theme toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="rounded-xl p-2 text-stone hover:bg-mist hover:text-midnight dark:text-[#BDCBD2] dark:hover:bg-midnight-surface dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean dark:focus-visible:ring-softblue transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-[105px] z-30 bg-midnight/50 backdrop-blur-sm lg:hidden transition-opacity"
            onClick={() => {
              setMobileMenuOpen(false);
              menuButtonRef.current?.focus();
            }}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div
            id="mobile-nav-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="lg:hidden relative z-40 border-b border-[#D5E1E6] bg-white px-5 pt-3 pb-8 space-y-4 animate-in slide-in-from-top-2 duration-200 dark:border-[#304653] dark:bg-midnight-surface shadow-elevated"
          >
            {/* Quick Demo Switchers */}
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#E7EFF2] dark:border-[#304653]">
              <Link href="/dashboard" className="w-full">
                <Button
                  variant={pathname.startsWith("/dashboard") ? "primary" : "outline"}
                  size="sm"
                  className="w-full justify-start text-xs font-semibold"
                >
                  <UserCircle2 className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                  <span>Practice Hub</span>
                </Button>
              </Link>
              <Link href="/therapist" className="w-full">
                <Button
                  variant={pathname.startsWith("/therapist") ? "primary" : "outline"}
                  size="sm"
                  className="w-full justify-start text-xs font-semibold"
                >
                  <Stethoscope className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                  <span>Therapist Portal</span>
                </Button>
              </Link>
            </div>

            {/* Nav list */}
            <nav role="navigation" aria-label="Mobile Navigation Links" className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3.5 py-3 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "bg-mist text-ocean font-semibold dark:bg-midnight-deep dark:text-softblue"
                        : "text-stone hover:bg-mist/40 hover:text-midnight dark:text-[#BDCBD2] dark:hover:bg-midnight-deep dark:hover:text-white"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action buttons */}
            <div className="pt-4 border-t border-[#E7EFF2] dark:border-[#304653] flex flex-col gap-2.5">
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full py-2.5 text-sm">
                  Log In
                </Button>
              </Link>
              <Link href="/signup" className="w-full">
                <Button variant="primary" className="w-full py-2.5 text-sm gap-2">
                  <span>Explore Practice</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
