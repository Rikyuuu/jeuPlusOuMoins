# ALGORITHME LANCEMENT DU JEU
QUAND l'utilisateur clique sur le bouton "commencer"
    cacher bouton "commencer"
        Le bouton "commencer" lance la page de la sélection du niveau de difficulté
            l'utilisateur coche le niveau de difficulté (sur le formulaire)
            QUAND l'utilisateur clique sur le bouton "valider", on cache les champs des niveaux de difficultés et le bouton "valider".
                Le button "valider" lance la page du jeu.

# ALGORITHME PAGE DU JEU
AFFICHAGE 'Devinez le chiffre entre ' + 'variableMin' + ' et 'variableMax';
Champs réponse pour l'utilisateur (avec placeholder "entrez votre chiffre");
Bouton "valider" pour valider la réponse de l'utilisateur.

TANT QUE essais différent de 0 et essais supérieur à 0

    SI variable "essai" est supérieur à la variable "aDeviner"
        AFFICHER "le nombre a trouver est plus petit"
        AFFICHER "nombre de chances restantes (essais)"
    FIN SI

    SINON SI variable "essai" est inférieur à la variable "aDeviner"
        AFFICHER "le nombre a trouver est plus grand"
        AFFICHER "nombre de chances restantes (essais)"
    FIN SINON SI

    SI variable "essais" (la variable qui contient le nombre de chances) est supérieur à 0
        AFFICHER "Retentez votre chance, il vous reste 'essais' chances"
    FIN SI

    SINON
        AFFICHER "perdu"
    FIN SINON

FIN TANT QUE

# Penser à ajouter le bouton pour revenir sur la sélection des difficultés et à voir comment le dév'.