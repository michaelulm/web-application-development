<?php

require_once("inc/database.php");

// will create random user for working with ajax demo
$sql = "INSERT INTO ajax_user (username) values ('any username')";

// execute query to database
if ($conn->query($sql) === TRUE) {
    // get last id and display to user
    $last_id = $conn->insert_id;
    if(isset($_GET["format"]) && $_GET["format"] == "api"){
        echo $last_id;
    } else {
        echo "New record created successfully, please use this userid for your next exercises: " . $last_id;
        echo "<br/> now you can do this exercise <a href='addMessage.php'>add message</a>";
    }
} else {
    //echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();