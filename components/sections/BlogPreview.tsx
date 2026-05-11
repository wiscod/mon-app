'use client';

import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Post } from '@/lib/types';
import { Container } from '../ui/Container';
import { Reveal, revealItem } from '../animations/Reveal';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';

export function BlogPreview({ posts }: { posts: Post[] }) {
  const displayed = posts.slice(0, 3);

  return (
    <section
      id="blog"
      className="py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-800"
    >
      <Container>
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
              Écrits
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Sur le blog.
            </h2>
          </div>
          <FadeIn>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Tous les articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        <Reveal className="divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-b border-neutral-200 dark:border-neutral-800">
          {displayed.map((post) => (
            <PostRow key={post.slug} post={post} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

function PostRow({ post }: { post: Post }) {
  return (
    <motion.div variants={revealItem}>
      <Link
        href={`/blog/${post.slug}`}
        className="group block py-8 transition-colors"
      >
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
              <time>
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime} de lecture</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
              {post.title}
            </h3>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0 mt-2" />
        </div>
      </Link>
    </motion.div>
  );
}
