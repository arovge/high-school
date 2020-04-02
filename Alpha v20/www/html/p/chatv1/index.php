<!DOCTYPE html>
	<html>
		<head>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
			<script type="text/javascript" src="/include/header.js"></script>
			<link rel="stylesheet" type="text/css" href="/include/style.css">
			<link href='https://fonts.googleapis.com/css?family=Roboto:500,400,300,100' rel='stylesheet' type='text/css'>
			<title>chat v1</title>
		</head>
		<body>
			<div id="header"></div>
			<form action="/include/chatv1.php" method="post">
				<input type="text" name="username" placeholder=" username" id="user"><br>
				<input type="text" name="message" placeholder=" message" id="message"><br>
				<button type="submit" class="button" id="pageButton">submit</button>
				<a href="https://www.austinrovge.com/p/chatv1/" class="button" id="pageButton" style="font-weight: 400;">refresh page</a>*(doesn't refresh automatically!)
			</form>
			<p id="chatHead">Let's see what everyone is talking about!</p>
			<div id="chatContainer">
				<?php
					define("SERVER", "localhost");
					define("USERNAME", "root");
					define("PASSWORD", "Dragon768");
					define("DATABASE", "dev");
					$db = new mysqli(SERVER, USERNAME, PASSWORD, DATABASE);
					$sql = "SELECT * FROM `chatList` ORDER BY `chatList`.`ID` DESC";
					$result = mysqli_query($db, $sql);
					//prints out database
					echo "<ul>";
					while($row = mysqli_fetch_array($result)) {
						$username = $row['username'];
						$message = $row['message'];
						if($message == '' || $username == '') {
							goto B;
						} else {
							echo "<li id='chatList'>";
							if ($username == 'root@austinrovge.com01189998819991197253') {
								//protection from html injection with htmlspecialchars()
								echo "<strong style='color:#4183D7;'>root@austinrovge.com";
								echo "   -   ";
								echo $message;
								echo "</strong>";
							} else if ($username == 'root@austinrovge.com' || $username == 'root' || $username == 'admin') {
								$username = "faggot@nettcod.net";
								goto A;
							}
							else {
								A:
								echo "<strong>";
								echo htmlspecialchars($username);
								echo "   -   </strong>";
								//check to see if myah fucking sent the bee movie script again
								if (strlen ($message) > 1000) {
									$message = substr($message, 0, 1000);
									echo htmlspecialchars($message) . "..." . "<strong style='color:#c0392b; display:inline-block;'>[message shortened due to length]</strong>";
								} else {
									echo htmlspecialchars($message);
								}
							}
							echo "</li>";
						}
						B:
					}
					echo "</ul>";
				?>
			</div>
		</body>
	</html>
