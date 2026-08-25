"use client";

import { useState } from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { HiOutlineArrowRight, HiOutlineCodeBracket } from "react-icons/hi2";
import { SectionLabel, SectionHeading, Tag } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import TechIcon from "@/components/ui/TechIcon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PROJECTS } from "@/data/portfolioData";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "ML & Data", value: "ml" },
  { label: "Embedded", value: "embedded" },
];

// Shows the project screenshot if it actually exists at the given path;
// otherwise falls back to a clean gradient tile with the project name —
// never a stand-in screenshot of an unrelated project.
const ProjectThumb = ({ image, title, className = "" }) => {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div className={`w-full aspect-video rounded-xl bg-gradient-to-br from-emerald-500/15 via-white/[0.03] to-transparent
                      border border-white/8 flex items-center justify-center ${className}`}>
        <div className="flex flex-col items-center gap-2 text-white/20">
          <HiOutlineCodeBracket size={26} />
          <span className="text-xs font-semibold tracking-wide">{title}</span>
        </div>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image}
      alt={title}
      onError={() => setFailed(true)}
      className={`w-full aspect-video rounded-xl object-cover border border-white/8 ${className}`}
    />
  );
};

const ProjectsSection = () => {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = active === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 px-6 xl:px-0 border-t border-white/5">
      <div className="container mx-auto">
        <Reveal>
          <SectionLabel>Projects</SectionLabel>
          <SectionHeading>Things I've built</SectionHeading>
        </Reveal>

        {/* Filter tabs */}
        <Reveal delay={0.05}>
          <div className="flex gap-2 mb-10 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${active === f.value
                  ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-400"
                  : "border-white/10 text-white/35 hover:border-white/25 hover:text-white/60"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project cards grid */}
        <div className="grid xl:grid-cols-2 gap-5">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-6
                           hover:border-emerald-500/25 hover:bg-emerald-500/[0.03]
                           transition-colors duration-300 group flex flex-col gap-4 h-full"
              >
                <ProjectThumb image={p.image} title={p.title} />

                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-white font-bold text-base group-hover:text-emerald-400 transition-colors duration-200">
                    {p.title}
                  </h3>
                  {p.github && (
                    <Link
                      href={p.github}
                      target="_blank"
                      className="text-white/20 hover:text-emerald-400 transition-colors shrink-0 mt-0.5"
                    >
                      <BsGithub size={18} />
                    </Link>
                  )}
                </div>

                {/* Single statement of what the project is */}
                <p className="text-white/45 text-sm leading-relaxed">{p.summary}</p>

                {/* Tech stack logos */}
                <div className="flex flex-wrap gap-3 pt-1">
                  {p.stack.map((t) => (
                    <TechIcon key={t} name={t} size="sm" showLabel={false} />
                  ))}
                </div>

                {/* More details trigger */}
                {p.highlights?.length > 0 && (
                  <button
                    onClick={() => setSelected(p)}
                    className="mt-auto self-start inline-flex items-center gap-1.5 text-xs font-semibold
                               text-emerald-400/80 hover:text-emerald-400 transition-colors"
                  >
                    More details
                    <HiOutlineArrowRight size={14} />
                  </button>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Details modal */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent>
          {selected && (
            <>
              <ProjectThumb image={selected.image} title={selected.title} className="mb-5" />

              <DialogHeader>
                <DialogTitle>{selected.title}</DialogTitle>
                <DialogDescription>{selected.subtitle}</DialogDescription>
              </DialogHeader>

              <p className="text-emerald-400/60 text-xs font-medium mb-4">{selected.context}</p>

              <p className="text-white/55 text-sm leading-relaxed mb-5">{selected.description}</p>

              <ul className="space-y-3 mb-6">
                {selected.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 mt-1.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {selected.stack.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>

              {selected.github && (
                <Link
                  href={selected.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-emerald-400 transition-colors"
                >
                  <BsGithub size={16} />
                  View on GitHub
                </Link>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
