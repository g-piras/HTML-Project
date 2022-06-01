-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 01, 2022 alle 15:36
-- Versione del server: 10.4.22-MariaDB
-- Versione PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `levelupg_contact_db`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `players`
--

CREATE TABLE `players` (
  `Id` int(3) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `middleName` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `battleTag` varchar(255) NOT NULL,
  `teamName` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `city` varchar(255) NOT NULL,
  `userAddress` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `hair` varchar(255) NOT NULL,
  `eyes` varchar(255) NOT NULL,
  `tournament` varchar(255) NOT NULL,
  `otherGames` varchar(255) NOT NULL,
  `bio` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `players`
--

INSERT INTO `players` (`Id`, `firstName`, `middleName`, `surname`, `mail`, `battleTag`, `teamName`, `phone`, `city`, `userAddress`, `country`, `age`, `gender`, `hair`, `eyes`, `tournament`, `otherGames`, `bio`) VALUES
(35, 'Davide', '', 'Murroni', 'davide.murroni@edu.itspiemonte.it', 'Murro', 'EsportsProject', '345-554-3533', 'Chivasso', 'Via Piave 4', 'Italy', '11/03/1993', 'male', 'brown', 'brown', 'Valorant Regional League DACH: Evolution', 'league-of-legend', 'Nothing to declare!'),
(37, 'Jack', 'Leon', 'Sullyvan', 'jls@gmail.com', 'JLS', 'Lions', '876-932-1783', 'London', '30 Ballifeary Road', 'United Kingdom', '17/09/1998', 'male', 'black', 'black', 'Valorant Regional League Spain: Rising', 'legends-of-runeterra', 'I\'m gonna win the title.'),
(38, 'William', 'Ryan', 'Lopez', 'WilliamRLopez@rhyta.com', 'AgentLopez', 'LAAgents', '323-663-9894', 'Los Angeles', '2446 Southside Lane', 'United States of America', '26/04/1944', 'male', 'grey', 'brown', 'Champions Tour North America', 'lol-wild-rift', 'Go LAAgents!!!'),
(39, 'Giampietro', '', 'Piras', 'giampietro.piras@edu.itspiemonte.it', 'JamPiras', 'EsportsProject', '335-824-5563', 'Olbia', 'via roma 34', 'Italy', '11/07/1994', 'male', 'red', 'brown', 'Valorant Regional League East: Surge', 'lol-wild-rift', 'Testing....'),
(40, 'Simone', '', 'Sporeni', 'simone.sporeni@edu.itspiemonte.it', 'simo2000w', 'webdev', '323-663-9894', 'Imperia', 'via torino 76', 'Italy', '30/03/2000', 'male', 'blonde', 'green', 'Valorant Regional League Northern Europe: Polaris', 'league-of-legend', 'I play Rocket League....'),
(42, 'Davide', '', 'Murroni', 'davide.murroni@edu.itspiemonte.it', 'giggi', 'dfsfsd', '333-333-3333', 'dsffdsf', 'via piave 4', 'Italy', '26/04/1944', 'male', 'black', 'black', 'Champions Tour North America', 'league-of-legend', 'dsffdsfdsdf');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `players`
--
ALTER TABLE `players`
  MODIFY `Id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
