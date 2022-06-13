<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/img/logo2.png">
    <title>CxC - QCM</title>
    <!--POLICE-->
    <style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap');</style>
    <style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');</style>
    <!--CSS-->
    <link rel="stylesheet" href="https://chartresxchoeur.web-edu.fr/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://chartresxchoeur.web-edu.fr/css/qcm.css"/>
	<link rel="stylesheet" href="https://chartresxchoeur.web-edu.fr/css/style.css"/>
</head>
<?php $id = $_GET["ID"]; ?>
<script>
	var ID = <?php echo $id?>;
</script>
<body>
    <header class="container-fluid">
        <nav class="container navbar navbar-expand-lg navbar-light bg-white border-bottom"> <!--fixed-top-->
            <div class="container px-2 py-1">
                <a class="navbar-brand" id="titre" href="index.html">
                    <img src="/img/logo2.png" alt="" height="90" id="logonavbar">
                    Chartres par C(h)œur
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav" id="navbarauto"> <!--me-auto mb-2 mb-lg-0-->
                        <li class="nav-item">
                            <a class="nav-link active" id="txtcustom" aria-current="page" href="index.html">Accueil</a>
                        </li>
                    
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="qcm.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Quiz
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="QCMFormChrono.html">Chronologiques</a></li>
                                <li><a class="dropdown-item" href="QCMFormThema.html">Thématiques</a></li>
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
                                Livrables
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
			
			<div id="game">

				<div class="text-center">
					<h4 class="ms-4"><strong>Score :</strong><p id="score">0</p></h4>
				</div>

				<div class="row justify-content-evenly">

					<img src="js/img/QCMchoeur.jpg" id="img" max-width="40%" height="auto" class="col"/>

					<div id="reponses" class="row col">
						<div id="reponse1" class="p-2 bg-light border text-center col-4 col-sm-7" type="rep">
							<button type="button" data-bs-toggle="modal" id="Bouton1" data-bs-target="#exampleModal"
									class="btn btn-custom text-white"></button>
						</div>

						<div id="reponse2" class="p-2 bg-light border text-center col-4 col-sm-7" type="rep">
							<button type="button" data-bs-toggle="modal" id="Bouton2" data-bs-target="#exampleModal"
									class="btn btn-custom text-white"></button>
						</div>

						<div class="w-200 d-none d-md-block"></div>

						<div id="reponse3" class="p-2 bg-light border text-center col-4 col-sm-7" type="rep">
							<button type="button" data-bs-toggle="modal" id="Bouton3" data-bs-target="#exampleModal"
									class="btn btn-custom text-white"></button>
						</div>

						<div id="reponse4" class="p-2 bg-light border text-center col-4 col-sm-7" type="rep">
							<button type="button" data-bs-toggle="modal" id="Bouton4" data-bs-target="#exampleModal"
									class="btn btn-custom text-white"></button>
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

				<footer>
					<div class="container py-3 my-4">
						<ul class="nav justify-content-center border-top pb-3 mb-3">
							<li class="nav-item"><a href="mentions.html" class="nav-link px-2 text-muted">Mentions légales</a></li>
							<li class="nav-item"><a href="contact.html" class="nav-link px-2 text-muted">Contact</a></li>
						</ul>
					</div>
				</footer>

				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
						integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
						crossorigin="anonymous"></script>
				<script src="https://chartresxchoeur.web-edu.fr/js/qcm.js"></script>

				</div>
			</div>
		
			<!-- <div id="end" visibility="hidden" display="none">
				<p>Merci d'avoir joué à ce QCM, n'hésitez pas à visiter les pages de présentation des livrables du projet ChArtRes pour approfondir vos connaissances sur la cathédrale !</p>
			</div> -->
		</section>
	</body>
</html>