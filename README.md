# Sofiane Chalal — academic website

Site académique statique, en anglais, conçu pour GitHub Pages.

## Consulter le site

Ouvrir `index.html` dans un navigateur. Les trois pages fonctionnent sans serveur,
installation ni connexion internet, à l'exception des liens externes vers les
articles et les institutions.

- `index.html` : About, affiliation, portrait, CV et contact.
- `research.html` : huit articles, prépublications et actes de conférences.
- `talks.html` : dix exposés classés par année.
- `style.css` : présentation commune et adaptation aux petits écrans.
- `assets/sofiane-chalal.jpeg` : photographie fournie.
- `documents/` : CV au format PDF.

## Publier sur GitHub Pages

1. Dans ton compte GitHub, créer un dépôt nommé `TON-PSEUDO.github.io`, en
   remplaçant `TON-PSEUDO` par ton véritable nom d'utilisateur GitHub.
2. Déposer le contenu de ce dossier à la racine du dépôt : `index.html` doit être
   à la racine, avec `research.html`, `talks.html`, `style.css` et les dossiers
   `assets` et `documents`. Il faut décompresser l'archive, pas déposer le ZIP.
3. Dans **Settings → Pages**, choisir **Deploy from a branch**, puis la branche
   **main** et le dossier **/(root)**. Enregistrer.
4. Consulter l'adresse indiquée par GitHub Pages lorsque le déploiement est terminé.

Pour utiliser un dépôt de projet existant, déposer ces mêmes fichiers à sa racine
et activer Pages de la même façon. Tous les liens internes sont relatifs et
fonctionnent également sous une adresse de type `pseudo.github.io/nom-du-depot/`.

Le fichier `.nojekyll` indique que le site ne nécessite pas de compilation Jekyll.
Aucune dépendance, aucun thème externe et aucune police distante ne sont requis.

Documentation officielle :

- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Modifier le contenu

Les textes sont directement dans les fichiers HTML. Ajouter une publication dans
la liste correspondante de `research.html`, ou un exposé dans `talks.html`.
Pour actualiser le CV, remplacer son PDF dans `documents/` en conservant
son nom. Pour changer les couleurs ou les espacements, modifier `style.css`.

## Sources et choix éditoriaux

Le contenu est établi à partir du CV fourni, du research statement corrigé et du
manuscrit de thèse. Les liens arXiv, DOI et HAL proviennent des références vérifiées
pendant la préparation du research statement.

La présentation emploie « PhD candidate » : la couverture du manuscrit indique
une soutenance le 27 novembre 2026. Cette formulation pourra être actualisée
après la soutenance. Les dates des exposés sont reprises du CV.

La mention ESAIM: Proceedings and Surveys est reprise du CV. Aucun DOI ou numéro
de volume non confirmé n'a été ajouté. Le CV téléchargeable est le document
fourni pendant cette conversation.

Le site a été créé le 2 octobre 2026. Les liens entre pages et documents, les
ancres et la structure HTML ont été contrôlés. La mise en ligne sur GitHub reste
à effectuer.
