---
title: "Déployer Django sur Kubernetes : ce que j'ai appris"
date: "2026-04-20"
excerpt: "Retour sur un projet de déploiement Django/Kubernetes : architecture, pièges courants, et bonnes pratiques."
tags: ["Django", "Kubernetes", "DevOps"]
---

# Déployer Django sur Kubernetes

Kubernetes a une réputation : puissant mais complexe. Voici les leçons retenues après avoir mis Django en production sur un cluster.

## Architecture

Une stack typique comprend :

- Un **Deployment** pour l'app Django (réplicas, rolling updates)
- Un **Service** ClusterIP pour exposer l'app en interne
- Un **Ingress** (nginx) pour le trafic public
- Un **PVC** pour PostgreSQL
- Des **Secrets** pour les variables sensibles

## Pièges courants

1. **Oublier `ALLOWED_HOSTS`** : sans ça, Django renvoie du 400.
2. **Migrations** : utiliser un Job Kubernetes, pas un init container.
3. **Static files** : déléguer à un CDN, pas servir depuis Django.

## Conclusion

Kubernetes ajoute de la complexité, mais en échange : haute disponibilité, scalabilité, et reproductibilité. Pour un projet sérieux, ça en vaut la peine.
