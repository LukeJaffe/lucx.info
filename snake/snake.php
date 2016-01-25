<?php
    header('Access-Control-Allow-Origin: http://lucx.info');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, OPTIONS');

    session_start();

    $servername = "localhost";
    $username = "webuser";
    $password = "password";
    $dbname = "snake_db";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($_POST["p1"] == "WRITE")
    {
        $name = $_SESSION['username'];
        if ($name == "") 
            $name = "guest";
        $score = $_POST["p3"];
        $sql = "INSERT INTO high_scores (name, score) 
                VALUES ('" . $name . "', '" . $score . "');";

        if ($conn->query($sql) === TRUE) {
            echo "WRITE";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    else if ($_POST["p1"] == "READ")
    {
        $sql = "SELECT * FROM high_scores;";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) 
        {
            // output data of each row
            while($row = $result->fetch_assoc()) 
            {
                echo $row["name"] . "|" . $row["score"] . " ";
            }
        } 
        else 
        {
            echo "0 results";
        }
    }
    else
    {
        echo "error: bad p1";
    }

    $conn->close();
?>
