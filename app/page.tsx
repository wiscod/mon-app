import { fetchUserRepos, computeStats } from '@/lib/github';
import { getAllPosts } from '@/lib/blog';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Projects } from '@/components/sections/Projects';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { Contact } from '@/components/sections/Contact';

export default async function Home() {
  const repos = await fetchUserRepos();
  const stats = computeStats(repos);
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <Stats stats={stats} />
      <Projects repos={repos} />
      <BlogPreview posts={posts} />
      <Contact />
    </>
  );
}
