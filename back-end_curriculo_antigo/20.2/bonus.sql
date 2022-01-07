/* Exercício 10: Utilizando o INNER JOIN, selecione todas as informações dos
 filmes com avaliação maior que 8 e que estejam em cartaz.*/

SELECT M.id, M.title, M.director, M.year , M.length_minutes, M.theater_id , B.rating
FROM Pixar.Movies as M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
WHERE B.rating > 8 AND M.theater_id IS NOT NULL;

/* Exercício 11: Utilizando o SELF JOIN , 
selecione os títulos e duração dos filmes que possuem o mesmo diretor.*/

USE Pixar;

SELECT 
    t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM
    Movies t1,
    Movies t2
WHERE
    t1.director = t2.director
        AND t1.title <> t2.title;

/* Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , 
que retornem o título dos filmes que arrecadaram 500 milhões ou mais,
 e que possuem duração maior que 110 minutos.
Usando SUBQUERY*/
USE Pixar;

SELECT 
    m.title
FROM
    Movies m
WHERE
    m.id IN (SELECT 
            b.movie_id
        FROM
            BoxOffice b
        WHERE
            b.international_sales >= 500000000)
        AND m.length_minutes > 110;

-- inner join 

USE Pixar;

SELECT 
    m.title
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.international_sales >= 500000000
        AND m.length_minutes > 110;