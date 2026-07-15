"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export function Logo({ className = "w-8 h-7" }: { className?: string }) {
  return (
    <img
      src="/images/logo.svg"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain dark:invert`}
    />
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-ink/5 dark:bg-[#0c0c0c]/90 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-content mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <Logo />
          <span className="font-heading font-extrabold text-lg tracking-tight">
            Naimat
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/#projects" className="hover:opacity-70 transition-opacity">
              Portfolio
            </Link>
            <Link href="/#contact" className="font-bold hover:opacity-70 transition-opacity">
              Hire Me
            </Link>
          </nav>

          <ThemeToggle />

          <button
            className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`w-6 h-0.5 bg-ink dark:bg-white block transition-transform duration-200 ${
                open ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-ink dark:bg-white block transition-transform duration-200 ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 flex flex-col gap-4 text-sm font-medium">
          <Link href="/#projects" onClick={() => setOpen(false)}>
            Portfolio
          </Link>
          <Link href="/#contact" className="font-bold" onClick={() => setOpen(false)}>
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
