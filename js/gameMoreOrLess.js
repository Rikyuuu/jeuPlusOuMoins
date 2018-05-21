function game () {
 
    var aDeviner = Math.round(Math.random() * 10);
    var essais = 3;
    var essai = window.prompt('Entrez votre chiffre');
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
