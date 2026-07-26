"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { usePosts } from "../../context/PostsContext";

export default function PostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { posts, deletePost } = usePosts();
  const router = useRouter();

  const post = posts.find((p) => p.slug === slug);

  // If the post doesn't exist (e.g. just deleted), show a friendly message
  // instead of crashing — with a link back to Feeds.
  if (!post) {
    return (
      <div className="p-8 max-w-3xl mx-auto">
        <p className="mb-4">This post is no longer available.</p>
        <Link href="/feeds" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Feeds
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    router.push("/feeds");   // leave the page FIRST
    deletePost(post.slug);   // then delete
  };

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

      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-lg mb-6"
      />

      <p className="text-lg leading-relaxed">{post.content}</p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/feeds"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Feeds
        </Link>
        {post.isUserPost && (
          <button
            onClick={handleDelete}
            className="text-red-600 hover:underline"
          >
            Delete this post
          </button>
        )}
      </div>
    </div>
  );
}