/*Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais 
( domestic_sales ) e internacionais ( international_sales ) de cada filme.*/

USE Pixar;

SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id;
/*Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme 
que possui um número maior de vendas internacionais
 ( international_sales ) do que vendas nacionais ( domestic_sales ).*/
 SELECT M.title FROM Pixar.Movies as M
INNER JOIN Pixar.BoxOffice AS B
ON B.movie_id = M.id
WHERE B.international_sales > B.domestic_sales;

/*ex 3 Exercício 3: Utilizando o INNER JOIN , 
faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.*/
SELECT m.title, B.rating FROM Pixar.Movies As m
INNER JOIN Pixar.BoxOffice AS B
ON B.movie_id = m.id
ORDER BY B.rating DESC;

USE Pixar;

SELECT 
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Theater t
        LEFT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.name;

/* Como o cinema é o mais importante ele vem antes do left 


Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes,
 mesmo os que não estão em cartaz e, adicionalmente, os dados dos 
cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética*/

USE Pixar;

SELECT 
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    t.name,
    t.location
FROM
    Theater t
        RIGHT JOIN
    Movies AS m ON t.id = m.theater_id
ORDER BY t.name;

/* na rigth join vc valoriza a tabela que vem a direita no caso a Movies, que vem depois do right*/

/*Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , 
que retornem os títulos dos filmes que possuem avaliação maior que 7.5.*/
com subquery :

USE Pixar;

SELECT 
    title
FROM
    Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            BoxOffice
        WHERE
            rating > 7.5);

-- inner join 

SELECT m.title FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON b.movie_id = m.id
WHERE b.rating > 7.5;

/* Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , 
que retornem as avaliações dos filmes lançados depois de 2009.
Usando SUBQUERY*/

USE Pixar;

SELECT 
    rating
FROM
    BoxOffice
WHERE
    movie_id IN (SELECT 
            id
        FROM
            Movies
        WHERE
            year > 2009);

-- inner join 

USE Pixar;

SELECT 
    b.rating
FROM
    BoxOffice b
        INNER JOIN
    Movies m ON b.movie_id = m.id
WHERE
    m.year > 2009;

-- exists 

/* Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem 
filmes em cartaz.*/

USE Pixar;

SELECT 
    t.name, t.location
FROM
    Theater AS t
WHERE
    EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            Movies.theater_id = t.id);

/*Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas 
que não possuem filmes em cartaz.*/

USE Pixar;

SELECT 
    t.name, t.location
FROM
    Theater AS t
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            Movies.theater_id = t.id);
