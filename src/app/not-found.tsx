import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NotFound() {
  return (
    <main className="flex-1 min-h-[calc(100vh-14rem)] flex items-center justify-center p-4 sm:p-6 lg:p-8 text-center bg-[#F7F9F8] dark:bg-[#111D25] text-midnight dark:text-[#F2F6F7] transition-colors">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-ocean/20 bg-mist/60 px-3.5 py-1 text-xs font-semibold text-ocean dark:bg-midnight-surface dark:text-softblue">
          <Compass className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Page Not Found • 404</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-midnight dark:text-white">
          A quiet detour
        </h1>

        <p className="text-sm sm:text-base text-stone dark:text-[#BDCBD2] leading-relaxed">
          The page or resource you were looking for doesn&apos;t seem to exist. Take your time, or return to your practice hub.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href="/" className="w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full sm:w-auto gap-2">
              <Home className="h-4 w-4" aria-hidden="true" />
              <span>Return to Homepage</span>
            </Button>
          </Link>
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <span>Open Practice Hub</span>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
