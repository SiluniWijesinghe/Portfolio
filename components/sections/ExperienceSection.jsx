import { Quote } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { SectionLabel, SectionHeading, Tag } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import { EXPERIENCE, RECOMMENDATIONS } from "@/data/portfolioData";

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const ExperienceSection = () => (
  <section id="experience" className="py-28 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto max-w-3xl">
      <Reveal>
        <SectionLabel>Experience</SectionLabel>
        <SectionHeading>Where I've worked</SectionHeading>
      </Reveal>

      <div className="space-y-12">
        {EXPERIENCE.map((job, jobIndex) => (
          <Reveal key={job.role} delay={jobIndex * 0.08}>
            <div className="relative pl-7 border-l border-emerald-500/20">

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
          </Reveal>
        ))}
      </div>

      {/* Recommendations received while working */}
      {RECOMMENDATIONS?.length > 0 && (
        <div className="mt-20">
          <Reveal>
            <p className="text-white/25 text-[11px] font-semibold uppercase tracking-widest mb-6">
              Recommendations
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {RECOMMENDATIONS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <div
                  className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6
                             hover:border-emerald-500/25 transition-colors duration-300 flex flex-col gap-4"
                >
                  <Quote size={20} className="text-emerald-500/40 shrink-0" />

                  <p className="text-white/55 text-sm leading-relaxed flex-1">
                    {r.quote}
                  </p>

                  <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20
                                    flex items-center justify-center text-emerald-400 text-xs font-bold shrink-0">
                      {initials(r.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-sm font-semibold truncate">{r.name}</p>
                      <p className="text-white/35 text-xs truncate">{r.title}</p>
                    </div>
                    <SiLinkedin size={15} className="text-white/15 ml-auto shrink-0" />
                  </div>

                  <p className="text-white/25 text-[11px]">{r.connection} · {r.date}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </div>
  </section>
);

export default ExperienceSection;
