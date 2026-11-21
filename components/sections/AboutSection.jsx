"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "@/components/ui/Reveal";
import { ABOUT_STATS } from "@/data/portfolioData";

// Small count-up used for the stats bar.
const CountUp = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState("0");
  const numeric = parseFloat(value);
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = numeric * progress;
      setDisplay(isDecimal ? current.toFixed(2) : Math.round(current).toString());
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, numeric, isDecimal]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

// ---- The paragraph ---------------------------------------------------------
// **double stars** = lightly emphasised words (brighter, semibold, soft highlighter)
const STORY =
  "I’m an Information Technology **graduate** from the University of Moratuwa (**First Class**) with six months of **industry experience** building and maintaining enterprise software at Agrithmics. My experience spans **full-stack development**, **backend engineering**, and **database optimisation**, complemented by projects in **AI**, **computer vision**, and **intelligent developer tools**. I enjoy turning complex problems into practical solutions, continuously exploring emerging technologies, and building software that makes a meaningful difference.";

// Same size as the surrounding text: just brighter, bolder, with a soft
// highlighter bar that sweeps in once it scrolls into view.
const Hl = ({ children, delay }) => (
  <motion.span
    initial={{ backgroundSize: "0% 32%" }}
    whileInView={{ backgroundSize: "100% 32%" }}
    viewport={{ once: true, amount: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className="bg-gradient-to-r from-emerald-400/25 to-emerald-400/25 bg-left-bottom bg-no-repeat font-semibold text-white"
  >
    {children}
  </motion.span>
);

const Story = () => {
  let n = 0;
  const parts = STORY.split(/(\*\*[^*]+\*\*)/).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") ? (
          <Hl key={i} delay={0.15 + n++ * 0.2}>
            {part.slice(2, -2)}
          </Hl>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

const AboutSection = () => (
  <section id="about" className="px-6 py-28 md:py-36 xl:px-0">
    <div className="container mx-auto">
      {/* Words on the left, photo in the middle, words on the right */}
      <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:gap-16">
        {/* Left */}
        <div className="text-center xl:text-left">
          <Reveal>
            <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.035em] text-white">
              Hi, I&apos;m
              <br />
              Siluni<span className="text-emerald-400">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-base font-medium leading-snug text-white/80 xl:text-lg">
              Software Engineer
              <br />
              &amp; Full-Stack Developer.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/40 xl:justify-start">
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]"
              />
              Colombo, Sri Lanka · Available for work
            </div>
          </Reveal>
        </div>

        {/* Middle: the shared photo lands here, same size as in the hero */}
        <div className="flex justify-center">
          <div
            id="photo-slot-about"
            className="aspect-[800/1085] w-[clamp(150px,min(21vw,27svh),300px)]"
          />
        </div>

        {/* Right */}
        <div className="text-center xl:text-left">
          <Reveal delay={0.05}>
            <p className="text-lg font-medium leading-snug text-white/85 xl:text-xl">
              I build practical software, explore AI-powered solutions, and enjoy understanding how
              things work under the hood.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 xl:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-[#06100b] transition-colors hover:bg-emerald-300"
              >
                Explore projects <FiArrowUpRight size={15} />
              </a>
              <a
                href="#contact"
                className="font-mono text-xs uppercase tracking-widest text-emerald-400 transition-colors hover:text-emerald-300"
              >
                Say hello →
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* The story: one natural paragraph, key words bigger */}
      <Reveal>
        <p className="mx-auto mt-16 max-w-3xl text-center text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.8] text-white/60 xl:mt-20">
          <Story />
        </p>
      </Reveal>

      {/* Stats bar */}
      <Reveal delay={0.1}>
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {ABOUT_STATS.map((st) => (
            <div key={st.label} className="bg-[#0a100d] px-5 py-6 text-center">
              <p className="text-2xl font-medium tabular-nums text-emerald-400 xl:text-3xl">
                <CountUp value={st.value} suffix={st.suffix} />
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/35">
                {st.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default AboutSection;