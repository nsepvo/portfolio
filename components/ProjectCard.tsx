import Link from "next/link";

export default function ProjectCard({ project }: any) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="glass p-5 rounded-xl hover:scale-[1.02] transition">
        <h3>{project.title}</h3>
        <p className="text-white/60 text-sm">{project.description}</p>
      </div>
    </Link>
  );
}
