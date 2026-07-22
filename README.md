# Pizza Snack Les Écarts — site vitrine (v2)

Site statique (HTML / CSS / JS, sans framework) pour la pizzeria familiale
« Pizza Snack Les Écarts » à Maizières-lès-Metz, avec vos vraies photos
(four à bois, pizzas, logo) et une palette claire et chaleureuse (crème,
bois, artisanal).

## Structure du projet

```
pizza-site/
├── index.html            Accueil (hero, histoire, atouts, infos pratiques)
├── menu.html              Carte complète, avec onglets par catégorie
├── livraison.html          Conditions de livraison
├── contact.html           Adresse, horaires, carte Google Maps
├── assets/
│   ├── css/style.css       Toute la mise en forme du site
│   ├── js/main.js          Menu mobile + onglets de la carte
│   └── img/                Vos photos (logo, four à bois, pizzas...)
└── README.md
```

Fichiers statiques uniquement : pas d'installation, pas de serveur, pas de
base de données. Rapide et gratuit à héberger.

## Mettre le site en ligne (GitHub + Vercel)

### 1. Dézipper et créer le dépôt GitHub

1. Dézippe le fichier reçu — tu obtiens le dossier `pizza-site`.
2. Va sur [github.com](https://github.com), crée un compte si besoin.
3. Clique sur **New repository**, donne-lui un nom (ex. `pizza-les-ecarts`),
   laisse-le en **Public** ou **Private**, ne coche aucune case
   d'initialisation, puis **Create repository**.
4. Sur la page qui s'affiche, utilise le bouton **uploading an existing
   file** (ou glisse directement tout le contenu du dossier `pizza-site`
   dans la zone de dépôt sur github.com) — c'est le plus simple, pas besoin
   de ligne de commande.
5. Valide avec **Commit changes**.

*(Si tu préfères la ligne de commande : `git init`, `git add .`,
`git commit -m "Site Pizza Snack Les Écarts"`, `git branch -M main`,
`git remote add origin <URL-de-ton-repo>`, `git push -u origin main`.)*

### 2. Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com) et connecte-toi avec ton compte
   GitHub.
2. Clique sur **Add New → Project**.
3. Choisis le dépôt `pizza-les-ecarts`.
4. Vercel détecte automatiquement un site statique — ne change rien
   (Framework Preset : *Other*, pas de build command nécessaire).
5. Clique sur **Deploy**. Après une minute, le site est en ligne à une
   adresse du type `pizza-les-ecarts.vercel.app`.

### 3. Mettre à jour le site

À chaque modification du dossier, il suffit de glisser à nouveau les
fichiers modifiés sur la page GitHub du dépôt (ou `git push` si tu utilises
la ligne de commande) — Vercel redéploie automatiquement en quelques
secondes.

### 4. Nom de domaine personnalisé (optionnel)

Dans le projet Vercel → **Settings → Domains**, tu peux ajouter un nom de
domaine acheté ailleurs (ex. `pizzalesecarts.fr`) et suivre les
instructions DNS affichées.

## Ce qu'il reste à adapter

- **Photos** : le dossier `assets/img/` contient déjà vos vraies photos
  (four à bois, pizzas, logo). Pour en ajouter d'autres, dépose l'image
  dans ce dossier et remplace le `src="assets/img/..."` correspondant dans
  le fichier `.html` concerné. Des sections comme les paninis, boissons et
  desserts n'ont pas encore de photo dédiée — envoie-les moi et je les
  intègre, ou ajoute-les toi-même de la même façon.
- **Horaires** : le site d'origine indiquait des horaires un peu
  contradictoires (mardi à vendredi ouvert, mais mercredi fermé). J'ai
  repris cette info telle quelle — à vérifier et corriger dans les 4
  fichiers `.html` (recherche « Horaires »).
- **Menu** : pour ajouter/retirer un plat, ouvre `menu.html`, cherche la
  bonne catégorie et copie-colle un bloc `<div class="menu-row">...</div>`
  existant en changeant le nom, la description, le prix et les allergènes.
