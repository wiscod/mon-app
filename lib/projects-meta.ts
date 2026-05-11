import { ProjectMeta } from './types';

export const projectsMeta: Record<string, ProjectMeta> = {
  Max_Jeune_Monitor: {
    slug: 'Max_Jeune_Monitor',
    title: 'Max Jeune Monitor',
    description: 'Plateforme de monitoring en temps réel pour le suivi du jeûne intermittent.',
    longDescription:
      "Une application moderne construite avec Next.js permettant de suivre des sessions de jeûne, visualiser des statistiques et synchroniser les données entre appareils.",
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    featured: true,
    highlights: [
      'Interface temps réel avec WebSocket',
      'Déployé sur Vercel',
      'PWA installable',
    ],
  },
  'Planning-semaine': {
    slug: 'Planning-semaine',
    title: 'Planning Semaine',
    description: 'Outil Python de planification hebdomadaire en ligne de commande.',
    longDescription:
      "Un outil léger pour organiser sa semaine directement depuis le terminal, avec persistance et exports.",
    tags: ['Python', 'CLI', 'Productivité'],
  },
  Domos: {
    slug: 'Domos',
    title: 'Domos',
    description: 'Projet C++ pour la gestion domotique embarquée.',
    tags: ['C++', 'IoT', 'Matériel'],
  },
  'Bible-reading': {
    slug: 'Bible-reading',
    title: 'Bible Reading',
    description: "Application web légère pour lire et suivre l'avancement de lecture biblique.",
    tags: ['JavaScript', 'Web'],
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
      "Un projet de démonstration combinant Django, PostgreSQL et Kubernetes (Deployments, Services, Ingress, Secrets) pour un déploiement prêt pour la production.",
    tags: ['Python', 'Django', 'Kubernetes', 'DevOps'],
    highlights: [
      'Manifests YAML complets',
      'PostgreSQL persistant',
      'Prêt pour CI/CD',
    ],
  },
  usersmanagementsystem: {
    slug: 'usersmanagementsystem',
    title: 'Gestion des utilisateurs',
    description: 'Système Java pour la gestion des utilisateurs et authentification.',
    tags: ['Java', 'Backend', 'Auth'],
  },
  scripts: {
    slug: 'scripts',
    title: 'Collection de scripts',
    description: "Collection de scripts Python d'automatisation et utilitaires.",
    tags: ['Python', 'Automatisation'],
  },
  'django-app': {
    slug: 'django-app',
    title: 'Application Django',
    description: 'Application Django classique avec modèles et vues.',
    tags: ['Python', 'Django'],
  },
  Koume_teaching: {
    slug: 'Koume_teaching',
    title: 'Koume Teaching',
    description: "Plateforme d'apprentissage interactif déployée sur Vercel.",
    tags: ['JavaScript', 'Éducation', 'Vercel'],
    featured: true,
  },
  IA_microstrip_antena: {
    slug: 'IA_microstrip_antena',
    title: 'IA & Antenne Microstrip',
    description: "Projet de recherche MATLAB sur l'optimisation d'antennes microstrip par IA.",
    longDescription:
      "Recherche académique appliquant des algorithmes d'intelligence artificielle pour l'optimisation des paramètres d'antennes microstrip.",
    tags: ['MATLAB', 'IA', 'Recherche', 'Ingénierie'],
  },
  'Fasting-tracking-Marae': {
    slug: 'Fasting-tracking-Marae',
    title: 'Suivi de jeûne — API',
    description: "API TypeScript pour le suivi de sessions de jeûne intermittent.",
    tags: ['TypeScript', 'API', 'Santé', 'Vercel'],
    featured: true,
  },
  'inventory-manager': {
    slug: 'inventory-manager',
    title: 'Gestionnaire d’inventaire',
    description: "Système de gestion d'inventaire avec interface responsive.",
    tags: ['JavaScript', 'Inventaire', 'Vercel'],
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
