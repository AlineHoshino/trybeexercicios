let readlineSync=require('readline-sync')
const peso= readlineSync.questionFloat('Qual seu peso?(em Kg)')
const altura= readlineSync.questionInt('Qual sua altura?(em cm)')

function calculaImc(){
  console.log(`Peso:${peso}, altura:${altura}`)
  const imc = (peso/Math.pow(altura/100,2)).toFixed(2)
  console.log(`${imc}`)
  if(imc <18.5){
    console.log('Abaixo do peso (magreza)')
  }else if(imc>=18.5 && imc<25){
    console.log('Peso Normal')
  }else if(imc>=25 && imc <30){
    console.log(Sobrepeso)
  }else if(imc >= 30 && imc < 35){
     console.log('Obesidade grau 1')
  }else if(imc>=35 && imc<=40){
    console.log('obesidade grau 2')
  }else{
    console.log('obesidade grau 3 e 4')
  }
}

calculaImc()
