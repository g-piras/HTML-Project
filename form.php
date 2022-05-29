<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "levelupg_contact_db"; 

if (isset($_POST['fname'])) {
    echo "ok";



$connection = new mysqli($servername, $username, $password, $dbname);


$fName = $connection->real_escape_string($_POST['fname']);
$mName = $connection->real_escape_string($_POST['mname']); 
$lName = $connection->real_escape_string($_POST['lname']);
$battleTag = $connection->real_escape_string($_POST['btag']);
$teamName = $connection->real_escape_string($_POST['tname']);
$email = $connection->real_escape_string($_POST['email']);
$telephone = $connection->real_escape_string($_POST['phone']);
$city = $connection->real_escape_string($_POST['city']);
$userAddress = $connection->real_escape_string($_POST['address']);
$country = $connection->real_escape_string($_POST['country']);
$age = $connection->real_escape_string($_POST['age']);
$gender = $connection->real_escape_string($_POST['gender']);
$hair = $connection->real_escape_string($_POST['hair-color']);
$eye = $connection->real_escape_string($_POST['eye-color']);
$hair = $connection->real_escape_string($_POST['hair-color']);
$eye = $connection->real_escape_string($_POST['eye-color']);
$tournaments = $connection->real_escape_string($_POST['tournament']);
$otherGames = $connection->real_escape_string($_POST['other-games']);
$bio = $connection->real_escape_string($_POST['bio']);


$query = "INSERT INTO  players
 (firstName, middleName, surname,
 battleTag, teamName,  mail,
 phone, city, userAddress, country, age, gender,
 hair, eyes, tournament, otherGames, bio )
        VALUES('$fName', '$mName', '$lName', '$battleTag', 
        '$teamName', '$email', '$telephone', '$city', '$userAddress', 
        '$country', '$age', '$gender', '$hair', '$eye', '$tournaments','$otherGames', '$bio')";
    if($connection->query($query) === true ) {
        header("Location: ./form.html");
    } else {
        echo "no";
    }
}
