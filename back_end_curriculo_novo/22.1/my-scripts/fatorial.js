const readline= require('readline-sync')

function fatorial(){
  const number= readline.questionInt('Escolha um numero de 1 a 10')
  let fatorial = 1;
  for(let i =1; i <=number; i++){
    fatorial*=i
  }
  console.log(fatorial)
}

fatorial()