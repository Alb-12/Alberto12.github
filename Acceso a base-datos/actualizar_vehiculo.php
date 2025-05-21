<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=rencar;charset=utf8", "root", "");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "UPDATE vehiculos SET 
                    marca = ?, modelo = ?, ano = ?, color = ?, tipo_vehiculo = ?, 
                    placa = ?, num_puertas = ?, transmision = ?, 
                    combustible = ?, precio_diario = ?, estado = ?
                WHERE id = ?";

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
            $_POST['estado'],
            $_POST['id']
        ]);

        header("Location: Buscar_vehiculo.html");
        exit();
    } catch (PDOException $e) {
        echo "Error al actualizar: " . $e->getMessage();
    }
}
