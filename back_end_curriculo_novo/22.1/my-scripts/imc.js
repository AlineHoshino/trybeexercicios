
const fs=require('fs')
let readlineSync=require('readline-sync')
const peso= readlineSync.questionFloat('Qual seu peso?(em Kg)')
const altura= readlineSync.questionInt('Qual sua altura?(em cm)')

function calculaImc(){
  console.log(`Peso:${peso}, altura:${altura}`)
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  const message=(`seu imc é:${imc}`)
  fs.appendFileSync('imc.txt',`${message}`)
  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
}

calculaImc()
