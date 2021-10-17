/*ex 1 Escreva uma query para exibir todas as peças que começam com GR .*/
USE PecasFornecedores;
SELECT * FROM Pecas
WHERE name LIKE 'GR%';

/*2 Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2 . 
Organize o resultado por ordem alfabética de fornecedor.*/

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca =2 ORDER BY Fornecedor ASC;
/*Escreva uma query para exibir as peças, preço e fornecedor 
de todos os fornecimentos em que o código do fornecedor tenha a letra N .*/
SELECT peca, preco, fornecedor FROM PecasFornecedores.Fornecimentos
WHERE fornecedor LIKE '%N%';

/*Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). 
Ordene os resultados em ordem alfabética decrescente.*/
