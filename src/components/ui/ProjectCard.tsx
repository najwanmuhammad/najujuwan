"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 h-full w-full",
        // Hapus logic aspect-ratio di sini, kita atur lewat col-span saja
        project.size === "large" ? "md:col-span-2" : "col-span-1"
      )}
    >
      {/* 1. Image Background */}
      {/* Kita beri overlay hitam tipis default biar text selalu terbaca */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay: Lebih halus tapi terbaca */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      </div>

      {/* 2. Content Container */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Top: Category Badge & Links (Links muncul pas hover) */}
        <div className="flex justify-between items-start">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md px-3 py-1 text-xs font-medium text-white shadow-sm">
            {project.category}
          </span>

          {/* Action Buttons (Slide down on hover) */}
          <div className="flex gap-2 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
            <Link
              href={project.github}
              className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-colors"
              title="View Code"
            >
              <Github size={18} />
            </Link>
            <Link
              href={project.link}
              className="p-2 rounded-full bg-white text-black border border-white hover:bg-neutral-200 transition-colors"
              title="Live Demo"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Bottom: Title & Desc */}
        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
            {project.title}
          </h3>

          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
            <div className="overflow-hidden">
              <p className="text-neutral-300 text-sm leading-relaxed pb-2">
                {project.description}
              </p>
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10">
                {project.tech.slice(0, 3).map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
