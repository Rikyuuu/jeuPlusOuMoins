var niveauDifficulte = 10;

function game () {
    if (valeur == 'lvl1') {
        niveauDifficulte = 10;
    }
    else if (valeur == 'lvl2') {
        niveauDifficulte = 20;
    }
    var essais = 3;
    var aDeviner = Math.round(Math.random() * niveauDifficulte);
    var essai = window.prompt('Entrez votre chiffre');
    console.log(aDeviner);
    essai = parseInt(essai, 10); // Pour convertir le contenu de la variable en int (base 10)
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
