// Déclaration des variables
var difficultLevel = 10;

function game () {
    var essais;
    if (levelValue == 'lvl1') {
        difficultLevel = 10;
        essais = 3;
    }
    else if (levelValue == 'lvl2') {
        difficultLevel = 20;
        essais = 3;
    }
    else if (levelValue == 'lvl3') {
        difficultLevel = 30;
        essais = 3;
    }
    else if (levelValue == 'lvl4') {
        difficultLevel = 1000;
        essais = 1;
    }
    var aDeviner = Math.round(Math.random() * difficultLevel);
    var essai = window.prompt('Entrez votre chiffre');
    essai = parseInt(essai, 10); // Pour convertir le contenu de la variable en int (base 10)
    console.log(aDeviner);
    while (essai != aDeviner && essais > 0) {
        essais--;
        if (essai > aDeviner) {
            alert('Le nombre a trouver est plus petit que ' + essai + ' !');
        }
        else {
            alert('Le nombre a trouver est plus grand que ' + essai + ' !');
        }
        if (essais > 0) {
            essai = window.prompt('Retentez votre chance !');
        }
    }
    if (essai == aDeviner) {
        alert('Gagné !');
    }
    else {
        alert('Perdu !');
    }
}
