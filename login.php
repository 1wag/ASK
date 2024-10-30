<?php

$servername = "localhost";
$username = "db_username"; // Zadejte své databázové uživatelské jméno
$password = "db_password"; // Zadejte své databázové heslo
$dbname = "ask"; 

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Chyba připojení k databázi: " . $conn->connect_error);
} else {
    echo "Připojení k databázi bylo úspěšné!";
}