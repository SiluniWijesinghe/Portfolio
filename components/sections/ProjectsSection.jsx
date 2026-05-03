import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { SectionLabel, SectionHeading, Tag } from "@/components/ui/primitives";
import { PROJECTS } from "@/data/portfolioData";

const ProjectsSection = () => (
  <section id="Projects" className="py-24 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto max-w-3xl">
      <SectionLabel>Projects</SectionLabel>
      <SectionHeading>Things I've built</SectionHeading>

      <div className="space-y-5">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-white/8 bg-white/[0.025] px-6 py-6
                       hover:border-emerald-500/30 hover:bg-emerald-500/[0.035]
                       transition-all duration-300 group"
          >
            {/* Title + GitHub link */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-white text-sm font-semibold group-hover:text-emerald-400 transition-colors duration-200">
                  {p.title}
                </p>
                <p className="text-white/30 text-xs mt-0.5">{p.context}</p>
              </div>
              {p.github && (
                <Link
                  href={p.github}
                  target="_blank"
                  className="text-white/25 hover:text-emerald-400 transition-colors shrink-0 mt-0.5"
                >
                  <BsGithub size={17} />
                </Link>
              )}
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed mt-3">{p.description}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {p.stack.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
