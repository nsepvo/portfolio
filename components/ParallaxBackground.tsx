"use client";

import { useEffect, useState } from "react";

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <img
        src="/layer1.png"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        className="absolute w-full h-full object-cover opacity-30"
      />
      <img
        src="/layer2.png"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        className="absolute w-full h-full object-cover opacity-40"
      />
      <img
        src="/layer3.png"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        className="absolute w-full h-full object-cover opacity-50"
      />
    </div>
  );
}
