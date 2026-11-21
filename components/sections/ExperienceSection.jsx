import { Quote } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { SectionHead, Tag } from "@/components/ui/primitives";
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
  <section id="experience" className="px-6 py-28 md:py-36 xl:px-0">
    <div className="container mx-auto">
      <Reveal>
        <SectionHead title="Experience">
          Where I&apos;ve worked, and what I shipped while I was there.
        </SectionHead>
      </Reveal>

      <div className="space-y-16">
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.role} delay={i * 0.08}>
            <div className="grid gap-8 border-t border-white/15 pt-8 xl:grid-cols-[minmax(0,320px)_1fr] xl:gap-24">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                  {job.period}
                </p>
                <h3 className="mt-4 text-2xl font-medium leading-tight tracking-tight text-white">
                  {job.role}
                </h3>
                <p className="mt-2 text-sm text-white/45">{job.company}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>

              <ul className="space-y-4">
                {job.points.map((pt, idx) => (
                  <li key={idx} className="flex gap-4 text-sm leading-relaxed text-white/55">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {RECOMMENDATIONS?.length > 0 && (
        <div className="mt-24">
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-white/30">
              Recommendations
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {RECOMMENDATIONS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08} className="min-w-0">
                <div
                  className="flex h-full min-w-0 flex-col gap-4 rounded-2xl border border-white/10
                             bg-white/[0.02] p-6 transition-colors duration-300 hover:border-emerald-500/30"
                >
                  <Quote size={20} className="shrink-0 text-emerald-400/50" />
                  <p className="flex-1 break-words text-sm leading-relaxed text-white/60">{r.quote}</p>
                  <div className="flex min-w-0 items-center gap-3 border-t border-white/5 pt-4">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border
                                 border-emerald-500/20 bg-emerald-500/10 text-xs font-bold text-emerald-400"
                    >
                      {initials(r.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-white">{r.name}</p>
                      <p className="truncate text-xs text-white/35">{r.title}</p>
                    </div>
                    <SiLinkedin size={15} className="ml-auto shrink-0 text-white/20" />
                  </div>
                  <p className="break-words text-[11px] text-white/25">
                    {r.connection} · {r.date}
                  </p>
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
