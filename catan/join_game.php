<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    session_start();

    $game = $_POST['game'];
    $username = $_SESSION['username'];

    /* mysql shit */
    $servername = "localhost";
    $dbusername = "webuser";
    $dbpassword = "password";
    $dbname = "catan_db";
    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

    /* Get max num players for this game */
    $sql = "SELECT players FROM lobby_table WHERE game = '" . $game . "';"; 
    if ($result = $conn->query($sql))
        $max_players = $result->fetch_assoc()['players'];
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;

    /* Check if game is full */
    $sql = "SELECT * FROM " . $game . ";"; 
    if ($result = $conn->query($sql))
        $num_players = $result->num_rows;
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;

    /* Check if user has already joined this game */
    $sql = "SELECT player FROM " . $game . " WHERE player = '" . $username . "';"; 
    $result = $conn->query($sql);
    if ($result->num_rows > 0)
        die(1);
    
    /* If there is room, join game */
    if ($num_players < $max_players)
    {
        $sql = "INSERT INTO " . $game . " (player, color) values ('" . $_SESSION['username'] . "', '');";
        if ($result = $conn->query($sql))
        {
            $_SESSION['game'] = $game;
            $_SESSION['msg_idx'] = 0;
            echo 0;
        }
        else
            echo "ERROR: " . $sql . "<br>" . $conn->error;
    }
    else
        echo $game . " is full.";
?>
