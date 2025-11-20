"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="glass rounded-full px-6 py-3 flex items-center gap-8 shadow-lg shadow-black/20">
        <Link
          href="/"
          className="font-bold text-xl tracking-tighter hover:text-primary transition-colors"
        >
          NAJWAN<span className="text-primary">.</span>
        </Link>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors">
          Let&apos;s Talk
        </button>
      </div>
    </motion.nav>
  );
}
