export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  homepage: string | null;
  updated_at: string;
  created_at: string;
  pushed_at: string;
  fork: boolean;
  topics: string[];
  size: number;
  open_issues_count: number;
}

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  featured?: boolean;
  highlights?: string[];
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  tags: string[];
  readingTime: string;
}

export interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  languages: { name: string; count: number; percentage: number; color: string }[];
  oldestRepo: string;
  newestRepo: string;
  mostStarredRepo: { name: string; stars: number };
  yearsActive: number;
}
