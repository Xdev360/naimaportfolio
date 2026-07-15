"use client";

import { useEffect, useState } from "react";

function readTheme(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function setTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setThemeState] = useState<"light" | "dark">("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setThemeState(readTheme());
    setReady(true);
  }, []);

  const toggle = () => {
    const next = readTheme() === "dark" ? "light" : "dark";
    setTheme(next);
    setThemeState(next);
  };

  const isDark = ready ? theme === "dark" : false;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={`relative z-10 inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border border-ink/15 bg-ink/5 p-1 transition-colors hover:bg-ink/10 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/15 ${className}`}
    >
      <span
        className={`pointer-events-none absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 dark:bg-zinc-800 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-yellow-300" aria-hidden="true">
            <path
              fill="currentColor"
              d="M10 2a1 1 0 011 1v1.5a1 1 0 11-2 0V3a1 1 0 011-1zm0 13a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm7-4a1 1 0 011 1v.5a1 1 0 11-2 0V12a1 1 0 011-1zm-14 0a1 1 0 011 1v.5a1 1 0 11-2 0V12a1 1 0 011-1zm12.07 5.07a1 1 0 010 1.41l-1.06 1.06a1 1 0 11-1.41-1.41l1.06-1.06a1 1 0 011.41 0zM5.34 5.34a1 1 0 010 1.41L4.28 7.81a1 1 0 11-1.41-1.41l1.06-1.06a1 1 0 011.41 0zm11.32 0a1 1 0 011.41 0l1.06 1.06a1 1 0 11-1.41 1.41l-1.06-1.06a1 1 0 010-1.41zM5.34 14.66a1 1 0 011.41 0l1.06 1.06a1 1 0 11-1.41 1.41l-1.06-1.06a1 1 0 010-1.41zM17 10a1 1 0 011 1h1.5a1 1 0 110 2H18a1 1 0 11-2 0h-1.5a1 1 0 110-2H17zM2 10a1 1 0 011 1h1.5a1 1 0 110 2H3a1 1 0 11-2 0H1.5a1 1 0 110-2H2z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-ink/70" aria-hidden="true">
            <path
              fill="currentColor"
              d="M10.5 2.5a6.5 6.5 0 106.5 6.5 5.5 5.5 0 01-6.5-6.5z"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
