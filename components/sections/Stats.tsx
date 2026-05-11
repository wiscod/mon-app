'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { GitHubStats } from '@/lib/types';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FadeIn } from '../animations/FadeIn';

function CountUp({ end, duration = 1.2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats({ stats }: { stats: GitHubStats }) {
  const items = [
    { label: 'Dépôts publics', value: stats.totalRepos, suffix: '' },
    { label: 'Années sur GitHub', value: stats.yearsActive, suffix: '+' },
    { label: 'Langages utilisés', value: stats.languages.length, suffix: '' },
    { label: 'Étoiles obtenues', value: stats.totalStars, suffix: '' },
  ];

  return (
    <section id="stats" className="py-24 md:py-32 border-t border-neutral-200 dark:border-neutral-800">
      <Container>
        <SectionHeading
          eyebrow="En chiffres"
          title="Un aperçu de mon travail."
          description="Données GitHub publiques, récupérées au build et rafraîchies toutes les heures."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08}>
              <div className="border-l border-neutral-200 dark:border-neutral-800 pl-6">
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">
                  <CountUp end={item.value} suffix={item.suffix} />
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  {item.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Language breakdown */}
        <div className="mt-20">
          <FadeIn>
            <h3 className="text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-8">
              Répartition par langage
            </h3>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="h-2 rounded-full overflow-hidden flex bg-neutral-100 dark:bg-neutral-900">
              {stats.languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  style={{ backgroundColor: lang.color }}
                  className="h-full"
                  title={`${lang.name}: ${lang.percentage.toFixed(1)}%`}
                />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {stats.languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2 text-sm">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-neutral-700 dark:text-neutral-300">{lang.name}</span>
                  <span className="text-neutral-400 dark:text-neutral-600">
                    {lang.percentage.toFixed(0)}%
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
