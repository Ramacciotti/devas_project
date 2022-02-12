CREATE DATABASE IF NOT EXISTS `devas_microservice`;

USE `devas_microservice`;

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `age` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `description` longtext,
  `email` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `image` bigint DEFAULT NULL,
  `languages` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `objective` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);