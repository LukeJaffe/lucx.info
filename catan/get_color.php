<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    session_start();

    $game = $_SESSION['game'];
    if ($game == "")
        die("Game not set in session.");
    $player = $_SESSION['username'];
    if ($player == "")
        die("Username not set in session.");

    /* mysql shit */
    $servername = "localhost";
    $dbusername = "webuser";
    $dbpassword = "password";
    $dbname = "catan_db";
    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

    /* Get max num players for this game */
    $sql = "SELECT color FROM " . $game . " WHERE player = '" . $player . "';"; 
    if ($result = $conn->query($sql))
        echo $result->fetch_assoc()['color'];
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;
?>
