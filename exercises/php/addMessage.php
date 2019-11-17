<?php

// activate error reporting on webhost
error_reporting(E_ALL);
ini_set("display_errors", 1);

require_once("inc/database.php");

if($_GET["userid"] == ""){
    echo "<br/> you have to add an userid, please <a href='createUser.php'>create a new userid</a>";
    echo "<br/> if you already have an userid, please add an 'userid' parameter";
    die();
}

if($_GET["msg"] == ""){
    echo "<br/> please add an 'msg' parameter";
    die();
}

// more details at https://www.w3schools.com/php/php_mysql_prepared_statements.asp
// will add message, with prepare and bind
$stmt = $conn->prepare("INSERT INTO ajax_demo (user_id, msg) VALUES (?, ?)");
$stmt->bind_param("is", $userid, $msg);

$userid = $_GET["userid"];
$msg = $_GET["msg"];
$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();
