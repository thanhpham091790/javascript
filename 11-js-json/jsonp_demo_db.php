<?php
$dbParam = json_decode($_GET['x']);
$table = $dbParam->table;
$limit = $dbParam->limit;

$hostname = 'localhost';
$username = 'root';
$password = '';
$database = 'northwind';

$conn = new mysqli($hostname, $username, $password, $database);

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

$query = 'SELECT name FROM ' . $table . ' LIMIT ' . $limit;
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $output = [];
    foreach ($result->fetch_all(MYSQLI_ASSOC) as $row) {
        $output[] = $row['name'];
    }
    $funcParam = json_encode($output);
    echo 'myFunc(' . $funcParam . ')';
}
