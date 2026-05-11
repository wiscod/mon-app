import Link from 'next/link';
import { Container } from './ui/Container';

export function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              © {new Date().getFullYear()} wiscod. Crafted with care.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="https://github.com/wiscod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://twitter.com/Wiscod_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="/blog"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
