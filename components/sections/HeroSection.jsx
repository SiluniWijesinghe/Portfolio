"use client";

import { FiArrowDown } from "react-icons/fi";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex flex-col items-start justify-center
               px-6 xl:px-0 pt-16 overflow-hidden"
  >
    {/* Subtle background glow */}
    <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full
                    bg-emerald-500/5 blur-[100px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full
                    bg-teal-500/5 blur-[80px] pointer-events-none" />

    <div className="container mx-auto">
      {/* Eyebrow */}
      <p className="text-xs uppercase tracking-[0.35em] text-emerald-400/80 mb-8 font-medium">
        Full Stack Developer · Open to Work
      </p>

      {/* Large name — split across two lines */}
      <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-extrabold leading-[0.95] tracking-tight text-white mb-8">
        Siluni
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
          Wijesinghe
        </span>
      </h1>

      {/* Tagline */}
      <p className="text-white/50 text-base xl:text-lg max-w-xl leading-relaxed mb-12">
        Final-year IT undergraduate at the University of Moratuwa (CGPA 3.78/4.00) with 6 months of hands-on industry
        experience — building full-stack features across ERP platforms, writing production-ready code, and working within Agile teams.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-4 mb-20">
        <a
          href="/Siluni_Wijesinghe_Resume.pdf"
          download
          className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400
                     text-[#080c0a] text-sm font-bold tracking-wide transition-colors duration-200"
        >
          Download Resume
        </a>
        <button
          onClick={() => scrollTo("about")}
          className="px-6 py-3 rounded-lg border border-white/15 text-white/60
                     text-sm font-medium hover:border-white/30 hover:text-white/90
                     transition-all duration-200"
        >
          Learn more
        </button>
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
      <span className="text-[clamp(4rem,12vw,9rem)] font-black text-white/[0.03] leading-none select-none">
        2026
      </span>
    </div>
  </section>
);

export default HeroSection;
