// Some retorna verdadeiro ou falso é como se ele perguntasse algum nome aí é Ana? Sim- logo, True.

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((TodosOsNomes => TodosOsNomes === name)); // compara nome por nome qual é igual ao Ana que foi colocado no console.log

console.log(hasName(names, 'Ana'))

// ex com every retorna verdadeiro e falso. É como se ele perguntasse todos tem idade minima?
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((pessoa => pessoa.age >= minimumAge));//pegando idade por idade da pessoa e vendo se tem a idade mínima

console.log(verifyAges(people, 18));