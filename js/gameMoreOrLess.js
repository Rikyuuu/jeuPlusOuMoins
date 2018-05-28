// Variable declaration
var validateGameWindowButton = document.getElementById('validateGameWindowButton');
var gameInput = document.getElementById('gameInput');
var showMessage = document.getElementById('showMessage');
var divResponse = document.getElementById('divResponse');

validateGameWindowButton.addEventListener('click', game);


function game () {
    console.log('Nombre à deviner avant début fonction jeu ' + toGuess);
    // Value entered in the answer field of the game
    var attempt = gameInput.value;
    attempt = parseInt(attempt, 10); // To convert the contents of the variable to int (base 10)

    if (attempt > toGuess && lives > 0) {
        lives--;
        gameInput.value = '';
        
        // Check if the user still has lives
        if (lives == 0 || lives <= 0) {
            showMessage.innerHTML = 'Perdu !';

            // Hide the div which contains the label of the answer, the fields of the answer which allows the user to enter a number, and the button validate to validate the answer
            divResponse.setAttribute("class", "hidden");
        }
        // If the user still has lives, then a help message is displayed
        else {
            // alert('Le nombre a trouver est plus grand que ' + attempt + ' !');

            // Help message
            showMessage.innerHTML = 'Le nombre a trouver est plus grand que ' + attempt + ' !';
        }
    }
    else if (attempt < toGuess && lives > 0 ) {
        lives--;
        gameInput.value = '';

        // Check if the user still has lives
        if (lives == 0 || lives <= 0) {
            showMessage.innerHTML = 'Perdu !';

            // Hide the div which contains the label of the answer, the fields of the answer which allows the user to enter a number, and the button validate to validate the answer
            divResponse.setAttribute("class", "hidden");
        }
        // If the user still has lives, then a help message is displayed
        else {
            // alert('Le nombre a trouver est plus grand que ' + attempt + ' !');

            // Help message
            showMessage.innerHTML = 'Le nombre a trouver est plus grand que ' + attempt + ' !';
        }
    } 
    else if (attempt == toGuess && lives > 0 ) {
        showMessage.innerHTML = 'Gagné !';
        // Hide the div which contains the label of the answer, the fields of the answer which allows the user to enter a number, and the button validate to validate the answer
        divResponse.setAttribute("class", "hidden");
    } 
    else if (attempt != toGuess && lives < 1 ) {
        showMessage.innerHTML = 'Perdu !';

        // Hide the div which contains the label of the answer, the fields of the answer which allows the user to enter a number, and the button validate to validate the answer
        divResponse.setAttribute("class", "hidden");
    } 
    else {
        showMessage.innerHTML = 'Entrez un nombre !';
    } 
    console.log('Nombre à deviner après ' + toGuess);
}