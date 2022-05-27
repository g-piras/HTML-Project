<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "levelupg_contact_db"; 

if (isset($_POST['fname'])) {
    echo "ok";



$connection = new mysqli($servername, $username, $password, $dbname);
$fname = $connection->real_escape_string($_POST['fname']);
$mname = $connection->real_escape_string($_POST['mname']); 
$lname = $connection->real_escape_string($_POST['lname']);
$email = $connection->real_escape_string($_POST['email']);
$battleTag = $connection->real_escape_string($_POST['btag']);


$query = "INSERT INTO  players (firstname, middlename, surname,  mail, battletag)
        VALUES('$fname', '$mname', '$lname', '$email', '$battleTag')";
    if($connection->query($query) === true ) {
        echo "ok";
        header("Location: ./form.html");
    } else {
        echo "no";
    }
}
?>

