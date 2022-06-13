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
				<p class="fs-3" class="fw-bolder float-start" id="question">Le site est encore en cours de développement !</p>
			</div>

			<div class="text-center">
				<h4 class="ms-4"><strong>- En construction -</strong></h4>
			</div>

			<footer>
				<div class="container py-3 my-4">
					<ul class="nav justify-content-center border-top pb-3 mb-3">
						<li class="nav-item"><a href="mentions.html" class="nav-link px-2 text-muted">Mentions légales</a></li>
						<li class="nav-item"><a href="contact.html" class="nav-link px-2 text-muted">Contact</a></li>
					</ul>
				</div>
			</footer>
		</div>
	</section>
	</body>
</html>