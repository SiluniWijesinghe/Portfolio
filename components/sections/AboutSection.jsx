"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { SectionLabel, SectionHeading } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import { ABOUT_STATS } from "@/data/portfolioData";

// Small count-up used for the stats row — purely a bit of motion so the
// page doesn't read as a static, printed page.
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

const AboutSection = () => (
  <section id="about" className="py-28 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto">
      <Reveal>
        <SectionLabel>About Me</SectionLabel>
      </Reveal>

      <div className="grid xl:grid-cols-[1fr_1.6fr] gap-16 xl:gap-24 items-start">

        {/* Photo column */}
        <Reveal delay={0.05}>
          <div className="flex flex-col items-center xl:items-start gap-6">
            <div className="relative w-64 xl:w-full max-w-xs">
              {/* Decorative border offset */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-emerald-500/20" />
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/assets/photo.png"
                  width={400}
                  height={543}
                  quality={100}
                  alt="Siluni Wijesinghe"
                  className="object-cover w-full"
                />
              </div>
            </div>

            {/* Location pill */}
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]"
              />
              Colombo, Sri Lanka · Available for work
            </div>
          </div>
        </Reveal>

        {/* Content column */}
        <div>
          <Reveal delay={0.1}>
            <SectionHeading>A bit about myself</SectionHeading>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-5 text-white/55 text-sm xl:text-[15px] leading-relaxed mb-10">
              <p>
                I'm a final-year Information Technology student at the University of Moratuwa,
                graduating in December 2026. My academic record — CGPA 3.75 and Dean's List across
                multiple semesters — reflects a genuine commitment to understanding things
                properly, not just getting them done.
              </p>
              <p>
                During my internship at Agrithmics I worked on large-scale ERP systems serving
                international clients across Bangladesh and Sri Lanka. That experience taught me
                how to navigate a real codebase, take ownership of features end-to-end, debug
                production issues under pressure, and collaborate with a team using Agile workflows.
              </p>
              <p>
                Outside of formal work I enjoy building things that solve real problems — from a
                machine-learning pipeline for Ayurvedic plant analysis to an energy demand
                forecasting tool for Sri Lanka's power grid. I'm drawn to the intersection of
                software engineering and data.
              </p>
              <p>
                I'm now looking for a full-time entry-level software engineering role where I can
                keep growing alongside a strong team.
              </p>
            </div>
          </Reveal>

          {/* Animated stat row */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {ABOUT_STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-4 text-center
                             hover:border-emerald-500/25 transition-colors duration-300"
                >
                  <p className="text-emerald-400 text-xl xl:text-2xl font-bold tabular-nums">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-white/35 text-[11px] mt-1 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  </section>
);

export default AboutSection;
