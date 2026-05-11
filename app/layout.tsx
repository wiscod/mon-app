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
    default: 'Edy — Sécurité réfléchie, perspective de développeur',
    template: '%s · Edy',
  },
  description:
    'Analyste SOC et étudiant en Master Cybersécurité. Profil offensif à travers les CTFs. Sécurité applicative avec une perspective de développeur.',
  openGraph: {
    title: 'Edy — Portfolio Cybersécurité',
    description:
      'Analyste SOC et étudiant en Master Cybersécurité. Sécurité applicative avec une perspective de développeur.',
    type: 'website',
    url: 'https://wiscod.dev',
    locale: 'fr_FR',
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
    <html lang="fr" suppressHydrationWarning className={inter.variable}>
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
