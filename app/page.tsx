import { fetchUserRepos } from '@/lib/github';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

export default async function Home() {
  const repos = await fetchUserRepos();

  return (
    <>
      <Hero />
      <Skills repos={repos} />
      <Projects repos={repos} />
      <Contact />
    </>
  );
}
