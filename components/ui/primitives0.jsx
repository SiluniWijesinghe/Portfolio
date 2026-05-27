// Shared primitive components used across all sections

export const SectionLabel = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-3">
    {children}
  </p>
);

export const SectionHeading = ({ children }) => (
  <h2 className="text-3xl xl:text-4xl font-bold text-white mb-10 leading-tight">
    {children}
  </h2>
);

export const Tag = ({ children }) => (
  <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
    {children}
  </span>
);
