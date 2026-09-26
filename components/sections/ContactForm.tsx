"use client";

import { FormEvent, useState } from "react";
import { contactReasons } from "@/lib/content";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      // TODO: create app/api/contact/route.ts and send via Resend,
      // matching the rest of the PENOVA stack. This call will 404 until
      // that route exists.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="border border-canopy/20 bg-canopy-50 p-6 text-ink/80">
        Thanks — your message has been sent. PENOVA will get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-ink/70">
          Name
          <input
            name="name"
            required
            className="mt-1 w-full border border-canopy/25 bg-white px-3 py-2 text-ink outline-none focus-visible:border-canopy"
          />
        </label>
        <label className="block text-sm text-ink/70">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full border border-canopy/25 bg-white px-3 py-2 text-ink outline-none focus-visible:border-canopy"
          />
        </label>
      </div>

      <label className="block text-sm text-ink/70">
        Phone (optional)
        <input
          name="phone"
          className="mt-1 w-full border border-canopy/25 bg-white px-3 py-2 text-ink outline-none focus-visible:border-canopy"
        />
      </label>

      <label className="block text-sm text-ink/70">
        I&apos;m contacting PENOVA about
        <select
          name="reason"
          required
          defaultValue=""
          className="mt-1 w-full border border-canopy/25 bg-white px-3 py-2 text-ink outline-none focus-visible:border-canopy"
        >
          <option value="" disabled>
            Select a reason
          </option>
          {contactReasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm text-ink/70">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full border border-canopy/25 bg-white px-3 py-2 text-ink outline-none focus-visible:border-canopy"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-5 py-3 text-sm font-medium text-canopy-800 transition-colors hover:bg-gold-300 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-clay">
          Something went wrong sending your message. Please try again.
        </p>
      )}
    </form>
  );
}
