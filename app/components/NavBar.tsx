import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";

export default function NavBar() {
  return (
    <nav className="bg-slate-700 text-white p-3 flex gap-4 items-center dark:bg-slate-900">
          {/* Desktop links: hidden on mobile, shown md and up */}
          <div className="hidden md:flex gap-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/feeds" className="hover:underline">Feeds</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/settings" className="hover:underline">Settings</Link>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <ThemeToggle />
            {/* Hamburger: shown on mobile, hidden md and up */}
            <div className="md:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </nav>
  );
}