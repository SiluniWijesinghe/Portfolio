"use client";

import { motion } from "framer-motion";

/**
 * Fades + slides content in once it scrolls into view. Wrap any block of
 * markup with this to get consistent scroll-triggered motion across the
 * site instead of everything just appearing statically.
 */
const Reveal = ({
  children,
  delay = 0,
  y = 24,
  duration = 0.55,
  className,
  as = "div",
  once = true,
}) => {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
