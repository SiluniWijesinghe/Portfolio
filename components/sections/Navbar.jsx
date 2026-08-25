"use client";

import { useState } from "react";
import Image from "next/image";
import useScrollSpy from "@/lib/useScrollSpy";
import { NAV_ITEMS } from "@/data/portfolioData";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Navbar = () => {
  const ids = NAV_ITEMS.map((i) => i.toLowerCase());
  const active = useScrollSpy(ids);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#080c0a]/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 xl:px-0 h-16">

        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="opacity-80 hover:opacity-100 transition-opacity">
        </button>

        {/* Desktop */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-6">
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            return (
              <button
                key={item}
                onClick={() => scrollTo(id)}
                className={`text-[13px] font-medium tracking-wide whitespace-nowrap transition-colors duration-200 ${active === id ? "text-emerald-400" : "text-white/40 hover:text-white/80"
                  }`}
              >
                {item}
              </button>
            );
          })}
          <button
            onClick={() => scrollTo("contact")}
            className="ml-2 px-4 py-1.5 rounded-lg border border-emerald-500/50 text-emerald-400
                       text-sm font-semibold hover:bg-emerald-500/10 transition-all duration-200"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="xl:hidden text-white/50 hover:text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="xl:hidden border-t border-white/5 bg-[#080c0a] px-6 py-5 space-y-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => { scrollTo(item.toLowerCase()); setOpen(false); }}
              className="block w-full text-left text-sm text-white/50 hover:text-emerald-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
