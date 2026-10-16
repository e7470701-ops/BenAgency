# BenAgency — site officiel

Site vitrine responsive de BenAgency, agence d’accompagnement des entreprises par le conseil, la communication et des solutions concrètes, notamment numériques.

## Contenu

- Accueil et présentation de l'agence
- Services : diagnostic et conseils, image et communication, solutions numériques, outils et organisation
- Concepts visuels de démonstration
- Méthode de travail
- Articles-conseils (les articles complets restent à rédiger)
- Formulaire de demande préparant un message WhatsApp
- Design responsive, navigation mobile et accessibilité de base

## Vérifier le contact WhatsApp

Le numéro `2290144396710` est actuellement inscrit dans `script.js` et dans les liens WhatsApp des pages de démonstration. Il doit être confirmé comme numéro officiel de BenAgency avant diffusion publique. Le formulaire n'envoie aucune donnée vers un serveur : il prépare un message et ouvre WhatsApp afin que le visiteur le vérifie puis l'envoie lui-même.

## Déploiement automatique Cloudflare Pages

Le projet Cloudflare Pages `benagency` est relié au dépôt GitHub `e7470701-ops/BenAgency`, branche `main`. Les changements poussés sur `main` sont destinés à déclencher automatiquement le déploiement de production via l'intégration Git de Cloudflare Pages. Les branches de prévisualisation peuvent produire des déploiements de test.

URL prévue : https://benagency.pages.dev

## À finaliser avant lancement public

- Confirmer que le numéro WhatsApp configuré est bien le contact officiel de BenAgency et tester l’envoi.
- Vérifier les images distantes et confirmer les droits d'utilisation des visuels.
- Garder les exemples clairement présentés comme concepts tant qu'il ne s'agit pas de réalisations réelles autorisées.
- Rédiger les articles complets et relier les liens de navigation aux pages définitives.
- Vérifier le site sur mobile et ordinateur après le déploiement.
- Ajouter les coordonnées professionnelles réelles et, si nécessaire, les mentions légales et la politique de confidentialité.

## Organisation

- `index.html` : contenu et structure
- `styles.css` : identité visuelle et responsive design
- `script.js` : navigation, formulaire et interactions

Les sites clients et les espaces d'administration ne font pas partie de ce premier périmètre.
