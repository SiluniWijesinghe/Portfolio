export const SectionLabel = ({ children }) => (
  <p className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-emerald-400 mb-3">
    {children}
  </p>
);

export const SectionHeading = ({ children }) => (
  <h2 className="text-4xl xl:text-5xl font-medium text-white mb-12 leading-tight tracking-tight">
    {children}
  </h2>
);

// Big editorial section header: large title on the left, optional blurb
// underneath, optional `aside` (link, filter, note) on the right.
export const SectionHead = ({ title, children, aside }) => (
  <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
    <div>
      <h2 className="text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-white">
        {title}
      </h2>
      {children && (
        <p className="mt-6 max-w-md text-sm leading-relaxed text-white/45">{children}</p>
      )}
    </div>
    {aside}
  </div>
);

export const Tag = ({ children }) => (
  <span
    className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5
               font-mono text-[11px] font-medium text-emerald-400"
  >
    {children}
  </span>
);
