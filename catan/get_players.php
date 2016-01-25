<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    session_start();

    $game = $_SESSION['game'];
    if ($game == "")
        die("No game in session...");

    $servername = "localhost";
    $dbusername = "webuser";
    $dbpassword = "password";
    $dbname = "catan_db";

    // Create connection
    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

    $sql = "SELECT * FROM " . $game . ";";
    $result = $conn->query($sql);

    /* fetch object array */
    $array = array();
    while ($row = $result->fetch_array())
    {
        $array[] = $row;
    }
    array_push($array, $_SESSION['username']);
    echo json_encode($array);

    /* free result set */
    $result->close();

    $conn->close();
?>

