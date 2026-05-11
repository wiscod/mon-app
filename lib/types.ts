export interface Repository {
  id: number;
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stargazers_count: number;
  homepage: string | null;
  updated_at: string;
  fork: boolean;
}

export interface ProjectMeta {
  description: string;
  tags: string[];
}

export interface Skill {
  language: string;
  percentage: number;
  color: string;
  repos: number;
}
