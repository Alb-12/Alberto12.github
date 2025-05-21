-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2025 a las 03:03:10
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rencar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `nombre_cliente` varchar(100) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `vehiculo` varchar(100) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `estado` enum('Pendiente','Confirmada','Cancelada') DEFAULT 'Pendiente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `nombre_cliente`, `telefono`, `email`, `vehiculo`, `fecha_inicio`, `fecha_fin`, `estado`) VALUES
(1, 'Angel pinales', '8293175844', 'angelgarciapinales@gmail.com', 'toyota corola', '2025-04-29', '2025-05-13', 'Pendiente'),
(2, 'Estefani', '8293175844', 'angelgarciapinales@gmail.com', 'Masda', '2025-04-10', '2025-05-22', 'Pendiente'),
(3, 'Estefani', '8293175844', 'angelgarciapinales@gmail.com', 'Masda', '2025-04-10', '2025-05-22', 'Pendiente'),
(4, 'Estefani', '8293175844', 'angelgarciapinales@gmail.com', 'Masda', '2025-04-10', '2025-05-22', 'Pendiente'),
(5, 'Angel pinales', '8293175844', 'angelgarciapinales@gmail.com', 'toyota corola', '2025-04-30', '2025-05-15', 'Pendiente'),
(6, 'Angel pinales', '8293175844', 'angelgarciapinales@gmail.com', 'toyota corola', '2025-05-04', '2025-05-28', 'Pendiente'),
(7, 'Angel pinales', '8293175844', 'angelgarciapinales@gmail.com', 'toyota corola', '2025-04-28', '2025-05-28', 'Pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `id` int(11) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `ano` year(4) NOT NULL,
  `color` varchar(30) NOT NULL,
  `tipo_vehiculo` enum('SUV','Sedan','Pickup','Otro') NOT NULL,
  `placa` varchar(20) NOT NULL,
  `num_puertas` tinyint(3) UNSIGNED NOT NULL,
  `transmision` enum('Manual','Automática') NOT NULL,
  `combustible` enum('Gasolina','Diesel','Eléctrico','Híbrido') NOT NULL,
  `precio_diario` decimal(10,2) NOT NULL,
  `disponible` tinyint(1) NOT NULL DEFAULT 1,
  `estado` enum('Activo','En Mantenimiento','Dado de Baja') DEFAULT 'Activo',
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`id`, `marca`, `modelo`, `ano`, `color`, `tipo_vehiculo`, `placa`, `num_puertas`, `transmision`, `combustible`, `precio_diario`, `disponible`, `estado`, `fecha_registro`) VALUES
(1, 'Toyota', 'Corola', '2022', 'Negro', 'SUV', 'DEF8910', 4, 'Automática', 'Gasolina', 56.00, 1, 'Activo', '2025-05-18 22:01:05'),
(2, 'Ford', 'splorer', '2021', 'blanco', 'Pickup', 'JKL6789', 5, 'Automática', 'Gasolina', 78.00, 1, 'Activo', '2025-05-18 22:11:14'),
(4, 'Toyota', 'Corola', '2025', 'blanco', 'SUV', 'DGF8920', 4, 'Manual', 'Gasolina', 55.00, 1, 'En Mantenimiento', '2025-05-18 22:13:17'),
(8, 'Toyota', 'Corola', '2019', 'Azul', 'Sedan', 'DGF8927', 4, 'Manual', 'Gasolina', 78.00, 1, 'Activo', '2025-05-18 22:20:34'),
(10, 'Toyota', 'corola', '2025', 'negro', 'Sedan', 'JpL6089', 5, 'Automática', 'Gasolina', 56.00, 1, 'Activo', '2025-05-18 22:26:01'),
(11, 'Ford', 'Corola', '2025', 'negro', 'Sedan', 'DGF8990', 4, 'Manual', 'Gasolina', 3232.00, 1, 'Activo', '2025-05-19 00:02:34'),
(13, 'toyota', 'Corola', '2025', 'negro', 'Sedan', 'DEF89', 5, 'Manual', 'Gasolina', 566.00, 1, 'Activo', '2025-05-19 00:07:47');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `placa` (`placa`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
