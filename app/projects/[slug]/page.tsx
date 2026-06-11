import projects from "@/data/projects";

export default function ProjectDetail({ params }: any) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) return <div>Not found</div>;

  return (
    <main className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl">{project.title}</h1>
      <p className="text-white/70 mt-4">{project.content}</p>
    </main>
  );
}
