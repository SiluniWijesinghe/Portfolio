import { SectionLabel, SectionHeading } from "@/components/ui/primitives";

const education = [
  {
    degree: "BSc (Hons) in Information Technology",
    school: "University of Moratuwa · 2022 – 2025",
    detail: "CGPA 3.78 / 4.00 · Dean's List: L1S2 (3.92) · L2S1 (4.00) · L2S2 (3.96)",
  },
  {
    degree: "G.C.E. Advanced Level — Physical Science",
    school: "Anula Vidyalaya, Nugegoda · 2020",
    detail: "Z-score 1.7467 · 2As & 1B",
  },
];

const AboutSection = () => (
  <section id="About" className="py-24 px-6 xl:px-0 border-t border-white/5">
    <div className="container mx-auto max-w-3xl">
      <SectionLabel>About Me</SectionLabel>
      <SectionHeading>A bit about myself</SectionHeading>

      <div className="space-y-5 text-white/60 text-sm xl:text-base leading-relaxed">
        <p>
          I'm a final-year Information Technology student at the University of Moratuwa,
          graduating in 2025. My academic record — CGPA 3.78 and Dean's List for three
          consecutive semesters — reflects a genuine commitment to understanding things
          properly, not just getting them done.
        </p>
        <p>
          During my internship at Agrithmics I worked on large-scale ERP systems serving
          international clients across Bangladesh and Sri Lanka. That experience taught me
          how to navigate a real codebase, take ownership of features end-to-end, debug
          production issues under pressure, and collaborate with a team using Agile workflows.
        </p>
        <p>
          Outside of formal work I enjoy building things that solve real problems — from a
          machine-learning pipeline for Ayurvedic plant analysis to an energy demand
          forecasting tool for Sri Lanka's power grid. I'm drawn to the intersection of
          software engineering and data, and I learn best when working on things that matter.
        </p>
        <p>
          I'm now looking for a full-time entry-level software engineering role where I can
          keep growing alongside a strong team.
        </p>
      </div>

      {/* Education cards */}
      <div className="mt-12 space-y-4">
        {education.map((ed) => (
          <div
            key={ed.degree}
            className="rounded-xl border border-white/8 bg-white/[0.025] px-6 py-5"
          >
            <p className="text-white text-sm font-semibold">{ed.degree}</p>
            <p className="text-emerald-400/75 text-xs mt-0.5">{ed.school}</p>
            <p className="text-white/40 text-xs mt-1.5">{ed.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
