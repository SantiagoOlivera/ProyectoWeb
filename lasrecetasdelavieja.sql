-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-08-2019 a las 04:03:54
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lasrecetasdelavieja`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--
-- Error leyendo la estructura de la tabla lasrecetasdelavieja.pedidos: #1932 - Table 'lasrecetasdelavieja.pedidos' doesn't exist in engine
-- Error leyendo datos de la tabla lasrecetasdelavieja.pedidos: #1064 - Algo está equivocado en su sintax cerca 'FROM `lasrecetasdelavieja`.`pedidos`' en la linea 1

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(5) NOT NULL,
  `titulo` varchar(100) COLLATE utf8_bin NOT NULL,
  `img` varchar(100) COLLATE utf8_bin NOT NULL,
  `descripcion` varchar(500) COLLATE utf8_bin NOT NULL,
  `precio` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `titulo`, `img`, `descripcion`, `precio`) VALUES
(1, 'Producto 1', '1.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ', '120.00'),
(2, 'Producto 2', '2.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ', '122.50'),
(3, 'Producto 2', '3.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ', '120.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--
-- Error leyendo la estructura de la tabla lasrecetasdelavieja.roles: #1932 - Table 'lasrecetasdelavieja.roles' doesn't exist in engine
-- Error leyendo datos de la tabla lasrecetasdelavieja.roles: #1064 - Algo está equivocado en su sintax cerca 'FROM `lasrecetasdelavieja`.`roles`' en la linea 1

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--
-- Error leyendo la estructura de la tabla lasrecetasdelavieja.usuarios: #1932 - Table 'lasrecetasdelavieja.usuarios' doesn't exist in engine
-- Error leyendo datos de la tabla lasrecetasdelavieja.usuarios: #1064 - Algo está equivocado en su sintax cerca 'FROM `lasrecetasdelavieja`.`usuarios`' en la linea 1

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
