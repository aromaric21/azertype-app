/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

function afficherResultat(score, nbMotsProposes){
    let spanScore = document.querySelector(".zoneScore span");
    let affichageScore = `${score} / ${nbMotsProposes}` ;

    spanScore.innerHTML= affichageScore;

    console.log('Votre score est de ' + score + ' sur ' + nbMotsProposes)
  //return resultatJoueur
}

function choisirPhrasesOuMots (){
    // Déclaration de la variable contenant le choix de l'utilisateur
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?");

    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?");
    }
    return choix
}

function lancerBoucleDeJeu(listePropositions){
    let score = 0;
    for (let i = 0; i < listePropositions.length; i++) {
        let motUtilisateur = prompt("Saisir le mot : " + listePropositions[i]);
   
       if (motUtilisateur === listePropositions[i]) {
           score++
       }
   }
   return score
}

function lancerJeu (){
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    if(choix === 'mots'){
        score = lancerBoucleDeJeu(listeMots)
      nbMotsProposes = listeMots.length
    }else{
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}
