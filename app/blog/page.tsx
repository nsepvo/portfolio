import blog from "@/data/blog";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <main className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {blog.map(b => (
          <BlogCard key={b.slug} post={b} />
        ))}
      </div>
    </main>
  );
}
