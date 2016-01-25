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
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    if ($username == "")
        die("Username field cannot be empty!");
    if ($password == "")
        die("Password field cannot be empty!");

    $check_username = "SELECT username FROM account_info WHERE username = '" . $username . "';";
    $result = $conn->query($check_username);
    if ($result->num_rows == 0)
    {
        $sql = "INSERT INTO account_info (name, email, username, password) 
                VALUES ('" . $name . "', '" . $email . "', '" . $username . "', '" . $password . "');";
        if ($conn->query($sql) === TRUE) 
        {
            echo "SUCCESS";
        } 
        else 
        {
            echo "ERROR: " . $sql . "<br>" . $conn->error;
        }
    }
    else
    {
        echo "Username already exists!";
    }

    $conn->close();
?>
