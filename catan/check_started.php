<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    session_start();

    $game = $_SESSION['game'];

    /* mysql shit */
    $servername = "localhost";
    $dbusername = "webuser";
    $dbpassword = "password";
    $dbname = "catan_db";
    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

    /* Get max num players for this game */
    $sql = "SELECT started FROM lobby_table WHERE game = '" . $game . "';"; 
    if ($result = $conn->query($sql))
        echo $result->fetch_assoc()['started'];
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;
?>
