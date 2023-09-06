-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hackathon3
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hackathon3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hackathon3` DEFAULT CHARACTER SET utf8 ;
USE `hackathon3` ;

-- -----------------------------------------------------
-- Table `hackathon3`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon3`.`users` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NULL,
  `user_age` VARCHAR(45) NULL,
  `user_coordx` VARCHAR(45) NULL,
  `user_coordy` VARCHAR(45) NULL,
  `user_email` VARCHAR(50) NULL,
  `user_pwd` VARCHAR(255) NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon3`.`cours`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon3`.`cours` (
  `id_cours` INT NOT NULL AUTO_INCREMENT,
  `cours_name` VARCHAR(45) NULL,
  `cours_contenu` LONGTEXT NULL,
  `cours_link` VARCHAR(255) NULL,
  PRIMARY KEY (`id_cours`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon3`.`skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon3`.`skills` (
  `id_skill` INT NOT NULL AUTO_INCREMENT,
  `skill_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_skill`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon3`.`handicap`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon3`.`handicap` (
  `id_handicap` INT NOT NULL AUTO_INCREMENT,
  `handicap_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_handicap`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon3`.`users_has_handicap`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon3`.`users_has_handicap` (
  `users_id_user` INT NOT NULL,
  `handicap_id_handicap` INT NOT NULL,
  PRIMARY KEY (`users_id_user`, `handicap_id_handicap`),
  INDEX `fk_users_has_handicap_handicap1_idx` (`handicap_id_handicap` ASC) VISIBLE,
  INDEX `fk_users_has_handicap_users1_idx` (`users_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_handicap_users1`
    FOREIGN KEY (`users_id_user`)
    REFERENCES `hackathon3`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_handicap_handicap1`
    FOREIGN KEY (`handicap_id_handicap`)
    REFERENCES `hackathon3`.`handicap` (`id_handicap`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon3`.`users_has_skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon3`.`users_has_skills` (
  `users_id_user` INT NOT NULL,
  `skills_id_skill` INT NOT NULL,
  PRIMARY KEY (`users_id_user`, `skills_id_skill`),
  INDEX `fk_users_has_skills_skills1_idx` (`skills_id_skill` ASC) VISIBLE,
  INDEX `fk_users_has_skills_users1_idx` (`users_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_skills_users1`
    FOREIGN KEY (`users_id_user`)
    REFERENCES `hackathon3`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_skills_skills1`
    FOREIGN KEY (`skills_id_skill`)
    REFERENCES `hackathon3`.`skills` (`id_skill`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon3`.`users_has_cours`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon3`.`users_has_cours` (
  `users_id_user` INT NOT NULL,
  `cours_id_cours` INT NOT NULL,
  PRIMARY KEY (`users_id_user`, `cours_id_cours`),
  INDEX `fk_users_has_cours_cours1_idx` (`cours_id_cours` ASC) VISIBLE,
  INDEX `fk_users_has_cours_users1_idx` (`users_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_cours_users1`
    FOREIGN KEY (`users_id_user`)
    REFERENCES `hackathon3`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_cours_cours1`
    FOREIGN KEY (`cours_id_cours`)
    REFERENCES `hackathon3`.`cours` (`id_cours`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon3`.`poi`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon3`.`poi` (
  `id_poi` INT NOT NULL AUTO_INCREMENT,
  `poi_name` VARCHAR(45) NULL,
  `poi_type` VARCHAR(45) NULL,
  `poi_desc` VARCHAR(45) NULL,
  `poi_coordx` VARCHAR(45) NULL,
  `poi_coordy` VARCHAR(45) NULL,
  PRIMARY KEY (`id_poi`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
