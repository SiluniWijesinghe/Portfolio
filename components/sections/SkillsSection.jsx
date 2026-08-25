"use client";

import { SectionLabel } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import TechIcon from "@/components/ui/TechIcon";
import { SKILLS } from "@/data/portfolioData";

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto max-w-4xl text-center">
      <Reveal>
        <SectionLabel>Technical Skills</SectionLabel>
        <h2 className="text-3xl xl:text-4xl font-bold text-white mb-3 leading-tight">
          Skills
        </h2>
        <p className="text-white/35 text-sm mb-14 max-w-lg mx-auto">
          These are some of the languages, frameworks, and tools I&apos;ve used across my
          internship, projects, and research.
        </p>
      </Reveal>

      <div className="space-y-11">
        {Object.entries(SKILLS).map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.06}>
            <p className="text-white/25 text-[11px] font-semibold uppercase tracking-widest mb-5">
              {category}
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-8">
              {items.map((name) => (
                <TechIcon key={name} name={name} size="lg" />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
