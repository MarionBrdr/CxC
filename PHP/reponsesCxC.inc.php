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

	$reponse = $_GET["rep"];
	$id = $_GET["ID"];
	$rang = $_GET["rangQuestionCourante"];

	$search = array("'", "É","é","ô");
	$replace = array("\'","E","e","o");
	$correction = str_replace($search, $replace, $reponse);

	//$correctionAp = str_replace("'", "\'", $reponse);
	//$correctionE = str_replace("É", "E", $reponse);

	$sql1 = "UPDATE Visiteur SET reponse".$rang."= '".$correction."' WHERE ID = ".$id;
	echo $sql1;
	$results1 = mysqli_query($conn, $sql1);
	if (!$results1){
		die("Marche pas".mysqli_error($conn));
	}
?>
