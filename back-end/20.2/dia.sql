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