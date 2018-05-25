// Variable declaration
var selectLevelWindow = document.getElementById('selectLevelWindow');
var startWindow = document.getElementById('startWindow');
var gameWindow = document.getElementById('gameWindow');

var startButton = document.getElementById('startButton');
var validateSelectLevelButton = document.getElementById('validateSelectLevelChoice');
/*var validateGameWindowButton = document.getElementById('validerGameWindow');*/

var radios = document.getElementsByName('lvl');
var levelValue;

// Launching functions from the buttons
startButton.addEventListener('click', startGame);
validateSelectLevelButton.addEventListener('click', levelChoice);
// validateGameWindowButton.addEventListener('click', );

// Launch function of the game
function startGame () {
    startButton.setAttribute("class", "hidden");
    selectLevelWindow.classList.remove("hidden");
}

// Function choice of difficulty levels
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

// for remove the hidden class  "ELEMENT.classList.remove("CLASS_NAME");"