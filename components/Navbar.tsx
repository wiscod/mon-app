import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-slate-900 dark:text-white">
          wiscod
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
