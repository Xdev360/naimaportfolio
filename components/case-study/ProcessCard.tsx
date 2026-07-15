import type { ProcessStep } from "@/data/projects";

function WireframePlaceholder({ accent }: { accent: string }) {
  return (
    <div
      className="rounded-lg border-2 border-dashed border-ink/20 dark:border-zinc-600 p-4 h-40 md:h-48 flex flex-col gap-2"
      style={{ backgroundColor: `${accent}33` }}
    >
      <div className="flex gap-2">
        <span className="h-2 w-16 rounded-full bg-ink/15" />
        <span className="h-2 w-8 rounded-full bg-ink/10" />
      </div>
      <div className="flex-1 grid grid-cols-3 gap-2">
        <span className="rounded bg-ink/8 col-span-2" />
        <span className="rounded bg-ink/12" />
        <span className="rounded bg-ink/10 col-span-3" />
      </div>
      <div className="flex gap-2 justify-end">
        <span className="h-6 w-14 rounded-md" style={{ backgroundColor: accent }} />
      </div>
    </div>
  );
}

function SketchPlaceholder({ accent }: { accent: string }) {
  return (
    <div
      className="rounded-lg border border-ink/15 dark:border-zinc-600 p-4 h-40 md:h-48 relative overflow-hidden"
      style={{ backgroundColor: `${accent}22` }}
    >
      <svg viewBox="0 0 200 120" className="w-full h-full opacity-40" aria-hidden="true">
        <path
          d="M10 100 C40 20 80 80 120 30 S180 90 190 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="30" y="40" width="60" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="150" cy="70" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function IterationPlaceholder({ accent }: { accent: string }) {
  return (
    <div className="grid grid-cols-2 gap-2 h-40 md:h-48">
      <div
        className="rounded-lg border border-ink/15 dark:border-zinc-600 p-3 flex flex-col justify-between opacity-50"
        style={{ backgroundColor: `${accent}18` }}
      >
        <span className="text-[10px] font-medium text-ink/50 dark:text-zinc-500">v1</span>
        <span className="h-8 w-full rounded bg-ink/10" />
      </div>
      <div
        className="rounded-lg border-2 border-ink/30 dark:border-zinc-500 p-3 flex flex-col justify-between"
        style={{ backgroundColor: accent }}
      >
        <span className="text-[10px] font-bold text-ink">v2 ✓</span>
        <span className="h-8 w-full rounded bg-ink/15" />
      </div>
    </div>
  );
}

export default function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  const visuals = {
    wireframe: <WireframePlaceholder accent={step.accent} />,
    sketch: <SketchPlaceholder accent={step.accent} />,
    iteration: <IterationPlaceholder accent={step.accent} />,
  };

  return (
    <div
      className="rounded-xl border border-ink/40 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-5 md:p-6 shadow-note"
      style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
    >
      <div className="flex items-start gap-3 mb-4">
        <span
          className="on-pastel shrink-0 w-8 h-8 rounded-md flex items-center justify-center font-heading font-bold text-sm sticky-note"
          style={{ backgroundColor: step.accent }}
        >
          {index + 1}
        </span>
        <div>
          <h3 className="font-heading font-bold text-lg">{step.title}</h3>
          <p className="text-sm text-ink/70 dark:text-zinc-400 mt-1 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>

      {visuals[step.variant]}

      <div
        className="on-pastel mt-4 rounded-lg px-4 py-3 sticky-note text-ink text-sm leading-relaxed"
        style={{ backgroundColor: step.accent }}
      >
        <span className="font-hand text-base block mb-1">Why this choice</span>
        {step.rationale}
      </div>
    </div>
  );
}
