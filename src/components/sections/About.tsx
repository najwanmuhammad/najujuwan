"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Journey</h2>
          <p className="text-neutral-400">
            Dari baris kode pertama hingga arsitektur sistem.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div
                className={cn(
                  "absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ring-4 ring-background",
                  exp.active
                    ? "bg-primary shadow-[0_0_10px_#3b82f6]"
                    : "bg-neutral-700"
                )}
              />

              {/* Content Card */}
              <div className="flex flex-col sm:flex-row gap-4 sm:items-baseline justify-between mb-2">
                <h3
                  className={cn(
                    "text-xl font-bold",
                    exp.active ? "text-white" : "text-neutral-200"
                  )}
                >
                  {exp.title}
                </h3>
                <span className="text-sm font-mono text-neutral-500 bg-white/5 px-2 py-1 rounded">
                  {exp.year}
                </span>
              </div>

              <p className="text-primary text-sm font-medium mb-2">
                {exp.company}
              </p>
              <p className="text-neutral-400 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
