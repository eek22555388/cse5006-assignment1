import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
        <nav className="bg-slate-700 text-white p-3 flex gap-4 items-center dark:bg-slate-900">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/feeds" className="hover:underline">Feeds</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/settings" className="hover:underline">Settings</Link>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </nav>
  );
}