"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: ModalProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const previousActiveElementRef = React.useRef<HTMLElement | null>(null);

  // Focus trap, keydown handling & restoring focus
  React.useEffect(() => {
    if (!isOpen) return;

    // Store element that had focus before opening modal
    previousActiveElementRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    // Focus the modal or first focusable element
    const timer = setTimeout(() => {
      if (!dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length > 0) {
        focusable[0].focus();
      } else {
        dialogRef.current.focus();
      }
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      // Trap Tab focus inside modal
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
      // Return focus to original trigger element upon close
      if (previousActiveElementRef.current && typeof previousActiveElementRef.current.focus === "function") {
        previousActiveElementRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop with soft blur */}
      <div
        className="fixed inset-0 bg-[#102B3A]/70 dark:bg-[#050C10]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Box */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby={description ? "modal-description" : undefined}
        tabIndex={-1}
        className={cn(
          "relative w-full max-w-lg rounded-[28px] bg-white p-6 sm:p-8 shadow-elevated border border-[#D5E1E6] z-10 animate-in fade-in zoom-in-95 duration-200 outline-none dark:bg-[#132630] dark:border-[#203A48] dark:text-[#F4F7F5]",
          className
        )}
      >
        <div className="flex items-start justify-between pb-4 border-b border-[#DCEFEA]/60 dark:border-[#203A48]">
          <div>
            <h3
              id="modal-title"
              className="font-heading text-xl font-semibold leading-tight text-[#102B3A] dark:text-[#F4F7F5]"
            >
              {title}
            </h3>
            {description && (
              <p
                id="modal-description"
                className="mt-1.5 text-sm text-[#4C5E67] dark:text-[#A2B7BF] leading-relaxed"
              >
                {description}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-xl p-1.5 text-[#4C5E67] hover:bg-[#DCEFEA]/60 hover:text-[#102B3A] dark:text-[#A2B7BF] dark:hover:bg-[#18303C] dark:hover:text-[#F4F7F5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B68] dark:focus-visible:ring-[#38B2A3]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
