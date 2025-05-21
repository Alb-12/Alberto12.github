<?php
$conexion = new mysqli("localhost", "root", "", "rencar");
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$sql = "SELECT * FROM vehiculos";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
    echo "<table border='1' cellpadding='8' style='border-collapse: collapse; width: 100%; text-align: center;'>";
    echo "<tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Color</th>
            <th>Tipo</th>
            <th>Placa</th>
            <th>Puertas</th>
            <th>Transmisión</th>
            <th>Combustible</th>
            <th>Precio Diario</th>
            <th>Disponible</th>
            <th>Estado</th>
            <th>Eliminar</th>
        </tr>";
    while ($vehiculo = $resultado->fetch_assoc()) {
        echo "<tr id='fila-{$vehiculo['id']}'>
                <td>{$vehiculo['id']}</td>
                <td>{$vehiculo['marca']}</td>
                <td>{$vehiculo['modelo']}</td>
                <td>{$vehiculo['ano']}</td>
                <td>{$vehiculo['color']}</td>
                <td>{$vehiculo['tipo_vehiculo']}</td>
                <td>{$vehiculo['placa']}</td>
                <td>{$vehiculo['num_puertas']}</td>
                <td>{$vehiculo['transmision']}</td>
                <td>{$vehiculo['combustible']}</td>
                <td>\${$vehiculo['precio_diario']}</td>
                <td>" . ($vehiculo['disponible'] ? "Sí" : "No") . "</td>
                <td>{$vehiculo['estado']}</td>
                <td><button onclick='eliminarVehiculo({$vehiculo['id']})' style='cursor:pointer; background:none; border:none;'>
                    🗑️
                </button></td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "<p>No hay vehículos registrados.</p>";
}
$conexion->close();
?>
