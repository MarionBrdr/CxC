<?php
	$dbServername = "localhost";
	$dbUsername = "JeanneFRAS";
	$dbPassword = "Admin1&";
	$dbName = "CxCBDD_";
	$dbTable = "Visiteur";

	// Création de la connexion avec la base de donnée
	$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

	// Vérification de la connexion, et dans le cas où elle a échoué, mettre fin au procesus avec un message d'erreur
	if (!$conn) {
	  die("Connection failed: " . mysqli_connect_error());
	}

	// Récupération et stockage des variables et valeurs passées en paramètre de la requête
	$reponse = $_GET["rep"];
	$id = $_GET["ID"];
	$rang = $_GET["rangQuestionCourante"];

	// Correction et remplacement des caractères spéciaux 
	$search = array("'", "É","é","ô", "œ","è","à");
	$replace = array("\'","E","e","o", "oe","e","a");
	$correction = str_replace($search, $replace, $reponse);

	// Création de la première requête SQL : mettre à jour les colonnes réponses en fonction du rang de la question et de l'ID en cours d'utilisation
	$sql1 = "UPDATE Visiteur SET reponse".$rang."= '".$correction."' WHERE ID = ".$id;
	
	// Execution de la requête, et dans le cas d'un echec, renvoyer un message d'erreur
	$results1 = mysqli_query($conn, $sql1);
	if (!$results1){
		die("Ne marche pas".mysqli_error($conn));
	}
?>