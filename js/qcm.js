var bonneReponse = "Bouton2";
var scoreJoueur = 0;
let questions = [];

Bouton1 = document.getElementById("Bouton1");
Bouton2 = document.getElementById("Bouton2");
Bouton3 = document.getElementById("Bouton3");
Bouton4 = document.getElementById("Bouton4");

BoutonClose = document.getElementById("BoutonClose");
titreModal = document.getElementById("Label");
score = document.getElementById("score");
question = document.getElementById("question");

// Création des différentes questions. Ici, la lettre suivant le rang permet la distinction entre quiz chronologique ou thématique.
let question1c = {
    img: "js/img/N1.png",
    question: "Quel épisode de l'Ancien Testament est raconté dans cette première niche de la première travée ?",
    bouton1: "L'Annonce de la naissance de Marie à Joachim",
    bouton2: "L'Annonce de la naissance de Marie à Anne",
    bouton3: "La naissance de Marie",
    bouton4: "La Visitation",
    bonneReponse: "Bouton1",
    explications: "Le personnage central, debout, est Joachim. Initialement, la présence d'un ange dans le prolongement du regard du personnage permettait de représenter l'annonce à Joachim."
}

let question2c = {
    img: "js/img/N10.png",
    question: "Dans cette dixième scène, représentant la Nativité, qui est le personnage chapeau à la main ?",
    bouton1: "Joachim",
    bouton2: "Melchior",
    bouton3: "Balthazar",
    bouton4: "Saint Joseph",
    bonneReponse: "Bouton4",
    explications: "Au centre de la scène , on peut voir la Vierge en adoration face à l'Enfant Jésus dans une crèche. On voit face à elle Saint Joseph, veillant sur l'Enfant, ce dernier entouré de trois angelots."
}

let question3c = {
    img: "js/img/N20.png",
    question: "Quel épisode du Nouveau Testament est représenté dans cette vingtième niche, dans la septième travée ?",
    bouton1: "La tentation du Christ",
    bouton2: "Le baiser de Judas",
    bouton3: "La guérison de l'aveugle né",
    bouton4: "Jésus devant Pilate",
    bonneReponse: "Bouton3",
    explications: "Jésus, au centre de la scène, accompagné de deux disciples, soigne un aveugle. Il lui applique de la boue sur les yeux, et lui dit de se laver dans le réservoir de Siloé. Suite à cela, l'aveugle retrouve la vue."
}

let question4c = {
    img: "js/img/N26.png",
    question: "Quel épisode du Nouveau Testament est raconté dans cette vingt-sixième niche ?",
    bouton1: "Jésus devant Pilate",
    bouton2: "Le couronnement d'épines",
    bouton3: "La flagélation de Jésus",
    bouton4: "L'apparition de Jésus à Thomas",
    bonneReponse: "Bouton2",
    explications: "Jésus, encore une fois au centre de la scène, est ici entouré de deux soldats. Un des deux, son bourreau, lui pose la couronne sur la tête."
}

let question5c = {
    img: "js/img/N34.png",
    question: "Dans cette représentation de l'Ascension, qui est le personnage à la tête drapée ?",
    bouton1: "Matthieu",
    bouton2: "Judas",
    bouton3: "Marie",
    bouton4: "Pierre",
    bonneReponse: "Bouton3",
    explications: "Ici, tous les personnages présents sont des apôtres, des disciples, et Marie. Tous ont le regard vers le ciel, regardant Jésus s'élever, dont on ne voit que les pieds traversant le plafond."
}

let question1t = {
    img: "js/img/Hercule.png",
    question: "À quel héros de l’Antiquité cet homme vêtu à l’antique fait-il référence ?",
    bouton1: "Achille",
    bouton2: "Hercule",
    bouton3: "Persée",
    bouton4: "Orphée",
    bonneReponse: "Bouton2",
    explications: "Il fait référence à Hercule, qui était interprété à la Renaissance comme une préfiguration du Christ."
}

let question2t = {
    img: "js/img/Chemise.png",
    question: "À quelle relique de la cathédrale cette chemise fait-elle référence ?",
    bouton1: "La robe de la Vierge",
    bouton2: "Les langes de l'enfant Jésus",
    bouton3: "La Sainte Tunique de Christ",
    bouton4: "Le costume ecclesiastique",
    bonneReponse: "Bouton1",
    explications: "C'est une représentation de la Chemise de la Vierge, qui était conservée dans la Sainte Châsse. Elle était disposée derrière le maître-autel jusqu’en 1539 et le tour de chœur lui servait d’écrin."
}

let question3t = {
    img: "js/img/Ceinture.png",
    question: "À quoi fait référence la ceinture sculptée dans le décor de la troisième travée ?",
    bouton1: "Un outil",
    bouton2: "Un fouet",
    bouton3: "Un collier",
    bouton4: "Une ceinture",
    bonneReponse: "Bouton4",
    explications: "La ceinture est une évocation d’une relique de la cathédrale, la ceinture de la Vierge, et d’une ceinture en or et ornée de rubis offerte par Anne de Bretagne au trésor de la cathédrale en 1510."
}

let question4t = {
    img: "js/img/lucrece.png",
    question: "Quel personnage est reconnaissable sur cette photo de la neuvième travée ?",
    bouton1: "Vénus",
    bouton2: "Lucrèce",
    bouton3: "Marie",
    bouton4: "Médée",
    bonneReponse: "Bouton2",
    explications: "Au-dessous de cette scène d'arrivée de Jésus à Jérusalem, on peut observer la présence de différents personnages. Ici, est représenté le personnage de Lucrèce, admiré pour sa vertu et sa beauté."
}

let question5t = {
    img: "js/img/allegorie.png",
    question: "Dans l'ornement de la dixième travée, cette allégorie est visible. Que représente-t-elle ?",
    bouton1: "Un soldat romain",
    bouton2: "La cavalerie",
    bouton3: "La mort",
    bouton4: "La peur",
    bonneReponse: "Bouton3",
    explications: "La mort, ici représentée sur un cheval, tout deux le visage déformé, orne la scène du baiser de Judas. Cela peut être vu comme un signe annonciateur de la trahison de Judas, qui mène ensuite à la crucifixion du prophète."
}

// Dans les documents QCMChrono.php et QCMThema.php, une variable questionnaire est créée, pour distinguer l'un de l'autre. Elle est ici récupérée et testée pour proposer les questions correspondant au quiz en cours.
// L'utilisation d'un tableau permet une chronologie et un ordre des questions.
if (questionnaire == "t"){
	questions = [question1t,question2t,question3t,question4t,question5t];
}
else{
	questions = [question1c,question2c,question3c,question4c,question5c];
}

// La variable qui nous positionne dans le tableau des questions est rangQuestionCourante.
let rangQuestionCourante = 0;

// Pour chaque propriétés d'un objet question, on pointe un objet dans la page html, dont le html sera changé lors du déroulement du jeu.
question.innerHTML = questions[rangQuestionCourante].question;
Bouton1.innerHTML = questions[rangQuestionCourante].bouton1;
Bouton2.innerHTML = questions[rangQuestionCourante].bouton2;
Bouton3.innerHTML = questions[rangQuestionCourante].bouton3;
Bouton4.innerHTML = questions[rangQuestionCourante].bouton4;
explications.innerHTML = questions[rangQuestionCourante].explications;

//------------------Vérification de la séléction de l'utilisateur---------------------//
// event attend ici la séléction d'un bouton réponse. Les propriétés target et id permettent d'identifier ce bouton.
function testReponse(event) {
    if (event.target.id == questions[rangQuestionCourante].bonneReponse) {
        titreModal.innerHTML = 'Bonne réponse !';
        scoreJoueur = scoreJoueur + 1;
        score.innerHTML = scoreJoueur;
    }
    else {
        titreModal.innerHTML = 'Mauvaise réponse !';
    }
	
// On stocke dans une variable le contenu html de l'élément cliqué.
	var reponseDonnee = event.target.innerHTML;

// Requête Http permettant l'enregistrement des réponses, en passant en paramètre la réponse de l'utilisateur, le rang de la question en cours (donc répondue lors de la séléction) et l'ID de l'utilisateur en train de répondre.
	var oReq = new XMLHttpRequest();
	oReq.open("get", "/php/reponsesCxC.php/?rep="+reponseDonnee+"&rangQuestionCourante="+rangQuestionCourante+"&ID="+ID);
	oReq.send();
		
}
//------------------Définition de l'évenement permettant le déroulement---------------------//
Bouton1.addEventListener("click", testReponse);
Bouton2.addEventListener("click", testReponse);
Bouton3.addEventListener("click", testReponse);
Bouton4.addEventListener("click", testReponse);

//-------------Définition de la fonction passant d'une question à la suivante----------------//
BoutonClose.addEventListener("click", questionSuivante);

function questionSuivante() {
    rangQuestionCourante++;	// Le pointeur du tableau augmente de 1
    document.getElementById("img").src = questions[rangQuestionCourante].img; // La source de l'image est modifiée
    question.innerHTML = questions[rangQuestionCourante].question; // Tous les contenus textuels des objets html sont changés
    Bouton1.innerHTML = questions[rangQuestionCourante].bouton1;
    Bouton2.innerHTML = questions[rangQuestionCourante].bouton2;
    Bouton3.innerHTML = questions[rangQuestionCourante].bouton3;
    Bouton4.innerHTML = questions[rangQuestionCourante].bouton4;
    explications.innerHTML = questions[rangQuestionCourante].explications;
}

//--------------------Définition de la fonction de fin du QCM------------------------//
function finQuizz() {
	if (rangQuestionCourante === questions.length){ // Si le tableau a été entièrement parcouru, faire...
		document.getElementById("game").style.display = 'none'; // N'affiche plus sur la page
		question.innerHTML = 'Merci d\'avoir joué à ce QCM, n\'hésitez pas à visiter les pages de présentation des livrables du projet ChArtRes pour approfondir vos connaissances sur la cathédrale !';
	}
}
document.querySelector("#BoutonClose").addEventListener('click', finQuizz); // Déclenchement du test de la fonction de fin du QCM