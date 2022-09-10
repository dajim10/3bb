-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Sep 08, 2022 at 04:17 AM
-- Server version: 8.0.30
-- PHP Version: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sdg`
--

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `id` int NOT NULL,
  `content_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content_detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`id`, `content_name`, `content_detail`, `image`) VALUES
(1, 'คณะสัตวแพทยศาสตร์ มทร.ศรีวิชัย ร่วมลงนามความร่วมมือ คณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย', 'คณะสัตวแพทยศาสตร์ มทร.ศรีวิชัย ร่วมลงนามความร่วมมือ คณะสัตวแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย', 'http://www.sustainability.chula.ac.th/wp-content/uploads/2021/11/cow-1-800x533.jpg'),
(2, '“MindSpace” แพลตฟอร์มออนไลน์ใหม่แก้ปัญหาสุขภาพจิตนิสิต', '...', 'http://www.sustainability.chula.ac.th/wp-content/uploads/2021/11/zerowaste4-800x533.jpg'),
(3, 'มทร.ศรีวิชัย ร่วมพิธีบำเพ็ญกุศลสวดพระอภิธรรมอัฐิ พลเอกเปรม ติณสูลานนท์', 'เมื่อวันที่ 22 สิงหาคม 2565 ศาสตราจารย์ ดร.สุวัจน์ ธัญรส อธิการบดีมหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย มอบหมายให้ ผู้ช่วยศาสตราจารย์สุเทพ ชูกลิ่น พร้อมด้วยคณะผู้บริหาร บุคลากรและนักศึกษา คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี เข้าร่วมพิธีบำเพ็ญกุศลสวดพระอภิธรรมอัฐิ พลเอกเปรม ติณสูลานนท์ อดีตประธานองคมนตรีและรัฐบุรุษ ณ สวนประวัติศาสตร์ พลเอกเปรม ติณสูลานนท์ อำเภอเมือง ตำบลพะวง จังหวัดสงขลา', 'http://www.sustainability.chula.ac.th/wp-content/uploads/2021/11/SDG101_1-800x533.jpg'),
(4, 'การประชุมวิชาการ วิจัยและนวัตกรรม หัวข้อ “เทคโนโลยีและนวัตกรรมอาชีวศึกษาเพื่อการพัฒนาอุตสาหกรรม” ', '', 'http://www.sustainability.chula.ac.th/wp-content/uploads/2021/11/Morgan1-1024x682.jpg'),
(5, 'Center of SHE คุมเข้มความปลอดภัยแล็บจุฬาฯ นับพันด้วย “ChemTrack & WasteTrack 2016', 'ความปลอดภัยในห้องปฏิบัติการมีความสำคัญอย่างมากในมหาวิทยาลัย ไม่มีใครอยากประสบอุบัติเหตุ ได้รับอันตรายจากสารเคมีที่สะสมเข้าสู่ร่างกาย ซึ่งส่งผลต่อสุขภาพในระยะยาว การปลูกฝังให้นิสิตผู้ปฏิบัติงานเกี่ยวข้องกับห้องปฏิบัติการในมหาวิทยาลัยมีจิตสำนึกในเรื่องความปลอดภัยในการทำงานก่อนจะจบออกไปประกอบวิชาชีพในการทำงานในหน่วยงานต่างๆ มีความจำเป็นอย่างยิ่ง จุฬาลงกรณ์มหาวิทยาลัยมีห้องปฏิบัติการหรือห้อง Lab มากกว่า 1,000 ห้อง จึงดำเนินการด้านระบบความปลอดภัยในห้องปฏิบัติการและการกำจัดสารเคมี ของเสียอันตรายอย่างถูกวิธีมากว่า 20 ปี', 'http://www.sustainability.chula.ac.th/wp-content/uploads/2021/11/chemtrack-wastetrack-2016-featured-800x533.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `content_sdg`
--

CREATE TABLE `content_sdg` (
  `id` int NOT NULL,
  `content_id` int NOT NULL,
  `sdg_number` int NOT NULL,
  `color` varchar(7) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `content_sdg`
--

INSERT INTO `content_sdg` (`id`, `content_id`, `sdg_number`, `color`) VALUES
(1, 1, 6, '#48773e'),
(2, 2, 6, '#007dbc'),
(3, 2, 15, '#3eb049'),
(4, 3, 5, '#ef402b'),
(5, 4, 6, '#00aed9'),
(6, 4, 8, '#8f1838'),
(7, 5, 3, ''),
(8, 5, 17, '');

-- --------------------------------------------------------

--
-- Table structure for table `sdg_goal`
--

CREATE TABLE `sdg_goal` (
  `id` int NOT NULL,
  `detail` text COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(1) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '1',
  `color` varchar(7) COLLATE utf8mb4_general_ci NOT NULL,
  `img` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sdg_goal`
--

INSERT INTO `sdg_goal` (`id`, `detail`, `status`, `color`, `img`) VALUES
(1, 'ขจัดความยากจนทุกรูปแบบ ทุกสถานที่', '1', '#eb1c2d', './images/1.jpg'),
(2, 'ขจัดความหิวโหย บรรลุความมั่นคงทางอาหาร ส่งเสริมเกษตรกรรมอย่างยั่งยืน', '1', '#d3a029', './images/2.jpg'),
(3, 'มีสุขภาพและความเป็นอยู่ที่ดี รับรองการมีสุขภาพและความเป็นอยู่ที่ดีของทุกคนในทุกช่วงอายุ', '1', '#279b48', './images/3.jpg'),
(4, 'รับรองการศึกษาที่เท่าเทียมและทั่วถึง ส่งเสริมการเรียนรู้ตลอดชีวิตแก่ทุกคน', '1', '#c31f33', './images/4.jpg'),
(5, 'บรรลุความเท่าเทียมทางเพศ พัฒนาบทบาทสตรีและเด็กผู้หญิง', '1', '#ef402b', './images/5.jpg'),
(6, 'รับรองการมีน้ำใช้ การจัดการน้ำและสุขาภิบาลที่ยั่งยืน', '1', '#00aed9', './images/6.jpg'),
(7, 'รับรองการมีพลังงานที่ทุกคนเข้าถึงได้ เชื่อถือได้ ยั่งยืนทันสมัย', '1', '#fdb713', './images/7.jpg'),
(8, 'ส่งเสริมการเติบโตทางเศรษฐกิจที่ต่อเนื่องครอบคลุมและยั่งยืน การจ้างงานที่มีคุณค่า', '1', '#8f1838', './images/8.jpg'),
(9, 'พัฒนาโครงสร้างพื้นฐานที่พร้อมรับการเปลี่ยนแปลง ส่งเสริมการปรับตัวให้เป็นอุตสาหกรรมอย่างยั่งยืนและทั่วถึง และสนับสนุนนวัตกรรม', '1', '#f36d25', './images/9.jpg'),
(10, 'ลดความเหลื่อมล้ำทั้งภายในและระหว่างประเทศ', '1', '#e11484', './images/10.jpg'),
(11, 'ทำให้เมืองและการตั้งถิ่นฐานของมนุษย์มีความปลอดภัย ทั่วถึง พร้อมรับการเปลี่ยนแปลงและพัฒนาอย่างยั่งยืน', '1', '#f99d26', './images/11.jpg'),
(12, 'รับรองแผนการบริโภคและการผลิตที่ยั่งยืน', '1', '#cf8d2a', './images/12.jpg'),
(13, 'ดำเนินมาตรการเร่งด่วนเพื่อรับมือกับการเปลี่ยนแปลงสภาพภูมิอากาศและผลกระทบ', '1', '#48773e', './images/13.jpg'),
(14, 'อนุรักษ์และใช้ประโยชน์จากมหาสมุทรและทรัพยากรทางทะเลเพื่อการพัฒนาอย่างยั่งยืน', '1', '#007dbc', './images/14.jpg'),
(15, 'ปกป้อง ฟื้นฟู และส่งเสริมการใช้ประโยชน์จากระบบนิเวศทางบกอย่างยั่งยืน', '1', '#3eb049', './images/15.jpg'),
(16, 'ส่งเสริมสังคมสงบสุข ยุติธรรม ไม่แบ่งแยก เพื่อการพัฒนาอย่างยั่งยืน', '1', '#02558b', './images/16.jpg'),
(17, 'สร้างพลังแห่งการเป็นหุ้นส่วนความร่วมมือระดับสากลต่อการพัฒนาที่ยั่งยืน', '1', '#183668', './images/17.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `t1`
--

CREATE TABLE `t1` (
  `jdoc` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `t1`
--

INSERT INTO `t1` (`jdoc`) VALUES
('{\"key1\": \"value1\", \"key2\": \"value2\"}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `content_sdg`
--
ALTER TABLE `content_sdg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sdg_goal`
--
ALTER TABLE `sdg_goal`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `content`
--
ALTER TABLE `content`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `content_sdg`
--
ALTER TABLE `content_sdg`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sdg_goal`
--
ALTER TABLE `sdg_goal`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
