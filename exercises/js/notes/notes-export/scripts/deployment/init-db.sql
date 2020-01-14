CREATE DATABASE IF NOT EXISTS `notes-db`;
USE `notes-db`;

CREATE TABLE IF NOT EXISTS `notes`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `note` varchar(255),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;