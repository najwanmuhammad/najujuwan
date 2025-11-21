"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Background Glow Effect (Opsional tapi keren) */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2 mb-6"
      >
        <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider text-primary uppercase">
          Available for Internship
        </span>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-white/60"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Building Logic <br />
        <span className="text-white">Visualizing Data.</span>
      </motion.h1>

      <motion.p
        className="text-neutral-400 max-w-2xl text-lg md:text-xl leading-relaxed mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I'm Najwan, a Software Engineering student passionate about building
        seamless Frontend experiences, integrating Machine Learning systems, and
        developing reliable DevOps pipelines. I turn complex problems into
        elegant, scalable solutions
      </motion.p>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <button className="group bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-all flex items-center gap-2">
          View Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="flex gap-4 ml-4">
          <a
            href="https://github.com/najwanmuhammad"
            target="_blank"
            className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadnajwanf"
            target="_blank"
            className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
