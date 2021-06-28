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


const expectedResult = false;
// Ex 7  - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.Criação da solução pela Julia:
function authorUnique() {
  let result = true;// aqui começa como verdadeiro o resultado

  books.forEach((book1)=>{
    const firstDate = book1.author.birthYear;// criou uma constante que pega o ano de nascimento
    const firstName = book1.author.name;// uma que pega o nome
  books.forEach((book2)=>{
    const secondDate = book2.author.birthYear;
    const secondName = book2.author.name;
    if (firstDate === secondDate && secondName !==firstName){// se ambos autores nasceram no mesmo dia, mas tem nomes diferentes retornará falso. Se o nome for igual você estará comparando o mesmo autor, por isso nome deve ser diferente.
      result = false;
    }
  })
  })
  return result;
}
console.log(authorUnique());
assert.strictEqual(authorUnique(), expectedResult);
