"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ParallaxImage({
  src,
  alt,
  className,
}: ParallaxImageProps) {
  const containerRef = useRef(null);

  // Melacak posisi scroll element container relatif terhadap viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Mulai animasi saat elemen masuk viewport bawah
  });

  // Transformasi: Saat scroll dari 0 ke 1, gambar bergerak vertikal (y)
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden h-full w-full", className)}
    >
      <motion.div style={{ y }} className="relative w-full h-[130%] -top-[15%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}
