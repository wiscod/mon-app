'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Navbar() {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity.get()})`,
      }}
    >
      <motion.div
        className="w-full"
        style={{
          backgroundColor: `var(--nav-bg)`,
        }}
      >
        <motion.div
          className="border-b border-neutral-200/0 dark:border-neutral-800/0"
          style={{ opacity: borderOpacity }}
        />
        <nav className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white"
          >
            wiscod<span className="text-neutral-400">.</span>
          </Link>

          <div className="flex items-center gap-1 md:gap-2">
            <NavLink href="/#projects">Projets</NavLink>
            <NavLink href="/#stats">Stats</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="hidden md:inline-flex px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}
