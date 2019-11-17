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

$sql = "SELECT id, msg FROM ajax_demo WHERE user_id=? ";
$userid = $_GET["userid"];

if(isset($_GET["id"]) && $_GET["id"] != ""){
    $msgid = $_GET["id"];
    $sql .= " AND id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $userid, $msgid);

} elseif(isset($_GET["latestid"]) && $_GET["latestid"] != ""){

    if($userid == "allusers"){
        $sql = "SELECT id, msg FROM ajax_demo WHERE 1=1 ";
    }

    $msgid = $_GET["latestid"];
    $sql .= " AND id > ?";
    $stmt = $conn->prepare($sql);

    if($userid == "allusers"){
        $stmt->bind_param("i", $userid, $msgid);    // all users
    } else {
        $stmt->bind_param("ii", $userid, $msgid);   // single user
    }

} else {

    if($userid == "allusers"){
        $sql = "SELECT id, msg FROM ajax_demo ";
        $stmt = $conn->prepare($sql);
    } else {
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $userid);
    }

}

$stmt->execute();

// bind variables to prepared statement
$stmt->bind_result($msgid, $msg);

$messages = array();
// fetch values
while ($stmt->fetch()) {
    $message = array( "id" => $msgid, "msg" => $msg);
    $messages[] = $message;
}

// just debug output
// print_r($messages);

$format = "csv";
if(isset($_GET["format"]) && $_GET["format"] != ""){
    $format = $_GET["format"];
}

switch($format){
    case "json":
        echo json_encode($messages);
        break;
    case "xml":
        die("TODO");
        break;
    case "text":
        header("Content-type: text/plain");
        header("Content-Disposition: attachment; filename=messages.txt");
        header("Pragma: no-cache");
        header("Expires: 0");

        foreach($messages as $val) {
            echo $val["msg"] . "\n";
        }
        break;
    default:
        header("Content-type: text/csv");
        header("Content-Disposition: attachment; filename=messages.csv");
        header("Pragma: no-cache");
        header("Expires: 0");

        $outputBuffer = fopen("php://output", 'w');
        foreach($messages as $val) {
            fputcsv($outputBuffer, $val);
        }
        fclose($outputBuffer);
}

$stmt->close();
$conn->close();
