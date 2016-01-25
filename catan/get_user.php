<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    session_start();

    $user_name = $_SESSION["username"];
    if ($user_name == "")
        echo "DEFAULT_USER";
    else
        echo $user_name;
?>
