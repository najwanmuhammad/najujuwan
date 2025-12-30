"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { techCategories } from "@/data/tech-stack";

export default function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/5 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 mb-20 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">My Tech Stack</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto font-mono">
          Technologies I work with.
        </p>
      </div>

      <div className="flex flex-col gap-16 md:gap-10 relative z-10 py-10">
        {techCategories.map((category, index) => (
          <MarqueeBand key={index} data={category} />
        ))}
      </div>
    </section>
  );
}

function MarqueeBand({ data }: { data: (typeof techCategories)[0] }) {
  // Logic: Jika rotasi positif (miring kanan), badge ditaruh di kanan
  const isTiltedRight = data.rotate > 0;

  return (
    <div
      className="relative w-full flex items-center justify-center py-2"
      style={{
        transform: `rotate(${data.rotate}deg)`,
      }}
    >
      {/* 1. The Ribbon Background */}
      <div
        className={cn(
          "absolute inset-0 w-[120%] -left-[10%] backdrop-blur-sm border-y",
          data.bg,
          data.border
        )}
      />

      {/* 2. The Floating Badge (Title) */}
      <div
        className={cn(
          "absolute -top-5 z-20 bg-background border border-white/10 px-4 py-1 rounded-full flex items-center gap-2 shadow-xl",
          // Conditional Positioning
          isTiltedRight ? "right-8 md:right-32" : "left-8 md:left-32"
        )}
      >
        <data.icon className={cn("w-4 h-4", data.text)} />
        <span className="text-xs font-bold uppercase tracking-wider text-white">
          {data.title}
        </span>
      </div>

      {/* 3. The Scrolling Content (Seamless Loop Logic) */}
      <div className="flex overflow-hidden w-full mask-gradient">
        <motion.div
          // ANIMATION LOGIC FIX:
          // Kita menggunakan 2 set item.
          // Jika ke KIRI: Bergerak dari 0% ke -50%. Saat mencapai -50%, elemen pertama dari set kedua
          // berada tepat di posisi awal elemen pertama set pertama. Loop terlihat seamless.
          // Jika ke KANAN: Bergerak dari -50% ke 0%.
          initial={{ x: data.direction === "left" ? "0%" : "-50%" }}
          animate={{ x: data.direction === "left" ? "-50%" : "0%" }}
          transition={{
            duration: data.speed,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-12 whitespace-nowrap px-12"
        >
          {/* Render DUPLICATE sets (2 sets is enough for 50% translation logic) */}
          {[...data.skills, ...data.skills, ...data.skills, ...data.skills].map(
            (skill, i) => (
              // Note: Saya pakai 4 set untuk keamanan ekstra di layar ultrawide,
              // tapi logic 0 -> -50% tetap valid (hanya menggeser setengah total width container)
              <div key={i} className="flex items-center gap-3 group">
                <span
                  className={cn(
                    "text-3xl md:text-4xl transition-colors duration-300",
                    "text-neutral-500 group-hover:text-white"
                  )}
                >
                  <skill.icon />
                </span>
                <span className="text-xl md:text-2xl font-bold text-neutral-500 group-hover:text-white transition-colors duration-300 uppercase">
                  {skill.name}
                </span>
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
