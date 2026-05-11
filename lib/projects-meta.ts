import { ProjectMeta } from './types';

export const projectsMeta: Record<string, ProjectMeta> = {
  'Max_Jeune_Monitor': {
    description: 'Application de monitoring en temps réel pour le suivi des performances.',
    tags: ['Next.js', 'TypeScript', 'Real-time'],
  },
  'Planning-semaine': {
    description: 'Outil CLI de planification hebdomadaire pour organiser vos tâches.',
    tags: ['Python', 'CLI', 'Productivity'],
  },
  'Domos': {
    description: 'Projet C++ ancien pour la gestion de domotique.',
    tags: ['C++', 'IoT', 'Legacy'],
  },
  'Bible-reading': {
    description: 'Application simple pour lire et suivre des passages bibliques.',
    tags: ['JavaScript', 'Web App'],
  },
  'NewLifeClean': {
    description: 'Plateforme de services de nettoyage avec interface moderne.',
    tags: ['JavaScript', 'Web', 'Services'],
  },
  'django_kubernetes_project': {
    description: 'Exemple de déploiement d\'une application Django sur Kubernetes.',
    tags: ['Python', 'Django', 'Kubernetes', 'DevOps'],
  },
  'usersmanagementsystem': {
    description: 'Système de gestion des utilisateurs en Java avec authentification.',
    tags: ['Java', 'Backend', 'Security'],
  },
  'scripts': {
    description: 'Collection de scripts utilitaires pour l\'automatisation.',
    tags: ['Python', 'Automation', 'Utilities'],
  },
  'django-app': {
    description: 'Application Django classique avec gestion de modèles de base.',
    tags: ['Python', 'Django', 'Web'],
  },
  'Koume_teaching': {
    description: 'Plateforme d\'apprentissage interactif avec contenu éducatif.',
    tags: ['JavaScript', 'Education', 'Web'],
  },
  'IA_microstrip_antena': {
    description: 'Projet de recherche en IA pour l\'optimisation de microstrip antennes.',
    tags: ['MATLAB', 'AI', 'Research', 'Engineering'],
  },
  'Fasting-tracking-Marae': {
    description: 'API et application pour suivre les sessions de jeûne intermittent.',
    tags: ['TypeScript', 'API', 'Health', 'Personal'],
  },
  'inventory-manager': {
    description: 'Système de gestion d\'inventaire avec interface responsive.',
    tags: ['JavaScript', 'Inventory', 'Web App'],
  },
};

export function getProjectMeta(repoName: string): ProjectMeta {
  return (
    projectsMeta[repoName] || {
      description: `Découvrez ce projet sur GitHub.`,
      tags: ['Project'],
    }
  );
}
