/*Selecione os 5 primeiros nomes e sobrenomes da tabela sakila.customer 
e cadastre essas pessoas como atores na tabela sakila.actor . */
INSERT INTO sakila.actor(first_name, last_name)
    SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;
/* quando o dado ja existe seleciona ele e coloca na tabela*/
/*Cadastre 3 categorias de uma vez só na tabela sakila.category .*/
INSERT INTO sakila.category(name)
VALUES('Finances'), ('Lifestyle'), ('Documentary');
/* usando update para atualizar os dados de uma tabela*/
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';
/*Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".*/
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';
/*Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações 
"G" , "PG" ou "PG-13" e um custo de substituição maior que $20.*/
UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;
/*Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. 
Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, 
e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00. */
UPDATE sakila.film
SET rental_rate = (
    CASE
        WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END);
/* -- Primeiro descubra os IDs relacionados ao nome */
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';

-- Em seguida, apague suas referências
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- Em seguida, apague as referências
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

/*Exercício 3: Exclua da tabela film_text 
todos os registros que possuem a palavra "saga" em suas descrições.*/
DELETE FROM sakila.film_text
WHERE DESCRIPTION LIKE '%saga%';

/*Exercício 4: Apague da maneira mais performática possível todos os registros das
 tabelas film_actor e film_category .*/
 TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
