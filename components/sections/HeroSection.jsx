"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { SectionLabel } from "@/components/ui/primitives";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const HeroSection = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center px-6 xl:px-0 pt-24 pb-16"
  >
    <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center gap-14 xl:gap-24">

      {/* Photo */}
      <div className="relative flex-shrink-0">
        <div
          className="w-44 h-44 xl:w-56 xl:h-56 rounded-2xl overflow-hidden
                      ring-2 ring-emerald-500/30 shadow-[0_0_48px_rgba(16,185,129,0.10)]"
        >
          <Image
            src="/assets/photo.jpg"
            fill
            priority
            quality={100}
            alt="Siluni Wijesinghe"
            className="object-cover"
          />
        </div>
        {/* Available indicator */}
        <span
          className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-emerald-400
                      ring-2 ring-[#0a0f0d] shadow-[0_0_8px_rgba(52,211,153,0.9)]"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center xl:items-start gap-5 max-w-[520px] text-center xl:text-left">
        <SectionLabel>Full Stack Developer · Open to Work</SectionLabel>

        <h1 className="text-5xl xl:text-6xl font-extrabold leading-[1.05] text-white">
          Siluni{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            Wijesinghe
          </span>
        </h1>

        <p className="text-white/65 text-sm xl:text-base leading-relaxed">
          Final-year IT undergraduate at the University of Moratuwa (CGPA&nbsp;3.78/4.00,
          Dean's List three consecutive semesters). I recently completed a 6-month internship
          at Agrithmics building full-stack features across international ERP platforms with
          React and .NET. I write clean, maintainable code and am actively looking for
          entry-level software engineering roles.
        </p>

        <p className="text-white/35 text-xs">
          🎓 BSc IT (Hons) · University of Moratuwa, 2025 &nbsp;·&nbsp; 📍 Colombo, Sri Lanka
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center xl:justify-start items-center gap-4 mt-1">
          <a
            href="/Resume_Siluni_Wijesinghe.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500
                       hover:bg-emerald-400 text-[#0a0f0d] text-sm font-semibold
                       transition-colors duration-200"
          >
            <FiDownload /> Download Resume
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-emerald-500/40
                       text-emerald-400 text-sm font-semibold hover:border-emerald-400
                       transition-colors duration-200"
          >
            Get In Touch
          </button>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          {[
            { icon: <FaGithub size={17} />, href: "https://github.com/SiluniWijesinghe" },
            { icon: <FaLinkedin size={17} />, href: "https://www.linkedin.com/in/siluni-wijesinghe-81009728a/" },
          ].map(({ icon, href }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              className="w-9 h-9 rounded-full border border-emerald-500/25 flex items-center justify-center
                         text-white/40 hover:text-emerald-400 hover:border-emerald-400 transition-colors duration-200"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default HeroSection;
