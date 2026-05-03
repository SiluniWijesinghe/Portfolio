import { SectionLabel, SectionHeading, Tag } from "@/components/ui/primitives";
import { EXPERIENCE } from "@/data/portfolioData";

const ExperienceSection = () => (
  <section id="Experience" className="py-24 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto max-w-3xl">
      <SectionLabel>Experience</SectionLabel>
      <SectionHeading>Where I've worked</SectionHeading>

      <div className="space-y-10">
        {EXPERIENCE.map((job) => (
          <div key={job.role} className="relative pl-6 border-l-2 border-emerald-500/25">

            {/* Timeline dot */}
            <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-[#0a0f0d]" />

            {/* Role + period */}
            <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-1 mb-3">
              <div>
                <p className="text-white font-semibold text-sm">{job.role}</p>
                <p className="text-emerald-400/80 text-xs mt-0.5">{job.company}</p>
              </div>
              <span className="text-white/30 text-xs shrink-0 xl:mt-1">{job.period}</span>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {job.stack.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>

            {/* Bullet points */}
            <ul className="space-y-2">
              {job.points.map((pt, i) => (
                <li key={i} className="flex gap-2 text-white/55 text-sm leading-relaxed">
                  <span className="text-emerald-500 mt-1 shrink-0">▸</span>
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
