CREATE DATABASE IF NOT EXISTS ZOO;

USE ZOO;

CREATE TABLE gerente(
gerente_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL
);

CREATE TABLE cuidador(
cuidador_id INT PRIMARY KEY auto_increment,
nome VARCHAR(45) NOT NULL,
gerente_id INT NOT NULL,
FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE animal(
animal_id INT PRIMARY KEY auto_increment,
Nome VARCHAR(45) NOT NULL,
Especie VARCHAR(45) NOT NULL,
sexo VARCHAR(45) NOT NULL,
idade INT NOT NULL,
localizacao VARCHAR(50) NOT NULL
);

CREATE TABLE animal_cuidador(
animal_id INT,
cuidador_id INT,
CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
FOREIGN KEY(animal_id) REFERENCES animal(animal_id),
FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id)
);
