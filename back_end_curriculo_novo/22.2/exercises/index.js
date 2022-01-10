function DoMath(a,b,c){
  return new Promise((resolve,reject)=>{
    if(typeof a!== 'number' || typeof b!=='number' || typeof c!=='number'){
      reject('Informe apenas números')
    }
    const result = (a +b)* c;
    if(result < 50){
      return reject('Valor muito baixo');
    }
    resolve(result)
  })
}

// Math(1,2,3)
// .then(resolve=>console.log(resolve))
// .catch(error=>console.log(error))

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

  // function callDoMath() {
  /* Criamos um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
//   const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
//   DoMath(...randomNumbers)
// .then(result => console.log(result))
// .catch(err => console.error(err.message))
// }
// aqui usando then e catch 

 async function callDoMath(){
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  try{
    const result = await DoMath(...randomNumbers)
    console.log(result)
  }
  catch(err){
    console.log(err)
  }
 }

 callDoMath()