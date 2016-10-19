// fonction de calcul du pourboire
function calcul() {


    var pourcentage = document.querySelector('#ecran1').value;
    var prix = document.querySelector('#ecran2').value;

    var calcule = pourcentage * prix;
    var Result = calcule/100;
    var total = parseInt(prix) + parseInt(Result);
    // affiche le pourboire
    document.querySelector('#ecran3').value= Result;
    // affiche le resultat total
    document.querySelector('#ecran4').value=total;
}

