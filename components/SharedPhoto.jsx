"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// ONE photo shared by the hero and the About section, like the reference:
//  - same size, same horizontal centre in both places (no enlarging)
//  - on desktop it is "sticky": it stays put on screen while the hero headline
//    scrolls away and the About text rises up on both sides of it, then it
//    settles into the About slot and scrolls on with the page
//  - a soft perspective tilt peaks mid-way and flattens as it lands
//  - on narrower screens it simply glides between the two slots
const ASPECT = 1085 / 800;
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));

const SharedPhoto = () => {
  const wrapRef = useRef(null);
  const boxRef = useRef(null);
  const glowRef = useRef(null);
  const outlineRef = useRef(null);
  const frameRef = useRef(null);
  const imgWrapRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let cur = null; // eased progress for the tilt / colour / frame
    let schedule;

    const update = () => {
      raf = 0;
      const hero = document.getElementById("photo-slot-hero");
      const about = document.getElementById("photo-slot-about");
      const box = boxRef.current;
      const wrap = wrapRef.current;
      if (!hero || !about || !box || !wrap) return;

      const o = wrap.getBoundingClientRect(); // origin: keeps everything scroll-invariant
      const h = hero.getBoundingClientRect();
      const a = about.getBoundingClientRect();
      const sy = window.scrollY;
      const vh = window.innerHeight;
      const sticky = window.innerWidth >= 1200;

      const heroDoc = h.top + sy; // where the hero slot sits on the page
      const aboutDoc = a.top + sy; // where the About slot sits on the page

      let target; // 0 = hero, 1 = landed in About
      let screenY; // photo top, in viewport coordinates
      if (sticky) {
        screenY = Math.min(heroDoc, a.top); // pinned until the About slot arrives
        const travel = aboutDoc - heroDoc;
        target = travel <= 1 ? 1 : clamp(sy / travel);
      } else {
        const end = aboutDoc - vh * 0.22;
        target = end <= 0 ? 1 : clamp(sy / end);
        screenY = lerp(h.top, a.top, 0); // overwritten below once eased
      }

      if (cur === null || reduce) cur = target;
      else cur += (target - cur) * 0.14;
      const settled = Math.abs(target - cur) < 0.0004;
      if (settled) cur = target;
      const e = cur;

      if (!sticky) screenY = lerp(h.top, a.top, e);

      const w = lerp(h.width, a.width, e);
      const x = lerp(h.left, a.left, e) - o.left;
      const y = screenY - o.top;
      const arc = Math.sin(e * Math.PI);
      const tilt = reduce ? 0 : arc * 18; // gentle, never edge-on

      box.style.width = `${w}px`;
      box.style.height = `${w * ASPECT}px`;
      box.style.transform = `translate3d(${x}px, ${y}px, 0) perspective(1400px) rotateY(${tilt}deg)`;
      box.style.opacity = "1";

      const r = `${16 * e}px`;
      if (glowRef.current) glowRef.current.style.opacity = String(1 - e);
      if (outlineRef.current) {
        outlineRef.current.style.opacity = String(e * e);
        outlineRef.current.style.borderRadius = r;
      }
      if (frameRef.current) {
        frameRef.current.style.opacity = String(e);
        frameRef.current.style.borderRadius = r;
      }
      if (imgWrapRef.current) {
        const fade = `linear-gradient(to bottom, #000 ${lerp(76, 100, e)}%, transparent 100%)`;
        imgWrapRef.current.style.borderRadius = r;
        imgWrapRef.current.style.webkitMaskImage = fade;
        imgWrapRef.current.style.maskImage = fade;
        // greyscale in the hero -> full colour as it settles in About
        imgWrapRef.current.style.filter = `grayscale(${1 - clamp((e - 0.15) / 0.6)})`;
      }

      if (!settled) schedule();
    };

    schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("load", schedule);
    document.fonts?.ready.then(schedule);
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("load", schedule);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute left-0 top-0 h-0 w-0">
      <div
        ref={boxRef}
        className="absolute left-0 top-0 z-30 opacity-0"
        style={{ willChange: "transform, width, height" }}
      >
        <div
          ref={glowRef}
          className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.2),transparent_65%)]"
        />
        <div
          ref={outlineRef}
          className="absolute inset-0 translate-x-3 translate-y-3 border border-emerald-500/25 opacity-0"
        />
        <div
          ref={frameRef}
          className="absolute inset-0 border border-white/10 bg-gradient-to-b from-emerald-500/[0.12] to-[#0d1411] opacity-0"
        />
        <div ref={imgWrapRef} className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/photo.png"
            width={800}
            height={1085}
            priority
            alt="Siluni Wijesinghe"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SharedPhoto;
