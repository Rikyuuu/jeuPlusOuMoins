// Déclarations des variables
var selectLevelWindow = document.getElementById('selectLevelWindow');
var startWindow = document.getElementById('startWindow');
var gameWindow = document.getElementById('gameWindow');

var startButton = document.getElementById('startButton');
var validerSelectLevelButton = document.getElementById('validerSelectLevelChoice');
var validerGameWindowButton = document.getElementById('validerGameWindow');

var radios = document.getElementsByName('lvl');
var levelValue;



// Lancement des fonctions à partir des boutons
startButton.addEventListener('click', startGame);
validerSelectLevelButton.addEventListener('click', levelChoice);
// validerGameWindowButton.addEventListener('click', );


// Fonction lancement du jeu
function startGame () {
    startButton.setAttribute("class", "hidden");
    selectLevelWindow.classList.remove("hidden");

}

// Fonction choix des niveaux de difficultés
function levelChoice () {
    selectLevelWindow.setAttribute("class", "hidden");
    gameWindow.classList.remove("hidden");

    for(var i = 0; i < radios.length; i++){
        if(radios[i].selected){
            levelValue = radios[i].value;
        }
    }
    game();
}



// pour remove les class hidden ELEMENT.classList.remove("CLASS_NAME");