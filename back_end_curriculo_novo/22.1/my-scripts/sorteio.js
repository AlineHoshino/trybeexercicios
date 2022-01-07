const readline = require('readline-sync')

  function result(numberChoose, numberRandom){
  if(numberChoose === numberRandom){
    return console.log('Parabéns, número correto!')
  }
   return  console.log(`Opa,não foi dessa vez. O número era ${numberRandom}`)
}

function sortear(){
  let numberChoose = readline.questionInt('Escolha um número de 0 a 10 ')
  let numberRandom = Math.floor(Math.random()*11)
  result(numberChoose,numberRandom)
  let again= readline.question('Deseja jogar novamente ? Aperte s para sim e qualquer outra coisa para não')
  if(again !== 's'){
  return console.log('Ok, até a próxima')
  }
  sortear()
}
 
sortear()