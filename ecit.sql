-- phpMyAdmin SQL Dump
-- version 4.4.6.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 06, 2015 at 08:01 AM
-- Server version: 10.0.17-MariaDB
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ecit`
--

-- --------------------------------------------------------

--
-- Table structure for table `a`
--

CREATE TABLE IF NOT EXISTS `a` (
  `a_id` int(12) NOT NULL,
  `a_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_assignments`
--

CREATE TABLE IF NOT EXISTS `auth_assignments` (
  `asgn_id` int(11) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_items`
--

CREATE TABLE IF NOT EXISTS `auth_items` (
  `item_id` int(11) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `access_url` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auth_items`
--

INSERT INTO `auth_items` (`item_id`, `role_id`, `access_url`, `section`, `description`) VALUES
(1, 1, 'as', 'as updated', 'as');

-- --------------------------------------------------------

--
-- Table structure for table `auth_operations`
--

CREATE TABLE IF NOT EXISTS `auth_operations` (
  `op_id` int(11) NOT NULL,
  `access_url` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_roles`
--

CREATE TABLE IF NOT EXISTS `auth_roles` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `b`
--

CREATE TABLE IF NOT EXISTS `b` (
  `b_id` int(12) NOT NULL,
  `b_name` varchar(255) NOT NULL,
  `a_id` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `c`
--

CREATE TABLE IF NOT EXISTS `c` (
  `c_id` int(12) NOT NULL,
  `b_id` int(12) NOT NULL,
  `c_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `crondays`
--

CREATE TABLE IF NOT EXISTS `crondays` (
  `cron_day_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `remin_date` int(12) DEFAULT NULL,
  `cmnts` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crondays`
--

INSERT INTO `crondays` (`cron_day_id`, `user_id`, `remin_date`, `cmnts`) VALUES
(2, NULL, 40, 'Hi'),
(3, NULL, 1, 'hello da'),
(4, NULL, 15, 'fifteen'),
(5, NULL, 10, NULL),
(6, NULL, 10, NULL),
(7, NULL, 5, NULL),
(8, NULL, 3, NULL),
(9, NULL, 3, NULL),
(10, NULL, 2, NULL),
(11, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Stand-in structure for view `DesgView`
--
CREATE TABLE IF NOT EXISTS `DesgView` (
`desg_name` varchar(255)
);

-- --------------------------------------------------------

--
-- Table structure for table `designations`
--

CREATE TABLE IF NOT EXISTS `designations` (
  `desg_id` int(11) NOT NULL,
  `desg_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=179 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `designations`
--

INSERT INTO `designations` (`desg_id`, `desg_name`) VALUES
(1, 'Sys Ad updated'),
(2, 'Chief Technology Officer'),
(3, 'Director HR & ADMIN'),
(4, 'Chief Operating Officer'),
(5, 'Project Manager'),
(6, 'Team Leader'),
(7, 'Programmer/Analyst'),
(8, 'Tester'),
(9, 'Web Developer'),
(10, 'Web Designer'),
(11, 'Quality Analyst'),
(12, 'SEO Specialist'),
(13, 'Data Analyst'),
(14, 'SQL Developer'),
(15, 'System Admin'),
(19, NULL),
(20, NULL),
(21, NULL),
(22, NULL),
(23, NULL),
(24, NULL),
(25, NULL),
(26, NULL),
(27, NULL),
(28, 'hello'),
(29, 'hello'),
(30, NULL),
(31, 'hello'),
(32, NULL),
(33, 'hello2'),
(34, NULL),
(35, NULL),
(36, NULL),
(37, NULL),
(38, 'hello1'),
(39, 'hello2'),
(40, 'hello1'),
(41, 'hello2'),
(42, 'hello1'),
(43, 'hello2'),
(44, 'hello1'),
(45, 'hello2'),
(46, 'hello1'),
(47, 'hello2'),
(48, 'hello1'),
(49, 'hello2'),
(50, 'hello1'),
(51, 'hello2'),
(52, 'hello1'),
(53, 'hello2'),
(54, 'hello1'),
(55, 'hello2'),
(56, 'hello1'),
(57, 'hello2'),
(58, 'hello1'),
(59, 'hello2'),
(60, 'hello1'),
(61, 'hello2'),
(62, 'hello1'),
(63, 'hello2'),
(64, 'hello1'),
(65, 'hello2'),
(66, 'hello1'),
(67, 'hello2'),
(68, 'hello1'),
(69, 'hello2'),
(70, 'hello1'),
(71, 'hello2'),
(72, 'hello1'),
(73, 'hello2'),
(74, 'hello1'),
(75, 'hello2'),
(76, 'hello1'),
(77, 'hello2'),
(78, 'hello1'),
(79, 'hello2'),
(80, 'hello1'),
(81, 'hello2'),
(82, 'hello1'),
(83, 'hello2'),
(84, 'hello1'),
(85, 'hello2'),
(86, 'hello1'),
(87, 'hello2'),
(88, 'hello1'),
(89, 'hello2'),
(90, 'hello1'),
(91, 'hello2'),
(92, 'hello1'),
(93, 'hello2'),
(94, 'hello1'),
(95, 'hello2'),
(96, 'hello1'),
(97, 'hello2'),
(98, NULL),
(99, NULL),
(100, 'hello1'),
(101, 'hello2'),
(102, 'hello1'),
(103, 'hello2'),
(104, 'hello1'),
(105, 'hello2'),
(106, 'hello1'),
(107, 'hello2'),
(108, 'hello1'),
(109, 'hello2'),
(110, 'hello1'),
(111, 'hello2'),
(112, 'hello1'),
(113, 'hello2'),
(114, 'hello1'),
(115, 'hello2'),
(116, 'hello1'),
(117, 'hello2'),
(118, 'hello1'),
(119, 'hello2'),
(120, 'hello1'),
(121, 'hello2'),
(122, NULL),
(123, NULL),
(124, 'hello1'),
(125, 'hello2'),
(126, 'hello1'),
(127, 'hello2'),
(128, 'http://docs.sequelizejs.com'),
(129, 'http://docs.sequelizejs.com'),
(130, 'http://docs.sequelizejs.com'),
(131, NULL),
(132, 'http://a.com'),
(133, 'http://a.com'),
(134, 'http://a.com'),
(135, 'http://a.com'),
(136, 'http://a.com'),
(137, 'http://a.com'),
(138, 'http://a.com'),
(139, 'http://a.com'),
(140, 'http://a.com'),
(141, 'http://a.com'),
(142, 'http://a.com'),
(143, 'http://a.com'),
(144, 'http://a.com'),
(145, 'http://a.com'),
(146, 'http://a.com'),
(147, 'http://a.com'),
(148, 'http://a.com'),
(149, 'http://a.com'),
(150, 'http://a.com'),
(151, 'http://a.com'),
(152, 'http://a.com'),
(153, 'http://a.com'),
(154, 'http://a.com'),
(155, 'http://a.com'),
(156, 'http://a.com'),
(157, 'http://a.com'),
(158, 'http://a.com'),
(159, 'http://a.com'),
(160, 'http://a.com'),
(161, 'http://a.com'),
(162, 'http://a.com'),
(163, 'http://a.com'),
(164, 'http://a.com'),
(165, 'http://a.com'),
(166, 'http://a.com'),
(167, 'http://a.com'),
(168, 'http://a.com'),
(169, 'http://asdf.com'),
(170, 'http://hello.com'),
(171, 'SEO Tech'),
(172, 'Hello'),
(173, 'qw'),
(174, 'Bharathi'),
(175, 'Bharati'),
(176, 'Bharathi Updater'),
(177, 'Bhrati pakki update'),
(178, 'Siva');

-- --------------------------------------------------------

--
-- Table structure for table `domains`
--

CREATE TABLE IF NOT EXISTS `domains` (
  `dom_id` int(11) NOT NULL,
  `dom_name` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `exp_date` datetime DEFAULT NULL,
  `remainder_emails` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `domains`
--

INSERT INTO `domains` (`dom_id`, `dom_name`, `start_date`, `exp_date`, `remainder_emails`) VALUES
(13, 'http://www.amzon.com', '2015-10-10 00:00:00', '2015-10-17 00:00:00', 'amazonhelp@mail.com'),
(14, 'http://j.com', '2015-10-10 00:00:00', '2015-10-18 00:00:00', 'a@mail.com'),
(15, 'http://a.com', '2015-10-10 00:00:00', '2015-10-19 00:00:00', 'a@mail.com'),
(16, 'http://b.com', '2015-10-10 00:00:00', '2015-10-20 00:00:00', 'a@mail.com'),
(17, 'http://c.com', '2015-10-21 00:00:00', '2015-10-14 00:00:00', 'a@mail.com'),
(18, 'http://d.com', '2015-10-21 00:00:00', '2015-10-14 00:00:00', 'a@mail.com'),
(19, 'http://e.com', '2015-10-21 00:00:00', '2015-10-14 00:00:00', 'a@mail.com'),
(20, 'http://f.com', '2015-10-21 00:00:00', '2015-10-14 00:00:00', 'a@mail.com'),
(21, 'http://g.com', '2015-10-21 00:00:00', '2015-10-14 00:00:00', 'a@mail.com'),
(22, 'http://q.com', '2015-10-01 00:00:00', '2015-10-29 00:00:00', 'b@gmail.com'),
(23, 'http://z.com', '2015-10-10 00:00:00', '2015-10-13 00:00:00', 'x@mail.com'),
(24, 'http://hellotunes.com', '2015-10-01 00:00:00', '2015-10-01 00:00:00', 'Z@mail.com'),
(26, 'http://somesite.com', '2015-11-04 00:00:00', '2015-10-15 00:00:00', 'hi@mail.com'),
(27, 'http://somedom.com', '2015-10-17 00:00:00', '2015-10-16 00:00:00', 'hi@mail.com'),
(28, 'http://as.com', '2015-10-10 00:00:00', '2015-10-13 00:00:00', 'hi@mail.com'),
(29, 'http://ashok.com', '2015-10-28 00:00:00', '2015-10-14 00:00:00', 'hi@mail.com'),
(49, 'http://ergonomicscit.com', '2015-10-01 00:00:00', '2016-01-05 00:00:00', 'rahul1985@gmail.com'),
(50, 'http://s.com', '2015-10-28 00:00:00', '2015-11-07 00:00:00', 'admin123@gmail.comsiva@mail.com'),
(51, 'http://s.com', '2015-10-01 00:00:00', '2015-11-06 00:00:00', 'admin123@gmail.com,siva@mail.com'),
(52, 'http://s.com', '2015-10-14 00:00:00', '2015-10-22 00:00:00', '1,2'),
(53, NULL, NULL, NULL, NULL),
(54, NULL, NULL, NULL, NULL),
(55, NULL, NULL, NULL, NULL),
(56, NULL, NULL, NULL, NULL),
(57, NULL, NULL, NULL, NULL),
(58, NULL, NULL, NULL, NULL),
(59, NULL, NULL, NULL, NULL),
(60, NULL, NULL, NULL, NULL),
(61, NULL, NULL, NULL, NULL),
(62, NULL, NULL, NULL, NULL),
(63, NULL, NULL, NULL, NULL),
(64, NULL, NULL, NULL, NULL),
(65, NULL, NULL, NULL, NULL),
(66, NULL, NULL, NULL, NULL),
(67, NULL, NULL, NULL, NULL),
(68, NULL, NULL, NULL, NULL),
(69, NULL, NULL, NULL, NULL),
(70, NULL, NULL, NULL, NULL),
(71, NULL, NULL, NULL, NULL),
(72, NULL, NULL, NULL, NULL),
(73, 'http://a.com', NULL, NULL, NULL),
(74, 'http://a.com', NULL, NULL, NULL),
(75, 'http://a.com', NULL, NULL, NULL),
(76, 'http://a.com', NULL, NULL, NULL),
(77, 'http://a.com', NULL, NULL, NULL),
(78, 'http://a.com', NULL, NULL, NULL),
(79, 'http://a.com', NULL, NULL, NULL),
(80, 'http://a.com', NULL, NULL, NULL),
(81, 'http://a.com', NULL, NULL, NULL),
(82, 'http://a.com', NULL, NULL, NULL),
(83, 'http://a.com', NULL, NULL, NULL),
(84, 'http://a.com', NULL, NULL, NULL),
(85, 'http://a.com', NULL, NULL, NULL),
(86, 'http://a.com', NULL, NULL, NULL),
(87, 'http://a.com', NULL, NULL, NULL),
(88, 'http://a.com', NULL, NULL, NULL),
(89, 'http://a.com', NULL, NULL, NULL),
(90, 'http://a.com', NULL, NULL, NULL),
(91, 'http://a.com', NULL, NULL, NULL),
(92, 'http://a.com', NULL, NULL, NULL),
(93, 'http://a.com', NULL, NULL, NULL),
(94, 'http://a.com', NULL, NULL, NULL),
(95, 'http://a.com', NULL, NULL, NULL),
(96, 'http://a.com', NULL, NULL, NULL),
(97, 'http://a.com', NULL, NULL, NULL),
(98, 'http://a.com', NULL, NULL, NULL),
(99, 'http://a.com', NULL, NULL, NULL),
(100, 'http://a.com', NULL, NULL, NULL),
(101, 'http://a.com', NULL, NULL, NULL),
(102, 'http://a.com', NULL, NULL, NULL),
(103, 'http://a.com', NULL, NULL, NULL),
(104, 'http://a.com', NULL, NULL, NULL),
(105, 'http://a.com', NULL, NULL, NULL),
(106, 'http://a.com', NULL, NULL, NULL),
(107, 'http://a.com', NULL, NULL, NULL),
(108, 'http://a.com', NULL, NULL, NULL),
(109, 'http://a.com', NULL, NULL, NULL),
(110, 'http://a.com', NULL, NULL, NULL),
(111, 'Hello.com', NULL, NULL, NULL),
(112, 'http://hello123.com', NULL, NULL, NULL),
(113, 'http://hello3.com', NULL, NULL, NULL),
(114, 'http://hello3as.com', NULL, NULL, NULL),
(115, 'http://hello3asupdate.com', NULL, NULL, NULL),
(116, 'http://asldupdate.com', NULL, NULL, NULL),
(117, 'http://qw.com', NULL, NULL, NULL),
(118, 'http://hello12.com', NULL, NULL, NULL),
(119, 'http://jil.com', NULL, NULL, NULL),
(120, 'http://www.gig.com', NULL, NULL, NULL),
(121, 'http://bharati.com', NULL, NULL, NULL),
(122, 'http://hi.com', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE IF NOT EXISTS `leaves` (
  `leave_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `reason` text,
  `leave_status` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leaves`
--

INSERT INTO `leaves` (`leave_id`, `user_id`, `start_date`, `end_date`, `reason`, `leave_status`) VALUES
(1, NULL, '2015-10-29 00:00:00', '2015-10-29 00:00:00', 'er', NULL),
(2, NULL, '2015-10-29 00:00:00', '2015-10-29 00:00:00', 'leave 2', NULL),
(3, NULL, '2015-10-29 00:00:00', '2015-10-29 00:00:00', 'er', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE IF NOT EXISTS `notifications` (
  `notify_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `disp_date` datetime DEFAULT NULL,
  `message` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reminders`
--

CREATE TABLE IF NOT EXISTS `reminders` (
  `remin_id` int(11) NOT NULL,
  `dom_id` int(11) DEFAULT NULL,
  `date_send` datetime DEFAULT NULL,
  `emails` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) DEFAULT NULL,
  `log_start` datetime DEFAULT NULL,
  `log_end` datetime DEFAULT NULL,
  `ip` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `user_type` int(11) DEFAULT NULL,
  `user_status` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`, `user_type`, `user_status`) VALUES
(1, 'admin', 'admin123', 'admin123@gmail.com', 1, 1),
(2, 'siva', 'siva', 'siva@mail.com', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_personals`
--

CREATE TABLE IF NOT EXISTS `user_personals` (
  `user_personal_id` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_personals`
--

INSERT INTO `user_personals` (`user_personal_id`, `user_id`, `gender`, `dob`, `address`) VALUES
(0, NULL, 'm', '2015-11-03 00:00:00', 'yjyjgh,\nsgetyhth,\ntgwr');

-- --------------------------------------------------------

--
-- Table structure for table `user_profiles`
--

CREATE TABLE IF NOT EXISTS `user_profiles` (
  `user_profile_id` int(11) NOT NULL,
  `userid` int(11) DEFAULT NULL,
  `user_fullname` varchar(255) DEFAULT NULL,
  `designation` int(12) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `do_join` datetime DEFAULT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_profiles`
--

INSERT INTO `user_profiles` (`user_profile_id`, `userid`, `user_fullname`, `designation`, `photo`, `do_join`, `email`) VALUES
(8, NULL, 'admin', 1, NULL, '2007-05-25 00:00:00', 'cool@gmail.com'),
(9, NULL, '6589689', 1, NULL, '0214-12-03 18:30:00', 'stgrtgs@fhjryj.com'),
(12, NULL, 'fguyr', 0, NULL, '2015-10-29 00:00:00', ''),
(13, NULL, 'stheyji', 14, NULL, '2015-10-21 00:00:00', 'ryur7@gmail.com'),
(14, NULL, NULL, NULL, NULL, NULL, ''),
(15, NULL, NULL, NULL, NULL, NULL, ''),
(16, NULL, 'sdgsdg', 4, NULL, '2015-10-14 00:00:00', 'sivanthi85@gmail.com'),
(17, NULL, NULL, NULL, NULL, NULL, ''),
(18, NULL, NULL, NULL, NULL, NULL, ''),
(19, NULL, 'Kannan', 2, NULL, '2015-11-04 00:00:00', 'admin@mail.com'),
(20, NULL, NULL, NULL, NULL, NULL, 'sivanthi85@gmail.com'),
(21, NULL, NULL, NULL, NULL, NULL, 'admin@mail.com'),
(22, NULL, NULL, NULL, NULL, NULL, ''),
(23, NULL, NULL, NULL, NULL, NULL, ''),
(24, NULL, NULL, NULL, NULL, NULL, ''),
(25, NULL, NULL, NULL, NULL, NULL, 'admin@mail.com'),
(26, NULL, NULL, NULL, NULL, NULL, ''),
(27, NULL, NULL, NULL, NULL, NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `user_rights`
--

CREATE TABLE IF NOT EXISTS `user_rights` (
  `user_right_id` int(11) NOT NULL DEFAULT '0',
  `user_id` varchar(255) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `access` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure for view `DesgView`
--
DROP TABLE IF EXISTS `DesgView`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `DesgView` AS select `designations`.`desg_name` AS `desg_name` from `designations` order by `designations`.`desg_name` desc;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `a`
--
ALTER TABLE `a`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `auth_assignments`
--
ALTER TABLE `auth_assignments`
  ADD PRIMARY KEY (`asgn_id`);

--
-- Indexes for table `auth_items`
--
ALTER TABLE `auth_items`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `auth_operations`
--
ALTER TABLE `auth_operations`
  ADD PRIMARY KEY (`op_id`);

--
-- Indexes for table `auth_roles`
--
ALTER TABLE `auth_roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `b`
--
ALTER TABLE `b`
  ADD PRIMARY KEY (`b_id`);

--
-- Indexes for table `c`
--
ALTER TABLE `c`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `crondays`
--
ALTER TABLE `crondays`
  ADD PRIMARY KEY (`cron_day_id`);

--
-- Indexes for table `designations`
--
ALTER TABLE `designations`
  ADD PRIMARY KEY (`desg_id`);

--
-- Indexes for table `domains`
--
ALTER TABLE `domains`
  ADD PRIMARY KEY (`dom_id`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`leave_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`notify_id`);

--
-- Indexes for table `reminders`
--
ALTER TABLE `reminders`
  ADD PRIMARY KEY (`remin_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_personals`
--
ALTER TABLE `user_personals`
  ADD PRIMARY KEY (`user_personal_id`);

--
-- Indexes for table `user_profiles`
--
ALTER TABLE `user_profiles`
  ADD PRIMARY KEY (`user_profile_id`);

--
-- Indexes for table `user_rights`
--
ALTER TABLE `user_rights`
  ADD PRIMARY KEY (`user_right_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `a`
--
ALTER TABLE `a`
  MODIFY `a_id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `auth_assignments`
--
ALTER TABLE `auth_assignments`
  MODIFY `asgn_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `auth_items`
--
ALTER TABLE `auth_items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `auth_operations`
--
ALTER TABLE `auth_operations`
  MODIFY `op_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `auth_roles`
--
ALTER TABLE `auth_roles`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `b`
--
ALTER TABLE `b`
  MODIFY `b_id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `c`
--
ALTER TABLE `c`
  MODIFY `c_id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `crondays`
--
ALTER TABLE `crondays`
  MODIFY `cron_day_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `designations`
--
ALTER TABLE `designations`
  MODIFY `desg_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=179;
--
-- AUTO_INCREMENT for table `domains`
--
ALTER TABLE `domains`
  MODIFY `dom_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=123;
--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `leave_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `notify_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `reminders`
--
ALTER TABLE `reminders`
  MODIFY `remin_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user_profiles`
--
ALTER TABLE `user_profiles`
  MODIFY `user_profile_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=28;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
