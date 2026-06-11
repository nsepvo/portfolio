import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl mb-6">Projects</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}
