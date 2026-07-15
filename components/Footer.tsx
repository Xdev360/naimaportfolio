import { Logo } from "./Header";

const socials = [
  {
    href: "https://dribbble.com/naimat-yunusa",
    label: "Dribbble",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M8 4.5c4.5 6 6 12.5 6.5 15.5M4.5 9.5c6.5 1 12.5 4 15 6.5M4 14.5c5.5 2 11 3.5 15.5 3.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/n___aimat?igsh=ajF2b2w2bWNxbHhi",
    label: "Instagram",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "https://x.com/Naima538927",
    label: "X",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4L20 20M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="max-w-content mx-auto px-6 md:px-10 pt-8 pb-12">
      <div className="border-t-2 border-ink dark:border-zinc-700 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-colors duration-300">
        <div>
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-heading font-extrabold text-lg">Naimat</span>
          </div>
          <p className="text-sm text-ink/60 dark:text-zinc-400 mt-2">
            Product Designer · UI/UX Designer · Brand Designer
          </p>
        </div>

        <div className="flex items-center gap-5 text-ink dark:text-zinc-200">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hover:opacity-60 transition-opacity"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
