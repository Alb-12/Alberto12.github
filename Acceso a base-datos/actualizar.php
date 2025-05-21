<?php
if (!isset($_GET['id'])) {
    die("ID no proporcionado.");
}

$pdo = new PDO("mysql:host=localhost;dbname=rencar;charset=utf8", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$id = $_GET['id'];
$stmt = $pdo->prepare("SELECT * FROM vehiculos WHERE id = ?");
$stmt->execute([$id]);
$vehiculo = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$vehiculo) {
    die("Vehículo no encontrado.");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="stylos.css">
</head>
 <header>
        <h1>Rent-A-Car Pinales</h1>
        <nav class="menu" id="menu">
            <ul>
                 <li><a href="index.html">Agregar Vehículos</a></li>
                 <li><a href="buscar_eliminar.html">Lista de vehiculo</a></li>
                <li><a href="Buscar_Vehiculo.html">Actualizar vehiculo</a></li>
            </ul>
        </nav>
    </header>
<body>

<h2>Editar Vehículo</h2>
<form method="POST" action="actualizar_vehiculo.php" id="contenedor">
    <input type="hidden" name="id" value="<?= $vehiculo['id'] ?>">
    <label>Marca: <input type="text" name="marca" value="<?= $vehiculo['marca'] ?>"></label><br>
    <label>Modelo: <input type="text" name="modelo" value="<?= $vehiculo['modelo'] ?>"></label><br>
    <label>Año: <input type="number" name="año" value="<?= $vehiculo['ano'] ?>"></label><br>
    <label>Color: <input type="text" name="color" value="<?= $vehiculo['color'] ?>"></label><br>
    <label>Tipo de Vehículo: <input type="text" name="tipo_vehiculo" value="<?= $vehiculo['tipo_vehiculo'] ?>"></label><br>
    <label>Placa: <input type="text" name="placa" value="<?= $vehiculo['placa'] ?>"></label><br>
    <label>Número de Puertas: <input type="number" name="num_puertas" value="<?= $vehiculo['num_puertas'] ?>"></label><br>
    <label>Transmisión:
        <select name="transmision">
            <option <?= $vehiculo['transmision'] == 'Manual' ? 'selected' : '' ?>>Manual</option>
            <option <?= $vehiculo['transmision'] == 'Automática' ? 'selected' : '' ?>>Automática</option>
        </select>
    </label><br>
    <label>Combustible:
        <select name="combustible">
            <option <?= $vehiculo['combustible'] == 'Gasolina' ? 'selected' : '' ?>>Gasolina</option>
            <option <?= $vehiculo['combustible'] == 'Diesel' ? 'selected' : '' ?>>Diesel</option>
            <option <?= $vehiculo['combustible'] == 'Eléctrico' ? 'selected' : '' ?>>Eléctrico</option>
            <option <?= $vehiculo['combustible'] == 'Híbrido' ? 'selected' : '' ?>>Híbrido</option>
        </select>
    </label><br>
    <label>Precio Diario: <input type="number" step="0.01" name="precio_diario" value="<?= $vehiculo['precio_diario'] ?>"></label><br>
    <label>Estado:
        <select name="estado">
            <option <?= $vehiculo['estado'] == 'Activo' ? 'selected' : '' ?>>Activo</option>
            <option <?= $vehiculo['estado'] == 'En Mantenimiento' ? 'selected' : '' ?>>En Mantenimiento</option>
            <option <?= $vehiculo['estado'] == 'Dado de Baja' ? 'selected' : '' ?>>Dado de Baja</option>
        </select>
    </label><br>
    <input type="submit" value="Actualizar">
</form>
 <footer>
    <p>© 2025 Rent-A-Car Pinales | Contacto: WhatsApp +1 829-317-5844</p>
  </footer>
</body>
</html>