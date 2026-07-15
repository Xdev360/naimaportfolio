"use client";

import { ScissorsDown } from "./Doodles";
import { StickyLabel } from "./StickyNote";

const fields = [
  { name: "name", label: "Name", color: "#FFC9F0", type: "text", placeholder: "Your full name" },
  { name: "email", label: "Your email", color: "#FFE68C", type: "email", placeholder: "you@email.com" },
  { name: "project", label: "About Project", color: "#9DDCFF", type: "text", placeholder: "I want to discuss with you about ......." },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-24 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <StickyLabel rotate={-3}>Contact here</StickyLabel>
          <ScissorsDown className="w-7 h-9 mt-3 ml-14" />
          <p className="mt-6 text-xl md:text-2xl font-heading font-semibold leading-snug">
            Have a project idea?
            <br />
            just say me <span className="mark-highlight">Hi</span>.
          </p>
        </div>

        <form className="flex flex-col gap-7" onSubmit={(e) => e.preventDefault()}>
          {fields.map((f) => (
            <label key={f.name} className="block">
              <span
                className="inline-block px-2.5 py-0.5 rounded font-hand text-lg md:text-xl mb-2 -rotate-1 sticky-note"
                style={{ backgroundColor: f.color }}
              >
                {f.label}
              </span>
              <input
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
                className="w-full bg-transparent border-b-2 border-ink/70 focus:border-ink outline-none pb-2 text-sm md:text-base placeholder:text-ink/30 transition-colors"
              />
            </label>
          ))}

          <button
            type="submit"
            className="self-start mt-2 bg-ink text-white font-semibold px-7 py-3.5 rounded-md shadow-btn hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          >
            Send Here
          </button>
        </form>
      </div>
    </section>
  );
}
