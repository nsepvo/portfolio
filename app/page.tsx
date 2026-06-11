import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsPreview from "@/components/ProjectsPreview";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function Home() {
  return (
    <main>
      <ParallaxBackground />
      <Hero />
      <About />
      <ProjectsPreview />
      <BlogPreview />
      <Contact />
    </main>
  );
}
