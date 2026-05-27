import { SectionLabel, SectionHeading, Tag } from "@/components/ui/primitives";
import { SKILLS } from "@/data/portfolioData";

const SkillsSection = () => (
  <section id="skills" className="py-28 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto max-w-3xl">
      <SectionLabel>Technical Skills</SectionLabel>
      <SectionHeading>What I work with</SectionHeading>

      <div className="space-y-10">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className="flex flex-col xl:flex-row xl:items-start gap-4 xl:gap-10">
            {/* Category label — fixed width on desktop so tags align */}
            <p className="text-white/30 text-xs uppercase tracking-widest xl:w-28 shrink-0 pt-0.5">
              {category}
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
