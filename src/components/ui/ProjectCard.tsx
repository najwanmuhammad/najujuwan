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
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50",
        project.size === "large"
          ? "md:col-span-2 aspect-video"
          : "col-span-1 aspect-square"
      )}
    >
      {/* Image Background with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-500"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/20 to-transparent">
        {/* Top Badges (Category) */}
        <div className="absolute top-6 left-6">
          <span className="bg-primary/20 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Bottom Info */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>

          {/* Description only visible on large cards or hover on desktop */}
          <p className="text-neutral-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {project.description}
          </p>

          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <Link
              href={project.link}
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary"
            >
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href={project.github}
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary"
            >
              GitHub <Github className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
