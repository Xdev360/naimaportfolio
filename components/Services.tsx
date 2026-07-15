import { ScissorsDown } from "./Doodles";
import { StickyLabel, TagChip } from "./StickyNote";

const services = [
  {
    color: "#FFE68C",
    rot: "-7deg",
    off: "20px",
    label: "Pen/Paper",
    labelColor: "#9DDCFF",
    icon: "/images/icon-pencil.png",
    title: ["User Research", "Design"],
  },
  {
    color: "#9DDCFF",
    rot: "3deg",
    off: "0px",
    label: "Figma",
    labelColor: "#FFC9F0",
    icon: "/images/icon-eye.png",
    title: ["UI & Product", "Design"],
  },
  {
    color: "#FFC9F0",
    rot: "-4deg",
    off: "14px",
    label: "Framer",
    labelColor: "#FFE68C",
    icon: "/images/icon-sparkle.png",
    title: ["No-code", "Development"],
  },
];

export default function Services() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-24 overflow-x-clip">
      <div className="mb-10 md:mb-12">
        <StickyLabel rotate={-3}>What i do?</StickyLabel>
        <ScissorsDown className="w-7 h-9 mt-3 ml-6" />
      </div>

      <div className="stagger grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-5 md:px-4">
        {services.map((s) => (
          <div key={s.label}>
            <div
              className="tilt-card relative rounded-lg p-6 md:p-7 h-56 sm:h-64 md:h-72 flex flex-col justify-between sticky-note border border-ink/20 max-w-sm mx-auto sm:max-w-none"
              style={
                {
                  backgroundColor: s.color,
                  "--rot": s.rot,
                  "--off": s.off,
                } as React.CSSProperties
              }
            >
              <img
                src={s.icon}
                alt=""
                aria-hidden="true"
                className="w-9 h-9 object-contain"
              />
              <TagChip color={s.labelColor} className="absolute -top-3 right-5 rotate-2">
                {s.label}
              </TagChip>
              <h3 className="font-heading font-bold text-2xl md:text-[1.7rem] leading-snug">
                {s.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
