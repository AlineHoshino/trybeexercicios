// const fatorial = n =>{
//   let number = 1;
//   for (let i = 1; i <= n; i += 1) {
//     number *= i;
//   }
//   return number;
// }

// console.log(fatorial(3));

// como ternário colocou número a partir do 2, porque  1 *0 daria =0, daí a partir do 2, fica 2 *1 , depois 3 x2 X 1 , gabarito da trybe 

const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))

// ex 2 Gabarito da trybe deu split para dividir de acordo com cada vez que tem espaço, deu um for of para pegar o valor;
// Toda vez que tiver uma palavra que o comprimento é maior que maxlength é para ir trocando e substitui o maxlength pelo tamanho da palavra, pede para o resultado ser essa palavra 
const longestWord = text => {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length
          result = word
      }
  }

  return result
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))



// const longestWord = text => {
//   let wordArray = text.split(' ')
//   let maxLength = 0
//   let result = ''

//   for (let i =0; i< wordArray.length; i+=1) {
//       if (wordArray[i].length > maxLength) {
//           maxLength = wordArray[i].length
//           result = wordArray[i]
//       }
//   }
//   return result
// }
// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))



