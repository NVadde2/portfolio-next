import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact — Neha Reddy Vadde",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
        Contact
      </p>
      <h1 className="font-display text-3xl font-medium text-ink">
        Let&apos;s build something great together
      </h1>
      <p className="mt-4 max-w-xl text-ink-soft">
        Send a message and I&apos;ll get back to you as soon as I can, or
        reach me directly below.
      </p>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <a
          href={profile.social.email}
          className="text-ink-soft underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
        >
          {profile.email}
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-ink-soft underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
        >
          LinkedIn
        </a>
      </div>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
