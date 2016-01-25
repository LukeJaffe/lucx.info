<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    session_start();

    $servername = "localhost";
    $dbusername = "webuser";
    $dbpassword = "password";
    $dbname = "catan_db";

    $game = $_POST['game'];
    $host = $_SESSION['username']; 
    $players = $_POST['players'];

    if ($host === "")
    {
        die("Log in to create a game!");
    }

    // Create connection
    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);
    
    /* Create random seed */
    $seed = rand();

    /* Add table into lobby */
    $sql = "INSERT INTO lobby_table (game, host, players, started, seed) 
            VALUES ('" . $game . "', '" . $host . "',"  . $players . ", false, " . $seed . ");";
    if ($conn->query($sql) === TRUE)
        echo "SUCCESS";
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;

    /* Add new table for game setup */
    $sql = "CREATE TABLE " . $game . "
    (idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    player varchar(25),
    color varchar(10),
    turn_order int);";
    if ($conn->query($sql) === TRUE)
        echo "SUCCESS";
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;

    /* Add message passing table */
    $message_table = $game."_messages";
    $sql = "CREATE TABLE " . $message_table . "
    (idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    timestamp TIMESTAMP,
    tag VARCHAR(20),
    payload VARCHAR(255),
    sender VARCHAR(50),
    receiver VARCHAR(50));";
    if ($conn->query($sql) === TRUE)
        echo "SUCCESS";
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;

    $conn->close();
?>
