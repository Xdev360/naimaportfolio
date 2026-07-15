import { ArrowDoodle } from "./Doodles";
import { StickyLabel } from "./StickyNote";

const projects = [
  {
    title: "AI-powered streaming platform",
    button: "View Project",
    buttonColor: "#FFC9F0",
    cover: "/images/cover-streaming.webp",
    alt: "Movie streaming platform UI showing a Spider-Man watch page",
  },
  {
    title: "Community platform for sharing ideas",
    button: "View App",
    buttonColor: "#FFE68C",
    cover: "/images/cover-ideasha.webp",
    alt: "Ideasha mobile app login and feed screens",
  },
  {
    title: "Visual identity system for a modern business platform.",
    button: "See Identity",
    buttonColor: "#9DDCFF",
    cover: "/images/cover-smartsmb.webp",
    alt: "SmartSMB Advisory Limited brand identity",
  },
  {
    title: "Dashboard",
    button: "View",
    buttonColor: "#9BE8B4",
    cover: "/images/cover-stax.webp",
    alt: "STAX sales dashboard with revenue charts and tables",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-24 scroll-mt-20">
      <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12">
        <div>
          <StickyLabel rotate={-3}>Featured Projects</StickyLabel>
          <ArrowDoodle className="w-8 h-10 mt-3 ml-12" />
          <p className="mt-5 text-sm md:text-base text-ink/70 dark:text-zinc-400 max-w-[180px]">
            Have designed more than 10 projects
          </p>
        </div>

        <div className="stagger grid sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border border-ink/70 dark:border-zinc-700 bg-white dark:bg-zinc-900 overflow-hidden shadow-note transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] border-b border-ink/40 dark:border-zinc-700 overflow-hidden bg-[#f4f4f4] dark:bg-zinc-800">
                <img
                  src={p.cover}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-end justify-between gap-3 p-4">
                <p className="text-sm md:text-base font-medium leading-snug">
                  {p.title}
                </p>
                <a
                  href="#contact"
                  className="shrink-0 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tag-chip on-pastel text-ink whitespace-nowrap transition-transform group-hover:scale-105"
                  style={{ backgroundColor: p.buttonColor }}
                >
                  {p.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
