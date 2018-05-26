// Variable declaration
var difficultLevel = 10;

function game () {
    var lives;
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
        lives = 1;
    }
    var toGuess = Math.round(Math.random() * difficultLevel);
    var attempt = window.prompt('Entrez votre chiffre');
    attempt = parseInt(attempt, 10); // To convert the contents of the variable to int (base 10)
    while (attempt != toGuess && lives > 0) {
        lives--;
        if (attempt > toGuess) {
            alert('Le nombre a trouver est plus petit que ' + attempt + ' !');
        }
        else {
            alert('Le nombre a trouver est plus grand que ' + attempt + ' !');
        }
        if (lives > 0) {
            attempt = window.prompt('Retentez votre chance !');
        }
    }
    if (attempt == toGuess) {
        alert('Gagné !');
    }
    else {
        alert('Perdu !');
    }
}
