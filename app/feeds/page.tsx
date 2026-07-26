"use client";

import { useState } from "react";
import Link from "next/link";
import PostCard from "../components/PostCard";
import { usePosts } from "../context/PostsContext";
import { useTheme } from "../context/ThemeContext";

export default function Feeds() {
  const { posts } = usePosts();
  const { layout } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts by title based on the search box
  const filteredPosts = searchQuery.trim()
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : posts;

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Feeds</h2>
        <Link
          href="/feeds/create"
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500"
        >
          + Create Post
        </Link>
      </div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search posts by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full mb-6 px-4 py-2 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
      />

      {filteredPosts.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400">No posts found.</p>
      ) : (
        <div
          className={
            layout === "grid"
              ? "grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col gap-4 max-w-2xl"
          }
        >
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}