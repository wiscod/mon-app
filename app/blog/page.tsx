import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';

export const metadata = {
  title: 'Blog',
  description: 'Notes, essais et tutoriels par wiscod.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-24">
      <Container size="sm">
        <FadeIn>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
            Écrits
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-neutral-900 dark:text-white mb-6">
            Blog
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-16 max-w-2xl">
            Réflexions sur le développement web, l&apos;IA, la concentration et
            l&apos;art de construire des logiciels.
          </p>
        </FadeIn>

        <div className="divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-b border-neutral-200 dark:border-neutral-800">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={0.25 + i * 0.05}>
              <Link href={`/blog/${post.slug}`} className="group block py-8">
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
                    <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0 mt-2" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </div>
  );
}
