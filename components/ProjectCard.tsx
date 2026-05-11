import Link from 'next/link';
import { Repository, ProjectMeta } from '@/lib/types';
import { Globe, ExternalLink, Star } from 'lucide-react';

interface ProjectCardProps {
  repo: Repository;
  meta: ProjectMeta;
  languageColor: string;
}

export function ProjectCard({ repo, meta, languageColor }: ProjectCardProps) {
  const updatedDate = new Date(repo.updated_at).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-slate-900/50 transition-shadow h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex-1 break-words">
          {repo.name}
        </h3>
        {repo.stargazers_count > 0 && (
          <div className="flex items-center gap-1 ml-2 flex-shrink-0 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded text-xs font-semibold text-yellow-700 dark:text-yellow-400">
            <Star className="w-3 h-3" fill="currentColor" />
            {repo.stargazers_count}
          </div>
        )}
      </div>

      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
        {meta.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {meta.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {repo.language && (
        <div className="flex items-center gap-2 mb-4 text-xs text-slate-600 dark:text-slate-400">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: languageColor }}
          />
          {repo.language}
        </div>
      )}

      <div className="text-xs text-slate-500 dark:text-slate-500 mb-4">
        Updated {updatedDate}
      </div>

      <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
        <Link
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm font-semibold"
        >
          <Globe className="w-4 h-4" />
          Code
        </Link>
        {repo.homepage && (
          <Link
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm font-semibold"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </Link>
        )}
      </div>
    </div>
  );
}
