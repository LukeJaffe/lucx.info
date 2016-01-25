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

    /* Set game to started in lobby table */
    $sql = "UPDATE lobby_table SET started = true 
            WHERE game = '" . $game . "';";
    if (!$result = $conn->query($sql))
        echo "ERROR: " . $sql . "<br>" . $conn->error;

    /* Get number of players */
    $sql = "SELECT * FROM " . $game . ";"; 
    if ($result = $conn->query($sql))
        $num_players = $result->num_rows;
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;

    /* Set turn order */
    $order = array();
    for ($i = 0; $i < $num_players; $i++)
        array_push($order, $i);
    shuffle($order);

    for ($i = 0; $i < $num_players; $i++)
    {
        $j = $i+1;
        $sql = "UPDATE " . $game . " SET turn_order = " . $order[$i] . " 
                WHERE idx = " . $j . ";";
        if (!$result = $conn->query($sql))
            echo "ERROR: " . $sql . "<br>" . $conn->error;
    }

    /* Return the first player */
    $sql = "SELECT player FROM " . $game . " WHERE turn_order=0;";
    if ($result = $conn->query($sql))
        echo $result->fetch_assoc()['player'];
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;

    $conn->close();
?>
