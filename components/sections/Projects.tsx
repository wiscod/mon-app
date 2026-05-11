'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { Repository } from '@/lib/types';
import { getProjectMeta } from '@/lib/projects-meta';
import { getLanguageColor } from '@/lib/github';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal, revealItem } from '../animations/Reveal';

export function Projects({ repos }: { repos: Repository[] }) {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-800"
    >
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects."
          description={`${repos.length} public projects across web, AI, DevOps, and more.`}
        />

        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
          {repos.map((repo) => (
            <ProjectRow key={repo.id} repo={repo} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

function ProjectRow({ repo }: { repo: Repository }) {
  const meta = getProjectMeta(repo.name);
  const color = getLanguageColor(repo.language);

  return (
    <motion.div variants={revealItem} className="bg-white dark:bg-neutral-950">
      <Link
        href={`/projects/${repo.name}`}
        className="group block p-8 h-full transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
              {meta.title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
              {meta.description}
            </p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0" />
        </div>

        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-900">
          {repo.language && (
            <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              />
              {repo.language}
            </div>
          )}
          {repo.stargazers_count > 0 && (
            <div className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400">
              <Star className="w-3 h-3" />
              {repo.stargazers_count}
            </div>
          )}
          {repo.homepage && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              Live
            </span>
          )}
          <span className="text-xs text-neutral-400 dark:text-neutral-600 ml-auto">
            {new Date(repo.updated_at).toLocaleDateString('en', {
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
