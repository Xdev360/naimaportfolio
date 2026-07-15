import { ArrowDoodle } from "./Doodles";
import { StickyLabel } from "./StickyNote";

const experience = [
  {
    color: "#FFE68C",
    number: "1",
    role: "Product Designer / Creative Associate at",
    company: "STAX Software Company",
    period: "March 2026 – Present",
  },
  {
    color: "#9DDCFF",
    number: "2",
    role: "Graphics Designer at",
    company: "TENJO Designs",
    period: "August 2025 – Present",
  },
  {
    color: "#FFC9F0",
    number: "3",
    role: "Product Designer at",
    company: "Wintech Studio",
    period: "July – Present",
  },
];

export default function Experience() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-24">
      <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12">
        <div>
          <StickyLabel rotate={-3}>Work Experience</StickyLabel>
          <ArrowDoodle className="w-8 h-10 mt-3 ml-12" />
          <p className="mt-5 text-sm md:text-base text-ink/70 max-w-[180px]">
            Have been designing since my past 3 years
          </p>
        </div>

        {/* Crossing "grid frame" lines like the design */}
        <div className="border-t border-b border-ink/70 py-8 md:py-10">
          <ol className="flex flex-col gap-8 md:gap-10 md:border-l md:border-r border-ink/70 px-1 md:px-10 md:-my-16 md:py-20">
            {experience.map((e) => (
              <li key={e.number} className="flex items-start gap-5">
                <span
                  className="shrink-0 w-11 h-11 rounded-md flex items-center justify-center font-heading font-bold text-lg sticky-note"
                  style={{ backgroundColor: e.color }}
                >
                  {e.number}
                </span>
                <div>
                  <p className="text-base md:text-lg leading-snug">
                    {e.role} <span className="font-bold">{e.company}</span>
                  </p>
                  <p className="text-sm text-ink/60 mt-1">{e.period}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
