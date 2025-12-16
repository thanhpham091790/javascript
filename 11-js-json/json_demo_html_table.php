<?php
$dbParam = json_decode($_POST['x']);
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'northwind';
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die('Connection fail: ' . $conn->connect_error);
} else {
    $sql = 'SELECT name FROM ' . $dbParam->table . ' LIMIT 5';
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo '<table><tr><th>Name</th></tr>';
        while ($row = $result->fetch_assoc()) {
            echo '<tr><td>' . $row['name'] . '</td></tr>';
        }
        echo '</table>';
    } else {
        echo '0 results.';
    }
    $conn->close();
}
