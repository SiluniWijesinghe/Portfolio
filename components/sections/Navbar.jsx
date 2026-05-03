"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useScrollSpy from "@/lib/useScrollSpy";
import { NAV_ITEMS } from "@/data/portfolioData";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Navbar = () => {
  const active = useScrollSpy(["About", "Skills", "Experience", "Projects", "contact"]);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0f0d]/85 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 xl:px-0 h-16">

        {/* Logo */}
        <button onClick={() => scrollTo("hero")}>
          <Image
            src="/assets/A&S.png"
            width={34}
            height={34}
            alt="Logo"
            className="object-contain"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const id = item === "Contact" ? "contact" : item;
            return (
              <button
                key={item}
                onClick={() => scrollTo(id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === id
                    ? "text-emerald-400"
                    : "text-white/45 hover:text-white"
                }`}
              >
                {item}
              </button>
            );
          })}
          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-1.5 rounded-lg bg-emerald-500 text-[#0a0f0d] text-sm font-semibold
                       hover:bg-emerald-400 transition-colors duration-200"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden text-white/50 hover:text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="xl:hidden border-t border-white/5 bg-[#0a0f0d] px-6 py-4 space-y-4">
          {NAV_ITEMS.map((item) => {
            const id = item === "Contact" ? "contact" : item;
            return (
              <button
                key={item}
                onClick={() => { scrollTo(id); setOpen(false); }}
                className="block w-full text-left text-sm text-white/55 hover:text-emerald-400 transition-colors"
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
