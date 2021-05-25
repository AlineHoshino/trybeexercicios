// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// //ex 1
// for(let numero of numbers){
//   console.log(numero);
// };
// //ex2
// let soma = 0;
// for(let index=0; index<numbers.length;index+=1){
//    soma+=numbers[index];
//    console.log(soma);
// };
// //ex 3
// let media= soma / numbers.length;
// console.log(media);
// //ex4
// if (media>20){
//   console.log("valor maior que 20");
// }else{
//   console.log("valor menor que 20");
// }
// //ex5
// let maior = numbers[0];
// for(let index=1; index<numbers.length;index+=1){
//   if(numbers[index]>maior){
//   maior=numbers[index];
//   }
// }
// console.log(maior);Nesse exercício você coloca como se o primeiro numero já fosse o maior de todos,
// se tivesse um array só com ele a resposta ja seria ele, depois vai indo indice por indice, 
// comparando os numeros com o primeiro de todos ex:1 numero é 55, segundo é 44, como 55 é maior continua assim
// a hora que houver um numero maior exemplo 57 troca por esse numero 
// //ex6
// let result=0;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     result += 1;
//   }
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }

// //ex 7
// let menor = numbers[0];
// for(let index=1; index<numbers.length;index+=1){
//   if(numbers[index]<menor){
//   menor=numbers[index];
//   }
// }
// console.log(menor);

// //ex 8 
// let numeros = [];

// for (let index = 1; index <= 25; index += 1) {
//   numeros.push(index);
// }

// console.log(numeros);

// //ex9
// let resultado= 0;
// for (let index = 0; index <= 24; index += 1){
//   console.log(numeros[index]/2);
// }

// //ex bonus parte 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);
// Aqui voce ve se 9 é menor que 5 resposta não . Daí nem entra no if, 3 é menor que 9 resposta é sim, entra no if criaram a variavel posicao que possui indice 2 agora, 
// daí o o 3 passa para o lugar do  9, e o 9 passa a ocupa o lugar do 3, esse é um jeito de deixar todos os numeros em ordem crescente.


//ex bonus parte 2 

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);
 //ex bonues parte 3 

 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);