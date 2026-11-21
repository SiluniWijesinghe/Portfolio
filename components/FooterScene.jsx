"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ════════════════════════════════════════════════════════════════
   FooterScene — giant faded name, the girl fixed in the centre, and
   developer-themed ink drawings drifting past her at different
   speeds / depths (same idea as the walking crowd in the reference).

   Needs in /public (transparent PNGs, identical canvas size):
     girl-open.png, girl-closing.png, girl-wave-1.png, girl-wave-2.png
   Any missing frame falls back to footer-girl.png.
   ════════════════════════════════════════════════════════════════ */

const INK = "#0b0b0b";
const S = { fill: "#fff", stroke: INK, strokeWidth: 3, strokeLinejoin: "round", strokeLinecap: "round" };
const thin = { fill: "none", stroke: INK, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const mono = { fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontWeight: 800 };

const gear = (cx, cy, r1, r2, n) => {
  const pts = [];
  for (let i = 0; i < n * 4; i++) {
    const a = (Math.PI * 2 * i) / (n * 4) - Math.PI / (n * 4) * 0;
    const r = i % 4 === 1 || i % 4 === 2 ? r2 : r1;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return `M${pts.join("L")}Z`;
};

/* each drawing lives in a 120 × 100 box */
const ART = {
  window: () => (
    <>
      <rect x="6" y="10" width="108" height="80" rx="8" {...S} />
      <path d="M6 32H114" {...thin} strokeWidth="3" />
      {[18, 28, 38].map((x) => <circle key={x} cx={x} cy="21" r="3" fill={INK} />)}
      <path d="M18 46H48M28 58H70M28 70H56M18 82H40" {...thin} strokeWidth="3.4" />
      <path d="M86 46L76 58L86 70M100 46L110 58L100 70" {...thin} strokeWidth="3.4" />
    </>
  ),
  terminal: () => (
    <>
      <rect x="6" y="10" width="108" height="80" rx="8" fill={INK} stroke={INK} strokeWidth="3" />
      <path d="M6 30H114" stroke="#fff" strokeWidth="1.6" opacity=".4" />
      {[18, 28, 38].map((x) => <circle key={x} cx={x} cy="20" r="2.6" fill="#fff" />)}
      <path d="M18 44L30 54L18 64" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M38 66H66" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M18 80H88" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" opacity=".5" />
    </>
  ),
  git: () => (
    <>
      <path d="M32 30V70" {...thin} strokeWidth="3.4" />
      <path d="M32 44C32 62 84 46 84 56" {...thin} strokeWidth="3.4" />
      <circle cx="32" cy="22" r="10" {...S} />
      <circle cx="32" cy="78" r="10" {...S} />
      <circle cx="84" cy="66" r="10" fill={INK} stroke={INK} strokeWidth="3" />
      <path d="M96 24H110M96 34H104" {...thin} strokeWidth="3" />
    </>
  ),
  cloud: () => (
    <>
      <path d="M30 78C12 78 8 54 28 52C28 28 58 20 68 40C88 32 108 50 94 66C104 80 88 78 84 78Z" {...S} />
      <path d="M60 84V56M48 66L60 54L72 66" {...thin} strokeWidth="3.4" />
    </>
  ),
  db: () => (
    <>
      <path d="M22 26C22 12 98 12 98 26V74C98 88 22 88 22 74Z" {...S} />
      <path d="M22 26C22 40 98 40 98 26" {...thin} strokeWidth="3" />
      <path d="M22 50C22 64 98 64 98 50" {...thin} strokeWidth="3" />
      <circle cx="84" cy="70" r="2.6" fill={INK} />
      <circle cx="74" cy="72" r="2.6" fill={INK} />
    </>
  ),
  bug: () => (
    <>
      <path d="M40 40L22 30M40 56L18 56M42 72L24 86M80 40L98 30M80 56L102 56M78 72L96 86M52 22L44 8M68 22L76 8" {...thin} strokeWidth="3" />
      <ellipse cx="60" cy="58" rx="24" ry="28" {...S} />
      <circle cx="60" cy="26" r="11" fill={INK} stroke={INK} strokeWidth="3" />
      <path d="M60 32V86" {...thin} />
      <circle cx="49" cy="52" r="4.5" fill={INK} />
      <circle cx="71" cy="52" r="4.5" fill={INK} />
      <circle cx="50" cy="70" r="4" fill={INK} />
      <circle cx="70" cy="70" r="4" fill={INK} />
    </>
  ),
  coffee: () => (
    <>
      <path d="M26 38H88V62C88 80 74 90 57 90C40 90 26 80 26 62Z" {...S} />
      <path d="M88 46C106 46 106 70 86 70" {...thin} strokeWidth="3.4" />
      <path d="M44 28C38 22 50 16 44 8M62 28C56 22 68 16 62 8" {...thin} strokeWidth="3" />
      <path d="M40 54L34 62L40 70M74 54L80 62L74 70" {...thin} strokeWidth="3" />
    </>
  ),
  gear: () => (
    <>
      <path d={gear(60, 50, 34, 44, 9)} {...S} />
      <circle cx="60" cy="50" r="14" fill="#fff" stroke={INK} strokeWidth="3" />
    </>
  ),
  rocket: () => (
    <>
      <path d="M60 6C82 22 84 56 76 78H44C36 56 38 22 60 6Z" {...S} />
      <path d="M46 60L28 82L46 76ZM74 60L92 82L74 76Z" fill={INK} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="60" cy="38" r="10" {...S} />
      <path d="M52 84C52 98 60 100 60 100C60 100 68 98 68 84" {...thin} strokeWidth="3" />
    </>
  ),
  phone: () => (
    <>
      <rect x="34" y="4" width="52" height="92" rx="10" {...S} />
      <path d="M52 11H68" {...thin} strokeWidth="3" />
      <rect x="42" y="22" width="36" height="22" rx="3" {...thin} strokeWidth="2.6" />
      <path d="M42 54H78M42 62H70M42 70H74" {...thin} strokeWidth="2.6" />
      <rect x="48" y="78" width="24" height="8" rx="4" fill={INK} />
    </>
  ),
  braces: () => (
    <text x="60" y="72" textAnchor="middle" fontSize="64" fill={INK} {...mono}>{"</>"}</text>
  ),
  neural: () => (
    <>
      <path d="M22 26L60 20M22 26L60 46M22 26L60 72M22 50L60 20M22 50L60 46M22 50L60 72M22 74L60 20M22 74L60 46M22 74L60 72M60 20L98 38M60 46L98 38M60 72L98 38M60 20L98 64M60 46L98 64M60 72L98 64" {...thin} strokeWidth="1.6" opacity=".7" />
      {[[22, 26], [22, 50], [22, 74], [60, 20], [60, 46], [60, 72], [98, 38], [98, 64]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="7" fill={i > 5 ? INK : "#fff"} stroke={INK} strokeWidth="3" />
      ))}
    </>
  ),
  bulb: () => (
    <>
      <path d="M60 10C40 10 28 28 34 46C38 56 44 60 44 70H76C76 60 82 56 86 46C92 28 80 10 60 10Z" {...S} />
      <path d="M46 80H74M50 89H70" {...thin} strokeWidth="3.4" />
      <path d="M52 46L60 38L68 46M60 38V62" {...thin} strokeWidth="2.6" />
      <path d="M14 30L24 34M106 30L96 34M60 0V4" {...thin} strokeWidth="3" />
    </>
  ),
};

/* p = start position (% of width), top = % of scene height, w = width (% of scene), dur = seconds to cross */
const ITEMS = [
  { a: "terminal", p: 2, top: 58, w: 10, dur: 58 },
  { a: "bulb", p: 11, top: 10, w: 6, dur: 80, far: 1 },
  { a: "git", p: 19, top: 36, w: 7.5, dur: 52 },
  { a: "cloud", p: 28, top: 8, w: 9, dur: 66 },
  { a: "coffee", p: 36, top: 62, w: 6, dur: 74, far: 1 },
  { a: "gear", p: 45, top: 14, w: 6, dur: 90, far: 1 },
  { a: "phone", p: 55, top: 40, w: 5.5, dur: 56 },
  { a: "db", p: 64, top: 62, w: 8, dur: 64 },
  { a: "braces", p: 72, top: 12, w: 9, dur: 70 },
  { a: "bug", p: 81, top: 56, w: 6, dur: 86, far: 1 },
  { a: "rocket", p: 89, top: 28, w: 6, dur: 50 },
  { a: "neural", p: 96, top: 8, w: 9, dur: 76, far: 1 },
  { a: "window", p: 40, top: 30, w: 10, dur: 60 },
];

const CSS = `
@keyframes fs-drift{from{left:-14%}to{left:102%}}
@keyframes fs-bob{0%,100%{transform:translateY(-5%) rotate(-3deg)}50%{transform:translateY(5%) rotate(3deg)}}
.fs-item{position:absolute;animation:fs-drift linear infinite;will-change:left}
.fs-bob{animation:fs-bob ease-in-out infinite;transform-origin:50% 50%}
@media (prefers-reduced-motion:reduce){.fs-item,.fs-bob{animation:none!important}}
`;

const FALLBACK = "/footer-girl.png";
const FRAMES = {
  open: "/girl-open.png",
  closing: "/girl-closing.png",
  waveA: "/girl-wave-1.png",
  waveB: "/girl-wave-2.png",
};
/* [frame, milliseconds] — laptop open → closes it → waves → opens it again */
const SEQUENCE = [
  ["open", 2000], ["closing", 450],
  ["waveA", 380], ["waveB", 380], ["waveA", 380], ["waveB", 380], ["waveA", 380], ["waveB", 380], ["waveA", 380],
  ["closing", 450],
];

const Girl = () => {
  const [i, setI] = useState(0);
  const [missing, setMissing] = useState({});

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setI((n) => (n + 1) % SEQUENCE.length), SEQUENCE[i][1]);
    return () => clearTimeout(t);
  }, [i]);

  const current = SEQUENCE[i][0];
  const names = Object.keys(FRAMES);
  return (
    <div style={{ position: "relative", height: "100%" }}>
      {names.map((k, idx) => (
        <img
          key={k}
          src={missing[k] ? FALLBACK : FRAMES[k]}
          alt={idx === 0 ? "Illustration of a curly-haired developer with her laptop" : ""}
          onError={() => setMissing((m) => ({ ...m, [k]: true }))}
          style={{
            display: "block", height: "100%", width: "auto",
            position: idx === 0 ? "relative" : "absolute", inset: idx === 0 ? undefined : 0,
            opacity: k === current ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

const FooterScene = () => (
  <div style={{ position: "relative", overflow: "hidden", background: "#fff" }}>
    <style>{CSS}</style>
    <div style={{ position: "relative", margin: "0 auto", width: "100%", maxWidth: 1400, aspectRatio: "100 / 28", overflow: "hidden" }}>
      {/* giant faded name */}
      <motion.p
        aria-hidden="true"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute", inset: "0 0 auto 0", margin: 0, textAlign: "center", whiteSpace: "nowrap",
          fontSize: "clamp(4rem,19vw,16.6rem)", fontWeight: 700, textTransform: "uppercase",
          lineHeight: 0.85, letterSpacing: "-0.06em", color: "#e6e6e6", userSelect: "none",
        }}
      >
        Siluni
      </motion.p>

      {/* drifting dev drawings (behind her) */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {ITEMS.map((it, i) => {
          const Art = ART[it.a];
          const delay = -((it.p + 14) / 116) * it.dur;
          return (
            <div
              key={i}
              className="fs-item"
              style={{
                top: `${it.top}%`, width: `${it.w}%`, left: `${it.p}%`,
                animationDuration: `${it.dur}s`, animationDelay: `${delay}s`,
                opacity: it.far ? 0.5 : 1, zIndex: 1,
              }}
            >
              <div className="fs-bob" style={{ animationDuration: `${4 + (i % 4)}s`, animationDelay: `${-i * 0.7}s` }}>
                <svg viewBox="0 0 120 100" style={{ display: "block", width: "100%", height: "auto", overflow: "visible" }}>
                  <Art />
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* the girl stays put */}
      <div style={{ position: "absolute", left: "50%", top: "2%", height: "112%", transform: "translateX(-50%)", zIndex: 2 }}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: "100%" }}
        >
          <Girl />
        </motion.div>
      </div>
    </div>
  </div>
);

export default FooterScene;