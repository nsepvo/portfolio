"use client";

import { motion, useScroll } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollY } = useScroll();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: scrollY }}
        className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-black"
      />

      <motion.div
        style={{ y: scrollY.get() * 0.3 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,240,0.2),transparent_60%)]"
      />
    </div>
  );
}
