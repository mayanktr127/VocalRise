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
        className="fixed inset-0 bg-midnight/70 backdrop-blur-sm transition-opacity"
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
          "relative w-full max-w-lg rounded-[28px] bg-white p-6 sm:p-8 shadow-elevated border border-[#D5E1E6] z-10 animate-in fade-in zoom-in-95 duration-200 outline-none dark:bg-midnight-surface dark:border-[#304653] dark:text-[#F2F6F7]",
          className
        )}
      >
        <div className="flex items-start justify-between pb-4 border-b border-[#E7EFF2] dark:border-[#304653]">
          <div>
            <h3
              id="modal-title"
              className="font-heading text-xl font-semibold leading-tight text-midnight dark:text-[#F2F6F7]"
            >
              {title}
            </h3>
            {description && (
              <p
                id="modal-description"
                className="mt-1.5 text-sm text-stone dark:text-[#BDCBD2] leading-relaxed"
              >
                {description}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-xl p-1.5 text-stone hover:bg-mist hover:text-midnight dark:text-[#BDCBD2] dark:hover:bg-[#203542] dark:hover:text-[#F2F6F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean dark:focus-visible:ring-[#83B5CC]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
