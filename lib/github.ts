import { Repository } from './types';

export async function fetchUserRepos(): Promise<Repository[]> {
  try {
    const response = await fetch(
      'https://api.github.com/users/wiscod/repos?per_page=100&sort=updated',
      {
        next: { revalidate: 3600 },
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: Repository[] = await response.json();

    // Filter out forks and mon-app itself
    return repos.filter(
      (repo) => !repo.fork && repo.name !== 'mon-app'
    );
  } catch (error) {
    console.error('Failed to fetch repositories:', error);
    return [];
  }
}

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  'C++': '#f34b7d',
  Java: '#b07219',
  MATLAB: '#e16737',
  'C#': '#239120',
  Shell: '#89e051',
  HTML: '#e34c26',
  CSS: '#563d7c',
};

export function getLanguageColor(language: string | null): string {
  if (!language) return '#858585';
  return languageColors[language] || '#858585';
}
