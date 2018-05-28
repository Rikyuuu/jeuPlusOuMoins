<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="/css/style.css">
        <title>Document</title>
    </head>
    <body>
        <h1>Le jeu du plus ou moins</h1>
        <div id="startWindow">
            <h2>Règles du jeu :</h2>
            <p>Le but du jeu est très simple, un nombre inconnu est généré aléatoirement, vous devez le trouver.</p>
            <p>Il vous sera indiqué à chaque réponse fausse(s) si le nombre à trouver est supérieur ou inférieur au nombre que vous avez entré.</p>
            <input type="button" value="Commencer" id="startButton"><?php // "commencer" button ?>
        </div>
        <div id="selectLevelWindow" class="hidden"> <?php // Appears when the user clicks on the "commencer" button ?>
            <div>
                <h2>Choisissez votre niveau de difficulté :</h2>
                <select id="selectLevelChoice">
                    <option name="lvl" value="lvl1" id="lvl1">Niveau 1 (entre 0 et 10)</option>
                    <option name="lvl" value="lvl2" id="lvl2">Niveau 2 (entre 0 et 20)</option>
                    <option name="lvl" value="lvl3" id="lvl3">Niveau 3 (entre 0 et 30)</option>
                    <option name="lvl" value="lvl4" id="lvl4">Niveau challenger (entre 0 et 1000 avec une seule chance)</option>
                </select>
                <button id="validateSelectLevelChoice">Valider le choix</button><?php // "Valider le choix" button ?>
            </div>
        </div>
        <div id="gameWindow" class="hidden"><?php // Appears when the user clicks on the "Valider le choix" button ?>
            <h2>Devinez quel est le chiffre</h2>
            <h3 id="showDifficultLevel"></h3><?php // Displays the level of difficulty chosen by the user ?>
            <p id="showLives"></p>
            <p id="showMessage"></p> <?php // Displays the message won, lost, or the help message ?>
            <div id="divResponse"> <?php // Contains a label, an input for the user's response, and a button to validate the answer ?>
                <label for="reply">Réponse</label>
                <input type="text" name="reply" autocomplete="off" id="gameInput">
                <button id="validateGameWindowButton">Valider la réponse</button>
            </div>
        </div>
        
        <script src="js/startGame.js"></script>
        <script src="js/gameMoreOrLess.js"></script>
    </body>
</html>