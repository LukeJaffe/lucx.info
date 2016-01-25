<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    $game = $_POST['game'];

    /* mysql shit */
    $servername = "localhost";
    $dbusername = "webuser";
    $dbpassword = "password";
    $dbname = "catan_db";
    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

    /* Get max num players for this game */
    $sql = "SELECT seed FROM lobby_table WHERE game = '" . $game . "';"; 
    if ($result = $conn->query($sql))
    {
        $seed = $result->fetch_assoc()['seed'];
        echo $seed;
    }
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;
?>
