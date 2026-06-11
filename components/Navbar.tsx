"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-6 px-6 py-3 rounded-full
        bg-white/5 backdrop-blur-xl border border-white/10">

        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
