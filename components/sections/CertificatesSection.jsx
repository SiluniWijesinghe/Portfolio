"use client";

import Link from "next/link";
import { HiOutlineDocumentCheck, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { SectionLabel, SectionHeading } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";
import { CERTIFICATES } from "@/data/portfolioData";

// Renders nothing if you haven't added any certificates yet — see
// data/portfolioData.js for the shape to add one.
const CertificatesSection = () => {
  if (!CERTIFICATES?.length) return null;

  return (
    <section id="certificates" className="py-28 px-6 xl:px-0 border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <SectionLabel>Certificates</SectionLabel>
          <SectionHeading>Courses &amp; certifications</SectionHeading>
        </Reveal>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden
                              hover:border-emerald-500/25 transition-all duration-300 group">
                {cert.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] flex items-center justify-center bg-white/[0.02]">
                    <HiOutlineDocumentCheck size={28} className="text-white/15" />
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-white/35 text-xs mt-1">{cert.issuer} {cert.date && `· ${cert.date}`}</p>

                  {cert.url && (
                    <Link
                      href={cert.url}
                      target="_blank"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold
                                 text-emerald-400/80 hover:text-emerald-400 transition-colors"
                    >
                      Verify
                      <HiOutlineArrowTopRightOnSquare size={12} />
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
