#Imani Wilburn
#Archive of Alexandria

DROP DATABASE IF EXISTS archive_of_alexandria;
CREATE DATABASE IF NOT EXISTS archive_of_alexandria
		CHARSET utf8;

USE archive_of_alexandria;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
accountNum		INT		PRIMARY KEY 	AUTO_INCREMENT,
email_address 	VARCHAR(100),
username 	VARCHAR(50),
mod_user 	BOOLEAN
)ENGINE = InnoDB;

DROP TABLE IF EXISTS books;
CREATE TABLE books(
isbn 	BIGINT 	PRIMARY KEY,
title 		VARCHAR(100),
author		VARCHAR(100),
genre 		VARCHAR(50),
media 		VARCHAR(150)

)ENGINE = InnoDB;

DROP TABLE IF EXISTS media;
CREATE TABLE media(
media_key 	INT 	PRIMARY KEY AUTO_INCREMENT,
url 		VARCHAR(200)


)ENGINE = InnoDB;

DROP TABLE IF EXISTS comments;
CREATE TABLE comments(
comment_id 	INT 	PRIMARY KEY	AUTO_INCREMENT



)ENGINE = InnoDB;