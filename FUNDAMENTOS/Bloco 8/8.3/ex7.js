const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:


const expectedResult = 'O Senhor dos Anéis';
//ex 7 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
//Dica: cada inicial termina com um ponto.
function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
  )).name;
}
console.log(authorWith3DotsOnName())
assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);

/* Usou o find para encontrar o livro que quer. daí dentro dessa proriedade separamos o nome do escritor com split através do espaço
Ficando assim [J., R., R., Tolkien],[H.,P., Lovecraft], etc, cada parte do nome vira um indice do array, depois usa um filter em cada palavra,
e procura todas que terminam com . e usa o .length porque procuramos  um nome que tenha 3 pontos no nome, o único objeto que satisfaz essa condição é o que tem o escritor J.R.R. Tolkien
Ele tem J.- primeiro ponto no nome R.- segundo ponto no nome, R.- terceiro ponto no nome.
Com isso descobrimos que J.R.R. Tolkien tem o nome com 3 inicias.
Por ultimo virá o objeto todo do J.R.R Tolkien , assim:
{
  id: 2,
  name: 'O Senhor dos Anéis',
  genre: 'Fantasia',
  author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
  releaseYear: 1954
}
Como queremos o nome do livro, temos de escrever .name ao final de tudo :
Ficando assim : O Senhor dos Anéis
*/
