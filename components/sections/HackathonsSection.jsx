"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineTrophy } from "react-icons/hi2";
import { SectionLabel, SectionHeading } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import { HACKATHONS } from "@/data/portfolioData";

// Shows the certificate image directly in the card if one has actually
// been added at the given path — no extra click needed to see it. Clicking
// the image just opens the full-size version in a new tab. If no
// certificate has been added yet, this renders nothing (no placeholder
// standing in for a certificate that doesn't exist).
const CertificateThumb = ({ certificate, name }) => {
  const [failed, setFailed] = useState(false);
  if (!certificate || failed) return null;

  return (
    <Link href={certificate} target="_blank" className="block mt-1 group/cert">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={certificate}
        alt={`${name} certificate`}
        onError={() => setFailed(true)}
        className="w-full aspect-[4/3] rounded-lg object-cover border border-white/8
                   group-hover/cert:border-emerald-500/25 transition-colors"
      />
    </Link>
  );
};

const HackathonsSection = () => (
  <section id="hackathons" className="py-28 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto max-w-4xl">
      <Reveal>
        <SectionLabel>Hackathons</SectionLabel>
        <SectionHeading>Where I've competed</SectionHeading>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-4">
        {HACKATHONS.map((h, i) => (
          <Reveal key={h.name} delay={i * 0.06}>
            <div
              className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6
                         hover:border-emerald-500/25 hover:bg-emerald-500/[0.03]
                         transition-all duration-300 group flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20
                                flex items-center justify-center shrink-0
                                group-hover:bg-emerald-500/15 transition-colors">
                  <HiOutlineTrophy size={17} className="text-emerald-400" />
                </div>
                <span className="text-white/25 text-xs font-medium pt-1.5">{h.year}</span>
              </div>

              <div>
                <h3 className="text-white font-bold text-[15px] leading-snug group-hover:text-emerald-400 transition-colors">
                  {h.name}
                </h3>
                <p className="text-white/35 text-xs mt-0.5">{h.type}</p>
              </div>

              {(h.result || h.team) && (
                <div className="flex flex-wrap items-center gap-2 mt-auto pt-1">
                  {h.result && (
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold
                                     bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {h.result}
                    </span>
                  )}
                  {h.team && <span className="text-white/30 text-[11px]">{h.team}</span>}
                </div>
              )}

              {h.note && (
                <p className="text-white/35 text-xs leading-relaxed pt-1 border-t border-white/5 mt-1">
                  {h.note}
                </p>
              )}

              <CertificateThumb certificate={h.certificate} name={h.name} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HackathonsSection;
