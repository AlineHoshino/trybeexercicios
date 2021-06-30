// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
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
const expectedResult = 43;

function averageAge() {
  const TotalLivros = books.length;
  const sumOfAges = books.reduce((sum, book) => (//sum representa o acumulador e book o valor atual
    sum + (book.releaseYear - book.author.birthYear)
  ), 0);
  return sumOfAges / TotalLivros;
}
// vai pegar o ano de publicação de cada livro e subtrair do ano de nascimento do autor. 
//Exemplo gorge martin release year 1991 - bitrhyear:1948. Total 39, vai fazer isso com todos os livros 
//e isso vai totalizar 258 anos. 
//Como ele quer a média e são 6 livros, fica 258anos/6= 43 
assert.strictEqual(averageAge(), expectedResult);
