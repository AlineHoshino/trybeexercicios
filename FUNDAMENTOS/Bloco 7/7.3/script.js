// //ex1
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4,5),9);
assert.strictEqual(sum(0,0),0);
assert.throws(()=>sum(4,"5"));
assert.throws(()=>{
  sum(4,"5"), 'parameters must be numbers'
})

// //ex 2

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// assert.strictEqual(typeof myRemove, 'function');
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3),[1,2,3,4]);// pedindo para nao retornar igual e de fato nao vai retornar 
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1,2,3,4])

// // ex4

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// assert.strictEqual(myFizzBuzz(15),'fizzbuzz');
// assert.strictEqual(myFizzBuzz(9),'fizz');
// assert.strictEqual(myFizzBuzz(10),'buzz');
// assert.strictEqual(myFizzBuzz(11),11);
// assert.strictEqual(myFizzBuzz('xablau'), false);

// // ex 5

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// assert.deepStrictEqual(obj1, obj2);
// assert.notDeepStrictEqual(obj1,obj3);
// assert.notDeepStrictEqual(obj2,obj3);

// // TDD parte 2
// //ex 1

// const addOne = myArray =>{
//   let newArray=[];
//   for( let i=0; i< myArray.length;i+=1){
//     newArray.push(myArray[i]+1);
//   }
//   return newArray;
// }

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);

// // ex 2 
// const wordLengths = words =>{
//   new output=[];
//   for( let i=0; i<words.length;i+=1){
//     output.push(words[i].length)
//   }
//   return output
// }

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

// //ex 3 
// const sumAllNumbers= numbers=>{
//   let output=0;
//   for( let i=0; i<numbers.length; i+=1){
//     output+=numbers[i];
//   }
//   return output;
// }

// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = sumAllNumbers(numbers);

// assert.strictEqual(typeof sumAllNumbers, 'function');
// assert.strictEqual(output, expected);


// /* Ex 4: Gabarito da trybe, o output começa em -1, porque se não achar a palavra , o resultado ja começa em -1, igual está nos testes */

// const findTheNeedle = (array, word) => {
//   let output = -1;
//   for (const index in array) {
//     if (word === array[index]) {
//       output = Number(index);
//     }
//   }
//   return output;
// };

// let words = ['house', 'train', 'slide', 'needle', 'book'];
// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected); 

// TDD parte 3 
//ex 1 

// const greetPeople = (parameter) => {
//   let result=[];
//   for (let i=0; i<parameter.length; i+=1) {
//     result.push(`Hello ${parameter[i]}`)
//   }
//   return result;
// };

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// console.log(greetPeople(parameter))

// assert.strictEqual(typeof greetPeople, 'function');
// assert.deepStrictEqual(greetPeople(parameter), result);

//ex 2 - gabarito da trybe e eu comentei sobre ele 

// const assert = require('assert');

// const removeVowelsNew = (word) => {
//   const characters = word.split(''); precisa dar split para separar letra por letra 
//   const results = [];
//   let counter = 0;

//   for (let index = 0; index < characters.length; index += 1) { aqui esta comparando para ver quando aparece a vogal
//     if (
//       characters[index] === 'a' ||
//       characters[index] === 'o' ||
//       characters[index] === 'i' ||
//       characters[index] === 'e' ||
//       characters[index] === 'u'
//     ) {
//       counter += 1;
//       results.push(counter); // toda vez que tem vogal aumenta de um em um 
//     } else {
//       results.push(characters[index]);
//     }
//   }
//   return results.join('');// não esquecer de dar o join para juntar as letras e tornar uma palavra de novo 
// };

// const parameter = 'Dayane';
// const result = 'D1y2n3';

// assert.strictEqual(typeof removeVowelsNew, 'function');
// const output = removeVowelsNew(parameter);
// assert.strictEqual(output, result);


// ex 3
// const assert= require ('assert');
// const greaterThanTen = (parameter) => {
//   let results = [];
//   for (let index = 0; index <parameter.length; index += 1) {
//     if (parameter[index] > 10) {
//       results.push(parameter[index])
//     }
//   }
//   return results;
// };

// const parameter = [4, 10, 32, 9, 21];
// const result = [32, 21];

// assert.strictEqual(typeof greaterThanTen, 'function');
// assert.deepStrictEqual(greaterThanTen(parameter), result);

// const assert = require ('assert');
// function secondThirdSmallest(array) {
//   let results = []
//   array.sort((a, b) => a - b
// );
//   results.push(array[1], array[2]);
//   return results;
// };

// const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
// const result = [5, 6];
// assert.strictEqual(typeof secondThirdSmallest, 'function');
// assert.deepStrictEqual(secondThirdSmallest(parameter), result);

//exercícios foram comentados para um teste não afetar o outro 
