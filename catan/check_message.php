<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    /* Get session variables */
    session_start();

    $game = $_SESSION['game'];
    $receiver = $_SESSION['username']; 
    $msg_idx = $_SESSION['msg_idx'];

    $message_table = $game."_messages";

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

    /* Get all new messages */
    $sql = "SELECT * FROM " . $message_table . " WHERE idx > " . $msg_idx . ";";
    $result = $conn->query($sql);

    if ($result->num_rows > 0)
    {
        $array = array();
        while ($row = $result->fetch_array())
        {
            //echo $row['receiver'] . ":" . $receiver;
            if ($row['receiver'] === $receiver)
                $array[] = $row;
        }
        echo json_encode($array);

        /* If success, set new msg_idx */
        $sql = "SELECT MAX(idx) AS idx FROM " . $message_table . ";";
        if ($result = $conn->query($sql))
            $_SESSION["msg_idx"] = $result->fetch_assoc()['idx'];
    }
    else
        echo "NO_MESSAGES";
?>
