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
  <section id="about" className="py-28 px-6 xl:px-0 border-t border-white/5 text-justify">
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
            <div className="flex items-center gap-2 text-white/40 text-xs text-center xl:text-left">
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]"
              />
              <span>Colombo, Sri Lanka · Available for work</span>
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
                An Information Technology graduate of the University of Moratuwa, completing a
                First Class degree in December 2026 with Dean's List recognition across multiple
                semesters. That record reflects a commitment to understanding things
                properly, not just getting them done.
              </p>
              <p>
                During my six-month internship at Agrithmics, I worked on enterprise ERP systems serving
                clients across multiple industries and markets. I developed and maintained features across frontend,
                backend, and database layers, investigated production issues, and learned what it takes to work within
                an existing codebase and deliver reliable software as part of a team.
              </p>
              <p>
                Beyond my industry experience, I enjoy building projects that challenge me to learn something new.
                My work spans full-stack applications, computer vision for Ayurvedic plant analysis,
                and AI-powered developer tools. I'm particularly interested in the intersection of software engineering,
                AI, and data especially how these technologies can be turned into practical, useful applications.
              </p>
              <p>
                I learn best by building. Whether I'm exploring cloud infrastructure with AWS or experimenting with LLM-powered
                features, I prefer understanding how things work and putting that knowledge into practice rather than simply collecting
                technologies or certificates.
              </p>
              <p>
                I'm looking forward to starting my full-time software engineering career, contributing to meaningful products,
                and growing alongside engineers who care about writing good software and solving problems thoughtfully.
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
