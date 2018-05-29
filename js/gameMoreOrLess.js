// Variable declaration
var validateGameWindowButton = document.getElementById('validateGameWindowButton');
var gameInput = document.getElementById('gameInput');
var showMessage = document.getElementById('showMessage');
var divResponse = document.getElementById('divResponse');

// Call the game function when the button click is affected
validateGameWindowButton.addEventListener('click', game);

// To allow the user to validate his answer by clicking on the enter key
gameInput.addEventListener("keyup", function(event) { // Event for keyup
    event.preventDefault();
    if (event.keyCode == 13) { // "enter" key code is 13
        validateGameWindowButton.click(); // Give the same behavior as when a click is made on the button
    }
});

function game () {
    console.log('Nombre à deviner avant début fonction jeu ' + toGuess);
    // Value entered in the answer field of the game
    var attempt = gameInput.value;
    attempt = parseInt(attempt, 10); // To convert the contents of the variable to int (base 10)

    if (attempt > toGuess && lives > 0) {
        // Remove a live
        lives--;

        // Reset the game input value
        gameInput.value = '';

        // Challenger level conditions
        if (levelValue == 'lvl4')
        {
            // Displays "Vous n'avez plus de vie."
            showLives.innerHTML = 'Vous n\'avez qu\'une vie.';
        }
        else if(levelValue == 'lvl4' && attempt === NaN) {
            // Displays "Entrez un nombre !"
            showLives.innerHTML = 'Entrez un nombre !';
        }
        else if (lives > 1) {
            // Displays the number of lives remaining
            showLives.innerHTML = 'Il vous reste ' + lives + ' vies.';
        }
        else if (lives == 1) {
            // Displays the number of lives remaining
            showLives.innerHTML = 'Il vous reste ' + lives + ' vie.';
        }
        
        // Check if the user still has lives
        if (lives == 0 || lives <= 0) {
            // Displays "Vous n'avez plus de vie."
            showLives.innerHTML = 'Vous n\'avez plus de vie.';
            // Displays "Vous avez perdu !"
            showMessage.innerHTML = 'Vous avez perdu !';

            // Hide the div which contains the label of the answer, the fields of the answer which allows the user to enter a number, and the button validate to validate the answer
            divResponse.setAttribute("class", "hidden");
        }
        // If the user still has lives, then a help message is displayed
        else {
            // alert('Le nombre a trouver est plus grand que ' + attempt + ' !');
            // Help message
            showMessage.innerHTML = 'Le nombre a trouver est plus petit que ' + attempt + ' !';
        }
    }
    else if (attempt < toGuess && lives > 0) {
        // Remove a live
        lives--;

        // Reset the game input value
        gameInput.value = '';

        // Challenger level conditions
        if (levelValue == 'lvl4')
        {
            // Displays "Vous n'avez plus de vie."
            showLives.innerHTML = 'Vous n\'avez qu\'une vie.';
        }
        else if(levelValue == 'lvl4' && attempt === NaN) {
            // Displays "Entrez un nombre !"
            showLives.innerHTML = 'Entrez un nombre !';
        }
        else if (lives > 1) {
            // Displays the number of lives remaining
            showLives.innerHTML = 'Il vous reste ' + lives + ' vies.';
        }
        else if (lives == 1) {
            // Displays the number of lives remaining
            showLives.innerHTML = 'Il vous reste ' + lives + ' vie.';
        }

        // Check if the user still has lives
        if (lives == 0 || lives <= 0) {
            // Displays "Vous n'avez plus de vie."
            showLives.innerHTML = 'Vous n\'avez plus de vie.';
            // Displays "Vous avez perdu !"
            showMessage.innerHTML = 'Vous avez perdu !';

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
    else if (attempt == toGuess && lives > 0){
        // Challenger level conditions
        if (levelValue == 'lvl4')
        {
            // Displays "Vous n'avez plus de vie."
            showLives.innerHTML = 'Vous n\'avez qu\'une vie.';
        }
        else if(levelValue == 'lvl4' && attempt === NaN) {
            // Displays "Entrez un nombre !"
            showLives.innerHTML = 'Entrez un nombre !';
        }
        else if (lives > 1) {
            // Displays the number of lives remaining
            showLives.innerHTML = 'Il vous reste ' + lives + ' vies.';
        }
        else if (lives == 1) {
            // Displays the number of lives remaining
            showLives.innerHTML = 'Il vous reste ' + lives + ' vie.';
        }

        // Displays "Vous avez gagné !"
        showMessage.innerHTML = 'Vous avez gagné !';

        // Hide the div which contains the label of the answer, the fields of the answer which allows the user to enter a number, and the button validate to validate the answer
        divResponse.setAttribute("class", "hidden");
    } 
    else if (attempt != toGuess && lives < 1) {
        // Displays "Vous n'avez plus de vie."
        showLives.innerHTML = 'Vous n\'avez plus de vie.';
        // Displays "Vous avez perdu !"
        showMessage.innerHTML = 'Vous avez perdu !';

        // Hide the div which contains the label of the answer, the fields of the answer which allows the user to enter a number, and the button validate to validate the answer
        divResponse.setAttribute("class", "hidden");
    }
    
    else {
        // Displays "Entrez un nombre !"
        showMessage.innerHTML = 'Entrez un nombre !';
    } 
}