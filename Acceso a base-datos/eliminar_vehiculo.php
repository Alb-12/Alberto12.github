<?php
if (isset($_POST['id'])) {
    $conexion = new mysqli("localhost", "root", "", "rencar");
    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    $id = intval($_POST['id']);
    $sql = "DELETE FROM vehiculos WHERE id = ?";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo "ok";
    } else {
        echo "error";
    }

    $stmt->close();
    $conexion->close();
}
?>
