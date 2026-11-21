"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/app/siluni-logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import useScrollSpy from "@/lib/useScrollSpy";
import { NAV_ITEMS } from "@/data/portfolioData";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

// Floating pill navigation: brand on the left, a Menu button that opens a
// compact panel with every section.
const Navbar = () => {
  const ids = useMemo(() => NAV_ITEMS.map((i) => i.toLowerCase()), []);
  const active = useScrollSpy(ids);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = (id) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div ref={wrapRef} className="pointer-events-auto relative w-full max-w-[340px]">
        <div
          className="flex items-center justify-between rounded-2xl border border-white/10
                     bg-[#0b120f]/70 py-1.5 pl-3 pr-1.5 shadow-lg shadow-black/30 backdrop-blur-xl"
        >
          <button
            onClick={() => go("hero")}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
            aria-label="Back to top"
          >
            <Image
              src={logo}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 rounded-md"
            />
            Siluni
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-emerald-400 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
              Open to work
            </span>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="h-8 rounded-lg bg-emerald-400 px-3 text-xs font-bold text-[#06100b]
                         transition-colors hover:bg-emerald-300"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute inset-x-0 top-[calc(100%+8px)] rounded-2xl border border-white/10
                         bg-[#0b120f]/90 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl"
            >
              {NAV_ITEMS.map((item, i) => {
                const id = item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => go(id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm
                                transition-colors ${
                                  active === id
                                    ? "bg-emerald-400/10 text-emerald-300"
                                    : "text-white/65 hover:bg-white/[0.05] hover:text-white"
                                }`}
                  >
                    <span className="font-mono text-[10px] text-white/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </button>
                );
              })}
              <a
                href="/assets/Siluni_Wijesinghe_Resume.pdf"
                download
                className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-white/10
                           px-3 py-2.5 text-sm font-medium text-white/80 transition-colors
                           hover:border-emerald-400/40 hover:text-emerald-300"
              >
                <FiDownload size={14} /> Resume
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
