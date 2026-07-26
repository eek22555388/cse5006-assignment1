"use client";

import PostCard from "../components/PostCard";
import { posts } from "../data/posts";
import { useTheme } from "../context/ThemeContext";

export default function Feeds() {
  const { layout } = useTheme();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Feeds</h2>
      <div
        className={
          layout === "grid"
            ? "grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            : "flex flex-col gap-4 max-w-2xl"
        }
      >
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}