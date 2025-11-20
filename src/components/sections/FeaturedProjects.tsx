import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-12 space-y-2">
        <h2 className="text-3xl md:text-5xl font-bold">Selected Works</h2>
        <p className="text-neutral-400">
          Kombinasi antara estetika Frontend dan logika Backend.
        </p>
      </div>

      {/* BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
