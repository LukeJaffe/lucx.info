<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    /* Parse POST */
    $tag = $_POST["tag"];
    $payload = $_POST["payload"]; 
    $payload = preg_replace('/[^a-zA-Z0-9_ %\[\]\.\(\)%&-]/s', '', $payload);
    $receiver = $_POST["receiver"];

    /* Get session variables */
    session_start();

    $game = $_SESSION['game'];
    $sender = $_SESSION['username']; 

    /* MySQL */
    $servername = "localhost";
    $dbusername = "webuser";
    $dbpassword = "password";
    $dbname = "catan_db";

    $message_table = $game."_messages";

    if ($host === "")
    {
        die("Log in to create a game!");
    }

    /* Create connection */
    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

    /* Get list of other players */
    $sql = "SELECT player FROM " . $game . ";";
    $result = $conn->query($sql);


    if ($receiver === "ALL")
    {
        /* Loop through other players, sending message to each of them */
        while ($row = $result->fetch_assoc())
        {
            $player = $row["player"];
            $sql = "INSERT INTO " . $message_table . " (timestamp, tag, payload, sender, receiver) 
                    VALUES (CURRENT_TIMESTAMP(), '" . $tag . "' ,'"  . $payload . "', '" . $sender . "', '" . $player . "');";
            if ($conn->query($sql) === TRUE)
                echo "SUCCESS";
            else
                echo "ERROR: " . $sql . "<br>" . $conn->error;
        }
    }
    else
    {
        /* Send message only to designated player */
        $sql = "INSERT INTO " . $message_table . " (timestamp, tag, payload, sender, receiver, received) 
                VALUES (" . $timestamp . ", '" . $tag . "', '"  . $payload . "', " . $sender . ", " . $receiver . ");";
        if ($conn->query($sql) === TRUE)
            echo "SUCCESS";
        else
            echo "ERROR: " . $sql . "<br>" . $conn->error;
    }
?>
