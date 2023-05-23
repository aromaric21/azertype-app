let motUtilisateur;
let score = 0;

// Déclaration de la variable contenant le choix de l'utilisateur
let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?");


while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?");
}

if (choix === "mots") {
    for (let i = 0; i < listeMots.length; i++) {
         motUtilisateur = prompt("Saisir le mot : " + listeMots[i]);
    
        if (motUtilisateur === listeMots[i]) {
            score++
        }
    } 
    
    console.log("Votre score est de " + score + " sur " + listeMots.length);

} else {
    for (let i = 0; i < listePhrases.length; i++) {
         motUtilisateur = prompt("Saisir la phrase : " + listePhrases[i]);
    
        if (motUtilisateur === listePhrases[i]) {
            score++
        }
    }
     console.log("Votre score est de " + score + " sur " + listePhrases.length); 
}
