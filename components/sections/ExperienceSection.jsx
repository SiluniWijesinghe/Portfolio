import { SectionLabel, SectionHeading, Tag } from "@/components/ui/primitives";
import { EXPERIENCE } from "@/data/portfolioData";

const ExperienceSection = () => (
  <section id="experience" className="py-28 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto max-w-3xl">
      <SectionLabel>Experience</SectionLabel>
      <SectionHeading>Where I've worked</SectionHeading>

      <div className="space-y-12">
        {EXPERIENCE.map((job) => (
          <div key={job.role} className="relative pl-7 border-l border-emerald-500/20">

            {/* Timeline dot */}
            <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full
                             bg-emerald-500 ring-4 ring-[#080c0a]" />

            {/* Role + period */}
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-1 mb-4">
              <div>
                <h3 className="text-white font-bold text-base">{job.role}</h3>
                <p className="text-emerald-400/75 text-sm mt-0.5">{job.company}</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/8
                               bg-white/[0.03] text-white/30 text-xs shrink-0">
                {job.period}
              </span>
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {job.stack.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>

            {/* Bullet points */}
            <ul className="space-y-3">
              {job.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-white/50 text-sm leading-relaxed">
                  <span className="text-emerald-500/70 mt-1.5 shrink-0 text-[10px]">◆</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
