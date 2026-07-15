"use client";

import { FormEvent, useState } from "react";
import { ArrowDoodle } from "./Doodles";
import { StickyLabel } from "./StickyNote";

const fields = [
  { name: "name", label: "Name", color: "#FFC9F0", type: "text", placeholder: "Your full name" },
  { name: "email", label: "Your email", color: "#FFE68C", type: "email", placeholder: "you@email.com" },
  { name: "project", label: "About Project", color: "#9DDCFF", type: "text", placeholder: "I want to discuss with you about ......." },
] as const;

type FieldName = (typeof fields)[number]["name"];

type FormState = Record<FieldName, string>;

const initialForm: FormState = {
  name: "",
  email: "",
  project: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        sent?: boolean;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      if (data.sent) {
        setStatus("success");
        setForm(initialForm);
        return;
      }

      throw new Error("Could not send your message. Please try again.");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-24 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <StickyLabel rotate={-3}>Contact here</StickyLabel>
          <ArrowDoodle className="w-8 h-10 mt-3 ml-14" />
          <p className="mt-6 text-xl md:text-2xl font-heading font-semibold leading-snug">
            Have a project idea?
            <br />
            just say me <span className="mark-highlight">Hi</span>.
          </p>
        </div>

        <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <label key={field.name} className="block">
              <span
                className="inline-block px-2.5 py-0.5 rounded font-hand text-lg md:text-xl mb-2 -rotate-1 sticky-note on-pastel text-ink"
                style={{ backgroundColor: field.color }}
              >
                {field.label}
              </span>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={(event) => setForm((current) => ({ ...current, [field.name]: event.target.value }))}
                placeholder={field.placeholder}
                required
                disabled={status === "sending"}
                className="w-full bg-transparent border-b-2 border-ink/70 dark:border-zinc-500 focus:border-ink dark:focus:border-zinc-200 outline-none pb-2 text-sm md:text-base placeholder:text-ink/30 dark:placeholder:text-zinc-500 transition-colors disabled:opacity-60"
              />
            </label>
          ))}

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="self-start mt-2 bg-ink text-white font-semibold px-7 py-3.5 rounded-md shadow-btn hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0 dark:bg-white dark:text-ink"
            >
              {status === "sending" ? "Sending..." : "Send Here"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-700 dark:text-green-400">
                Thanks! Your message was sent successfully. I&apos;ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
