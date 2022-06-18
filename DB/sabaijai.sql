-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2022 at 10:50 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sabaijai`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(10) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `depressiondata`
--

CREATE TABLE `depressiondata` (
  `d_data_id` int(20) NOT NULL,
  `data_text` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `admin_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `depressiontest`
--

CREATE TABLE `depressiontest` (
  `de_id` int(20) NOT NULL,
  `user_id` int(10) NOT NULL,
  `score` int(10) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `depressiontest`
--

INSERT INTO `depressiontest` (`de_id`, `user_id`, `score`, `date`) VALUES
(1, 1, 6, '2022-05-12 13:21:40'),
(2, 1, 0, '2022-05-14 21:29:19'),
(3, 1, 21, '2022-05-24 01:34:03'),
(4, 1, 0, '2022-05-24 01:40:07'),
(5, 1, 0, '2022-05-24 01:40:15'),
(6, 1, 0, '2022-05-24 01:42:08'),
(7, 1, 0, '2022-05-24 01:45:52'),
(8, 1, 13, '2022-05-24 01:49:26');

-- --------------------------------------------------------

--
-- Table structure for table `diary`
--

CREATE TABLE `diary` (
  `di_id` int(20) NOT NULL,
  `user_id` int(10) NOT NULL,
  `data_text` varchar(255) NOT NULL,
  `mood` varchar(100) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `diary`
--

INSERT INTO `diary` (`di_id`, `user_id`, `data_text`, `mood`, `date`) VALUES
(14, 0, '', '', '2022-04-11 15:57:43'),
(18, 1, 'ไม่ดีเลย', 'อับอาย', '2022-04-11 16:35:54'),
(20, 2, 'สงกรานต์สนุกจัง', 'รื่นเริง', '2022-04-13 14:35:37'),
(21, 1, 'ฝนตกหนักมากกก', 'ตื่นเต้น', '2022-04-16 16:14:45'),
(25, 3, '65656565656', 'กลัว', '2022-04-23 16:13:37'),
(26, 1, 'ฉันตื่นตอนหกโมงเช้าเสมอ แต่ยังไม่ตื่น (ลุกจากที่นอน) จริง ๆ จนกระทั่งหกโมงครึ่ง)\r\n\r\n', 'รู้สึกผิด', '2022-04-24 15:24:30'),
(27, 1, 'วันนี้ฉันตื่นนอนตอนตีห้าครึ่ง ฉันล้างหน้าและอาบน้ำ ฉันแปรงฟัน ฉันใส่ชุดนักเรียน ฉันกินข้าวเช้าตอนหกโมงเช้า หลังจากนั้นฉันก็ไปโรงเรียน ฉันทำความเคารพคุณครูที่โรงเรียน ฉันขึ้นไปที่ห้องเรียนของฉัน ฉันอ่านหนังสือ ฉันลงมาด้านล่างเพื่อเข้าแถว', 'รื่นเริง', '2022-04-24 15:29:27'),
(28, 1, ' ฉันรับประทานอาหารกลางวันในห้องเรียน ในเวลาบ่าย ฉันกลับบ้าน ฉันทำการบ้าน และเล่นเกมส์คอมฯที่บ้าน', 'รื่นเริง', '2022-04-24 15:31:32'),
(46, 1, '-', 'อับอาย', '2022-05-14 23:06:53'),
(47, 1, 'นอนดึกมากกก', 'รู้สึกผิด', '2022-05-19 03:49:19'),
(48, 1, '', '', '2022-05-25 11:03:16');

-- --------------------------------------------------------

--
-- Table structure for table `encourageddata`
--

CREATE TABLE `encourageddata` (
  `enc_id` int(10) NOT NULL,
  `data_text` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `admin_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `stressdata`
--

CREATE TABLE `stressdata` (
  `s_data_id` int(10) NOT NULL,
  `data_text` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `admin_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `stresstest`
--

CREATE TABLE `stresstest` (
  `st_id` int(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stresstest`
--

INSERT INTO `stresstest` (`st_id`, `user_id`, `score`, `date`) VALUES
(1, 1, 4, '2022-04-11 15:07:50'),
(2, 1, 4, '2022-04-16 16:11:53'),
(3, 1, 7, '2022-04-21 15:50:19'),
(4, 1, 7, '2022-04-28 13:25:39'),
(5, 1, 1, '2022-04-28 13:26:05'),
(6, 1, 10, '2022-04-28 13:26:11'),
(7, 1, 5, '2022-04-28 13:26:18'),
(8, 1, 27, '2022-05-07 15:12:30'),
(9, 1, 0, '2022-05-07 15:12:37'),
(10, 1, 27, '2022-05-07 15:12:43'),
(11, 1, 27, '2022-05-07 15:13:01'),
(12, 0, 0, '2022-05-12 13:21:23'),
(13, 1, 0, '2022-05-14 20:34:51'),
(14, 1, 8, '2022-05-14 20:41:01'),
(15, 1, 15, '2022-05-24 01:24:48'),
(16, 1, 8, '2022-05-24 01:25:41'),
(17, 1, 8, '2022-05-24 01:52:03');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(10) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date_of_register` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `email`, `password`, `date_of_register`) VALUES
(1, 'natty', 'teeranatt.sr@outlook.com', '123456', '2022-04-16'),
(2, 'google', 'google@hotmail.com', 'google', '2022-04-16'),
(3, 'teera', 'teera@gmail.com', '78910', '2022-04-16'),
(4, 'JJ', 'JJ16@gmail.com', '11111111', '2022-04-22'),
(5, 'natyy001', 'natty001@gmail.com', 'natyy001', '2022-05-22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `depressiondata`
--
ALTER TABLE `depressiondata`
  ADD PRIMARY KEY (`d_data_id`);

--
-- Indexes for table `depressiontest`
--
ALTER TABLE `depressiontest`
  ADD PRIMARY KEY (`de_id`);

--
-- Indexes for table `diary`
--
ALTER TABLE `diary`
  ADD PRIMARY KEY (`di_id`);

--
-- Indexes for table `encourageddata`
--
ALTER TABLE `encourageddata`
  ADD PRIMARY KEY (`enc_id`);

--
-- Indexes for table `stressdata`
--
ALTER TABLE `stressdata`
  ADD PRIMARY KEY (`s_data_id`);

--
-- Indexes for table `stresstest`
--
ALTER TABLE `stresstest`
  ADD PRIMARY KEY (`st_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `depressiondata`
--
ALTER TABLE `depressiondata`
  MODIFY `d_data_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `depressiontest`
--
ALTER TABLE `depressiontest`
  MODIFY `de_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `diary`
--
ALTER TABLE `diary`
  MODIFY `di_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `encourageddata`
--
ALTER TABLE `encourageddata`
  MODIFY `enc_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stressdata`
--
ALTER TABLE `stressdata`
  MODIFY `s_data_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stresstest`
--
ALTER TABLE `stresstest`
  MODIFY `st_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
