"use client";

import { useState } from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { SectionLabel, SectionHeading, Tag } from "@/components/ui/primitives";
import { PROJECTS } from "@/data/portfolioData";

const FILTERS = [
  { label: "All",       value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "ML & Data", value: "ml" },
];

const ProjectsSection = () => {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 px-6 xl:px-0 border-t border-white/5">
      <div className="container mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <SectionHeading>Things I've built</SectionHeading>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
                active === f.value
                  ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-400"
                  : "border-white/10 text-white/35 hover:border-white/25 hover:text-white/60"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <div className="grid xl:grid-cols-2 gap-5">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-7
                         hover:border-emerald-500/25 hover:bg-emerald-500/[0.03]
                         transition-all duration-300 group flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-white font-bold text-base group-hover:text-emerald-400 transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="text-white/30 text-xs mt-0.5">{p.subtitle}</p>
                </div>
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

              {/* Context badge */}
              <p className="text-emerald-400/60 text-xs font-medium">{p.context}</p>

              {/* Description */}
              <p className="text-white/45 text-sm leading-relaxed flex-1">{p.description}</p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {p.stack.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
