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

    /* Check number of players in game */
    $sql = "SELECT * FROM " . $game . ";"; 
    if ($result = $conn->query($sql))
        $num_players = $result->num_rows;
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;

    /* Get my turn order */
    $sql = "SELECT turn_order FROM " . $game . " WHERE player='" . $username . "';";
    if ($result = $conn->query($sql))
        $curr_turn = $result->fetch_assoc()['turn_order'];
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;

    if ($curr_turn == $num_players-1)
        $next_turn = 0;
    else
        $next_turn = $curr_turn + 1;

    /* Return the next player */
    $sql = "SELECT player FROM " . $game . " WHERE turn_order=" . $next_turn . ";";
    if ($result = $conn->query($sql))
        echo $result->fetch_assoc()['player'];
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;

    $conn->close();
?>
