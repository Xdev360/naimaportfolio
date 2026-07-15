import type { ShowcaseScreen } from "@/data/projects";
import { TagChip } from "@/components/StickyNote";

function MobileFrame({ screen, compact = false }: { screen: ShowcaseScreen; compact?: boolean }) {
  return (
    <div className="flex justify-center">
      <div className={`relative w-full ${compact ? "max-w-[220px]" : "max-w-[300px]"}`}>
        <div className="rounded-[2rem] border-[3px] border-ink/80 dark:border-zinc-500 bg-ink/5 dark:bg-zinc-800 p-2 shadow-note">
          <div className="rounded-[1.5rem] overflow-hidden bg-white dark:bg-zinc-900">
            <img
              src={screen.image}
              alt={screen.alt}
              loading="lazy"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-ink/20 dark:bg-zinc-600" aria-hidden="true" />
      </div>
    </div>
  );
}

function DesktopFrame({ screen }: { screen: ShowcaseScreen }) {
  return (
    <div className="rounded-xl border border-ink/50 dark:border-zinc-600 overflow-hidden shadow-note bg-[#f4f4f4] dark:bg-zinc-800">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/80 dark:bg-zinc-900/80 border-b border-ink/10 dark:border-zinc-700">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 h-2.5 flex-1 max-w-[40%] rounded-full bg-ink/8 dark:bg-zinc-700" />
      </div>
      <img
        src={screen.image}
        alt={screen.alt}
        loading="lazy"
        className="w-full h-auto object-cover object-top"
      />
    </div>
  );
}

function MobileScreenCard({ screen, index, total }: { screen: ShowcaseScreen; index: number; total: number }) {
  const tilts = [-3, 0, 3];
  return (
    <div className="flex flex-col items-center gap-4">
      <div style={{ transform: `rotate(${tilts[index % 3]}deg)` }}>
        <MobileFrame screen={screen} compact />
      </div>
      <TagChip color={screen.tagColor}>{screen.title}</TagChip>
      <div
        className="on-pastel w-full rounded-xl px-4 py-3 sticky-note text-ink"
        style={{
          backgroundColor: screen.tagColor,
          transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
        }}
      >
        <span className="font-hand text-base block mb-1.5">Why this screen</span>
        <p className="text-xs md:text-sm leading-relaxed">{screen.annotation}</p>
      </div>
      <span className="text-xs text-ink/40 dark:text-zinc-500 font-medium uppercase tracking-wider">
        Screen {index + 1} of {total}
      </span>
    </div>
  );
}

function MobileRowShowcase({ screens }: { screens: ShowcaseScreen[] }) {
  return (
    <>
      {/* Desktop: all screens in one row */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {screens.map((screen, i) => (
          <MobileScreenCard key={screen.title} screen={screen} index={i} total={screens.length} />
        ))}
      </div>

      {/* Mobile: stacked */}
      <div className="md:hidden space-y-16">
        {screens.map((screen, i) => (
          <MobileScreenCard key={screen.title} screen={screen} index={i} total={screens.length} />
        ))}
      </div>
    </>
  );
}

export default function ScreenShowcase({ screens }: { screens: ShowcaseScreen[] }) {
  const allMobile = screens.every((s) => s.layout === "mobile");

  if (allMobile) {
    return <MobileRowShowcase screens={screens} />;
  }

  return (
    <div className="space-y-20 md:space-y-28">
      {screens.map((screen, i) => {
        const reversed = i % 2 === 1;

        return (
          <div
            key={screen.title}
            className={`grid gap-8 md:gap-12 items-center ${
              reversed ? "md:grid-cols-[1fr_1.4fr]" : "md:grid-cols-[1.4fr_1fr]"
            }`}
          >
            <div className={reversed ? "md:order-2" : ""}>
              <DesktopFrame screen={screen} />
            </div>

            <div className={`flex flex-col gap-4 ${reversed ? "md:order-1 md:items-end md:text-right" : ""}`}>
              <TagChip
                color={screen.tagColor}
                className={reversed ? "self-start md:self-end" : "self-start"}
              >
                {screen.title}
              </TagChip>

              <div
                className={`on-pastel rounded-xl px-5 py-4 sticky-note text-ink max-w-md ${
                  reversed ? "md:ml-auto" : ""
                }`}
                style={{
                  backgroundColor: screen.tagColor,
                  transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
                }}
              >
                <span className="font-hand text-lg block mb-2">Why this screen</span>
                <p className="text-sm md:text-base leading-relaxed">{screen.annotation}</p>
              </div>

              <span className="text-xs text-ink/40 dark:text-zinc-500 font-medium uppercase tracking-wider">
                Screen {i + 1} of {screens.length}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
