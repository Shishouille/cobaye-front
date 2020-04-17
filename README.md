# Cobaye - Plateforme Chercheurs - Cobayes

## Commandes

Installation des packages

`yarn`

Environnement de Dev

`yarn start`

Environnement de Prod

`yarn build`

## Objectif
Aider les chercheurs à recruter des participants à leurs expériences, et ainsi rendre plus visible le monde de la recherche pour une personne lambda.

### Description
Lorsqu'on fait une étude scientifique, on doit faire dans certains cas des expériences ; soit par des questionnaires, soit par des passations in vivo, soit par de l'observation. 

**Légende : De 1 à 5, l'ordre de priorité (1 étant le plus important)** 
Pour les chercheurs : 
- Créer des rendez vous pour participer à des expériences **(1)**
- Faire une sélection au préalable des gens pouvant participer (âge, genre, niveau socio-culturel, région)  **(1)**
- Si questionnaire, les faire réaliser directement sur la plateforme, avec les tests statistiques adaptés (indices simples pour commencer : la moyenne par exemple)  **(2)**
- Créer un planning de participants pour les études, directement liés au site (comme les esthéticiennes xD)  **(3)**
- Avoir un panneau de notifications pour se tenir au courant des nouveaux participants et des avancées des études en cours, filtrable par les études.  **(4)**
_Optionnel : Être alerté de comportements nocifs (les lapins étant courant)_

Pour les utilisateurs : 
- Avoir un large choix d'études qui correspond à son profil  **(1)**
- Pouvoir filtrer les études selon des critères (rémunération, horaires)  **(1)**
- Pouvoir annuler ses rendez vous avec justification  **(1)**
- Avoir des informations/anecdotes concernant les études et les chercheurs concernés.  **(2)**
- Avoir accès à un calendrier de rendez vous et un historique d'expériences.  **(3)**

_Optionnel : Pouvoir demander un retour d'expériences (les résultats finaux) 
Optionnel : Ajouter un système de récompense (badge ou autre)_

## Technologies
MERN

**Front** - React, React-Redux, Axios

**Back** - NodeJS, Express.js, MongoDB

## Arborescence

```
Homepage 
  Authentification
    Login / Sign Up
  Recherche avec Filtres
    Résultats
  Expériences

```
 