import Image from "next/image";
import { SectionLabel, SectionHeading } from "@/components/ui/primitives";
import { EDUCATION } from "@/data/portfolioData";

const AboutSection = () => (
  <section id="about" className="py-28 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto">
      <SectionLabel>About Me</SectionLabel>

      <div className="grid xl:grid-cols-[1fr_1.6fr] gap-16 xl:gap-24 items-start">

        {/* Photo column */}
        <div className="flex flex-col items-center xl:items-start gap-6">
          <div className="relative w-64 xl:w-full max-w-xs">
            {/* Decorative border offset */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-emerald-500/20" />
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="/assets/photo.png"
                width={400}
                height={500}
                quality={100}
                alt="Siluni Wijesinghe"
                className="object-cover w-full"
              />
            </div>
          </div>

          {/* Location pill */}
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            Colombo, Sri Lanka · Available for work
          </div>
        </div>

        {/* Content column */}
        <div>
          <SectionHeading>A bit about myself</SectionHeading>

          <div className="space-y-5 text-white/55 text-sm xl:text-[15px] leading-relaxed mb-12">
            <p>
              I'm a final-year Information Technology student at the University of Moratuwa,
              graduating in July 2026. My academic record — CGPA 3.78 and Dean's List for three
              consecutive semesters — reflects a genuine commitment to understanding things
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

          {/* Education timeline */}
          <p className="text-xs uppercase tracking-[0.25em] text-white/30 mb-6">Education</p>
          <div className="space-y-4">
            {EDUCATION.map((ed) => (
              <div
                key={ed.degree}
                className="flex gap-5 items-start group"
              >
                {/* Dot + line */}
                <div className="flex flex-col items-center pt-1 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500/60 group-hover:bg-emerald-400 transition-colors" />
                  <span className="w-px flex-1 bg-white/8 mt-2 min-h-[2rem]" />
                </div>

                <div className="pb-4">
                  <p className="text-white text-sm font-semibold leading-snug">{ed.degree}</p>
                  <p className="text-emerald-400/70 text-xs mt-0.5">{ed.school} · {ed.period}</p>
                  <p className="text-white/35 text-xs mt-1">{ed.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutSection;
