# Portfolio Développeuse Web (React 19 / Vite / Tailwind)

## Présentation
Ce projet est un portfolio professionnel développé avec React 19 et Vite, stylisé avec Tailwind CSS, et intégrant un formulaire de contact complet grâce à React Hook Form, Zod et EmailJS.
Il présente mon parcours, mes compétences, mes projets, ainsi que mes informations de contact.

## Technologies utilisées
Frontend :
- React 19
- Vite (build ultra rapide)
- Tailwind CSS 4
- Lucide React (icônes modernes)
- React Hook Form (gestion du formulaire)
- Zod (validation typée)
- EmailJS (envoi d’e-mails côté client)

Configuration : Variables d’environnement via .env

Déploiement sur Vercel

## Formulaire de contact
Le formulaire utilise :
- React Hook Form pour la gestion des champs
- Zod pour la validation stricte
- EmailJS pour l’envoi des messages
- Gestion des états : loading, success, error
- Validation en temps réel (mode: "onChange")
- Variables d’environnement nécessaires :
Créer un fichier .env à la racine :

VITE_EMAILJS_SERVICE_ID=xxxx
VITE_EMAILJS_TEMPLATE_ID=xxxx
VITE_EMAILJS_PUBLIC_KEY=xxxx

Les variables doivent commencer par VITE_ pour être accessibles dans Vite.

## Installation

1. Cloner le projet
git clone https://github.com/ton-repo/portfolio.git
cd portfolio

2. Installer les dépendances : npm install
3. Ajouter les variables d’environnement
Créer un fichier .env :

VITE_EMAILJS_SERVICE_ID=xxxx
VITE_EMAILJS_TEMPLATE_ID=xxxx
VITE_EMAILJS_PUBLIC_KEY=xxxx

4. Lancer le projet en local : npm run dev

## Styles
- Le projet utilise Tailwind CSS 4 avec une configuration personnalisée :
- Palette de couleurs adaptée au portfolio
- Typographies personnalisées
- Layout responsive (mobile-first)
- Composants réutilisables

## Déploiement
Le projet est déployé sur Vercel.

Chaque push sur la branche principale déclenche un déploiement automatique.

## Sécurité
- Les clés EmailJS sont stockées dans un fichier .env
- Aucun secret n’est exposé dans le code
- Le formulaire est validé côté client avec Zod

## Optimisation & Accessibilité

- Structure HTML sémantique (header, main, footer)
- Audit Lighthouse : bonnes pratiques, performance, SEO
- Balises meta optimisées (title, description)
- Navigation fluide et responsive

## Auteur
Nessrine — Développeuse Web Front-End  
Passionnée par l’intégration web, le design moderne, et les interfaces performantes.

## Contact
Pour toute collaboration ou demande professionnelle :
=> Via le formulaire du site



