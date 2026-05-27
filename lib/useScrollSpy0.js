"use client";

import { useState, useEffect } from "react";

const useScrollSpy = (ids) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handler = () => {
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);

  return active;
};

export default useScrollSpy;
