// Variable declaration
var selectLevelWindow = document.getElementById('selectLevelWindow');
var startWindow = document.getElementById('startWindow');
var gameWindow = document.getElementById('gameWindow');


// Variables to display the difficulty level chosen in index.html
var showLevelWindow = document.getElementById('selectLevelChoice'); // To retrieve the text according to the selected
var showDifficultLevel = document.getElementById('showDifficultLevel'); // for show the difficult level in index.html

var startButton = document.getElementById('startButton');
var validateSelectLevelButton = document.getElementById('validateSelectLevelChoice');


var radios = document.getElementsByName('lvl');
var levelValue= null;

var toGuess = null;
var difficultLevel = null;
var lives = null;


// End variable declaration

// Event launching functions from the buttons
startButton.addEventListener('click', startGame);
validateSelectLevelButton.addEventListener('click', levelChoice);

// End event lauching functions

// Functions

// Launch function of the game
function startGame () {
    startButton.setAttribute("class", "hidden");
    selectLevelWindow.classList.remove("hidden");
}

// Function choice of difficulty levels
function levelChoice () {
    console.log('Nombre à deviner debut fonction selectChoice ' + toGuess);
    // Declaration of a variable equal to the level of difficulty selected
    var selectedShowLevelWindow = showLevelWindow.selectedIndex;

    selectLevelWindow.setAttribute("class", "hidden");
    gameWindow.classList.remove("hidden");

    for(var i = 0; i < radios.length; i++) {
        if(radios[i].selected){
            levelValue = radios[i].value;
        }
    }

    if (levelValue == 'lvl1') {
        difficultLevel = 10;
        lives = 3;
    }
    else if (levelValue == 'lvl2') {
        difficultLevel = 20;
        lives = 3;
    }
    else if (levelValue == 'lvl3') {
        difficultLevel = 30;
        lives = 3;
    }
    else if (levelValue == 'lvl4') {
        difficultLevel = 1000;
        lives = 0;
    }

    // The value compared is a value of the nodeList selected (example: [0]) so 0 is the level 1
    if(selectedShowLevelWindow == '0') {
        // To display the level chosen by the user
        showDifficultLevel.innerHTML = 'Niveau 1 (nombre entre 0 et 10)';
    }
    else if(selectedShowLevelWindow == '1') {
        // To display the level chosen by the user
        showDifficultLevel.innerHTML = 'Niveau 2 (nombre entre 0 et 20)';
    }
    else if(selectedShowLevelWindow == '2') {
        // To display the level chosen by the user
        showDifficultLevel.innerHTML = 'Niveau 3 (nombre entre 0 et 30)';
    }
    else if(selectedShowLevelWindow == '3') {
        // To display the level chosen by the user
        showDifficultLevel.innerHTML = 'Niveau challenger (nombre entre 0 et 1000 avec une seule chance)';
    }
    else {
        showDifficultLevel.innerHTML = 'Erreur lors du choix du niveau';
    }
    toGuess = Math.round(Math.random() * difficultLevel);
    console.log('Nombre à deviner fin fonction selectChoice ' + toGuess);

    
    /* Launch function game()
    game();*/
}
// End functions