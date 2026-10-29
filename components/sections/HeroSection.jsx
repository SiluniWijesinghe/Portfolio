"use client";

import { useEffect, useState } from "react";
import { FiArrowDown } from "react-icons/fi";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

// Rotating role line: types a role, pauses, deletes it, then moves to the next.
const ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "Problem Solver",
  "AI Engineering Enthusiast",
];

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1600;

const RotatingRole = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(ROLES[0]); // full text first = good for SSR/SEO
  const [deleting, setDeleting] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const full = ROLES[index];
    let delay = deleting ? DELETE_MS : TYPE_MS;

    // Pause on the fully-typed role before it starts deleting.
    if (deleting && text === full) delay = HOLD_MS;

    const t = setTimeout(() => {
      if (deleting) {
        if (text.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % ROLES.length);
        } else {
          setText(full.slice(0, text.length - 1));
        }
      } else if (text.length < full.length) {
        setText(full.slice(0, text.length + 1));
      } else {
        setDeleting(true);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, reduceMotion]);

  // Reduced motion: show a calm static line instead of animating.
  const shown = reduceMotion ? ROLES[0] : text;
  const cut = shown.lastIndexOf(" ");
  const head = cut === -1 ? "" : shown.slice(0, cut + 1);
  const tail = cut === -1 ? shown : shown.slice(cut + 1);

  return (
    <span aria-label={ROLES.join(", ")}>
      <span aria-hidden="true">
        {head}
        <span className="text-emerald-400">{tail}</span>
        {!reduceMotion && (
          <span className="ml-0.5 inline-block w-[2px] h-[1em] -mb-[0.12em] bg-emerald-400 animate-pulse" />
        )}
      </span>
    </span>
  );
};

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex flex-col items-start justify-center
               px-6 xl:px-0 pt-16 overflow-hidden text-justify"
  >
    {/* Subtle background glow */}
    <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full
                    bg-emerald-500/5 blur-[100px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full
                    bg-teal-500/5 blur-[80px] pointer-events-none" />

    <div className="container mx-auto">
      {/* Eyebrow */}
      <p className="text-xs uppercase tracking-[0.35em] text-emerald-400/80 mb-8 font-medium">
        Open to Work
      </p>

      {/* Large name — split across two lines */}
      <h1 className="text-[clamp(2.75rem,14vw,8rem)] break-words font-extrabold leading-[0.95] tracking-tight text-white mb-6">
        Siluni
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
          Wijesinghe
        </span>
      </h1>

      {/* Role — rotates through what I am / what I'm learning */}
      <p className="text-2xl xl:text-3xl font-bold text-white/90 mb-6 min-h-[2.25rem] xl:min-h-[2.5rem]">
        <RotatingRole />
      </p>

      {/* Tagline — short, no repeat of the About section */}
      <p className="text-white/45 text-base xl:text-lg max-w-lg leading-relaxed mb-10">
        I build practical software, explore AI-powered solutions, and enjoy understanding how things work under the hood.
      </p>

      {/* Currently learning — honest, not a certification claim */}
      {/* <div className="flex flex-wrap items-center gap-2 mb-12 -mt-6">
        <span className="text-[11px] uppercase tracking-widest text-white/30 mr-1">
          Currently learning
        </span>
        {["AWS", "AI Engineering"].map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5
                       text-emerald-300 text-xs font-medium"
          >
            {t}
          </span>
        ))}
      </div> */}

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-4 mb-20">
        <a
          href="/assets/Siluni_Wijesinghe_Resume.pdf"
          download
          className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400
                     text-[#080c0a] text-sm font-bold tracking-wide transition-colors duration-200"
        >
          Download Resume
        </a>
        {/* <button
          onClick={() => scrollTo("about")}
          className="px-6 py-3 rounded-lg border border-white/15 text-white/60
                     text-sm font-medium hover:border-white/30 hover:text-white/90
                     transition-all duration-200"
        >
          Learn more
        </button> */}
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="flex items-center gap-2 text-white/25 hover:text-emerald-400
                   text-xs uppercase tracking-widest transition-colors duration-200 group"
      >
        <FiArrowDown className="animate-bounce group-hover:text-emerald-400" size={14} />
        Scroll
      </button>
    </div>

    {/* Year stamp — bottom right*/}
    <div className="absolute bottom-8 right-6 xl:right-0 xl:mr-0 container mx-auto
                    flex justify-end pointer-events-none">
      <span className="text-[clamp(3.5rem,12vw,9rem)] font-black text-white/[0.03] leading-none select-none">
        2026
      </span>
    </div>
  </section>
);

export default HeroSection;
