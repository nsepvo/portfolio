"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-full flex gap-6 text-sm"
    >
      <a href="/">Home</a>
      <a href="/projects">Projects</a>
      <a href="/blog">Blog</a>
      <a href="#contact">Contact</a>
    </motion.nav>
  );
}
