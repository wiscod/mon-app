import { Repository, GitHubStats } from './types';

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  'C++': '#f34b7d',
  'C#': '#178600',
  Java: '#b07219',
  MATLAB: '#e16737',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Go: '#00ADD8',
  Rust: '#dea584',
};

export function getLanguageColor(language: string | null): string {
  if (!language) return '#94a3b8';
  return LANGUAGE_COLORS[language] || '#94a3b8';
}

export async function fetchUserRepos(): Promise<Repository[]> {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      'https://api.github.com/users/wiscod/repos?per_page=100&sort=updated',
      { headers, next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`);
      return [];
    }

    const repos: Repository[] = await response.json();
    return repos.filter((r) => !r.fork && r.name !== 'mon-app');
  } catch (error) {
    console.error('Failed to fetch repos:', error);
    return [];
  }
}

export function computeStats(repos: Repository[]): GitHubStats {
  if (repos.length === 0) {
    return {
      totalRepos: 0,
      totalStars: 0,
      totalForks: 0,
      languages: [],
      oldestRepo: '',
      newestRepo: '',
      mostStarredRepo: { name: '', stars: 0 },
      yearsActive: 0,
    };
  }

  const languageCounts: Record<string, number> = {};
  repos.forEach((r) => {
    if (r.language) {
      languageCounts[r.language] = (languageCounts[r.language] || 0) + 1;
    }
  });

  const totalWithLang = Object.values(languageCounts).reduce((a, b) => a + b, 0);
  const languages = Object.entries(languageCounts)
    .map(([name, count]) => ({
      name,
      count,
      percentage: totalWithLang > 0 ? (count / totalWithLang) * 100 : 0,
      color: getLanguageColor(name),
    }))
    .sort((a, b) => b.count - a.count);

  const sortedByDate = [...repos].sort(
    (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  const mostStarred = [...repos].sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  )[0];

  const oldestYear = new Date(sortedByDate[0].created_at).getFullYear();
  const newestYear = new Date(sortedByDate[sortedByDate.length - 1].created_at).getFullYear();

  return {
    totalRepos: repos.length,
    totalStars: repos.reduce((sum, r) => sum + r.stargazers_count, 0),
    totalForks: repos.reduce((sum, r) => sum + r.forks_count, 0),
    languages,
    oldestRepo: sortedByDate[0].name,
    newestRepo: sortedByDate[sortedByDate.length - 1].name,
    mostStarredRepo: {
      name: mostStarred?.name || '',
      stars: mostStarred?.stargazers_count || 0,
    },
    yearsActive: newestYear - oldestYear + 1,
  };
}

export async function fetchRepoBySlug(slug: string): Promise<Repository | null> {
  const repos = await fetchUserRepos();
  return repos.find((r) => r.name === slug) || null;
}

export async function fetchRepoReadme(name: string): Promise<string | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/wiscod/${name}/readme`,
      {
        headers: { Accept: 'application/vnd.github.raw' },
        next: { revalidate: 3600 },
      }
    );
    if (!response.ok) return null;
    return await response.text();
  } catch {
    return null;
  }
}
