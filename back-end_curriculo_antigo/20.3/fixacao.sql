
-- ex 2 Monte uma procedure que receba como parâmetro o nome da categoria desejada em uma string 
-- e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. 
-- Use as tabelas film , film_category e category para montar essa procedure.
USE sakila;
DELIMITER $$

CREATE PROCEDURE FindMovieByCategory(IN category VARCHAR(100))
BEGIN
    SELECT f.film_id, f.title, fc.category_id, c.name
    FROM sakila.film f
    INNER JOIN sakila.film_category fc ON f.film_id = fc.film_id
    INNER JOIN sakila.category c ON c.category_id = fc.category_id
    WHERE c.name = category;
END $$

DELIMITER ;

-- Como usar:

CALL FindMovieByCategory('Action');

/*Monte uma procedure que receba o email de um cliente como parâmetro de entrada e 
diga se o cliente está ou não ativo,
 através de um parâmetro de saída.*/
USE sakila;
DELIMITER $$
CREATE PROCEDURE clienteAtivo( IN email VARCHAR(300), OUT ativo BOOL)
BEGIN 
SET ativo = (
        SELECT active
        FROM sakila.customer
        WHERE email = email
    );
END $$

-- functions --

USE sakila;
DELIMITER $$

CREATE FUNCTION CountPay(id INT)
RETURNS INT READS SQL DATA
BEGIN 
DECLARE payment INT;
SELECT COUNT(*) 
FROM sakila.payment
WHERE customer_id = id INTO payment;
RETURN payment;
END $$

DELIMITER ;

/* ex 2 Crie uma function que, dado o parâmetro de entrada inventory_id ,
 retorna o nome do filme vinculado ao registro de inventário com esse id.*/
USE sakila;
DELIMITER $$

CREATE FUNCTION getTitulo(id INT)
RETURNS  VARCHAR(700) READS SQL DATA 
BEGIN 
DECLARE title VARCHAR (700);
SELECT  F.title FROM sakila.film AS F
INNER JOIN sakila.inventory as I ON F.film_id = I.film_id
WHERE I.inventory_id = id
INTO title;
RETURN title;
END $$

DELIMITER ; 
/* Returns especifica de que modo será a resposta se for titulo precisa ser VarChar, se for numero precisa ser inteiro

/* ex 3 Crie uma function que receba uma determinada categoria de filme em formato de texto 
(ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.*/

USE sakila;
DELIMITER $$

CREATE FUNCTION GetMovieAmountInCategory(category VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_amount INT;
    SELECT COUNT(*)
    FROM sakila.category c
    INNER JOIN sakila.film_category fc ON fc.category_id = c.category_id
    WHERE c.name = category INTO movie_amount;
    RETURN movie_amount;
END $$

DELIMITER ;

-- trigger --
/* Crie um TRIGGER que, a cada nova inserção feita na tabela carros , 
defina o valor da coluna data_atualizacao para o momento do ocorrido,
 a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .*/

DELIMITER $$
CREATE TRIGGER trigger_insert_carros
BEFORE INSERT ON carros
FOR EACH ROW 
BEGIN 
SET NEW.data_atualizacao = NOW(),
 NEW.acao = 'INSERÇAO',
 NEW.disponivel_em_estoque= 1;
END $$
DELIMITER ;
/* fiz isso só para ver se deu certo 
INSERT INTO carros(preco) VALUES (2500);
SELECT * FROM carros;*/

/* Crie um TRIGGER que, a cada atualização feita na tabela carros , 
defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .*/
DELIMITER $$
CREATE TRIGGER trigger_update_carros
BEFORE UPDATE ON carros 
FOR EACH ROW 
BEGIN
SET NEW.data_atualizacao = NOW(),
NEW.acao = 'UPDATE';
END $$
DELIMITER ;

/* ex 3 Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO'
 e a data_ocorrido como o momento da operação.*/

 USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON carros
    FOR EACH ROW
BEGIN
    INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', NOW());
END $$

DELIMITER ;

