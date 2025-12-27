"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for Desktop Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
    <>
      {/* dekstop navbar */}
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
            <Image src="/logo.svg" alt="logo" width={32} height={32} priority />
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
        </div>
      </motion.nav>

      {/* mobile navbar */}
      <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-60">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-[#1a1a1a] text-white border border-white/10 px-6 py-3 rounded-full shadow-2xl shadow-black/50 active:scale-95 transition-transform"
        >
          <span className="font-medium text-sm">
            {isOpen ? "Close" : "Menu"}
          </span>
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* 2. The Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-background z-55 flex flex-col justify-center items-center md:hidden"
          >
            {/* Menu Links Container */}
            <div className="flex flex-col items-center gap-8 w-full px-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-bold text-neutral-400 hover:text-white transition-colors tracking-tight"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Extra Mobile Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8 w-full max-w-xs"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Start a Project <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </div>

            {/* Background decoration (optional) */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-primary/10 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
