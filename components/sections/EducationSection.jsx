"use client";

import { useState } from "react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { SectionLabel, SectionHeading } from "@/components/ui/primitives";
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
  <section id="education" className="py-28 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto max-w-3xl">
      <Reveal>
        <SectionLabel>Education</SectionLabel>
        <SectionHeading>My academic journey</SectionHeading>
      </Reveal>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[21px] top-2 bottom-2 w-px bg-white/8" />

        <div className="space-y-9">
          {EDUCATION.map((ed, i) => (
            <Reveal key={ed.degree} delay={i * 0.08}>
              <div className="relative flex gap-5 items-start">
                <div className="relative z-10 bg-[#080c0a] rounded-full">
                  <InstituteLogo logo={ed.logo} school={ed.school} />
                </div>

                <div className="flex-1 pt-1.5">
                  <p className="text-emerald-400/70 text-xs font-medium mb-1">{ed.period}</p>
                  <h3 className="text-white text-base font-semibold leading-snug">{ed.degree}</h3>
                  <p className="text-white/35 text-sm mt-0.5">{ed.school}</p>

                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <p className="text-white/45 text-sm">{ed.detail}</p>
                    {ed.medium && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium
                                       bg-white/[0.04] text-white/40 border border-white/8">
                        {ed.medium}
                      </span>
                    )}
                  </div>

                  {ed.extra?.map((line) => (
                    <p key={line} className="text-white/30 text-xs mt-1.5 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
