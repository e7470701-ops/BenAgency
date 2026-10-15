# BenAgency — site officiel

Site vitrine responsive de BenAgency, agence digitale au Bénin.

## Contenu

- Accueil et présentation de l'agence
- Services : sites professionnels, pages et catalogues, restauration, outils web
- Concepts visuels de démonstration
- Méthode de travail
- Articles-conseils (liens éditoriaux à compléter)
- Formulaire de demande préparant un message WhatsApp
- Design responsive, navigation mobile et accessibilité de base

## Modifier le numéro WhatsApp

Ouvrir `script.js` et remplacer la valeur vide de `WHATSAPP_NUMBER` par le numéro officiel de BenAgency au format international, chiffres uniquement, sans le signe `+` ni espaces (par exemple, préfixe Bénin `229`). Ne pas publier tant que le numéro n'a pas été vérifié.

Le formulaire n'envoie aucune donnée vers un serveur. Une fois le numéro configuré, il prépare un message et ouvre WhatsApp afin que le visiteur confirme lui-même l'envoi.

## Déploiement Cloudflare Pages

Le workflow GitHub Actions `.github/workflows/deploy.yml` déploie le contenu statique à chaque push sur `main`.

Prérequis :
1. Créer un projet Cloudflare Pages nommé `benagency` (méthode de déploiement via Direct Upload compatible avec Wrangler).
2. Ajouter les secrets GitHub Actions suivants dans Settings → Secrets and variables → Actions :
   - `CLOUDFLARE_API_TOKEN` : jeton Cloudflare avec les permissions minimales nécessaires pour déployer sur Pages.
   - `CLOUDFLARE_ACCOUNT_ID` : identifiant du compte Cloudflare.
3. Lancer le workflow depuis l'onglet Actions ou pousser un commit sur `main`.
4. Vérifier l'URL Cloudflare Pages, les images, la navigation mobile et le formulaire.

Le site est statique : aucun framework de compilation ni base de données n'est nécessaire pour cette première version.

## À finaliser avant lancement public

- Configurer et tester le numéro WhatsApp officiel.
- Remplacer ou valider les visuels de démonstration et confirmer les droits d'utilisation.
- Remplacer les concepts présentés comme exemples par de vraies réalisations uniquement avec autorisation.
- Rédiger les articles complets et relier les liens de navigation aux pages définitives.
- Vérifier le site sur mobile et ordinateur après le déploiement.
- Ajouter les coordonnées professionnelles réelles et, si nécessaire, les mentions légales et la politique de confidentialité.

## Organisation

- `index.html` : contenu et structure
- `styles.css` : identité visuelle et responsive design
- `script.js` : navigation, formulaire et interactions
- `.github/workflows/deploy.yml` : déploiement automatique Cloudflare Pages

Les sites clients et les espaces d'administration ne font pas partie de ce premier périmètre.
