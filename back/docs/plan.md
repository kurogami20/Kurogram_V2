# Plan pour le back

Afin de faire cette application on va faire une API REST pour le back-end.

## 1: Base de données

Il faut se faire une base de données afin de stocker les utilisateurs et leurs posts.

### MCD

[Voir le MCD](back/docs/mcd.excalidraw.png)

### MLD

- utilisateur (Email, nom d'utilisateur, Email, mot de passe,Bio)
- Page Utilisateur (Ref.PageUtilisateur, Nb d'abonnements,Nb d'abonnés)
- Commentaire (Ref.Commentaire,texte)
- posts (Ref.Post, Contenu, Nb de likes)
- Possède (#Email,#Ref.PageUtilisateur)
- Possède (#Email,#Ref.Post)
- Possède (#Email,#Ref.Commentaire)
- Possède (#Ref.Post,#Ref.Commentaire)

## 2: Dépendances

Maintenant qu'on a bien défini la base de donnée il faut installer les dépendance nécessaires au projet.

Pour la base de donnée on va utiliser postgresql, il faut donc installer PG, et dotenv pour utiliser les variables d'environement (pour l'url).
On va également utiliser l'ORM Sequelize, Zod pour la vérification des données et Argon2 pour le hashage des mots de passe.

Pour les routes on va se servir d'express routeur et il faudra installer Cors pour pouvoir faire fonctionner correctement l'api plus tard.
