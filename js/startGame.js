// Variable declaration
var selectLevelWindow = document.getElementById('selectLevelWindow');
var startWindow = document.getElementById('startWindow');
var gameWindow = document.getElementById('gameWindow');
var showLives = document.getElementById('showLives');


var replayGame = document.getElementById('replayGame');

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

// variable used in function restartGame()
var restart = null;


replayGame.addEventListener('click', restartGame);

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
    // Declaration of a variable equal to the level of difficulty selected
    var selectedShowLevelWindow = showLevelWindow.selectedIndex;

    selectLevelWindow.setAttribute("class", "hidden");
    gameWindow.classList.remove("hidden");

    for(var i = 0; i < radios.length; i++) {
        if(radios[i].selected) {
            levelValue = radios[i].value;
        }
    }

    if (levelValue == 'lvl1') {
        difficultLevel = 10;
        lives = 3;
        showLives.innerHTML = 'Vous avez ' + lives + ' vies.';
    } else if (levelValue == 'lvl2') {
        difficultLevel = 20;
        lives = 3;
        showLives.innerHTML = 'Vous avez ' + lives + ' vies.';
    } else if (levelValue == 'lvl3') {
        difficultLevel = 30;
        lives = 3;
        showLives.innerHTML = 'Vous avez ' + lives + ' vies.';
    } else if (levelValue == 'lvl4') {
        difficultLevel = 1000;
        lives = 1;
        showLives.innerHTML = 'Vous n\'avez qu\'une vie.';
    }

    // The value compared is a value of the nodeList selected (example: [0]) so 0 is the level 1
    if(selectedShowLevelWindow == '0') {
        // To display the level chosen by the user
        showDifficultLevel.innerHTML = 'Niveau 1 (nombre entre 0 et 10)';
    } else if(selectedShowLevelWindow == '1') {
        // To display the level chosen by the user
        showDifficultLevel.innerHTML = 'Niveau 2 (nombre entre 0 et 20)';
    } else if(selectedShowLevelWindow == '2') {
        // To display the level chosen by the user
        showDifficultLevel.innerHTML = 'Niveau 3 (nombre entre 0 et 30)';
    } else if(selectedShowLevelWindow == '3') {
        // To display the level chosen by the user
        showDifficultLevel.innerHTML = 'Niveau challenger (nombre entre 0 et 1000 avec une seule chance)';
    } else {
        showDifficultLevel.innerHTML = 'Erreur lors du choix du niveau';
    }
    toGuess = Math.round(Math.random() * difficultLevel);
}

function restartGame() {
    gameWindow.setAttribute('class','hidden');
    startGame();
    validateSelectLevelChoice.addEventListener('click', game);
    divResponse.classList.remove('hidden');

    // Redefines the restart variable equal to 1 when executing the restartGame() function
    restart = 1;
}
// End functions