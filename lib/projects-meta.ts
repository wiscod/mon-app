import { ProjectMeta } from './types';

export const projectsMeta: Record<string, ProjectMeta> = {
  Max_Jeune_Monitor: {
    slug: 'Max_Jeune_Monitor',
    title: 'Max Jeune Monitor',
    description: 'Plateforme de monitoring en temps réel pour le suivi de jeûne intermittent.',
    longDescription:
      'Une application moderne construite avec Next.js permettant de suivre des sessions de jeûne, visualiser des statistiques et synchroniser les données entre appareils.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    featured: true,
    highlights: [
      'Interface temps réel avec WebSocket',
      'Déploiement Vercel',
      'PWA installable',
    ],
  },
  'Planning-semaine': {
    slug: 'Planning-semaine',
    title: 'Planning Semaine',
    description: 'Outil Python de planification hebdomadaire en ligne de commande.',
    longDescription:
      'Un outil léger pour organiser sa semaine directement depuis le terminal, avec persistance et exports.',
    tags: ['Python', 'CLI', 'Productivity'],
  },
  Domos: {
    slug: 'Domos',
    title: 'Domos',
    description: 'Projet C++ pour la gestion domotique embarquée.',
    tags: ['C++', 'IoT', 'Hardware'],
  },
  'Bible-reading': {
    slug: 'Bible-reading',
    title: 'Bible Reading',
    description: "Application web légère pour lire et suivre l'avancement de lecture biblique.",
    tags: ['JavaScript', 'Web App'],
  },
  NewLifeClean: {
    slug: 'NewLifeClean',
    title: 'New Life Clean',
    description: "Site vitrine pour une activité de services de nettoyage.",
    tags: ['JavaScript', 'Vercel', 'Landing Page'],
    featured: true,
  },
  django_kubernetes_project: {
    slug: 'django_kubernetes_project',
    title: 'Django × Kubernetes',
    description: "Déploiement d'une application Django sur Kubernetes avec manifests complets.",
    longDescription:
      'Un projet de démonstration combinant Django, PostgreSQL, et Kubernetes (Deployments, Services, Ingress, Secrets) pour un déploiement production-ready.',
    tags: ['Python', 'Django', 'Kubernetes', 'DevOps'],
    highlights: [
      'Manifests YAML complets',
      'PostgreSQL persistant',
      'CI/CD ready',
    ],
  },
  usersmanagementsystem: {
    slug: 'usersmanagementsystem',
    title: 'Users Management System',
    description: 'Système Java pour la gestion des utilisateurs et authentification.',
    tags: ['Java', 'Backend', 'Auth'],
  },
  scripts: {
    slug: 'scripts',
    title: 'Scripts Collection',
    description: "Collection de scripts Python d'automatisation et utilitaires.",
    tags: ['Python', 'Automation'],
  },
  'django-app': {
    slug: 'django-app',
    title: 'Django App',
    description: 'Application Django classique avec modèles et vues.',
    tags: ['Python', 'Django'],
  },
  Koume_teaching: {
    slug: 'Koume_teaching',
    title: 'Koume Teaching',
    description: "Plateforme d'apprentissage interactif déployée sur Vercel.",
    tags: ['JavaScript', 'Education', 'Vercel'],
    featured: true,
  },
  IA_microstrip_antena: {
    slug: 'IA_microstrip_antena',
    title: 'IA Microstrip Antenna',
    description: "Projet de recherche MATLAB sur l'optimisation d'antennes microstrip via IA.",
    longDescription:
      "Recherche académique appliquant des algorithmes d'intelligence artificielle pour l'optimisation des paramètres d'antennes microstrip.",
    tags: ['MATLAB', 'AI', 'Research', 'Engineering'],
  },
  'Fasting-tracking-Marae': {
    slug: 'Fasting-tracking-Marae',
    title: 'Fasting Tracking API',
    description: "API TypeScript pour le suivi de sessions de jeûne intermittent.",
    tags: ['TypeScript', 'API', 'Health', 'Vercel'],
    featured: true,
  },
  'inventory-manager': {
    slug: 'inventory-manager',
    title: 'Inventory Manager',
    description: "Système de gestion d'inventaire avec interface responsive.",
    tags: ['JavaScript', 'Inventory', 'Vercel'],
    featured: true,
  },
};

export function getProjectMeta(repoName: string): ProjectMeta {
  return (
    projectsMeta[repoName] || {
      slug: repoName,
      title: repoName.replace(/[-_]/g, ' '),
      description: 'Découvrez ce projet sur GitHub.',
      tags: ['Open Source'],
    }
  );
}
