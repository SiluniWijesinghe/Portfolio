"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiCheck, FiCopy, FiPhone } from "react-icons/fi";
import Reveal from "@/components/ui/Reveal";

import { EMAIL, gmailCompose, mailto } from "@/lib/contact";

const field =
  "w-full border-b border-white/20 bg-transparent py-2.5 text-sm text-white placeholder:text-white/25 " +
  "outline-none transition-colors focus:border-emerald-400";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  const subject = `Hello from ${form.name || "your portfolio"}`;
  const body = `${form.message}\n\n${form.name}${form.email ? ` (${form.email})` : ""}`.trim();
  const gmailHref = gmailCompose({ subject, body });
  const mailtoHref = mailto({ subject, body });

  return (
    <section id="contact" className="px-6 py-28 md:py-36 xl:px-0">
      <div className="container mx-auto">
        <div className="grid gap-16 xl:grid-cols-2 xl:gap-24">
          <Reveal>
            <h2 className="text-[clamp(3rem,9vw,7rem)] font-medium leading-[0.92] tracking-[-0.035em] text-white">
              Let&apos;s talk<span className="text-emerald-400">.</span>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/50 xl:text-base">
              I&apos;m currently looking for entry-level software engineering roles. If you&apos;d like to
              talk about an opportunity or just want to connect, my inbox is open.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={gmailCompose()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 break-all text-sm font-medium text-white transition-colors hover:text-emerald-400"
              >
                {EMAIL} <FiArrowUpRight size={14} />
              </a>
              <button
                onClick={copy}
                aria-label="Copy email address"
                className="grid h-8 w-8 place-items-center rounded-lg border border-white/15 text-white/60 transition-colors hover:border-emerald-400/50 hover:text-emerald-400"
              >
                {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
              </button>
            </div>

            <a
              href="tel:+94779943832"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-emerald-400"
            >
              <FiPhone size={14} /> +94 77 994 3832
            </a>

            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { label: "LinkedIn", icon: <FaLinkedin size={14} />, href: "https://www.linkedin.com/in/siluni-wijesinghe-81009728a/" },
                { label: "GitHub", icon: <FaGithub size={14} />, href: "https://github.com/SiluniWijesinghe" },
              ].map(({ label, icon, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-emerald-400"
                >
                  {icon} {label}
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">Your name</span>
                  <input className={field} placeholder="Jane Doe" value={form.name} onChange={set("name")} />
                </label>
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">Email address</span>
                  <input
                    type="email"
                    className={field}
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={set("email")}
                  />
                </label>
              </div>
              <label className="block">
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                  What do you have in mind?
                </span>
                <textarea
                  rows={5}
                  className={`${field} resize-none`}
                  placeholder="A little about your opportunity or project..."
                  value={form.message}
                  onChange={set("message")}
                />
              </label>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={gmailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#06100b] transition-colors hover:bg-emerald-300"
                >
                  Create email draft <FiArrowUpRight size={15} />
                </a>
                <a
                  href={mailtoHref}
                  className="text-xs text-white/40 underline-offset-4 transition-colors hover:text-emerald-400 hover:underline"
                >
                  or open in my mail app
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
