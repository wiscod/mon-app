import { FadeIn } from '../animations/FadeIn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && (
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
            {eyebrow}
          </p>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
