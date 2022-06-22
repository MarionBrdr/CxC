<?php

	//En cours de construction, amélioration future : intérrogation des statistiques de la base de données
	$dbServername = "localhost";
	$dbUsername = "JeanneFRAS";
	$dbPassword = "Admin1&";
	$dbName = "CxCBDD_";
	$dbTable = "Visiteur";

	$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

	if (!$conn) {
	  die("Connection failed: " . mysqli_connect_error());
	}

	$sql1 = "SELECT COUNT(*) FROM $dbTable WHERE EtatVisite == 'Oui'";
	$results1 = mysqli_query($conn, $sql1);
	if (!$results1){
		die("Marche pas".mysqli_error($conn));
	}

	/*$sql2 = "SELECT (reponse0, reponse1, reponse2, reponse3, reponse4) FROM $dbTable WHERE quiz == 'T'";
	$results2 = mysqli_query($conn, $sql2);
	if (!$results2){
		die("Marche pas".mysqli_error($conn));
	}

	$sql3 = "SELECT (reponse0, reponse1, reponse2, reponse3, reponse4) FROM $dbTable WHERE quiz == 'C'";
	$results3 = mysqli_query($conn, $sql3);
	$data = mysqli_fetch_array($results3);
	if (!$results3){
		die("Marche pas".mysqli_error($conn));
	}*/
	
	echo $results1;
?>