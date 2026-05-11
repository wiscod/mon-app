---
title: "Comment j'ai construit ce portfolio"
date: "2026-05-11"
excerpt: "Retour d'expérience sur la construction d'un portfolio moderne avec Next.js, Tailwind et Framer Motion."
tags: ["Next.js", "Tailwind", "Portfolio"]
---

# Comment j'ai construit ce portfolio

Construire un portfolio est un exercice à la fois personnel et technique. Voici les choix que j'ai faits pour ce site.

## Stack technique

- **Next.js 15** avec App Router pour le rendu statique
- **TypeScript** pour la sécurité du typage
- **Tailwind CSS** pour le design system
- **Framer Motion** pour les animations subtiles
- **API GitHub** pour récupérer les projets en temps réel

## Philosophie du design

J'ai voulu un design **minimaliste et épuré**, dans la lignée de ce que font Apple, Stripe ou Linear. L'idée : laisser respirer le contenu, soigner la typographie, et utiliser le mouvement avec parcimonie.

## Les animations

Toutes les animations sont déclenchées au scroll via `useInView` de Framer Motion. Elles sont volontairement **discrètes** : fade-in, slide-up, jamais plus de 600ms.

## La suite

Je compte ajouter :

- Une vraie newsletter
- Des études de cas par projet
- Un système de filtre par technologie

Merci pour la lecture !
