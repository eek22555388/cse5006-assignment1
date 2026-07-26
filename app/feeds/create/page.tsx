"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePosts } from "../../context/PostsContext";

export default function CreatePost() {
  const { addPost } = usePosts();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) {
      alert("Please enter a title.");
      return;
    }
    addPost({
      title,
      category: category || "General",
      summary,
      content,
      image:
        image.trim() ||
        "https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png",
    });
    router.push("/feeds");
  };

  return (
    <div className="p-8 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Create Post</h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-2 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="px-4 py-2 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
        />
        <input
          type="text"
          placeholder="Short summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="px-4 py-2 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
        />
        <textarea
          placeholder="Full content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          className="px-4 py-2 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500 self-start"
        >
          Publish Post
        </button>
      </div>
    </div>
  );
}