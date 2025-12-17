<?php
$param = json_decode($_POST['param']);

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'northwind';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

$sql = 'SELECT name FROM ' . $param->table . ' LIMIT ' . $param->limit;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $select = '<select><option>Choose a customer: </option>';
    while ($row = $result->fetch_assoc()) {
        $select .= '<option>' . $row['name'] . '</option>';
    }
    $select .= '</select>';
    echo json_encode($select);
}

$conn->close();
