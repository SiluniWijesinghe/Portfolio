"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

// Small mono label in the bottom-right: types a role, holds, deletes, repeats.
const LABELS = ["Full Stack Development", "Problem Solving", "AI Engineering"];
const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1600;

const TypedLabel = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(LABELS[0]); // full text first = good for SSR
  const [deleting, setDeleting] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const full = LABELS[index];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (deleting && text === full) delay = HOLD_MS;

    const t = setTimeout(() => {
      if (deleting) {
        if (text.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % LABELS.length);
        } else {
          setText(full.slice(0, text.length - 1));
        }
      } else if (text.length < full.length) {
        setText(full.slice(0, text.length + 1));
      } else {
        setDeleting(true);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, reduceMotion]);

  const shown = reduceMotion ? LABELS[0] : text;

  return (
    <span aria-label={LABELS.join(", ")}>
      <span aria-hidden="true">
        {"{{ /"}
        {shown}
        {!reduceMotion && (
          <span className="ml-0.5 inline-block h-[1em] w-[2px] -mb-[0.12em] animate-pulse bg-emerald-400" />
        )}
        {" }}"}
      </span>
    </span>
  );
};

// Hidden "wording": faint code across the hero that lights up under the
// cursor (like the reference). On touch screens / no mouse, a spotlight
// drifts around on its own so the effect still shows.
const CODE_LINES = [
  "@RestController",
  '@RequestMapping("/api/inventory")',
  "public class StockController {",
  "  private final StockService service;",
  '  @GetMapping("/low-stock")',
  "  public List<ItemDto> lowStock() {",
  "    return service.findBelowThreshold();",
  "  }",
  "}",
  "",
  "const [items, setItems] = useState([]);",
  "useEffect(() => {",
  '  fetch("/api/items")',
  "    .then((r) => r.json())",
  "    .then(setItems);",
  "}, []);",
  "",
  "SELECT i.name, SUM(s.qty) AS total",
  "FROM items i JOIN stock s ON s.item_id = i.id",
  "GROUP BY i.name HAVING SUM(s.qty) < 10",
  "ORDER BY total ASC;",
  "",
  "features = [shape, colour, texture, veins]",
  'model = VotingClassifier([rf, svm, hgb],',
  '                         voting="soft")',
  "print(f1_score(y_test, model.predict(X_test)))",
  "",
  "agent.run(tools=[search_files, read_file])",
  "public async Task<IActionResult> GetQuotes(",
  "    int vendorId) => Ok(await _repo.Get(vendorId));",
  "",
  'git commit -m "feat: quotation scoring"',
  "docker compose up --build",
  "",
  "while (alive) {",
  "  learn();",
  "  build();",
  "  ship();",
  "}",
  "",
];

// One column of code, starting at a different line so columns differ.
const column = (offset, repeat = 6) => {
  const rotated = [...CODE_LINES.slice(offset), ...CODE_LINES.slice(0, offset)];
  return Array.from({ length: repeat }, () => rotated.join("\n")).join("\n");
};
const COLUMNS = [0, 11, 23, 5, 17, 29].map((o) => column(o));

// The code is laid out in columns spanning the full width of the hero
// (2 on phones, 3 on tablets, 5 on desktop).
const CodeGrid = ({ className = "", style }) => (
  <div
    className={`absolute inset-0 grid select-none grid-cols-2 gap-x-8 overflow-hidden px-6 py-4 font-mono
                text-[10px] leading-[1.75] md:grid-cols-3 xl:grid-cols-5 ${className}`}
    style={style}
  >
    {COLUMNS.map((text, i) => (
      <pre
        key={i}
        className={`overflow-hidden whitespace-pre ${
          i === 2 ? "hidden md:block" : i === 3 || i === 4 ? "hidden xl:block" : i >= 5 ? "hidden" : ""
        }`}
      >
        {text}
      </pre>
    ))}
  </div>
);

const REVEAL_MASK =
  "radial-gradient(circle 150px at var(--mx, 50%) var(--my, 50%), #000 0%, rgba(0,0,0,0.5) 40%, transparent 100%)";

// Hidden "wording": faint code across the whole hero that lights up under
// the cursor (like the reference). With no mouse (touch), a spotlight drifts
// around on its own so the effect still shows.
const CodeLayer = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current?.parentElement;
    if (!el) return;
    const set = (x, y) => {
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    const rect = () => el.getBoundingClientRect();
    set(rect().width / 2, rect().height / 2);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only touch devices (no hover) get the self-drifting spotlight.
    const touchOnly = window.matchMedia("(hover: none)").matches;
    let raf;
    let mouseActive = !touchOnly;
    const onMove = (e) => {
      if (!touchOnly) mouseActive = true;
      const r = rect();
      set(e.clientX - r.left, e.clientY - r.top);
    };
    const onLeave = () => {
      if (touchOnly) mouseActive = false;
    };

    // Autopilot when the mouse isn't over the hero.
    const loop = (t) => {
      if (!mouseActive) {
        const r = rect();
        set(
          r.width * (0.5 + 0.42 * Math.sin(t / 2600)),
          r.height * (0.5 + 0.34 * Math.sin(t / 1900 + 1.3))
        );
      }
      raf = requestAnimationFrame(loop);
    };
    if (touchOnly) raf = requestAnimationFrame(loop);

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none absolute inset-0">
      <CodeGrid className="text-white/[0.028]" />
      <CodeGrid
        className="text-emerald-100/[0.34]"
        style={{ WebkitMaskImage: REVEAL_MASK, maskImage: REVEAL_MASK }}
      />
    </div>
  );
};

const Bracket = ({ children }) => (
  <span className="mx-[0.06em] font-light text-emerald-400">{children}</span>
);

const HeroSection = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 170]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      {/* Background: code-grid + soft emerald glows */}
      <CodeLayer />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-teal-500/[0.06] blur-[100px]" />

      <motion.div
        style={reduce ? undefined : { opacity: fade }}
        className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 pb-40 pt-20 text-center"
      >
        <p className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Siluni Wijesinghe
        </p>

        <motion.h1
          style={reduce ? undefined : { y: titleY }}
          className="text-[clamp(3rem,min(11vw,16svh),10.5rem)] font-bold uppercase leading-[0.86] tracking-[-0.045em] text-white"
        >
          <span className="whitespace-nowrap">
            <Bracket>&lt;</Bracket>Software
          </span>
          <br />
          <span className="whitespace-nowrap">
            Engineer<Bracket>/&gt;</Bracket>
          </span>
        </motion.h1>

        {/* Empty slot: the single shared portrait (see SharedPhoto) sits here at the top of the page */}
        <div
          id="photo-slot-hero"
          className="relative -mt-[clamp(1.5rem,5vw,4.5rem)] aspect-[800/1085] w-[clamp(150px,min(21vw,27svh),300px)]"
        />
      </motion.div>

      {/* Bottom row: (c) left, typed label + buttons centred under the photo */}
      <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-7 xl:px-0">
        <div className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-end gap-4">
          <span className="text-xl font-bold tracking-tight text-white sm:text-xl md:text-2xl">©2026</span>

          <div className="flex flex-col items-center gap-4">
            <span className="whitespace-nowrap text-center font-mono text-[10px] uppercase tracking-wide text-white/80 sm:text-xs md:text-sm">
              <TypedLabel />
            </span>
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="/assets/Siluni_Wijesinghe_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold
                           text-[#06100b] transition-colors hover:bg-emerald-300"
              >
                <FiDownload size={15} /> Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm
                           font-medium text-white/80 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
              >
                Get in touch <FiArrowUpRight size={15} />
              </button>
            </div>
          </div>

          <span />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
