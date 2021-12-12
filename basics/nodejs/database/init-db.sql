START TRANSACTION;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `tasks` (`id`, `title`, `description`) VALUES
(1, 'Database Integration', 'Database Storage instead of in-memory storage'),
(2, 'Database Lesson', 'Finish Course Day with Web App Dev'),
(3, 'Sprint 2', 'finish second sprint to get another 20%');

ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;