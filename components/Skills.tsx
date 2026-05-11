import { Repository, Skill } from '@/lib/types';

interface SkillsProps {
  repos: Repository[];
}

export function Skills({ repos }: SkillsProps) {
  const languageStats: Record<string, number> = {};

  repos.forEach((repo) => {
    if (repo.language) {
      languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
    }
  });

  const total = Object.values(languageStats).reduce((a, b) => a + b, 0);

  const languages: Skill[] = Object.entries(languageStats)
    .map(([language, count]) => ({
      language,
      percentage: (count / total) * 100,
      repos: count,
      color: getLanguageColorValue(language),
    }))
    .sort((a, b) => b.repos - a.repos);

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Technical Skills
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Programming languages used across my projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((skill) => (
            <div key={skill.language}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-slate-900 dark:text-white">
                  {skill.language}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {skill.repos} {skill.repos === 1 ? 'project' : 'projects'} ({skill.percentage.toFixed(0)}%)
                </span>
              </div>
              <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${skill.percentage}%`,
                    backgroundColor: skill.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getLanguageColorValue(language: string): string {
  const colors: Record<string, string> = {
    TypeScript: '#3178c6',
    Python: '#3572A5',
    JavaScript: '#f1e05a',
    'C++': '#f34b7d',
    Java: '#b07219',
    MATLAB: '#e16737',
    'C#': '#239120',
  };
  return colors[language] || '#858585';
}
