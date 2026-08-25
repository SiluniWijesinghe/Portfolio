"use client";

import { getTechIcon } from "@/lib/techIcons";

const SIZES = {
  sm: { box: "w-9 h-9", icon: 15, text: "text-[9px]", width: "w-12" },
  md: { box: "w-11 h-11", icon: 19, text: "text-[10.5px]", width: "w-[60px]" },
  lg: { box: "w-16 h-16", icon: 28, text: "text-xs", width: "w-20" },
};

// Small icon + label badge for a single technology, resolved from the
// shared TECH_ICONS map in lib/techIcons.jsx. Falls back to a generic code
// icon for anything not in the map, so it never renders blank.
const TechIcon = ({ name, size = "md", showLabel = true }) => {
  const { Icon, color } = getTechIcon(name);
  const s = SIZES[size] ?? SIZES.md;

  return (
    <div className={`group flex flex-col items-center gap-1.5 ${s.width}`} title={name}>
      <div
        className={`${s.box} rounded-xl border border-white/8 bg-white/[0.03]
                    flex items-center justify-center transition-all duration-200
                    group-hover:border-emerald-500/30 group-hover:bg-emerald-500/[0.06]`}
      >
        <Icon size={s.icon} style={{ color }} className="opacity-90 group-hover:opacity-100 transition-opacity" />
      </div>
      {showLabel && (
        <p className={`text-white/40 ${s.text} font-medium text-center leading-tight group-hover:text-white/70 transition-colors`}>
          {name}
        </p>
      )}
    </div>
  );
};

export default TechIcon;
