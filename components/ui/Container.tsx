import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Container({ children, className = '', size = 'md' }: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
  };

  return (
    <div className={`${sizes[size]} mx-auto px-6 md:px-8 ${className}`}>{children}</div>
  );
}
