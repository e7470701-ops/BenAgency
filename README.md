# BenAgency — site officiel

Site vitrine responsive de BenAgency, agence digitale au Bénin.

## Contenu

- Accueil et présentation de l'agence
- Services : sites professionnels, pages et catalogues, restauration, outils web
- Concepts visuels de démonstration
- Méthode de travail
- Articles-conseils (les articles complets restent à rédiger)
- Formulaire de demande préparant un message WhatsApp
- Design responsive, navigation mobile et accessibilité de base

## Modifier le numéro WhatsApp

Ouvrir `script.js` et remplacer la valeur vide de `WHATSAPP_NUMBER` par le numéro officiel de BenAgency au format international, chiffres uniquement, sans le signe `+` ni espaces (par exemple, préfixe Bénin `229`). Ne pas annoncer le site comme prêt pour les demandes WhatsApp tant que le numéro n'a pas été vérifié.

Le formulaire n'envoie aucune donnée vers un serveur. Une fois le numéro configuré, il prépare un message et ouvre WhatsApp afin que le visiteur confirme lui-même l'envoi.

## Déploiement automatique Cloudflare Pages

Le projet Cloudflare Pages `benagency` est relié au dépôt GitHub `e7470701-ops/BenAgency`, branche `main`. Les changements poussés sur `main` sont destinés à déclencher automatiquement le déploiement de production via l'intégration Git de Cloudflare Pages. Les branches de prévisualisation peuvent produire des déploiements de test.

URL prévue : https://benagency.pages.dev

## À finaliser avant lancement public

- Configurer et tester le numéro WhatsApp officiel.
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
