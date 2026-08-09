**User Stories:**

Périmètre du projet – MVP « Un Vrai Réseau Social »

Objectif

Créer une application web 100 % mobile (smartphone uniquement) permettant à des personnes de trouver d’autres personnes pour discuter et se rencontrer en vrai autour de sujets communs.

Le site met uniquement les utilisateurs en relation. Les paiements se font directement entre eux, en dehors de la plateforme.

1\. Comptes utilisateurs

Inscription

Connexion

Déconnexion

Mot de passe oublié

Vérification de l’email

Modification du profil

Suppression du compte

2\. Profil utilisateur

Chaque profil comprend :

Photo de profil

Galerie photos

Pseudo

Âge

Ville

Description

Centres d’intérêt

Sujets proposés

Niveau d’expertise (Débutant, Amateur, Confirmé, Expert)

Disponibilités

Lieux de rencontre préférés

Rayon de déplacement

Tarifs (15 min, 30 min, 1 h, 2 h)

Objectifs sur le site

Langues parlées

3\. Recherche

Recherche par :

Sujet

Ville

Rayon

Prix

Disponibilité

Affichage des résultats avec filtres.

4\. Explorer

Liste des profils.

Tri par :

Plus récents

Distance

Prix

Mieux notés

5\. Messagerie

Messagerie privée entre utilisateurs.

Fonctionnalités :

Envoyer des messages

Recevoir des messages

Notifications

Envoyer des photos

Bloquer un utilisateur

Signaler un utilisateur

6\. Avis

Après avoir rencontré une personne, un utilisateur peut :

laisser une note

laisser un commentaire

Calcul automatique de la note moyenne.

7\. Favoris

Possibilité de :

Ajouter un profil aux favoris

Retirer un profil des favoris

8\. Notifications

Notifications pour :

Nouveau message

Nouveau favori

Nouvel avis

9\. Accueil

Comme sur la maquette.

Sections :

Bannière

Barre de recherche

Catégories de sujets

Nouveaux membres

Comment ça marche

Communauté de confiance

Sujets populaires

Bouton d’inscription

10\. Page Profil

Comme sur la maquette.

Comprend :

Présentation

Sujets proposés

Disponibilités

Galerie photos

Informations

Score de compatibilité

Avis

Profils similaires

11\. Page Messages

Liste des conversations

Fenêtre de discussion

Recherche dans les conversations

12\. Mon compte

Modification de :

Profil

Photos

Disponibilités

Sujets

Tarifs

Mot de passe

Notifications

13\. Pages d’information

Comment ça marche

Charte de confiance

Politique de confidentialité

Conditions générales d’utilisation

Contact

FAQ

14\. Administration

L’administrateur peut :

Gérer les utilisateurs

Suspendre un compte

Supprimer un compte

Gérer les signalements

Gérer les avis

Gérer les catégories de sujets

15\. Responsive

Le site est développé uniquement pour smartphone. Les versions tablette et ordinateur ne sont pas prévues dans cette première version.





Please check the user stories and let me know.



**Question I asked to client:**

\*Clarification Questions\*



\*1. For proximity search, what location data do we collect? City only, or lat/long from GPS + address?\*

\*2. What are the exact values for Expertise level, Goals on the site, Languages spoken? Dropdown or free text?\*

\*3. Should “Topics offered” and “Interests” be separate tag lists?\*

\*4. How should “Availability” be stored? Calendar picker, day/time slots, or just text like “Weekends”?\*

\*5. What does “Rates (15 min, 30 min, 1 h, 2 h)” mean? Is this a paid service? Tutoring? Meetup fee?\*

\*6. Currency? Who sets it? Is it per user, per topic?\*

\*7. What currency should we use? USD, multi-currency?\*

\*8. Can users set different rates per topic, or 1 global rate?\*

\*9. What is the radius unit for search? KM or Miles?\*

\*10. What is the filters logic? AND or OR? Can I filter by Topic + Price + Availability together?\*

\*11. What is the rating scale for “Better rated”? 1-5 stars?\*

\*12. Should search results show distance from user?\*

\*13. What file types can be sent in chat?\*

\*14. Should we have read receipts?\*

\*15. What happens when you report/block someone? Auto-moderation or admin review?\*

\*16. How do we know if 2 users actually met to allow a review?\*

\*17. Can users reply to reviews? Edit them?\*

\*18. Do both users review each other?\*

\*19. Who approves new “Sujets / Categories”? Admin only or users can suggest?\*

\*20. What’s the process for handling reports?\*

\*21. For DB for search, do we use PostGIS or just basic lat/long for proximity search?\*





**His response:**



**1. Localisation**

**Uniquement la ville.**

**Pas d’adresse.**

**Pas de GPS affiché aux autres utilisateurs.**

**2. Niveau d’expertise Liste déroulante :**

**Débutant**

**Amateur**

**Intermédiaire**

**Expérimenté**

**Expert**

**Objectif sur le site Liste déroulante :**

**Discuter**

**Partager mon expérience**

**Apprendre**

**Rencontrer de nouvelles personnes**

**Langues parlées Liste déroulante avec possibilité d’en sélectionner plusieurs.**

**3. Sujets proposés / Intérêts Oui, ce sont deux listes de tags distinctes.**

**Sujets proposés : les sujets sur lesquels la personne souhaite discuter.**

**Intérêts : les centres d’intérêt personnels.**

**4. Disponibilité Liste de choix :**

**Tous les jours**

**En semaine**

**Week-end**

**Matin**

**Après-midi**

**Soir**

**Pas de calendrier pour le MVP.**

**5. Tarifs Il s’agit du prix demandé pour une rencontre afin de discuter.**

**6. Devise Euro (€) uniquement.**

**7. Devise utilisée Euro (€) uniquement.**

**8. Tarifs Un tarif global avec quatre durées :**

**15 min**

**30 min**

**1 h**

**2 h**

**Les tarifs sont les mêmes quel que soit le sujet.**

**9. Rayon de recherche Kilomètres.**

**10. Filtres Logique ET. L’utilisateur peut filtrer simultanément par :**

**sujet**

**prix**

**disponibilité**

**distance**

**11. Utilisateurs les mieux notés Pas de système de notes pour le MVP.**

**12. Résultats de recherche Oui, afficher la distance par rapport à l’utilisateur.**

**13. Chat Pour le MVP :**

**Messages texte**

**Photos**

**Pas de vidéos ni de documents.**

**14. Accusés de lecture Oui.**

**15. Signalement / Blocage**

**Blocage : immédiat.**

**Signalement : envoyé à l’administrateur pour examen.**

**16. Avis Pas de système d’avis pour le MVP.**

**17. Réponse aux avis Sans objet.**

**18. Évaluation mutuelle Pas de système d’évaluation pour le MVP.**

**19. Nouveaux sujets Les utilisateurs peuvent créer de nouveaux sujets, qui sont acceptés automatiquement.**

**20. Traitement des signalements Tous les signalements sont examinés manuellement par l’administrateur.**

**21. Recherche géographique Recherche basée sur les coordonnées latitude/longitude. PostGIS n’est pas nécessaire pour le MVP.**

**Merci**



Design has some extra things but keep in mind the user stories.

We just need to design  the mobile view.

