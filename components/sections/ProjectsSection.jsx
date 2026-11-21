"use client";

import { useState } from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { HiOutlineCodeBracket, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { FiArrowUpRight } from "react-icons/fi";
import { SectionHead, Tag } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
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

// Screenshot if it loads; otherwise a clean tile (never a wrong image).
const ProjectThumb = ({ image, title, className = "" }) => {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div
        className={`flex aspect-video w-full items-center justify-center rounded-xl border border-white/10
                    bg-gradient-to-br from-emerald-500/15 via-white/[0.03] to-transparent ${className}`}
      >
        <div className="flex flex-col items-center gap-2 text-white/25">
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
      className={`aspect-video w-full rounded-xl border border-white/10 object-cover ${className}`}
    />
  );
};

const Label = ({ children }) => (
  <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-emerald-400/70">
    {children}
  </p>
);

// A "folder" card: back panel + two papers (screenshot on top) + frosted
// front panel. Papers lift on hover.
const Folder = ({ p, onOpen }) => {
  const [failed, setFailed] = useState(false);
  const hasImg = p.image && !failed;

  return (
    <div>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${p.title} details`}
        className="group block w-full text-left outline-none"
      >
        <div className="relative h-60 sm:h-64">
          <div className="absolute left-0 top-3 h-6 w-28 rounded-t-xl border border-b-0 border-white/10 bg-[#0e1713]" />
          <div className="absolute inset-x-0 bottom-0 top-8 rounded-2xl rounded-tl-none border border-white/10 bg-[#0e1713]" />

          <div
            className="absolute inset-x-5 bottom-16 top-9 -rotate-2 rounded-lg border border-white/10 bg-[#16241c]
                       transition-all duration-500 ease-out group-hover:-translate-y-6 group-hover:-rotate-[4deg]
                       group-focus-visible:-translate-y-6"
          />
          <div
            className="absolute inset-x-3 bottom-14 top-10 overflow-hidden rounded-lg border border-white/15 bg-[#0b120f]
                       transition-all duration-500 ease-out group-hover:-translate-y-9 group-hover:rotate-[1.5deg]
                       group-focus-visible:-translate-y-9"
          >
            {hasImg ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.image}
                alt=""
                onError={() => setFailed(true)}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500/15 to-transparent text-white/25">
                <HiOutlineCodeBracket size={28} />
              </div>
            )}
          </div>

          <div
            className="absolute inset-x-0 bottom-0 flex h-28 items-end justify-between gap-3 rounded-2xl border
                       border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-5 backdrop-blur-md"
          >
            <h3 className="text-lg font-medium leading-tight tracking-tight text-white">
              {p.shortTitle ?? p.title}
            </h3>
            <span
              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-400 text-[#06100b]
                         transition-transform duration-300 group-hover:rotate-45"
            >
              <FiArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </button>

      <div className="mt-4 flex items-start justify-between gap-4">
        <p className="text-xs leading-relaxed text-white/40">{p.summary}</p>
        <div className="flex shrink-0 items-center gap-3 pt-0.5">
          {p.demo && (
            <Link
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} live demo`}
              title="Live demo"
              className="text-emerald-400/80 transition-colors hover:text-emerald-300"
            >
              <HiOutlineArrowTopRightOnSquare size={16} />
            </Link>
          )}
          {p.github && (
            <Link
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title} on GitHub`}
              title="GitHub"
              className="text-white/30 transition-colors hover:text-emerald-400"
            >
              <BsGithub size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="px-6 py-28 md:py-36 xl:px-0">
      <div className="container mx-auto">
        <Reveal>
          <SectionHead
            title={
              <>
                Featured
                <br />
                Projects
              </>
            }
            aside={
              <Link
                href="https://github.com/SiluniWijesinghe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-white/50 transition-colors hover:text-emerald-400"
              >
                GitHub <FiArrowUpRight size={13} />
              </Link>
            }
          >
            Independent projects and professional work. Open a folder to explore a project.
          </SectionHead>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-12 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-200 ${
                  active === f.value
                    ? "border-emerald-400 bg-emerald-400 text-[#06100b]"
                    : "border-white/10 text-white/40 hover:border-white/25 hover:text-white/70"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <Folder p={p} onOpen={() => p.highlights?.length && setSelected(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent>
          {selected && (
            <>
              <ProjectThumb image={selected.image} title={selected.title} className="mb-5" />

              <DialogHeader>
                <DialogTitle>{selected.title}</DialogTitle>
                <DialogDescription>{selected.subtitle}</DialogDescription>
              </DialogHeader>

              <p className="mb-4 text-xs font-medium text-emerald-400/60">{selected.context}</p>

              {selected.problem && (
                <div className="mb-6">
                  <Label>The problem</Label>
                  <p className="text-left text-sm leading-relaxed text-white/55">{selected.problem}</p>
                </div>
              )}

              <Label>What I built</Label>
              <ul className="mb-6 space-y-3">
                {selected.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/60" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mb-6 flex flex-wrap gap-2">
                {selected.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              {(selected.demo || selected.github) && (
                <div className="flex flex-wrap items-center gap-5">
                  {selected.demo && (
                    <Link
                      href={selected.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-[#06100b] transition-colors hover:bg-emerald-300"
                    >
                      <HiOutlineArrowTopRightOnSquare size={16} />
                      Live demo
                    </Link>
                  )}
                  {selected.github && (
                    <Link
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-emerald-400"
                    >
                      <BsGithub size={16} />
                      View on GitHub
                    </Link>
                  )}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
