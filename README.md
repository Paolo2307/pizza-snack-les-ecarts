# Pizza Snack Les Écarts — site vitrine

Site statique (HTML / CSS / JS, sans framework) pour la pizzeria familiale
« Pizza Snack Les Écarts » à Maizières-lès-Metz. Reprend le contenu du site
Wix existant (histoire, carte, livraison, où nous trouver) dans un design
plus moderne, rapide et responsive.

## Structure du projet

```
pizza-site/
├── index.html          Accueil (hero, histoire, atouts, infos pratiques)
├── menu.html            Carte complète, avec onglets par catégorie
├── livraison.html        Conditions de livraison
├── contact.html         Adresse, horaires, carte Google Maps
├── assets/
│   ├── css/style.css     Toute la mise en forme du site
│   └── js/main.js        Menu mobile + onglets de la carte
└── README.md
```

Aucune installation, aucun serveur, aucune base de données : ce sont des
fichiers statiques, donc très rapides et gratuits à héberger.

## Mettre le site en ligne (GitHub + Vercel)

### 1. Créer le dépôt GitHub

1. Va sur [github.com](https://github.com) et crée un compte si besoin.
2. Clique sur **New repository**, donne-lui un nom (ex. `pizza-les-ecarts`),
   laisse-le en **Public** ou **Private**, ne coche aucune case
   d'initialisation (pas de README auto), puis **Create repository**.
3. Sur ton ordinateur, dans le dossier `pizza-site`, exécute :

```bash
git init
git add .
git commit -m "Site Pizza Snack Les Écarts"
git branch -M main
git remote add origin https://github.com/TON-COMPTE/pizza-les-ecarts.git
git push -u origin main
```

(Remplace `TON-COMPTE` par ton nom d'utilisateur GitHub et l'URL par celle
donnée par GitHub après la création du dépôt.)

### 2. Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com) et connecte-toi avec ton compte
   GitHub.
2. Clique sur **Add New → Project**.
3. Choisis le dépôt `pizza-les-ecarts` que tu viens de créer.
4. Vercel détecte automatiquement un site statique — ne change rien
   (Framework Preset : *Other*, pas de build command nécessaire).
5. Clique sur **Deploy**. Après une minute, ton site est en ligne avec une
   adresse du type `pizza-les-ecarts.vercel.app`.

### 3. Mettre à jour le site

À chaque modification, il suffit de :

```bash
git add .
git commit -m "Mise à jour du menu"
git push
```

Vercel redéploie automatiquement le site en quelques secondes.

### 4. Nom de domaine personnalisé (optionnel)

Dans le projet Vercel → **Settings → Domains**, tu peux ajouter un nom de
domaine que tu achètes ailleurs (ex. `pizzalesecarts.fr`) et suivre les
instructions DNS affichées.

## Ce qu'il reste à adapter

- **Images** : le site utilise pour l'instant les photos déjà présentes sur
  le site Wix (hébergées sur `static.wixstatic.com`). Ça fonctionne, mais
  idéalement il faudrait héberger vos propres photos (mets-les dans un
  dossier `assets/img/` et remplace les chemins `<img src="...">` dans les
  fichiers `.html`).
- **Horaires** : le site Wix d'origine indiquait des horaires un peu
  contradictoires (mardi à vendredi ouvert, mais mercredi fermé). J'ai
  repris cette info telle quelle — à vérifier et corriger dans les 3
  fichiers `.html` (recherche « Horaires » ou « horaires »).
- **Menu** : pour ajouter/retirer un plat, ouvre `menu.html`, cherche la
  bonne catégorie et copie-colle un bloc `<div class="menu-row">...</div>`
  existant en changeant le nom, la description, le prix et les allergènes.
