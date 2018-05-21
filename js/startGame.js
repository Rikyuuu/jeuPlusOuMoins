var start = document.getElementById('start');
start.addEventListener('click', startGame);

function startGame () {
    var radios = document.getElementsByName('lvl');
    var valeur;
    for(var i = 0; i < boutons.length; i++){
        if(lvl[i].checked){
            valeur = lvl[i].value;
        }
    }
    alert(valeur);
}