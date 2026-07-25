import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "../../data/posts";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6 text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:underline">Home</Link>
        {" / "}
        <Link href="/feeds" className="hover:underline">Feeds</Link>
        {" / "}
        <span className="text-slate-700 dark:text-slate-200">{post.title}</span>
      </nav>

      <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {post.category}
      </span>
      <h1 className="text-3xl font-bold mt-1 mb-2">{post.title}</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{post.date}</p>

      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="w-full rounded-lg mb-6"
      />

      <p className="text-lg leading-relaxed">{post.content}</p>

      <Link
        href="/feeds"
        className="inline-block mt-8 text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← Back to Feeds
      </Link>
    </div>
  );
}