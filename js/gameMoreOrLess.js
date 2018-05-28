// Variable declaration
var validateGameWindowButton = document.getElementById('validateGameWindowButton');
var gameInput = document.getElementById('gameInput');
var showMessage = document.getElementById('showMessage');
var answerLabel = document.getElementById('answerLabel');

validateGameWindowButton.addEventListener('click', game);
var toGuess = Math.round(Math.random() * difficultLevel);


function game () {
    
    var attempt = gameInput.value;
    attempt = parseInt(attempt, 10); // To convert the contents of the variable to int (base 10)

    if (attempt > toGuess && lives > 0) {
        // alert('Le nombre a trouver est plus petit que ' + attempt + ' !');
        showMessage.innerHTML = 'Le nombre a trouver est plus petit que ' + attempt + ' !';
        gameInput.value = '';
        Lives--;
    }
    else if (attempt < toGuess && lives > 0 ) {
        // alert('Le nombre a trouver est plus grand que ' + attempt + ' !');
        showMessage.innerHTML = 'Le nombre a trouver est plus grand que ' + attempt + ' !';
        gameInput.value = '';
        lives--;
    } 
    else if (attempt == toGuess && lives > 0 ) {
        showMessage.innerHTML = 'Gagné !';
        gameInput.style.display = "none";
        validateGameWindowButton.style.display = "none";
        answerLabel.style.display = "none";
    } 
    else if (attempt != toGuess && lives < 1 ) {
        showMessage.innerHTML = 'perdue !';
        gameInput.style.display = "none";
        validateGameWindowButton.style.display = "none";
        answerLabel.style.display = "none";
    } 
    else {
        showMessage.innerHTML = 'Entrez un nombre!';
    } 
    console.log(toGuess);
    console.log(lives);
    console.log(attempt);
}
