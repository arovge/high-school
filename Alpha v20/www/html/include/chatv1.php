<?php
	define("SERVER", "localhost");
	define("USERNAME", "root");
	define("PASSWORD", "Dragon768");
	define("DATABASE", "dev");
	$db = new mysqli(SERVER, USERNAME, PASSWORD, DATABASE);
	//Sending form data to sql db.
	$username = $db->real_escape_string($_POST['username']);
	$message = $db->real_escape_string($_POST['message']);
	//add database script
	$sql = "INSERT INTO chatList (`username`, `message`) VALUES ('$username', '$message')";
	mysqli_query($db, $sql);
	//take user to new page after php script is finished
	header('Location: https://www.austinrovge.com/p/chatv1/');
