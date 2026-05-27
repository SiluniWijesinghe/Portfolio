export const SectionLabel = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400 mb-3">
    {children}
  </p>
);

export const SectionHeading = ({ children }) => (
  <h2 className="text-4xl xl:text-5xl font-bold text-white mb-12 leading-tight">
    {children}
  </h2>
);

export const Tag = ({ children }) => (
  <span className="px-2.5 py-0.5 rounded-md text-xs font-medium
                   bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
    {children}
  </span>
);
