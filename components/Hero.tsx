import { ArrowDoodle } from "./Doodles";
import { StickyLabel } from "./StickyNote";

export default function Hero() {
  return (
    <section
      id="top"
      className="max-w-content mx-auto px-6 md:px-10 pt-8 md:pt-14 pb-16 md:pb-24"
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div className="animate-fadeUp">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/images/character.png"
              alt=""
              aria-hidden="true"
              className="w-20 md:w-24 h-auto animate-float"
            />
            <ArrowDoodle className="w-9 h-11 -scale-x-100 rotate-[130deg] -mt-3" />
            <StickyLabel rotate={-4} className="mt-2">Naimat</StickyLabel>
          </div>

          <h1 className="font-heading font-extrabold text-[2.6rem] leading-[1.08] sm:text-5xl md:text-[3.4rem] tracking-tight">
            I <span className="mark-highlight">design</span> top
            <br className="hidden sm:block" /> notch digital
            <br className="hidden sm:block" /> products.
          </h1>
        </div>

        <div className="md:pt-8 animate-fadeUp" style={{ animationDelay: "0.15s" }}>
          <p className="text-base md:text-lg leading-relaxed text-ink/80 dark:text-zinc-300 max-w-md">
            I help startups and businesses transform ideas into impactful
            digital products through product strategy, UI/UX design, and brand
            identity.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 bg-ink text-white font-semibold px-7 py-3.5 rounded-md shadow-btn hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 dark:bg-white dark:text-ink"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
}
