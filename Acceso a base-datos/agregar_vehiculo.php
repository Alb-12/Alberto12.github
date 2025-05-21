<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=rencar;charset=utf8", "root", "");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "INSERT INTO vehiculos 
        (marca, modelo, ano, color, tipo_vehiculo, placa, num_puertas, transmision, combustible, precio_diario, estado) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $_POST['marca'],
            $_POST['modelo'],
            $_POST['ano'],
            $_POST['color'],
            $_POST['tipo_vehiculo'],
            $_POST['placa'],
            $_POST['num_puertas'],
            $_POST['transmision'],
            $_POST['combustible'],
            $_POST['precio_diario'],
            $_POST['estado']
        ]);
        header("Location: vehiculo.html");
        exit(); 
        echo "<p style='color:green;'>Vehículo agregado exitosamente.</p>";
    } catch (PDOException $e) {
        echo "<p style='color:red;'>Error: " . $e->getMessage() . "</p>";
    }
}
?>
