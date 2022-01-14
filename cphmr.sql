-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: apps.solucionescn.com    Database: cphmr
-- ------------------------------------------------------
-- Server version	5.5.5-10.6.5-MariaDB-1:10.6.5+maria~focal

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Samsung','https://1000marcas.net/wp-content/uploads/2019/12/logo-Samsung.png'),(2,'LG','https://1000marcas.net/wp-content/uploads/2020/01/LG-logo-600x338.png'),(3,'HP','https://1000marcas.net/wp-content/uploads/2020/01/logo-HP-500x286.png'),(4,'DELL','https://1000marcas.net/wp-content/uploads/2020/03/Dell-Logo.png'),(5,'Asus','https://1000marcas.net/wp-content/uploads/2020/03/Logo-Asus.png'),(6,'Gigabyte','https://1000marcas.net/wp-content/uploads/2020/02/Logo-Gigabyte-500x313.png'),(7,'AMD','https://1000marcas.net/wp-content/uploads/2020/03/Logo-AMD.png'),(8,'Intel','https://1000marcas.net/wp-content/uploads/2020/02/logo-Intel-500x281.png'),(9,'Logitech','https://1000marcas.net/wp-content/uploads/2020/02/Logo-Logitech-500x313.png'),(10,'Genius','https://1000marcas.net/wp-content/uploads/2021/05/Genius-logo-500x311.png'),(11,'Razer','https://1000marcas.net/wp-content/uploads/2020/03/logo-Razer-500x300.png'),(12,'Western Digital','https://1000marcas.net/wp-content/uploads/2021/05/Western-Digital-logo-500x281.png'),(13,'Seagate','https://1000marcas.net/wp-content/uploads/2021/05/Seagate-logo-500x281.png'),(14,'Kingstone','https://1000marcas.net/wp-content/uploads/2020/02/logo-Kingston-500x300.png'),(15,'Nvidia','https://1000marcas.net/wp-content/uploads/2020/03/Logo-NVIDIA-500x348.png'),(16,'Msi','https://1000marcas.net/wp-content/uploads/2020/03/logo-MSI.png');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_items` (
  `id` int(11) NOT NULL,
  `id_item_type` int(11) NOT NULL,
  `id_item` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_4d560c6c-1264-41af-8612-50874f05cb1f` (`id_item_type`),
  KEY `FK_73c51cff-f441-479c-a5cf-4402389e5075` (`id_user`),
  CONSTRAINT `FK_4d560c6c-1264-41af-8612-50874f05cb1f` FOREIGN KEY (`id_item_type`) REFERENCES `item_type` (`id`),
  CONSTRAINT `FK_73c51cff-f441-479c-a5cf-4402389e5075` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_type`
--

DROP TABLE IF EXISTS `item_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_type`
--

LOCK TABLES `item_type` WRITE;
/*!40000 ALTER TABLE `item_type` DISABLE KEYS */;
INSERT INTO `item_type` VALUES (1,'producto'),(2,'servicio');
/*!40000 ALTER TABLE `item_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `id_target` int(11) NOT NULL,
  `id_product_category` int(11) NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT 'dummy.jpg',
  `warranty` int(11) NOT NULL,
  `id_brand` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_903bd229-c49c-4a91-9891-0070c158ec99` (`id_target`),
  KEY `FK_b62aaad6-7c80-4dd6-a3f2-804303ab12b3` (`id_brand`),
  KEY `FK_16fd682b-9d25-491f-95d3-4700e69578ba` (`id_product_category`),
  CONSTRAINT `FK_16fd682b-9d25-491f-95d3-4700e69578ba` FOREIGN KEY (`id_product_category`) REFERENCES `product_category` (`id`),
  CONSTRAINT `FK_903bd229-c49c-4a91-9891-0070c158ec99` FOREIGN KEY (`id_target`) REFERENCES `target` (`id`),
  CONSTRAINT `FK_b62aaad6-7c80-4dd6-a3f2-804303ab12b3` FOREIGN KEY (`id_brand`) REFERENCES `brand` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Producto de test','modelin','descriptioncita',1234,1,1,'dummy.jpg',1,5);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (1,'Software'),(2,'Monitores'),(3,'Motherboards'),(4,'Mouse y Teclados'),(5,'Almacenamiento'),(6,'Tarjetas Gráficas '),(7,'Memorias RAM'),(8,'Otros Perifericos'),(9,'Procesadores');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `price` float NOT NULL,
  `description` varchar(255) NOT NULL,
  `id_service_category` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `expiration_date` date DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_303b656d-e968-4adf-9273-97121cded7fb` (`id_service_category`),
  CONSTRAINT `FK_303b656d-e968-4adf-9273-97121cded7fb` FOREIGN KEY (`id_service_category`) REFERENCES `service_category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,60000,'Armado de PC\'s hogareñas, de trabajo o gamers. Todos los elementos son tomados de nuestra lista de componentes, asegurando asi que calidad cumple los altos estandares a los que  siempre llegamos',1,'Armado de Pc para el hogar',NULL,NULL),(2,100000,'Loerm Ipsum Dolor',2,'Armado de Pc para trabajo',NULL,NULL),(3,130000,'Loerm Ipsum Dolor',3,'Armado de PC gamer',NULL,NULL),(4,500000,'Loerm Ipsum Dolor',4,'Armado de rack minero',NULL,NULL),(5,100000,'Loerm Ipsum Dolor',4,'Mantenimiento de rack minero',NULL,12),(6,30000,'Loerm Ipsum Dolor',4,'Consultoria de rack minero',NULL,1),(7,20000,'Loerm Ipsum Dolor',1,'Mantenimiento de rendimiento de PC',NULL,6);
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_category`
--

DROP TABLE IF EXISTS `service_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_category`
--

LOCK TABLES `service_category` WRITE;
/*!40000 ALTER TABLE `service_category` DISABLE KEYS */;
INSERT INTO `service_category` VALUES (1,'hogar'),(2,'oficina'),(3,'gamer'),(4,'mineria');
/*!40000 ALTER TABLE `service_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `target`
--

DROP TABLE IF EXISTS `target`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `target` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `target`
--

LOCK TABLES `target` WRITE;
/*!40000 ALTER TABLE `target` DISABLE KEYS */;
INSERT INTO `target` VALUES (1,'Hogareño'),(2,'Oficina'),(3,'Gamer'),(4,'Tope de Gama');
/*!40000 ALTER TABLE `target` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `zip` int(11) DEFAULT NULL,
  `id_user_category` int(11) NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT 'dummy.jpg',
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_UN` (`email`),
  KEY `FK_bc72a059-aade-460f-97b1-f48d74126126` (`id_user_category`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_user_category`) REFERENCES `user_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'fatiga.total@hotmail.com','Cristian','Urbina','Persona3fes',1131351602,1437,3,'dummy.jpg','Calle falsa numero 1234');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_category`
--

DROP TABLE IF EXISTS `user_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_category`
--

LOCK TABLES `user_category` WRITE;
/*!40000 ALTER TABLE `user_category` DISABLE KEYS */;
INSERT INTO `user_category` VALUES (1,'guest'),(2,'logged'),(3,'admin'),(4,'Vendedor'),(5,'Comprador');
/*!40000 ALTER TABLE `user_category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-14 19:56:34
