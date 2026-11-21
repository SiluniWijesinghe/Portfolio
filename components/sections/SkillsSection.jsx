"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHead } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import { SKILLS } from "@/data/portfolioData";
import { getTechIcon } from "@/lib/techIcons";

// Cards read left -> right, top -> bottom, numbered 01-05 so the order is
// explicit. Any extra category you add to SKILLS is slotted in before
// "Currently Learning" (which always stays last, full width).
const LAYOUT = [
  { key: "Languages", span: "xl:col-span-5" },
  { key: "Frontend", span: "xl:col-span-7" },
  { key: "Backend & Database", span: "xl:col-span-7" },
  { key: "Tools & DevOps", span: "xl:col-span-5" },
];
const LEARNING = "Currently Learning";

const buildCards = () => {
  const known = LAYOUT.filter((l) => SKILLS[l.key]);
  const extra = Object.keys(SKILLS)
    .filter((k) => k !== LEARNING && !LAYOUT.some((l) => l.key === k))
    .map((key) => ({ key, span: "xl:col-span-6" }));
  const learning = SKILLS[LEARNING] ? [{ key: LEARNING, span: "xl:col-span-12", learning: true }] : [];
  return [...known, ...extra, ...learning];
};

// One technology: brand icon + name. Lifts and glows in its own brand colour.
const Tile = ({ name, learning }) => {
  const { Icon, color } = getTechIcon(name);
  return (
    <span
      style={{ "--c": color }}
      className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl border border-white/10
                 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white/75 transition-all duration-300
                 hover:-translate-y-0.5 hover:text-white hover:[border-color:var(--c)]
                 hover:shadow-[0_10px_26px_-12px_var(--c)]"
    >
      <Icon size={18} style={{ color }} />
      {name}
      {learning && (
        <span className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
          <motion.span
            className="block h-full w-1/3 bg-emerald-300/80"
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />
        </span>
      )}
    </span>
  );
};

const Card = ({ index, title, items, span, learning }) => {
  const ref = useRef(null);

  // Soft glow that follows the cursor across the card.
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <Reveal
      delay={index * 0.07}
      className={`h-full ${span} ${learning ? "md:col-span-2" : ""}`}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        className={`group relative h-full overflow-hidden rounded-2xl border p-6 transition-colors duration-300 xl:p-7 ${learning
            ? "border-emerald-400/25 bg-emerald-400/[0.04]"
            : "border-white/10 bg-white/[0.02] hover:border-emerald-400/30"
          }`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(320px circle at var(--x, 50%) var(--y, 50%), rgba(52,211,153,0.10), transparent 70%)",
          }}
        />

        <div className="relative">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-emerald-400">0{index + 1}</span>
              <h3 className="text-xl font-medium tracking-tight text-white">{title}</h3>
            </div>
            {learning ? (
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                In progress
              </span>
            ) : (
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/25">
                {items.length} {items.length === 1 ? "tool" : "tools"}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2.5">
            {items.map((name) => (
              <Tile key={name} name={name} learning={learning} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const SkillsSection = () => {
  const cards = buildCards();

  return (
    <section id="skills" className="px-6 py-28 md:py-36 xl:px-0">
      <div className="container mx-auto">
        <Reveal>
          <SectionHead
            title="Tech Stack"
            aside={
              <p className="max-w-[220px] text-sm leading-snug text-white/45">
                The tools behind my work, from language to deployment.
              </p>
            }
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
          {cards.map((c, i) => (
            <Card
              key={c.key}
              index={i}
              title={c.key}
              items={SKILLS[c.key]}
              span={c.span}
              learning={c.learning}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;