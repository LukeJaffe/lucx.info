<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    session_start();

    $game = $_SESSION['game'];
    $username = $_SESSION['username'];

    /* mysql shit */
    $servername = "localhost";
    $dbusername = "webuser";
    $dbpassword = "password";
    $dbname = "catan_db";
    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

    /* Get max num players for this game */
    $sql = "SELECT host FROM lobby_table WHERE game = '" . $game . "';"; 
    if ($result = $conn->query($sql))
    {
        $host = $result->fetch_assoc()['host'];
        if ($username == $host)
            echo 0;
        else
            echo 1;
    }
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;
?>
