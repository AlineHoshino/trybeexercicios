


const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// const Juntar = (acc,curr)=>{
//   console.log(acc,curr);
//   return acc.concat(curr)};

// const flatten =()=> arrays.reduce(Juntar, []);
// console.log(flatten())
// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// como está vindo o acc e o curr :
// acc:[]--curr: [ '1', '2', '3' ]
// acc:[ '1', '2', '3' ]--curr: [ true ]
// acc:[ '1', '2', '3', true ]--curr: [ 4, 5, 6 ]

//gabarito da trybe
function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);// coloque no acumulador todos os valores atuais,usou concat para ficar no mesmo array.Começa com colchete vazio, para começar desde o primeiro valor
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

