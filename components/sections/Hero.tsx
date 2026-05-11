'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Container } from '../ui/Container';

export function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-32">
      <Container size="sm">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Disponible pour vos projets
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-5xl md:text-7xl font-semibold tracking-tighter text-neutral-900 dark:text-white leading-[1.05] mb-8"
        >
          Sécurité réfléchie,
          <br />
          perspective de
          <br />
          <span className="text-neutral-400 dark:text-neutral-600">développeur.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-12"
        >
          Étudiant en Master Cybersécurité à l&apos;ESTIAM, j&apos;ai acquis une première expérience concrète en tant qu&apos;analyste SOC chez Ziwit — deux stages de six mois à surveiller, analyser et répondre à des incidents réels. En parallèle, je développe un profil offensif actif à travers les CTFs et les plateformes HackTheBox, TryHackMe et PicoCTF. Mon background en développement web me permet d&apos;aborder la sécurité applicative avec les yeux d&apos;un développeur qui sait exactement où chercher.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Voir mes projets
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Me contacter
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-32 text-neutral-400 dark:text-neutral-600 text-sm flex items-center gap-2"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
          Faites défiler pour explorer
        </motion.div>
      </Container>
    </section>
  );
}
