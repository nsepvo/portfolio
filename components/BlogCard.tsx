import Link from "next/link";

export default function BlogCard({ post }: any) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="glass p-5 rounded-xl hover:scale-[1.02] transition">
        <h3>{post.title}</h3>
      </div>
    </Link>
  );
}
