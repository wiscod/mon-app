import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'wiscod — Focusing on building thoughtful software',
    template: '%s · wiscod',
  },
  description:
    'Developer building thoughtful software, one focused project at a time. Web, AI, DevOps.',
  openGraph: {
    title: 'wiscod — Portfolio',
    description: 'Developer building thoughtful software, one focused project at a time.',
    type: 'website',
    url: 'https://wiscod.dev',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@Wiscod_',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
