<?php
require_once("config.php");

// more details at https://www.w3schools.com/php/php_mysql_connect.asp

// Create connection
$conn = new mysqli(MYSQL_SERVERNAME, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";