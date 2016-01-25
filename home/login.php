<?php
    header('Access-Control-Allow-Origin: http://lucx.info');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    $servername = "localhost";
    $dbusername = "webuser";
    $dbpassword = "password";
    $dbname = "account_db";

    // Create connection
    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);


    $username = $_POST["username"];
    $password = $_POST["password"];


    /* Check validity of field */
    if ($username == "")
        die("Username field cannot be empty!");
    if ($password == "")
        die("Password field cannot be empty!");

    $query = "SELECT username FROM account_info WHERE username=? and password=?";

    if ($stmt = $conn->prepare($query))
    {
        $stmt->bind_param('ss', $username, $password);
        $stmt->execute();
        $stmt->store_result();
        $num_row = $stmt->num_rows;
        $stmt->bind_result($username);
        $stmt->fetch();
        $stmt->close();
    }
    else die("Failed to prepare query");

    $conn->close();

    if( $num_row === 1 ) 
    {
        session_start();
        $_SESSION['username'] = $username;
        echo $_SESSION['username'];
        //print_r($_SESSION);
    }
    else
        echo 1;
?>
