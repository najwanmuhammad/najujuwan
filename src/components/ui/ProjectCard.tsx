"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import ParallaxImage from "./ParallaxImage"; // Import komponen parallax tadi

interface ProjectCardProps {
  project: Project;
  index: number; // Tambah index untuk delay animasi bertingkat
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={cn(
        "group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 h-full w-full",
        project.size === "large" ? "md:col-span-2" : "col-span-1"
      )}
    >
      {/* 1. Background Image dengan Parallax */}
      <div className="absolute inset-0 z-0">
        <ParallaxImage src={project.image} alt={project.title} />
        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      {/* 2. Content Overlay */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        {/* Header: Category & Links */}
        <div className="flex justify-between items-start translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-mono text-white">
            {project.category}
          </span>

          <div className="flex gap-2">
            <SocialLink href={project.github} icon={Github} />
            <SocialLink href={project.link} icon={ArrowUpRight} />
          </div>
        </div>

        {/* Footer: Title & Tech */}
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-sans tracking-tight">
            {project.title}
          </h3>
          <p className="text-neutral-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.description}
          </p>

          {/* Tech Stack Pills - Slide Up Effect */}
          <div className="flex flex-wrap gap-2 overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
            {project.tech.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 border border-white/10 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-2.5 rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-all"
    >
      <Icon size={16} />
    </Link>
  );
}
