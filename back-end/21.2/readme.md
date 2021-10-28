# Normalização 

## 1  Forma normal

 * Cada coluna possui um nome único
 * Cada coluna usa o mesmo tipo de dado
 * Ordem dos dados não afeta a integridade
 * Colunas devem possuir apenas um valor

## 2 Forma normal

* 1 forma normal
*  Não possuir dependências parciais

estudante_id|nota_id | materia_id| nota | professor|
:---------: | :-------:| :--------:  |:------:|------    |
1           |     1    | quimica    | 10    | Snape   |
2           | 2        |  física    | 9     | Lucas |
3           |3         | historia| 7 | Hermione|

Dependência materia e professor

## 3 Forma normal

* A tabela deve estar na 1ª e 2ª Formas Normais;
*    A tabela não deve conter atributos (colunas) que não sejam totalmente dependentes na  _PK_ (chave primária).
