<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/img/qcm.png">
    <title>CxC - QCM</title>
    <!--POLICE-->
    <style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap');</style>
    <style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');</style>
    <!--CSS-->
    <link rel="stylesheet" href="https://chartresxchoeur.web-edu.fr/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://chartresxchoeur.web-edu.fr/css/qcm.css"/>
	<link rel="stylesheet" href="https://chartresxchoeur.web-edu.fr/css/style.css"/>
</head>
	
<?php $id = $_GET["ID"]; ?> <!-- Le script de la page QCMFormChrono.html ajoute en paramètre l'ID en cours d'utilisation lors la réponse au formulaire. Récupération et stockage de la valeur. Cette manipulation justifie le format php de cette page.-->
	
<script>
	var ID = <?php echo $id?>; // Récupération de la variable php précédement stockée.
	var questionnaire = "c"; // Cette variable permet de distinguer la liste de questions des deux QCM dans le script qcm.js.
</script>
	
<body>
    <header class="container-fluid">
        <nav class="container navbar navbar-expand-lg navbar-light bg-white border-bottom">
            <div class="container px-2 py-1">
                <a class="navbar-brand" id="titre" href="index.html">
                    <img src="/img/qcm.png" alt="" height="90" id="logonavbar">
                    Chartres par C(h)œur
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav" id="navbarauto">
                        <li class="nav-item">
                            <a class="nav-link active" id="txtcustom" aria-current="page" href="index.html">Accueil</a>
                        </li>
                    
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="qcm.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Quiz
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="QCMFormChrono.html">Chronologique</a></li>
                                <li><a class="dropdown-item" href="QCMFormThema.html">Thématique</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="jeux.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Jeux
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="memory.html">Memory</a></li>
                                <li><a class="dropdown-item" href="hotspot.html">Hotspot</a></li>
                                <li><a class="dropdown-item" href="wordle.html">Wordle</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Développements numériques
                            </a>
                            <ul class="dropdown-menu container" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="livrables.html">Présentation</a></li>
                                <li><a class="dropdown-item" href="film.html">Film</a></li>
                                <li><a class="dropdown-item" href="maquette.html">Maquette</a></li>
                                <li><a class="dropdown-item" href="vues.html">Vues</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>	
	<section>
		<div class="container">
			
			<div class="question">
				<p class="fs-3" class="fw-bolder float-start" id="question">.</p>
			</div>
			
			<div id="game"> <!-- Division permettant l'affichage de l'écran de fin, en rendant absent son contenu.-->
				<div class="text-center">
					<h4 class="ms-4"><strong>Score :</strong><p id="score">0</p></h4>
				</div>
				<div class="row justify-content-center">
					<div class="col-md-4 col-sm-4">
						<img src="js/img/N1.png" id="img"/>
					</div>					
					<div id="reponses" class="grid col-md-4 col-sm-4">							
						<div id="reponse1" type="rep" class="g-col-6">
							<button type="button" data-bs-toggle="modal" id="Bouton1" data-bs-target="#exampleModal"
									class="btn btn-custom text-white shadow"></button>
						</div>
						<div id="reponse2" type="rep" class="g-col-6">
							<button type="button" data-bs-toggle="modal" id="Bouton2" data-bs-target="#exampleModal"
									class="btn btn-custom text-white shadow"></button>
						</div>
						<div id="reponse3" type="rep" class="g-col-6">
							<button type="button" data-bs-toggle="modal" id="Bouton3" data-bs-target="#exampleModal"
									class="btn btn-custom text-white shadow"></button>
						</div>
						<div id="reponse4" type="rep" class="g-col-6">
							<button type="button" data-bs-toggle="modal" id="Bouton4" data-bs-target="#exampleModal"
									class="btn btn-custom text-white shadow"></button>
						</div>
					</div>

					<div class="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="Label" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="Label"></h5>
								</div>
								<div class="modal-body">
									<p id="explications"></p>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
											id="BoutonClose">Continuer</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
						integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
						crossorigin="anonymous"></script> <!-- Script des objets bootstrap (ici le modal)-->
				<script src="https://chartresxchoeur.web-edu.fr/js/qcm.js"></script> <!-- Script du déroulement du QCM-->
			</div>
			
			<footer>
				<div class="container py-3 my-4">
					<ul class="nav justify-content-center border-top pb-3 mb-3">
						<li class="nav-item"><a href="mentions.html" class="nav-link px-2 text-muted">Mentions légales</a></li>
						<li class="nav-item"><a href="contact.html" class="nav-link px-2 text-muted">Équipe</a></li>
					</ul>
				</div>
			</footer>
		</div>
	</section>
</body>
</html>