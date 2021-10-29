/*Crie uma view chamada film_with_categories utilizando as tabelas category ,
 film_category e film do banco de dados sakila . Essa view deve exibir o título do filme,
  o id da categoria e o nome da categoria, 
conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.*/

CREATE VIEW film_with_categories AS
SELECT F.title, FC.category_id, C.name 
FROM sakila.film AS F
INNER JOIN sakila.film_category AS FC 
ON F.film_id = FC.film_id
INNER JOIN sakila.category AS C 
ON FC.category_id= C.category_id
ORDER BY F.title;

/* 2 Crie uma view chamada film_info utilizando as tabelas actor , 
film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id ,
 o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados
 devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.*/

CREATE VIEW film_info AS
SELECT FA.actor_id,CONCAT(A.first_name,' ', A.last_name) AS actor, F.title
FROM sakila.film_actor AS FA
INNER JOIN sakila.film AS F
ON F.film_id= FA.film_id
INNER JOIN sakila.actor AS A
ON A.actor_id = FA.actor_id
ORDER BY actor;

/* 3 Exercício 3: Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . 
Sua view deve exibir o address_id , o address , o district , o city_id e a city . 
Os resultados devem ser ordenados pelo nomes das cidades. Use a imagem abaixo como referência.*/

CREATE VIEW addres_info AS 
SELECT A.address_id, A.address, A.district, A.city_id, C.city
 FROM sakila.address AS A
 INNER JOIN sakila.city AS C
 ON A.city_id= C.city_id
 ORDER BY C.city;

/* 4 Exercício 4: Crie uma view chamada movies_languages , 
usando as tabelas film e language do banco de dados sakila . Sua view 
deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.*/
 CREATE VIEW movies_languages AS
SELECT F.title, F.language_id, L.name 
FROM sakila.film AS F 
INNER JOIN sakila.language AS L
ON F.language_id = L.language_id;

-- DESAFIOS DE INDEX 

/*Exercício 1: Verifique o impacto de um FULLTEXT INDEX na tabela category
 (banco de dados sakila ) adicionando-o na coluna name . Após ter adicionado o índice,
  mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores. 
Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.*/

CREATE FULLTEXT INDEX category_name_index ON category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX category_name_index ON category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';


/*Exercício 2: Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) 
adicionando-o na coluna postal_code . Após ter adicionado o índice, mensure o custo da query
 utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado
  o custo da query, exclua o índice e mensure novamente esse custo.*/

CREATE INDEX postal_code_index ON address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';

DROP INDEX postal_code_index ON address;

SELECT *
FROM sakila.address
WHERE postal_code = '36693';

