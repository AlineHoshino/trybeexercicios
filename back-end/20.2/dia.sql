SELECT s.first_name, s.last_name, a.address
FROM sakila.staff as s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id; 

/*Exercício 4: Exiba o nome , email , id do endereço , endereço e distrito dos clientes 
que moram no distrito da California e que contêm "rene" em seus nomes.
 As informações podem ser encontradas nas tabelas address e customer . */
SELECT C.first_name,C.email, A.address_id, A.address,district  
 FROM sakila.customer as C
 INNER JOIN sakila.address as A
 ON C.address_id = A.address_id
 WHERE
    A.district = 'California'
        AND C.first_name LIKE '%rene%';

/* Exiba o nome e a quantidade de endereços dos clientes cadastrados.
 Ordene seus resultados por nomes de forma decrescente. 
Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .*/
SELECT C.first_name, COUNT(*) as qtdadeAdress 
FROM sakila.customer  as C
INNER JOIN sakila.address as A
ON C.address_id = A.address_id
WHERE C.active = 1
GROUP BY C.first_name
ORDER BY C.first_name DESC;

/* ex 6 Exercício 6: Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) 
paga aos funcionários no ano de 2006. Use as tabelas payment e staff . 
Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.*/

SELECT 
    stf.first_name,
    stf.last_name,
    AVG(pay.amount) AS `Média de pagamento`
FROM
    sakila.staff AS stf
        INNER JOIN
    sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE
    YEAR(pay.payment_date) = 2006
GROUP BY stf.first_name , stf.last_name;
/*Exercício 7: Monte uma query que exiba o id do ator , nome , id do filme e titulo do filme ,
 usando as tabelas actor
 , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .*/
SELECT 
    A.actor_id, A.first_name, F.film_id, F.title
FROM
    sakila.actor AS A
        INNER JOIN
    sakila.film_actor AS FA ON A.actor_id = FA.actor_id
        INNER JOIN
    sakila.film AS F ON F.film_id = FA.film_id;


--SELF JOIN

SELECT 
    A.title, A.rental_duration, B.title, B.rental_duration
FROM
    sakila.film AS A,
    sakila.film AS B
WHERE
    A.rental_duration = B.rental_duration
HAVING A.rental_duration BETWEEN 2 AND 4;

-- DESAFIO union

/*ex 1 Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor , exibindo apenas o nome e o sobrenome . 
Seu resultado não deve excluir nenhum funcionário ao unir as tabelas. */

SELECT first_name, last_name FROM sakila.staff
UNION ALL 
SELECT first_name, last_name FROM sakila.actor;

/* ex 2 Exercício 2: Monte uma query que una os resultados das tabelas customer e actor , 
exibindo os nomes que contém a palavra "tracy" na tabela customer 
e os que contém "je" na tabela actor . Exiba apenas os resultados únicos.*/

SELECT first_name FROM sakila.customer 
WHERE first_name LIKE '%TRACY%'
UNION 
SELECT first_name 	from 	sakila.actor
WHERE 	first_name LIKE '%JE%';

/* ex 3 Exercício 3: Monte uma query que exiba a união dos 5 últimos nomes da tabela actor 
, o primeiro nome da tabela staff e 5 nomes a partir da 15ª posição da tabela customer . 
Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.*/
(SELECT first_name FROM sakila.actor 
ORDER BY first_name DESC
LIMIT 5)
UNION 
(SELECT first_name FROM sakila.staff
LIMIT 1)
UNION 
(SELECT first_name FROM sakila.customer
LIMIT 5 OFFSET 15) ORDER BY first_name;
/* ex 4 Você quer exibir uma lista paginada com os nomes e sobrenomes de
 todos os clientes e atores do banco de dados, em ordem alfabética.
  Considere que a paginação está sendo feita de 15 em 15 resultados 
e que você está na 4ª página. Monte uma query que simule esse cenário.*/
(SELECT 
    first_name, last_name
FROM
    sakila.customer
ORDER BY first_name , last_name
LIMIT 60) UNION (SELECT 
    first_name, last_name
FROM
    sakila.actor
ORDER BY first_name , last_name
LIMIT 60) ORDER BY first_name , last_name LIMIT 15 OFFSET 45;

-- exists Usando o EXISTS na tabela books_lent e books , 
--exiba o id e título dos livros que ainda não foram emprestados.

SELECT id, title FROM hotel.Books AS b
WHERE NOT EXISTS(
SELECT * FROM hotel.Books_Lent AS bl
WHERE b.id = bl.book_id);

/*Usando o EXISTS na tabela books_lent e books , exiba o id e
 título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.*/
SELECT 
    id, title
FROM
    hotel.Books b
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent
        WHERE
            b.Id = book_id AND b.title LIKE '%lost%');
/*Exercício 3: Usando a tabela carsales e customer ,
 exiba apenas o nome dos clientes que ainda não compraram um carro.
 SELECT Name FROM hotel.Customers AS c
WHERE NOT EXISTS(
SELECT * FROM hotel.CarSales AS CS
WHERE c.CustomerID = CS.CustomerID);*/

SELECT 
    cus.name, car.name
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cus
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cus.CustomerId
                AND carID = car.ID);
