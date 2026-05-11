import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Star, GitFork, Eye, Calendar } from 'lucide-react';
import { fetchUserRepos, fetchRepoBySlug, getLanguageColor } from '@/lib/github';
import { getProjectMeta } from '@/lib/projects-meta';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';

export async function generateStaticParams() {
  const repos = await fetchUserRepos();
  return repos.map((r) => ({ slug: r.name }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const meta = getProjectMeta(slug);
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const repo = await fetchRepoBySlug(slug);

  if (!repo) notFound();

  const meta = getProjectMeta(repo.name);
  const color = getLanguageColor(repo.language);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <article className="pt-32 pb-24">
      <Container size="sm">
        <FadeIn>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux projets
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {repo.language && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-xs text-neutral-700 dark:text-neutral-300">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
                {repo.language}
              </div>
            )}
            {meta.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-xs text-neutral-700 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-neutral-900 dark:text-white mb-6">
            {meta.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12">
            {meta.longDescription || meta.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="flex flex-wrap items-center gap-3 mb-16">
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Voir le code
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            {repo.homepage && (
              <Link
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                Démo en ligne
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        </FadeIn>

        {/* Stats grid */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden mb-16">
            <StatCell
              icon={<Star className="w-4 h-4" />}
              label="Étoiles"
              value={repo.stargazers_count}
            />
            <StatCell
              icon={<GitFork className="w-4 h-4" />}
              label="Forks"
              value={repo.forks_count}
            />
            <StatCell
              icon={<Eye className="w-4 h-4" />}
              label="Observateurs"
              value={repo.watchers_count}
            />
            <StatCell
              icon={<Calendar className="w-4 h-4" />}
              label="Mis à jour"
              value={formatDate(repo.updated_at)}
              isText
            />
          </div>
        </FadeIn>

        {/* Highlights */}
        {meta.highlights && meta.highlights.length > 0 && (
          <FadeIn delay={0.35}>
            <div className="mb-16">
              <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6">
                Points forts
              </h2>
              <ul className="space-y-3">
                {meta.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        )}

        {/* Metadata */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-t border-neutral-200 dark:border-neutral-800">
            <MetaItem label="Créé le" value={formatDate(repo.created_at)} />
            <MetaItem label="Dernier push" value={formatDate(repo.pushed_at)} />
            <MetaItem label="Issues ouvertes" value={repo.open_issues_count.toString()} />
            <MetaItem
              label="Taille"
              value={`${(repo.size / 1024).toFixed(1)} Mo`}
            />
          </div>
        </FadeIn>
      </Container>
    </article>
  );
}

function StatCell({
  icon,
  label,
  value,
  isText = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  isText?: boolean;
}) {
  return (
    <div className="bg-white dark:bg-neutral-950 p-6">
      <div className="text-neutral-400 dark:text-neutral-600 mb-3">{icon}</div>
      <div
        className={
          isText
            ? 'text-sm text-neutral-900 dark:text-white font-medium'
            : 'text-3xl font-semibold text-neutral-900 dark:text-white'
        }
      >
        {value}
      </div>
      <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{label}</div>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
        {label}
      </div>
      <div className="text-base text-neutral-900 dark:text-white">{value}</div>
    </div>
  );
}
