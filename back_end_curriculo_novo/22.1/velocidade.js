const readline = require('readline-sync')

function velocidade(){
  const dist= readline.questionInt('Distancia percorrida em metros');
  const tempo= readline.questionInt('Tempo gasto em s');
  const velocidadeMedia = (dist/tempo).toFixed(2);
  console.log(`Velocidade média:${velocidadeMedia} m/s`) 
}

velocidade()