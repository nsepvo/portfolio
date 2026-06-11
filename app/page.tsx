import ParallaxBackground from "@/components/ParallaxBackground";
import projects from "@/data/projects";
import blog from "@/data/blog";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  return (
    <main className="relative">
      <ParallaxBackground />

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold">
            Developer Portfolio
          </h1>
          <p className="text-white/60 mt-4">
            Minimal. Fast. Modern.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto p-6">
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-2xl mb-2">About</h2>
          <p className="text-white/70">
            Full-stack developer focused on clean UI, performance, and modern web experiences.
          </p>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-xl mb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.slice(0, 3).map(p => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-xl mb-4">Latest Posts</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {blog.slice(0, 3).map(b => (
            <BlogCard key={b.slug} post={b} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-4xl mx-auto p-10">
        <div className="glass p-8 rounded-2xl text-center">
          <h2 className="text-2xl">Contact</h2>
          <p className="text-white/60 mt-2">
            email@example.com
          </p>
        </div>
      </section>
    </main>
  );
}
