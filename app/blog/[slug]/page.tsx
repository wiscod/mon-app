import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="pt-32 pb-24">
      <Container size="sm">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            All posts
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-6">
            <time>
              {new Date(post.date).toLocaleDateString('en', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{post.readingTime} read</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-neutral-200 dark:border-neutral-800">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </FadeIn>
      </Container>
    </article>
  );
}
