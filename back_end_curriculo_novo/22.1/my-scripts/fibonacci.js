const readline = require('readline-sync');

function fibonacci_numbers(){
  let number=readline.questionInt('Escolha um numero de 1 a 10')
  let fib = [1,1]; 
  for (i = 2; i < number; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  } return console.log(fib);
  }

fibonacci_numbers();