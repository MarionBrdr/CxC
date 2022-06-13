/*------variables globales------*/
var mouvements = 0
var cartes = [["<img src='js/img/carte1.jpg' class='img-fluid' alt='carte1'", "<img src='js/img/carte2.jpg' class='img-fluid' alt='carte2'", "<img src='js/img/carte3.jpg' class='img-fluid' alt='carte3'"], ["<img src='js/img/carte4.jpg' class='img-fluid' alt='js/carte4'", "<img src='js/img/carte5.jpg' class='img-fluid' alt='carte5'"], ["<img src='js/img/carte6.jpg' class='img-fluid' alt='carte6'", "<img src='js/img/carte7.jpg' class='img-fluid' alt='carte7'", "<img src='js/img/carte8.jpg' class='img-fluid' alt='carte8'"]];
//les balises img ne sont pas fermées car le '>' apparaît sinon
//les images sont dans un tableau dans un tableau pour faire les différents niveaux ; 1 tableau = 1 niveau
var niveauActuel = 0;
var niveaux = [
  {
    cartesjeu: cartes[0]
  },
  {
    cartesjeu: cartes[0].concat(cartes[1])
  },
  {
    cartesjeu: cartes[0].concat(cartes[1], cartes[2])
  }
]
//permet d'appeler plus de cartes au fur et à mesure en concaténant ces tableaux
//pour des niveaux avec des nouvelles images à chaque fois, on peut ne pas concaténer un certain tableau

/*------fonctions de découverte------*/
function decouvrir() {
  var decouvertes;
  var cartesEnAttente;
  var totaldecouvertes = document.querySelectorAll(".decouverte:not(.validees)" // totalDecouvertes = cartes validées et pas seulement découvertes (c-à-d retournées)
  );

  if (totaldecouvertes.length > 1) {
    return;
  } // si il y'a plus d'une carte encore présente dans le jeu, donc non validée, le jeu continue

  this.classList.add("decouverte"); //ajoute la classe 'découverte' aux cartes retournées

  decouvertes = document.querySelectorAll(".decouverte:not(.validees)"); //ne prend que les images encore présentes sur la table de jeu et qui ont été retournées
  if (decouvertes.length < 2) {
    return;
  } /*bloque la découverte à 2 images*/
  comparer(decouvertes);
  actualiserMouvements(); //le compte des mouvements n'est pris en compte que lorsque 2 cartes sont retournées
  cartesEnAttente = document.querySelectorAll("#carte:not(.validees)");
  if (cartesEnAttente.length === 0) {
    setTimeout(fin, 1000);
  } //permet de stopper le timer si il n'y a plus de cartes sur la table de jeu et afficher les alertes
}
/*les noms entre parenthèses dans les fonctions au-dessus comme en dessous permettent les liens entre les fonctions*/

/*------fonctions de comparaison------*/
function comparer(acomparer){
  if (acomparer[0].getAttribute('alt') === acomparer[1].getAttribute('alt')){
    match(acomparer);
  }
  else{
    noMatch(acomparer);
  }
}
/*compare les cartes selon leur 'alt' défini dans la déclaration des images,
* les images ont été dédoublées dans la fonction melangeCartes afin d'avoir les paires*/

/*------fonctions de mélanges------*/
function melangeCartes(lesCartes) {
  var resultat;
  var totalCartes = lesCartes.concat(lesCartes); //doublement du tableau d'images afin de créer les paires
  resultat = totalCartes.sort(function() { //récupération du nombre d'images
    return 0.5 - Math.random(); //'randomisation' du tirage permettant aux images de se placer sur la table de jeu au hasard
  });
  return resultat;
}

function repartition(lesCartes) {
  var mesa = document.querySelector("#mesa"); //lien entre la variable 'mesa' en JavaScript et de celle en HTML
  var cartesMelangees = melangeCartes(lesCartes); //récupération du processus effectué dans la fonction appelée
  mesa.innerHTML = "";
  //fonction de repartition des images sur le tapis (ici appelé 'mesa')

  cartesMelangees.forEach(function(element) {
    var carte = document.createElement("div"); //chaque carte devient une div contenant une div étant le contenu

    carte.innerHTML =
        "<div id='carte' class='shadow-lg border border-light m-2' data-valor= " +
        element +
        ">" +
        "<div id='carte__contenu'>" +
        element +
        "</div>" +
        "</div>";

    mesa.appendChild(carte);
  });
}
//renvoi sur la page HTML

/*------fonctions validantes ou invalidantes------*/
function match(lesCartes) {
  lesCartes.forEach(function(element){
    element.classList.add("validees"); //pour faire disparaître la paire
  });
}

function noMatch(lesCartes){
  lesCartes.forEach(function(element){
    element.classList.add("erreur");
  });

  setTimeout(function (){ //création d'un timer pour laisser à l'utilisateur de tourner 2 cartes
        lesCartes.forEach(function(element){
          element.classList.remove("decouverte")
          element.classList.remove("erreur")
          //pour rendre possible la carte de nouveau
        });
      }, 1000)
}

/*------changement de niveau------*/
function changerNiveau(){
  niveauActuel++; //incrémentation du numéro de niveau
}

function actualiserNiveau(){
  var texteNiveau = niveauActuel + 1; //incrémentation du numéro de niveau dans le HTML
  if (texteNiveau < 10){
    texteNiveau = "0" + texteNiveau;
} //permet l'ajout du 0 devant les chiffres inférieurs à 10
  document.querySelector("#niveau").innerText = texteNiveau;
}

function chargerNouveauNiveau(){
  changerNiveau();
  actualiserNiveau();
  actualiserMouvements();
  commencer();
}

/*------chronomètre------*/
function commencerChrono(){
  var secondes = 0;
  var minutes = 0;
  var texteSecondes;
  var texteMinutes;
  var timer;
  var cartesEnAttente;

  function actualiserChrono(){
    secondes = secondes +1;
    if (secondes > 59) {
      secondes = 0;
      minutes = minutes + 1;
    }
    texteSecondes = secondes;
    texteMinutes = minutes;
    if (secondes < 10) {
      texteSecondes = '0' + secondes;
    }
    if (minutes < 10) {
      texteMinutes = '0' + minutes;
    }
    cartesEnAttente = document.querySelectorAll("#carte:not(.validees)");
    if (cartesEnAttente.length === 0){
      clearInterval(timer)
    } //permet de stopper le timer si il n'y a plus de cartes sur la table de jeu
    document.querySelector("#minutes").innerText = texteMinutes; //affectation du mouvement des chiffres sur la page HTML
    document.querySelector("#secondes").innerText = texteSecondes;
  }
  timer = setInterval(actualiserChrono, 1000);
}
/*------compteur mouvements------*/
function actualiserMouvements(){
  var texteMouvements;
  mouvements++; //incrémentation du nombre de mouvements
  texteMouvements = mouvements; //renvoi des données vers la page HTML

  if (mouvements <10){
    texteMouvements = '0' + mouvements;
  }
  document.querySelector("#mouv").innerText = texteMouvements;
}

/*------fin du jeu------*/
function fin(){ /*permet soit d'afficher l'alerte pour passer au niveau suivant si il y en a sinon faire apparaitre celui de fin*/
  if (niveauActuel < niveaux.length - 1){
    document.querySelector("#levelup").classList.add("visible");
  }
  else{
    document.querySelector("#finJeu").classList.add("visible");
  }
}

/*------lancement du jeu------*/
function commencer() {
  mouvements = 0;
  repartition(niveaux[niveauActuel].cartesjeu);
  document.querySelector("#mouv").innerText = "00";
  document.querySelector("#minutes").innerText = "00";
  document.querySelector("#secondes").innerText = "00";
  document.querySelector("#levelup").classList.remove("visible");
  document.querySelector("#finJeu").classList.remove("visible");
  document.querySelector("#menu-niveau").classList.add("fermeture");
  document.querySelector("#selectionniveau").classList.remove("visible");
}

function afficheJeu(){
  document.querySelectorAll("#carte").forEach(function(element) {
    element.addEventListener("click", decouvrir); //permet le retournement des cartes et leur découverte si la carte est cliquée dessus
  });
}

document.querySelectorAll("#start").forEach(function(element) {
  element.addEventListener("click", commencerChrono); //permet de démarrer le chrono lors du clic sur le bouton 'Commencer'
});
document.querySelectorAll("#start").forEach(function(element) {
  element.addEventListener("click", afficheJeu); //permet de rendre cliquable les cartes lors du clic sur le bouton 'Commencer'
});

function recommencerDebut(){
  niveauActuel = 0;
  actualiserNiveau();
  commencer();
  document.querySelectorAll("#start").forEach(function(element) {
    element.addEventListener("click", afficheJeu);
  });
}
/*permet au joueur de rejouer en repartant du 1er niveau*/

function recommencerMemeNiveau(){
  actualiserNiveau();
  commencer();
}
/*permet au joueur de rejouer au même niveau*/

/*------menu niveaux------*/
function avoirNiveaux(){
  var menuNiveaux = document.querySelector("#selectionniveau ul");
  niveaux.forEach(function(element, index){
    var controleNiveaux = document.createElement("li"); /*les boutons seront les items de la liste créée dans le HTML*/
    controleNiveaux.innerHTML =
        "<button id='niveau' type='button' class='btn btn-dark' data-niveau=" +
        index +
        ">Niveau " +
        (index + 1) +
        "</button>";
    menuNiveaux.appendChild(controleNiveaux);
  });
}
/*création des boutons des niveaux dans le menu permettant le changement de niveau*/

function accesNiveau(){
  var niveau = parseInt(this.dataset.niveau); /*récupération des boutons crées plus haut avec l'attribut @data-niveau*/
  niveauActuel = niveau;
  actualiserNiveau();
  commencer();
}

function ouvreMenuNiveaux(event){ //évenement d'ouverture du menu des niveaux
  event.stopPropagation();
  document.querySelector("#selectionniveau").classList.toggle("visible");
}

function fermeMenuNiveaux(){ //fermeture du menu des niveaux
  document.querySelector("#selectionniveau").classList.remove("visible");
}

function clicHorsMenu(event){ //fermeture du menu si clic ailleurs que dans le menu des niveaux
  if (event.target.closest("#selectionniveau")){
    return;
  }
  document.querySelector("#selectionniveau").classList.remove("visible");
}

function toucheEscFermerMenu(event){ //fermeture du menu des niveaux avec la touche "Echap"
  if (event.key ==="Escape"){
    fermeMenuNiveaux();
  }
}

avoirNiveaux();
commencer();

/*------ liste des évènements ------*/

document.querySelectorAll("#recommencement").forEach(function(element) {
  element.addEventListener("click", recommencerDebut); //lien du clic sur le bouton recommencer de l'alerte de changement de niveau avec la fonction pour recommencer depuis le premier niveau
});
document.querySelectorAll("#end-recommencement").forEach(function(element) {
  element.addEventListener("click", recommencerDebut); //lien du clic sur le bouton recommencer de l'alerte de fin avec la fonction pour recommencer depuis le premier niveau
});
document.querySelectorAll("#forRetry").forEach(function(element) {
  element.addEventListener("click", recommencerMemeNiveau); //lien du clic sur le bouton recommencer de l'alerte de changement de niveau avec la fonction pour recommencer le même niveau
});
document.querySelectorAll("#niveau").forEach(function(element){
  element.addEventListener("click", accesNiveau); //lien du clic sur le bouton du niveau du menu de niveaux avec la fonction d'actualisation du niveau actuel
});
document.querySelector("#suivant").addEventListener("click", chargerNouveauNiveau); //lien du clic sur le bouton recommencer de l'alerte de changement de niveau avec la fonction pour passer au niveau suivant
document.querySelector("#menu-niveau").addEventListener("click", ouvreMenuNiveaux); //lien du clic sur le bouton '...' avec la fonction d'ouverture du menu des niveaux
document.querySelector("#ferme-niveau").addEventListener("click", fermeMenuNiveaux); // lien du clic sur le bouton de fermeture du menu des niveaux avec la fonction de fermeture du menu
document.querySelector("body").addEventListener("click", clicHorsMenu); // lien du clic dans le 'body' c'est-à-dire toute la page sauf la partie du menu de la page et du menu des niveaux avec la fonction de fermeture du menu
document.addEventListener("keydown", toucheEscFermerMenu); // lien du "clic" sur la touche 'Echap' avec la fonction de fermeture du menu avec la touche 'Echap"