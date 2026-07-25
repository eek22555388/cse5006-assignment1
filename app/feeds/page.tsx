import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

export default function Feeds() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Feeds</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}