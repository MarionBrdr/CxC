<?php
	$dbServername = "localhost";
	$dbUsername = "JeanneFRAS";
	$dbPassword = "Admin1&";
	$dbName = "CxCBDD_";
	$dbTable = "Visiteur";

	// Création de la connexion avec la base de donnée
	$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

	// Vérification de la connexion, et dans le cas où elle a échoué, mettre fin au processus avec un message d'erreur
	if (!$conn) {
	  die("Connection failed: " . mysqli_connect_error());
	}

	// Récupération et stockage des variables et valeurs passées en paramètre de la requête
	$valVisite = $_GET["valeurVisite"];
	$valProfil = $_GET["valeurProfil"];
	$qcm = $_GET["qcm"];

	// Correction et remplacement des caractères spéciaux 
	$search = array("É","é");
	$replace = array("E","e");
	$correctionV = str_replace($search, $replace, $valVisite);
	$correctionP = str_replace($search, $replace, $valProfil);

	// Création de la première requête SQL : inserer les valeurs des paramètres, ici les réponses au formulaire et la clé identifiant le QCM sélectionné
	$sql1 = "INSERT INTO $dbTable (EtatVisite, Profil, quiz) VALUES ('$correctionV', '$correctionP', '$qcm')";

	// Execution de la requête, et dans le cas d'un echec, renvoyer un message d'erreur
	$results1 = mysqli_query($conn, $sql1);
	if (!$results1){
		die("Marche pas".mysqli_error($conn));
	}

	// Création de la seconde requête SQL : lire le nombre de ligne actuel (correspondant à l'ID en cours d'utilisation)
	$sql2 = "SELECT COUNT(*) FROM Visiteur";	

	// Execution de la requête, et dans le cas d'un echec, renvoyer un message d'erreur
	$results2 = mysqli_query($conn, $sql2);

	// Ici l'utilisation d'un tableau est obligatoire, car la valeur renvoyée est un entier (sans cela, aucune réponse)
	$data = mysqli_fetch_array($results2);
	if (!$results2){
		die("Marche pas".mysqli_error($conn));
	}
	
	// Renvoie une valeur : ici, l'ID en cours
	echo $data[0];
?>