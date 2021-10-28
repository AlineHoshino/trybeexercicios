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
 devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.