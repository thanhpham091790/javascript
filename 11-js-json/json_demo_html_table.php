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
        $table = '<table><tr><th>Name</th></tr>';
        while ($row = $result->fetch_assoc()) {
            $table .= '<tr><td>' . $row['name'] . '</td></tr>';
        }
        $table .= '</table>';
    } else {
        $table = '<table><tr><td>Name</td></tr><tr><td>0 results.</td></tr></table>';
    }
    $json = json_encode($table);
    echo $json;

    $conn->close();
}
