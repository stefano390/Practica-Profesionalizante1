<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nutrigm";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $json_data = file_get_contents("php://input");

  $data = json_decode($json_data, true);

  if ($data === null) {
    $response = [
      "error" => "Invalid JSON data",
    ];
    echo json_encode($response);
  } else {
    $nombre = $data["nombre"];
    $email = $data["email"];
    
    $sql = "INSERT INTO nutrigm (nombre, email) VALUES ('$nombre', '$email')";

    if ($conn->query($sql) === TRUE) {
      $response = [
        "message" => "Received data successfully",
        "nombre" => $nombre,
        "email" => $email,
      ];
      echo json_encode($response);
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
  }
} else {

}

$conn->close();
?>