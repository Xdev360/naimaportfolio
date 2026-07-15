import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowDoodle } from "@/components/Doodles";
import { StickyLabel, TagChip } from "@/components/StickyNote";
import Reveal from "@/components/Reveal";
import ScreenShowcase from "./ScreenShowcase";
import ProcessCard from "./ProcessCard";

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <article>
      {/* Hero / Overview Header */}
      <section className="max-w-content mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-12 md:pb-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 dark:text-zinc-400 hover:opacity-70 transition-opacity mb-8"
        >
          <span aria-hidden="true">←</span> Back to projects
        </Link>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="animate-fadeUp">
            <TagChip color={project.buttonColor} className="mb-4">
              {project.tag}
            </TagChip>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight">
              {project.title}
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-ink/80 dark:text-zinc-300">
              {project.overview}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-ink/50 dark:text-zinc-500 font-medium">Role</dt>
                <dd className="font-semibold mt-1">{project.role}</dd>
              </div>
              <div>
                <dt className="text-ink/50 dark:text-zinc-500 font-medium">Timeline</dt>
                <dd className="font-semibold mt-1">{project.timeline}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-ink/50 dark:text-zinc-500 font-medium">Tools</dt>
                <dd className="flex flex-wrap gap-2 mt-2">
                  {project.tools.map((tool) => (
                    <TagChip key={tool} color="#9DDCFF" className="text-xs">
                      {tool}
                    </TagChip>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-ink/70 dark:border-zinc-700 overflow-hidden shadow-note animate-fadeUp" style={{ animationDelay: "0.1s" }}>
            <img
              src={project.cover}
              alt={project.alt}
              className="w-full aspect-[4/3] object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <Reveal>
        <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-20 border-t border-ink/15 dark:border-zinc-800">
          <StickyLabel rotate={-3}>The Problem</StickyLabel>
          <ArrowDoodle className="w-8 h-10 mt-3 ml-8" />
          <p className="mt-8 text-xl md:text-2xl font-heading font-semibold leading-snug max-w-3xl">
            {project.problem}
          </p>
        </section>
      </Reveal>

      {/* Design Process */}
      <Reveal>
        <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-20 border-t border-ink/15 dark:border-zinc-800">
          <StickyLabel rotate={-2} color="#FFE68C">
            Design Process
          </StickyLabel>
          <ArrowDoodle className="w-8 h-10 mt-3 ml-12" />
          <p className="mt-5 text-sm md:text-base text-ink/70 dark:text-zinc-400 max-w-lg">
            Sketches, wireframes, and iterations — with the reasoning behind every major decision.
          </p>

          <div className="stagger grid md:grid-cols-3 gap-6 md:gap-8 mt-10">
            {project.process.map((step, i) => (
              <ProcessCard key={step.title} step={step} index={i} />
            ))}
          </div>
        </section>
      </Reveal>

      {/* Solution & Impact */}
      <Reveal>
        <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-20 border-t border-ink/15 dark:border-zinc-800">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <StickyLabel rotate={-3} color="#9DDCFF">
                The Solution
              </StickyLabel>
              <ArrowDoodle className="w-8 h-10 mt-3 ml-10" />
              <p className="mt-8 text-base md:text-lg leading-relaxed text-ink/80 dark:text-zinc-300">
                {project.solution}
              </p>
            </div>

            <div>
              <StickyLabel rotate={2} color="#9BE8B4">
                Impact
              </StickyLabel>
              <div className="stagger grid grid-cols-2 gap-4 mt-8">
                {project.impact.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-ink/30 dark:border-zinc-700 p-4 md:p-5 bg-white dark:bg-zinc-900 shadow-note"
                  >
                    <p className="font-heading font-extrabold text-2xl md:text-3xl">{m.value}</p>
                    <p className="text-sm text-ink/60 dark:text-zinc-400 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm italic text-ink/60 dark:text-zinc-400 leading-relaxed">
                &ldquo;{project.impactNote}&rdquo;
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Annotated UI Showcase */}
      <Reveal>
        <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-24 border-t border-ink/15 dark:border-zinc-800">
          <StickyLabel rotate={-3}>Key Screens</StickyLabel>
          <ArrowDoodle className="w-8 h-10 mt-3 ml-10" />
          <p className="mt-5 text-sm md:text-base text-ink/70 dark:text-zinc-400 max-w-lg mb-12">
            Three defining screens — each annotated to show the design thinking behind every decision.
          </p>

          <ScreenShowcase screens={project.screens} />
        </section>
      </Reveal>

      {/* CTA */}
      <section className="max-w-content mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <div className="rounded-xl border border-ink/40 dark:border-zinc-700 p-8 md:p-12 text-center bg-white dark:bg-zinc-900 shadow-note">
          <p className="font-heading font-semibold text-xl md:text-2xl">
            Like what you see?{" "}
            <span className="mark-highlight">Let&apos;s talk.</span>
          </p>
          <Link
            href="/#contact"
            className="inline-block mt-6 bg-ink text-white font-semibold px-7 py-3.5 rounded-md shadow-btn hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 dark:bg-white dark:text-ink"
          >
            Hire me
          </Link>
        </div>
      </section>
    </article>
  );
}
