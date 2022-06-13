<?php
	$dbServername = "localhost";
	$dbUsername = "JeanneFRAS";
	$dbPassword = "Admin1&";
	$dbName = "CxCBDD_";
	$dbTable = "Visiteur";

	// Create connection
	$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);

	// Check connection
	if (!$conn) {
	  die("Connection failed: " . mysqli_connect_error());
	}

	$valVisite = $_GET["valeurVisite"];
	$valProfil = $_GET["valeurProfil"];

	$search = array("É","é");
	$replace = array("E","e");
	$correctionV = str_replace($search, $replace, $valVisite);
	$correctionP = str_replace($search, $replace, $valProfil);

	$sql1 = "INSERT INTO $dbTable (EtatVisite, Profil) VALUES ('$correctionV', '$correctionP')";
	$results1 = mysqli_query($conn, $sql1);
	if (!$results1){
		die("Marche pas".mysqli_error($conn));
	}

	$sql2 = "SELECT COUNT(*) FROM Visiteur";	
	$results2 = mysqli_query($conn, $sql2);
	$data = mysqli_fetch_array($results2);
	if (!$results2){
		die("Marche pas".mysqli_error($conn));
	}
	
	echo $data[0];
?>
