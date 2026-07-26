import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-3">Welcome 👋</h2>
      <p className="text-lg mb-6 text-slate-600 dark:text-slate-300">
        This is the frontend for an RSS Server feeding into an LMS — a place
        where content from around the web will one day flow into a single,
        easy-to-scan feed for learners.
      </p>

      <p className="mb-8">
        Right now this is the frontend experience: browse sample posts, switch
        themes, and see how content will be organised. Pick a starting point
        below.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/feeds"
          className="block p-5 rounded-lg border border-slate-300 dark:border-slate-600 hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-semibold mb-1">📰 Explore the Feeds</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Browse sample posts, search by title, and create your own.
          </p>
        </Link>

        <Link
          href="/about"
          className="block p-5 rounded-lg border border-slate-300 dark:border-slate-600 hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-semibold mb-1">ℹ️ About the Project</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Learn what this is, and where the RSS and LMS pieces fit in.
          </p>
        </Link>

        <Link
          href="/settings"
          className="block p-5 rounded-lg border border-slate-300 dark:border-slate-600 hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-semibold mb-1">⚙️ Settings</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Switch between light and dark mode, and change the feed layout.
          </p>
        </Link>

        <div className="block p-5 rounded-lg bg-slate-100 dark:bg-slate-700">
          <h3 className="text-lg font-semibold mb-1">🚧 Coming in Stage 2</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Live RSS feeds will replace the sample content, flowing straight
            into this same interface.
          </p>
        </div>
      </div>
    </div>
  );
}