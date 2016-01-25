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

    $sql = "DROP TABLE " . $game . ";";
    if ($result = $conn->query($sql))
        echo 0;
    else
        echo "ERROR: " . $sql . "<br>" . $conn->error;
?>
