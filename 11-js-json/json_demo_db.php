<?php
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_GET['x']);

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'northwind';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare('SELECT name FROM customer LIMIT ?');
    $stmt->bind_param('s', $obj->limit);
    $stmt->execute();
    $result = $stmt->get_result();
    $response = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($response);
}
