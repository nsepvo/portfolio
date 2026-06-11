import blog from "@/data/blog";

export default function BlogPost({ params }: any) {
  const post = blog.find(p => p.slug === params.slug);

  if (!post) return <div>Not found</div>;

  return (
    <main className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl">{post.title}</h1>
      <article className="mt-6 text-white/70 leading-relaxed">
        {post.content}
      </article>
    </main>
  );
}
