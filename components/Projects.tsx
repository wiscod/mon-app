import { Repository, Skill } from '@/lib/types';
import { getProjectMeta } from '@/lib/projects-meta';
import { getLanguageColor } from '@/lib/github';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  repos: Repository[];
}

export function Projects({ repos }: ProjectsProps) {
  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          {repos.length} projects showcasing my work across multiple technologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              repo={repo}
              meta={getProjectMeta(repo.name)}
              languageColor={getLanguageColor(repo.language)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
