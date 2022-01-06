function difference(x) {
  if(x < 10){
     return 10 -x;
  }else{
      return x-10;
  }
}


function count_down(x) {
  let contagem = x;
  for(let i=1; i<=x; i++){
      if(i<x){
      contagem+= '...' + (x-i);
      }else {
          contagem+='...' +(x-i) +'!!!'
      }
  }return contagem;
  }

  function multiples_of_3_or_5(roof) {
    let array =[];
    for(i=0; i<=roof;i+=1){
    array.push(roof-i);
    }
    let soma=0;
    for(i=1;i<array.length;i++){
      if(array[i]%3 ===0 || array[i]%5 ===0){
        soma+=array[i]
      }
    }return soma;
  }
console.log(multiples_of_3_or_5(12))


function multiples_of_3_or_5(roof) {
      let soma=0;
      for(i=1;i<roof;i++){
        if((roof-i)%3 ===0 || (roof-i)%5 ===0){
          soma+=(roof-i)
        }
      }return soma;
    }
  console.log(multiples_of_3_or_5(10))

  /*resolução da trybe

  function multiples_of_3_or5(roof){
    let total=0;
    (for let i = roof -1;i>0;i--){
      if(i %3 ===0 || i% 5 ===0){
        total+=i
      }
    }
    return total;
  } */


function even_fibonacci_numbers(roof) {
let fib = [1,2]; 
for (i = 2; i < roof; i++) {
  fib[i] = fib[i - 2] + fib[i - 1]
} return fib;
}

function even_fibonacci_numbers(roof) {
  let fib = [1,2]; 
  let soma=2;
  for (i = 2; i < roof;i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  if(fib[i]%2 === 0){
  soma+=fib[i];
  }
  }return soma;
}
console.log(even_fibonacci_numbers(10))


/*Já deixa o index 1, 2 preenchidos com o nuemro 1 e 2, daí para gerar os próximos numeros
é semmpre o indice -2 que é o termo anterior do anterior, e indice -1 que é o anterior.
entao fib[2]= fib[0] que representa o valor 1, + fib[1] que representa o valor 2 , com isso fib[2]=3
daí fib[3]= fib[1] representa o valor 2, fib[2] que representa 3 =5  
 tem de começar com 2 o resultado da soma, porque como eu mando somar o fib[i] ele já começa no index2, ou seja no númeor 3 
daí eu preciso pegar e somar com o 2 que começou lá no array de cima*/

function isPrime(num) {
  for ( let i = 2; i < num; i++ ) {
      if ( num % i === 0 ) {
          return false;
      }
  }
  return true;
}
/* um numero primo só consegue dividir por ele mesmo ou seja como nao vamos chegar ate ele , sempre terá resto*/
/*exemplo 7/2=1 7/3=1 7/4=3 7/5=2 7/6=1*/

function nth_prime(n) {
  let arr = [];
  for ( let i = 2; i < 10000; i+=1 ) {
      if ( isPrime(i) ) {// chama a funçao para ver se é primo se for vai add indice por indice no array, ou seja 2,3,4(não),5(não)...//
          arr.push(i);
      }
  }
  return arr[n-1];// como é o sexto elemento ele é o 5 no índice//
}

/* maior fator primo , o maior numero primo que consegue dividir um numero
vai ser no maximo ate a metade */

// function caixa(values) {

  caixa([1,3,5,4,0,0,7,0,0,6])

function caixa(values){
  while(values.includes(0)){
    const zeroindex=values.indexOf(0)// essa funcao pega o indice que esta o zero no array 
    values.splice(zeroIndex -1,2);//[1,6]
  }
  return values.reduce((acc,cur)=> acc +cur)
}

/*daí no splice faz 4(indice do primeiro zero -1 ), a partir do inice 3(incluso) quero tirar 2 numeros
daí tirará o 4 e o zero, como ainda tem zero vai continuar o while
vai ver onde está o indice desse zero e 
[1,3,5,0,7,0,0,6]
ve que esta no indice 3, daí 3 -1 , vai dar 2 a partir do indice 2 quero tirar dois numeros 5,0 
[1,3,7,0,0,6]
ve que o zero ta no indice 3 , 3 -1 vai dar 2 , vai tirar o 7 e o 0
[1,3,0,6]
vai ver que o zero ta no indice 2, 2-1 vai dar 1, vai tirar o 3 e o 0.
depois somará 1 e 6 que foi os que sobraram. */ 

function firstNaturalSumSquared(n){
  let sum=0;
  for(let i=1;i<=n; i++){
    sum+=i
  }
  return sum *sum 
}

/* aqui ele vai fazer 1+2+3+4 =10 , dái 10*10=100*/

function squaredSum(n){
  let sum=0;
  for(let i=1;i<=n;i++){
    sum+= i * i 
  }
  return sum;
}

/* aqui fica assim 1*1 + 2*2 +3*3 +4*4 =30*/

function sum_square_difference(n){
return firstNaturalSumSquared(n) -squaredSum(n)
}


let pi = Math.PI
console.log(pi)

let potencia = Math.pow(2,3)
console.log(potencia)

let n = Math.round(Math.random()*10)
console.log(n)

