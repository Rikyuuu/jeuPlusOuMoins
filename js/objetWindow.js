/*(function () {
    /*
    var demo = window.confirm('Salut !');
    console.log(demo);
    
    var aDeviner = Math.round(Math.random() * 50);
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
})()
*/

/*
    ajout d'un comportement à un autre formulaire
*/

function submitChange(event) {
    // event.preventDefault();

    var data = {};
    // création d'une variable de type Array (tableau)
    var niveaux = [];

    // boucle foreach sur une liste d'inputs
    for (var niveauInput of niveauxInputs) {
        // vérification de l'état coché / non coché pour l'input courant
        if (niveauInput.checked) {
            // si l'input est coché, on rajoute la valeur de l'input dans le tableau niveaux
            niveaux.push(niveauInput.value);
            
        }
    }
    
    data.niveaux = niveaux;
    // syntaxe alternative qui a l même effet
    // data["fruits"] = fruits;

    console.log(data);
}

var niveauxForm = document.getElementById('formDifficulte');
var niveauxInputs = document.querySelectorAll('[name="niveaux[]"]');

console.log(niveauxInputs);

niveauxForm.addEventListener('click', submitChange);

