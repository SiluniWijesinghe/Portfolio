"use client";

import { useState } from "react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { SectionHead } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import { EDUCATION } from "@/data/portfolioData";

// Shows the institute crest if the file exists at the given path; otherwise
// falls back to a graduation-cap icon rather than a broken image.
const InstituteLogo = ({ logo, school }) => {
  const [failed, setFailed] = useState(false);

  if (!logo || failed) {
    return (
      <div className="w-11 h-11 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0">
        <HiOutlineAcademicCap size={20} className="text-emerald-400" />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={`${school} logo`}
      onError={() => setFailed(true)}
      className="w-11 h-11 rounded-full object-cover border border-white/10 bg-white/5 shrink-0"
    />
  );
};

const EducationSection = () => (
  <section id="education" className="px-6 py-28 md:py-36 xl:px-0">
    <div className="container mx-auto">
      <Reveal>
        <SectionHead title="Education">My academic journey so far.</SectionHead>
      </Reveal>

      <div>
        {EDUCATION.map((ed, i) => (
          <Reveal key={ed.degree} delay={i * 0.08}>
            <div className="grid gap-4 border-t border-white/15 py-8 md:grid-cols-[180px_1fr] xl:grid-cols-[320px_1fr_auto] xl:gap-12">
              <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 md:pt-1.5">
                {ed.period}
              </p>

              <div className="flex items-start gap-4">
                <InstituteLogo logo={ed.logo} school={ed.school} />
                <div>
                  <h3 className="text-xl font-medium leading-snug tracking-tight text-white">{ed.degree}</h3>
                  <p className="mt-1 text-sm text-white/45">{ed.school}</p>
                  {ed.extra?.map((line) => (
                    <p key={line} className="mt-2 text-xs leading-relaxed text-white/30">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-start gap-2 md:col-start-2 xl:col-start-auto xl:justify-end">
                <span className="text-sm text-white/60">{ed.detail}</span>
                {ed.medium && (
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px] text-white/40">
                    {ed.medium}
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
