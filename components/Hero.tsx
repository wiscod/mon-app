import Link from 'next/link';
import { Globe, X } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-[500px] flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          wiscod
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8">
          Focusing on building amazing projects
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Full-stack developer passionate about web technologies, AI, and creative solutions.
          Explore my work across multiple languages and domains.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <Link
            href="https://github.com/wiscod"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Globe className="w-5 h-5" />
            GitHub
          </Link>
          <Link
            href="https://twitter.com/Wiscod_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            <X className="w-5 h-5" />
            Twitter
          </Link>
        </div>

        <div className="inline-block px-4 py-2 bg-slate-200 dark:bg-slate-800 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300">
          👇 Scroll to see my projects
        </div>
      </div>
    </section>
  );
}
