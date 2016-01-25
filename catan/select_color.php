<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    session_start();

    $game = $_SESSION['game'];
    $player = $_SESSION['username'];
    $color = $_POST['color'];

    /* mysql shit */
    $servername = "localhost";
    $dbusername = "webuser";
    $dbpassword = "password";
    $dbname = "catan_db";
    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

    $sql = "UPDATE " . $game . " SET color = '" . $color . "' 
            WHERE player = '" . $player . "';";
    if ($result = $conn->query($sql))
        echo 0;
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;
?>
