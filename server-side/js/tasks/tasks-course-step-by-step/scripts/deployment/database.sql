CREATE DATABASE IF NOT EXISTS `webappdev_tasks`;
USE `webappdev_tasks`;

CREATE TABLE IF NOT EXISTS `tasks`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
	`title` varchar(100),
	`description` varchar (255),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;