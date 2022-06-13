var bonneReponse = "Bouton2";

var scoreJoueur = 0;

Bouton1 = document.getElementById("Bouton1");
Bouton2 = document.getElementById("Bouton2");
Bouton3 = document.getElementById("Bouton3");
Bouton4 = document.getElementById("Bouton4");

BoutonClose = document.getElementById("BoutonClose");
titreModal = document.getElementById("Label");
score = document.getElementById("score");
question = document.getElementById("question");

//POO pour créer des questions//
let question1 = {
    img: "js/img/QCMchoeur.jpg",
    question: "L'entrée du Nartex offre directement un point de vue sur :",
    bouton1: "Le chœur",
    bouton2: "La clôture de chœur",
    bouton3: "La crypte",
    bouton4: "La boutique souvenir",
    bonneReponse: "Bouton1",
    explications: "La clôture n'est pas encore visible par l'entrée principale de la cathédrale. Le tour de chœur, se trouvant au fond du bâtiment, est orienté vers les murs extérieurs."
}

let question2 = {
    img: "js/img/QCMPIED.jpg",
    question: "Que represente cette scène dans un des derniers travées du tour de chœur ?",
    bouton1: "La naissance du Christ",
    bouton2: "L'Ascension",
    bouton3: "L'arrivée des Rois Mages",
    bouton4: "Le séjour de Jésus dans le désert",
    bonneReponse: "Bouton2",
    explications: "On voit dans cette scène un pied traversant le plafond : c'est la manière de représenter l'Ascension du Christ."
}

let question3 = {
    img: "js/img/QCMsud.jpg",
    question: "Une partie du tour de chœur, au sud de celui-ci, est un espace sans travée. Pourquoi ?",
    bouton1: "Une dégradation",
    bouton2: "Un vol",
    bouton3: "La perte d'un objet",
    bouton4: "Le déplacement d'un objet",
    bonneReponse: "Bouton4",
    explications: "Cet espace était initialement habité par un reliquaire, qui fut déplacé vers un musée, ce pour une meilleur conservation. L'espace est aujourd'hui occupé par diverses statues."
}

let question4 = {
    img: "js/img/QCMnb.jpg",
    question: "Combien de travées forment le tour de chœur ?",
    bouton1: "12",
    bouton2: "40",
    bouton3: "48",
    bouton4: "16",
    bonneReponse: "Bouton2",
    explications: "Le tour de chœur représente tous les épisodes de l'Ancien et du Nouveau Testament, qui s'étend donc sur 40 travées."
}

let question5 = {
    img: "js/img/QCMext.jpg",
    question: "De quelle époque date la cathédrale de Chartres ?",
    bouton1: "XVIème siècle",
    bouton2: "Xème siècle",
    bouton3: "XIIIème siècle",
    bouton4: "Vème siècle",
    bonneReponse: "Bouton3",
    explications: "Marquée par son esthétique gothique, les travaux commencent à la fin du XIIème siècle, et se finissent en 1230."
}

let questions = [question1,question2,question3,question4,question5];
let rangQuestionCourante = 0;

question.innerHTML = questions[rangQuestionCourante].question;
Bouton1.innerHTML = questions[rangQuestionCourante].bouton1;
Bouton2.innerHTML = questions[rangQuestionCourante].bouton2;
Bouton3.innerHTML = questions[rangQuestionCourante].bouton3;
Bouton4.innerHTML = questions[rangQuestionCourante].bouton4;
explications.innerHTML = questions[rangQuestionCourante].explications;

console.log("id : "+ ID);

//----------------------------------------//
function testReponse(event) {
    if (event.target.id == questions[rangQuestionCourante].bonneReponse) {
        titreModal.innerHTML = 'Bonne reponse !';
        scoreJoueur = scoreJoueur + 1;
        score.innerHTML = scoreJoueur;
    }
    else {
        titreModal.innerHTML = 'Mauvaise reponse !';
    }
	var reponseDonnee = event.target.innerHTML;
	
	var oReq = new XMLHttpRequest();
	oReq.open("get", "/php/reponsesCxC.inc.php/?rep="+reponseDonnee+"&rangQuestionCourante="+rangQuestionCourante+"&ID="+ID);
	oReq.send();
		
}
//----------------------------------------//
Bouton1.addEventListener("click", testReponse);
Bouton2.addEventListener("click", testReponse);
Bouton3.addEventListener("click", testReponse);
Bouton4.addEventListener("click", testReponse);

//------------------------------------------------------------------------------------------------------------------------//

BoutonClose.addEventListener("click", questionSuivante);

function questionSuivante() {
    rangQuestionCourante++;	
    document.getElementById("img").src = questions[rangQuestionCourante].img;
    question.innerHTML = questions[rangQuestionCourante].question;
    Bouton1.innerHTML = questions[rangQuestionCourante].bouton1;
    Bouton2.innerHTML = questions[rangQuestionCourante].bouton2;
    Bouton3.innerHTML = questions[rangQuestionCourante].bouton3;
    Bouton4.innerHTML = questions[rangQuestionCourante].bouton4;
    explications.innerHTML = questions[rangQuestionCourante].explications;
}

//------------------------------------------------------------------------------------------------------------------------//
function finQuizz() { //fonction pour la fin, si la question courante vaut la taille du tableau question, c-à-d 5 alors le jeu se cache et l'alerte disparaît 
	if (rangQuestionCourante === questions.length){ 
		document.getElementById("game").style.display = 'none'; //ne s'affiche plus sur la page
		question.innerHTML = 'Merci d\'avoir joué à ce QCM, n\'hésitez pas à visiter les pages de présentation des livrables du projet ChArtRes pour approfondir vos connaissances sur la cathédrale !';
	}
}
document.querySelector("#BoutonClose").addEventListener('click', finQuizz); // lien entre le bouton 'Continuer' du modal et la fonction de fin