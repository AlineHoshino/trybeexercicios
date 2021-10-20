--1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(SALARY)
FROM hr.employees;
 --2 Escreva uma query que exiba a diferença entre o maior e o menor salário.
 SELECT  MAX(SALARY) - MIN(SALARY)
FROM hr.employees;
 --3 Escreva uma query que exiba a média salarial de cada JOB_ID ,
  --ordenando pela média salarial em ordem decrescente.
SELECT  JOB_ID, AVG(SALARY) AS 'average_salary'
FROM hr.employees
GROUP BY JOB_ID
ORDER BY `average_salary` DESC;
--4 Escreva uma query que exiba a quantidade de dinheiro necessária para realizar
-- o pagamento de todas as pessoas funcionárias.
SELECT SUM(SALARY) AS 'qtidade dinheiro' FROM hr.employees;
--5  Escreva uma query que exiba quatro informações: o maior salário, o menor salário,
-- a soma de todos os salários e a média dos salários.
-- Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT MAX(SALARY), MIN(SALARY), SUM(SALARY), ROUND(AVG(SALARY),2) FROM hr.employees;
--6 6. Escreva uma query que exiba a quantidade 
--de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT JOB_ID , COUNT(*) AS 'total'
FROM hr.employees
WHERE JOB_ID = "IT_PROG";
--7. Escreva uma query que exiba a quantidade de dinheiro 
--necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID;
--8 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária 
--para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, SUM(SALARY) 
FROM hr.employees 
GROUP BY JOB_ID
HAVING JOB_ID='IT_PROG';
 --9Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos,
 -- exceto das pessoas programadoras ( IT_PROG ).
SELECT job_id, AVG(salary) AS 'average_salary'
FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY `average_salary` DESC;
