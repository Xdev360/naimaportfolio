import { Logo } from "./Header";

export default function Footer() {
  return (
    <footer className="max-w-content mx-auto px-6 md:px-10 pt-8 pb-12">
      <div className="border-t-2 border-ink pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-heading font-extrabold text-lg">Naimat</span>
          </div>
          <p className="text-sm text-ink/60 mt-2">
            Product Designer · UI/UX Designer · Brand Designer
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a href="#" aria-label="Website" className="hover:opacity-60 transition-opacity">
            {/* Dribbble-style dot icon as generic "website" mark */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#111111" strokeWidth="1.6" />
              <path d="M4 9.5C7 11 17 11 20 9.5M4 14.5C7 13 17 13 20 14.5M12 3C9.5 6 9.5 18 12 21M12 3C14.5 6 14.5 18 12 21" stroke="#111111" strokeWidth="1.3" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-60 transition-opacity">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="#111111" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="4" stroke="#111111" strokeWidth="1.6" />
              <circle cx="17" cy="7" r="1" fill="#111111" />
            </svg>
          </a>
          <a href="#" aria-label="X" className="hover:opacity-60 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 4L20 20M20 4L4 20" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
