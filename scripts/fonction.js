/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes){
    let spanScore = document.querySelector(".zoneScore span");
    let affichageScore = `${score} / ${nbMotsProposes}` ;

    spanScore.innerHTML= affichageScore;

    //console.log('Votre score est de ' + score + ' sur ' + nbMotsProposes);
  //return resultatJoueur
}

/**
 * Cette fonction affiche une proposition, que le joueur devra recopier, 
 * dans la zone "zoneProposition"
 * @param {string} proposition : la proposition à afficher
 */
function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition
}

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto =
     `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je vais de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}


function validerNom(nom){
    if (nom.length < 2) {
        throw new Error("Le nom est trop court.")
    }
}

function validerEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegExp.test(email)) {
        throw new error("Le mail n'est pas valide.")
    }
}

function afficherMessageErreur(message) {

    let spanErreurMessage = document.getElementById("erruerMessage")

    if (!spanErreurMessage) {
        let popup = document.querySelector(".popup")

        spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = "erruerMessage"
        popup.append(spanErreurMessage)
    }
    spanErreurMessage.innerText= message
}

function gereFormulaire(scoreEmail) {
    try {
        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value
        validerNom(nom)

        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value
        validerEmail(email)

        afficherMessageErreur("")
        afficherEmail(nom, email, scoreEmail)
        
    } catch (erreur) {
        // Gerer l'erreur
        afficherMessageErreur(erreur.message)
        
    }
   
}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu (){
    // initialisation
    initAddEventListenerPopup()

    let score = 0;
    let i = 0;
    let listPropositions = listeMots

    // Gestion de l'événement change sur les boutons radios. 
    let listBtnRadio = document.querySelectorAll(".optionSource input");
    for(let j=0; j< listBtnRadio.length; j++){
        listBtnRadio[j].addEventListener("change", (event)=>{
            console.log(event.target.value)
            if (event.target.value === "1") {
                listPropositions = listeMots
            } else {
                listPropositions = listePhrases
            }
            afficherProposition(listPropositions[i]);
        })
    }

     // Gestion de l'événement click sur le bouton "valider"
    let btnValiderMot = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");
    afficherProposition(listPropositions[i]);
    btnValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value)
        if (inputEcriture.value === listPropositions[i]) {
            score++
        }
        i++
        afficherResultat(score, i);
        inputEcriture.value = ''
        if (listPropositions[i] === undefined) {
            afficherProposition("Le jeu est fini !")
            btnValiderMot.disabled = true
        }else{
            afficherProposition(listPropositions[i])
        }
       
         
    });
    afficherResultat(score, i);
    
     // Gestion de l'événement click sur le "form"
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) =>{
        event.preventDefault()
        let scoreEmail = `${score}/${i}`
        gereFormulaire(scoreEmail)
    })
}