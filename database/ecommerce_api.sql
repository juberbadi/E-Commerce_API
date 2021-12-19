-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 18, 2021 at 12:26 PM
-- Server version: 8.0.27-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flipkart-clone`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `categoryname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `categoryname`) VALUES
(2, 'Fashion'),
(3, 'Electronis'),
(4, 'Appliances'),
(5, 'Travel'),
(6, 'Sport'),
(7, 'Mobile');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_address`
--

CREATE TABLE `delivery_address` (
  `id` int NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `userId` int DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `phoneno` varchar(255) NOT NULL,
  `pincode` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `delivery_address`
--

INSERT INTO `delivery_address` (`id`, `fullname`, `address`, `district`, `state`, `userId`, `city`, `phoneno`, `pincode`) VALUES
(2, 'Juber Badi', 'Owais', 'Ahmedabad', 'Gujarat', 1, 'Ahmedabad', '9898987272', '380005');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int NOT NULL,
  `quantity` int NOT NULL,
  `totalDiscount` int NOT NULL,
  `totalAmount` int NOT NULL,
  `paymentMode` varchar(255) NOT NULL,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `deliveryAddressId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `quantity`, `totalDiscount`, `totalAmount`, `paymentMode`, `userId`, `productId`, `deliveryAddressId`) VALUES
(13, 0, 0, 0, 'string', 1, 13, 2);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `discount` int NOT NULL,
  `priceWithDiscount` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `categoryId` int DEFAULT NULL,
  `userId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `discount`, `priceWithDiscount`, `description`, `categoryId`, `userId`) VALUES
(13, 'Apple iphone 13 pro max', 120000, 21000, 99000, 'Apple iPhone 13 Pro Max · Released 2021, September 24 · 240g, 7.7mm thickness · iOS 15, up to iOS 15.1 · 128GB/256GB/1TB storage', NULL, 1),
(14, 'string', 0, 0, 0, 'string', 2, 1),
(32, 'string', 0, 0, 0, 'string', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstname`, `lastname`, `username`, `email`, `password`, `role`) VALUES
(1, 'Juber', 'Badi', 'jb72', 'juber@gmail.com', '$2b$10$4IHQ6hAKDHqcV06o1h/quexuH7wi8St5Dz7QWpfN5ix2SgxYq5t16', 'USER'),
(9, 'Juber', 'Badi', 'jb722', 'juber0@gmail.com', '$2b$10$9EyEkUPJ3Ycn20WrZdEgtOapUka0t1lC1YU6T18.cIltzfcEdCpB2', 'USER'),
(13, 'Juber', 'Badi', 'jb727', 'juber72@gmail.com', '$2b$10$olV/pxISZ5sRI9soJigeK.eEMIhrXHncMfFGJR53L7n7Y1GhRdQZy', 'ADMIN'),
(16, 'Juber', 'Badi', 'jb723', 'juber7221@gmail.com', '$2b$10$1dnrFK2eA1uyJBMpAMT.r.FHABrFg2LJ12aTiy5HCsFcPh/ziADaK', 'ADMIN'),
(17, 'string', 'string', 'string', 'abc@gmail.com', '$2b$10$UNuyMSJiai5HSNJMI5/t5OljVH9BSrsu0uYqvPLXURbfoIzxrLLr.', 'USER'),
(21, 'string', 'string', 'qw', 'abc12@gmail.com', '$2b$10$RAoNwlp58teN44UGsntFpebWOemzSY25nfpxfBEi1aqf1S8Ma.zcW', 'USER'),
(22, 'string', 'string', 'ads', 'john@gmail.com', '$2b$10$LWwqfWulfqyR7WacKrnZbeH82AZFGPuHBv1pCehu2Xi0IODYd83E2', 'USER'),
(25, 'string', 'string', '23ws', 'string', '$2b$10$oHxqE7bDEY57zDyBXit8juMO9wV7P9QpZat/8AP/v49NaeNghyY22', 'USER');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_address`
--
ALTER TABLE `delivery_address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ca525ca0026c745ead794e7d301` (`userId`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_caabe91507b3379c7ba73637b84` (`userId`),
  ADD KEY `FK_88991860e839c6153a7ec878d39` (`productId`),
  ADD KEY `FK_08fcc4e8c5af1570909f08f5029` (`deliveryAddressId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ff0c0301a95e517153df97f6812` (`categoryId`),
  ADD KEY `FK_329b8ae12068b23da547d3b4798` (`userId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`),
  ADD UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `delivery_address`
--
ALTER TABLE `delivery_address`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `delivery_address`
--
ALTER TABLE `delivery_address`
  ADD CONSTRAINT `FK_ca525ca0026c745ead794e7d301` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `FK_08fcc4e8c5af1570909f08f5029` FOREIGN KEY (`deliveryAddressId`) REFERENCES `delivery_address` (`id`),
  ADD CONSTRAINT `FK_88991860e839c6153a7ec878d39` FOREIGN KEY (`productId`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `FK_caabe91507b3379c7ba73637b84` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_329b8ae12068b23da547d3b4798` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
