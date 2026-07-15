"use client";

import { useState } from "react";

export function Logo({ className = "w-8 h-7" }: { className?: string }) {
  return (
    <img
      src="/images/logo.svg"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
    />
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-content mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <Logo />
          <span className="font-heading font-extrabold text-lg tracking-tight">
            Naimat
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#projects" className="hover:opacity-70 transition-opacity">
            Portfolio
          </a>
          <a href="#contact" className="font-bold hover:opacity-70 transition-opacity">
            Hire Me
          </a>
        </nav>

        <button
          className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`w-6 h-0.5 bg-ink block transition-transform duration-200 ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-ink block transition-transform duration-200 ${
              open ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 flex flex-col gap-4 text-sm font-medium">
          <a href="#projects" onClick={() => setOpen(false)}>
            Portfolio
          </a>
          <a href="#contact" className="font-bold" onClick={() => setOpen(false)}>
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
