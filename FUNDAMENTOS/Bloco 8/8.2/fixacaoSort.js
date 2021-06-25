const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];


people.sort((personA, personB) => personA.age - personB.age);

console.log(people);

// Gabarito da trybe, peguei o array pessoas dei um sort - sort tem dois parametros- ao fazer a funcao personA.age estou puxando a idade da pessoa e organizando para as pessoas ficarem 
//da idade menor até a mais velha