"use client";

import Image from "next/image";
import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";
import logo from "@/app/siluni-logo.png";
import FooterScene from "@/components/FooterScene";
import { NAV_ITEMS } from "@/data/portfolioData";
import { EMAIL, gmailCompose } from "@/lib/contact";

const MARQUEE = [
  "Full Stack Developer",
  "Problem Solver",
  "Ayurvedic Leaf Vision",
  "DevAssist",
  "CentralSync",
  "Pathwise",
  "LankaGrid Forecaster",
  "Always learning",
];

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-white/10 bg-[#060a08]">
    <div className="container mx-auto pt-16">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-white">
            <Image src={logo} alt="" width={28} height={28} className="h-7 w-7 rounded-md" />
            Siluni.
          </div>
          <p className="mt-3 max-w-[200px] text-xs leading-relaxed text-white/40">
            Software Engineer &amp; Full-Stack Developer
          </p>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-white/30">Explore</p>
          <ul className="grid max-w-sm grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/65">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="transition-colors hover:text-emerald-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-white/30">Get in touch</p>
          <a
            href={gmailCompose({ to: EMAIL })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 break-all text-sm text-white/65 transition-colors hover:text-emerald-400"
          >
            {EMAIL} <FiArrowUpRight size={13} />
          </a>
          <p className="mt-6 text-[11px] text-white/25">© {new Date().getFullYear()} Siluni Wijesinghe</p>
        </div>
      </div>

      <div className="mt-20 flex items-end justify-between">
        <p className="text-3xl font-medium tracking-tight text-white md:text-4xl">See you around.</p>
        <a
          href="#hero"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-white/40 transition-colors hover:text-emerald-400"
        >
          Back to top <FiArrowUp size={13} />
        </a>
      </div>
    </div>

    {/* ---- Scene: faded giant name, the girl, drifting dev drawings ---- */}
    <FooterScene />

    {/* Marquee */}
    {/* <div className="relative z-20 overflow-hidden border-t border-white/10 bg-[#060a08] py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.25em] text-white/35">
        {[...MARQUEE, ...MARQUEE].map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="text-emerald-400">✦</span>
          </span>
        ))}
      </div>
    </div> */}
  </footer>
);

export default Footer;