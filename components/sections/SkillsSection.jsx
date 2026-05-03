import { SectionLabel, SectionHeading, Tag } from "@/components/ui/primitives";
import { SKILLS } from "@/data/portfolioData";

const SkillsSection = () => (
  <section id="Skills" className="py-24 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto max-w-3xl">
      <SectionLabel>Technical Skills</SectionLabel>
      <SectionHeading>What I work with</SectionHeading>

      <div className="space-y-8">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category}>
            <p className="text-white/35 text-xs uppercase tracking-widest mb-3">
              {category}
            </p>
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
