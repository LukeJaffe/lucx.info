<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    session_start();

    $game_name = $_SESSION["game"];
    if ($game_name == "")
        echo "DEFAULT_GAME";
    else
        echo $game_name;
?>
