"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const roles = ["Software Engineer", "AI Engineer", "Full Stack Developer"];
  const [index, setIndex] = useState(0);

  // Logic untuk ganti teks setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Background Ambience (Lebih subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />

      {/* 1. Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs md:text-sm font-medium text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Open for Work / Internship
        </span>
      </motion.div>

      {/* 2. Main Headline dengan Dynamic Text */}
      <div className="relative z-10 font-bold tracking-tighter text-4xl md:text-7xl lg:text-8xl mb-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white block mb-2 md:mb-4"
        >
          Hi, I'm Najwan.
        </motion.span>

        {/* Container untuk teks berganti */}
        <div className="h-[1.3em] overflow-hidden flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="inline-block whitespace-nowrap px-2 pb-2 leading-tight bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-400"
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Short & Punchy Subtext */}
      <motion.p
        className="text-neutral-400 max-w-xl text-lg md:text-xl leading-relaxed mb-10 font-mono"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Software Engineering student at Universitas Gadjah Mada, building
        intelligent full-stack applications.
      </motion.p>

      {/* 4. Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Tombol Download CV */}
        <a
          href="/muhammad-najwan-fadlillah-cv.pdf"
          download
          className="group bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-neutral-200 transition-all flex items-center gap-2 active:scale-95"
        >
          <Download className="w-4 h-4" />
          Download CV
        </a>

        {/* Social Links */}
        <div className="flex gap-4 sm:ml-4">
          <SocialButton
            href="https://github.com/najwanmuhammad"
            icon={Github}
            label="GitHub"
          />
          <SocialButton
            href="https://linkedin.com/in/muhammadnajwanf"
            icon={Linkedin}
            label="LinkedIn"
          />
          <SocialButton
            href="mailto:muhammad.najwanzf@gmail.com"
            icon={Mail}
            label="Email"
          />
        </div>
      </motion.div>
    </section>
  );
}

// Komponen Kecil untuk Tombol Sosial agar kode lebih rapi
function SocialButton({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-primary transition-all active:scale-95"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
