// Déclarations des variables
var start = document.getElementById('start');
var validerSelectLevelButton = document.getElementById('validerSelectLevelChoice');
var validerGameWindowButton = document.getElementById('validerGameWindow');

var selectLevelWindow = document.querySelector('.selectLevelWindow');

// Lancement des fonctions à partir des boutons
start.addEventListener('click', startGame);
validerSelectLevelButton.addEventListener('click', levelChoice);
// validerGameWindowButton.addEventListener('click', );


// Fonction lancement du jeu
function startGame () {
    start.setAttribute("class", "hidden");
    selectLevelWindow.classList.remove("hidden");

}

// Fonction choix des niveaux de difficultés
function levelChoice () {
    validerSelectLevelButton.setAttribute("class", "hidden");
    divSelectLevelWindow.classList.remove("hidden");

    var radios = document.getElementsByName('lvl');
    var valeur;
    for(var i = 0; i < boutons.length; i++){
        if(lvl[i].checked){
            valeur = lvl[i].value;
        }
    }
    alert(valeur);
}



// pour remove les class hidden ELEMENT.classList.remove("CLASS_NAME");