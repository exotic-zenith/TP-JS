const niveau_difficulte = { facile : {tentatives: 10, min: 1, max: 50}, moyen : {tentatives: 5, min: 1, max: 100}, difficile : {tentatives: 3, min: 1, max: 200}};

function genereNombre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choisirDiff(){
    let choix;
    do{
        choix = prompt("Choisissez la difficulté : 1. facile, 2. moyen ou 3. difficile");
    } while (choix != 1 && choix != 2 && choix != 3);

    if (choix == 1) {
        return niveau_difficulte.facile;
    } else if (choix == 2) {
        return niveau_difficulte.moyen;
    } else {
        return niveau_difficulte.difficile;
    }
}

function verifProp(proposition, min, max) {
    if (isNaN(proposition)) {
        alert("Veuillez saisir un nombre valide");
        return false;
    }
    if (proposition < min || proposition > max) {
        alert("Veuillez saisir un nombre entre " + min + " et " + max);
        return false;
    }
    return true;
}

function jouer() {
    let difficulte = choisirDiff();
    let nombre_cache = genereNombre(difficulte.min, difficulte.max);
    let tentatives = difficulte.tentatives;
    alert("Trouvez le nombre caché entre " + difficulte.min + " et " + difficulte.max + " en " + tentatives + " tentatives");
    while (tentatives > 0) {
        let proposition;
        do{
            proposition = parseInt(prompt(`Proposez un nombre entre ${difficulte.min} et ${difficulte.max} :`));
        }while (!verifProp(proposition, difficulte.min, difficulte.max));
        if (proposition == nombre_cache) 
            alert("Bravo ! Vous avez trouvé le nombre caché");
        else if (proposition < nombre_cache) 
            alert("Le nombre caché est plus grand");
        else 
            alert("Le nombre caché est plus petit");
        tentatives--;
    }
}   

jouer();