-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: newdb
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hotels`
--

DROP TABLE IF EXISTS `hotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hotel_name` varchar(255) NOT NULL,
  `location` varchar(100) NOT NULL,
  `surrounding_places` text NOT NULL,
  `distance_from_town` decimal(4,1) NOT NULL,
  `price_single_room` decimal(10,2) NOT NULL,
  `price_double_room` decimal(10,2) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotels`
--

LOCK TABLES `hotels` WRITE;
/*!40000 ALTER TABLE `hotels` DISABLE KEYS */;
INSERT INTO `hotels` VALUES (1,'Cinnamon Grand Colombo','Colombo','Galle Face Green, National Museum',3.5,150.00,220.00,'+94 11 249 7000','hotel_img_1'),(2,'Jetwing Lighthouse','Galle','Galle Fort, Unawatuna Beach',2.8,180.00,260.00,'+94 91 222 3744','hotel_img_2'),(3,'Heritance Kandalama','Dambulla','Sigiriya Rock, Dambulla Cave Temple',1.9,170.00,250.00,'+94 66 555 5000','hotel_img_3'),(4,'Shangri-La Hambantota','Hambantota','Yala National Park, Bundala National Park',4.2,200.00,300.00,'+94 47 788 8888','hotel_img_4'),(5,'Amaya Hills','Kandy','Temple of the Tooth, Peradeniya Gardens',2.5,160.00,240.00,'+94 81 447 4022','hotel_img_5'),(6,'Taj Samudra','Colombo','Galle Face Beach, Dutch Hospital',3.2,175.00,255.00,'+94 11 244 6622','hotel_img_6'),(7,'The Kingsbury','Colombo','World Trade Center, Colombo Lighthouse',3.8,190.00,270.00,'+94 11 242 1221','hotel_img_7'),(8,'Galle Face Hotel','Colombo','Galle Face Green, Colombo City Centre',2.9,185.00,265.00,'+94 11 254 1010','hotel_img_8'),(9,'Mount Lavinia Hotel','Mount Lavinia','Mount Lavinia Beach, National Zoological Gardens',4.5,160.00,240.00,'+94 11 271 1711','hotel_img_9'),(10,'Cinnamon Bey','Beruwala','Beruwala Beach, Brief Garden',2.7,170.00,250.00,'+94 34 229 7000','hotel_img_10'),(11,'Avani Bentota Resort','Bentota','Bentota Beach, Turtle Hatchery',1.5,175.00,260.00,'+94 34 227 5353','hotel_img_11'),(12,'Club Hotel Dolphin','Negombo','Negombo Beach, Dutch Canal',2.3,140.00,220.00,'+94 31 227 5678','hotel_img_12'),(13,'Heritance Negombo','Negombo','Negombo Beach, St. Marys Church',3.1,180.00,270.00,'+94 31 227 7000','hotel_img_13'),(14,'Cinnamon Wild','Yala','Yala National Park, Sithulpawwa Temple',4.7,200.00,290.00,'+94 47 223 9471','hotel_img_14'),(15,'Jetwing Vil Uyana','Sigiriya','Sigiriya Rock, Pidurangala Rock',3.6,230.00,320.00,'+94 66 228 7780','hotel_img_15'),(16,'Hikka Tranz by Cinnamon','Hikkaduwa','Hikkaduwa Beach, Coral Sanctuary',2.0,185.00,260.00,'+94 91 227 8000','hotel_img_16'),(17,'Trinco Blu by Cinnamon','Trincomalee','Nilaveli Beach, Pigeon Island',3.3,175.00,250.00,'+94 26 222 2333','hotel_img_17'),(18,'Uga Jungle Beach','Trincomalee','Jungle Beach, Marble Beach',4.1,210.00,290.00,'+94 26 567 4567','hotel_img_18'),(19,'Anantaya Resort','Chilaw','Chilaw Beach, Munneswaram Temple',1.8,165.00,240.00,'+94 32 567 7777','hotel_img_19'),(20,'The Fortress Resort','Koggala','Koggala Beach, Madol Duwa',2.9,190.00,270.00,'+94 91 438 9400','hotel_img_20'),(21,'Uga Bay','Pasikudah','Pasikudah Beach, Kalkudah Beach',3.0,220.00,310.00,'+94 65 567 7888','hotel_img_21'),(22,'Wild Coast Tented Lodge','Yala','Yala National Park, Kataragama Temple',4.4,250.00,340.00,'+94 47 567 5678','hotel_img_22'),(23,'98 Acres Resort','Ella','Little Adam’s Peak, Nine Arches Bridge',1.7,200.00,280.00,'+94 57 223 9000','hotel_img_23'),(24,'Ceylon Tea Trails','Hatton','Tea Plantations, Castlereagh Reservoir',2.4,270.00,350.00,'+94 51 567 9988','hotel_img_24'),(25,'The Grand Hotel','Nuwara Eliya','Gregory Lake, Horton Plains',3.8,200.00,290.00,'+94 52 567 3456','hotel_img_25'),(26,'Amaya Lake','Dambulla','Dambulla Cave Temple, Minneriya National Park',2.6,175.00,250.00,'+94 66 555 1234','hotel_img_26'),(27,'Anantara Kalutara','Kalutara','Kalutara Beach, Richmond Castle',4.9,180.00,260.00,'+94 34 567 8888','hotel_img_27'),(28,'Jetwing Yala','Yala','Yala National Park, Sithulpawwa Temple',2.2,195.00,280.00,'+94 47 223 9999','hotel_img_28'),(29,'Ulagalla by Uga Escapes','Anuradhapura','Wilpattu National Park, Mihintale',1.4,250.00,340.00,'+94 25 567 7777','hotel_img_29'),(30,'Mandara Resort','Mirissa','Mirissa Beach, Whale Watching',3.7,190.00,270.00,'+94 41 567 1111','hotel_img_30'),(31,'EKHO Ella','Ella','Ella Rock, Demodara Loop',2.1,210.00,290.00,'+94 57 567 4444','hotel_img_31'),(32,'Dickwella Resort','Dickwella','Hiriketiya Beach, Tangalle Lagoon',3.4,180.00,260.00,'+94 41 567 2222','hotel_img_32'),(33,'Blue Water Hotel','Wadduwa','Wadduwa Beach, Kalutara Bodhiya',2.5,170.00,250.00,'+94 38 567 6666','hotel_img_33'),(34,'Serene Pavilions','Wadduwa','Wadduwa Beach, Panadura Lagoon',3.9,230.00,310.00,'+94 38 567 7777','hotel_img_34'),(35,'Royal Palms Beach Hotel','Kalutara','Kalutara Beach, Kalutara Temple',1.3,175.00,260.00,'+94 34 567 5555','hotel_img_35'),(36,'Cinnamon Citadel','Kandy','Kandy Lake, Udawattakele Sanctuary',4.6,180.00,260.00,'+94 81 567 9999','hotel_img_36'),(37,'Hotel Sigiriya','Sigiriya','Sigiriya Rock, Pidurangala Rock',3.2,160.00,240.00,'+94 66 567 5678','hotel_img_37');
/*!40000 ALTER TABLE `hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `location` varchar(100) NOT NULL,
  `trip` varchar(255) NOT NULL,
  `rating` int DEFAULT NULL,
  `feedback` text,
  PRIMARY KEY (`id`),
  CONSTRAINT `reviews_chk_1` CHECK ((`rating` between 1 and 5))
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'Vijay Rohilla','Delhi','Trip to Sri Lanka',4,'Actually a lot of time was spent in car travel. Rest, the hotels and other services were excellent.'),(2,'Akash Sachdev','Mumbai','Trip to Vietnam',5,'Very good experience! Will definitely try again next time.'),(3,'Nitin Chaudhary','New Delhi','Trip to Bali',5,'The trip was well-organized. Everything was perfect from start to finish.'),(4,'Sandaru Dimal','Srilanka','Trip to Sri-Lanka',2,'Actually a lot of time was spent in car travel. Rest, the hotels and other services were excellent.'),(5,'Vijay Rohilla','Delhi','Trip to Sri Lanka',3,'Actually a lot of time was spent in car travel. Rest, the hotels and other services were excellent.'),(6,'nimal silva','india','Sri Lanka',4,'wow! amazing view'),(7,'toyota vitz','Sri Lanka','Sri Lanka',5,'khyt jcgfxd'),(8,'L.D.S.D Lokudadalla','china','srilanka',5,'paradise'),(9,'eewde','dfw','wefz',3,'wvgvaczvr'),(10,'fd','eg','eg',1,'dfv4gwgsafg'),(34,'suban khan','kaluthara','srilanka',4,'wow. niceee');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-21 20:40:20
