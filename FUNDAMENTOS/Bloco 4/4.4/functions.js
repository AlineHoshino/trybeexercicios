//ex 1
function verificaPalindrome(palavra) {
  let arrayLetras = palavra.split('');//fica assim[a,r,a,r,a] criou um array que separa as letras
  let isPalindrome = true;
  for (let index in arrayLetras) {
    if (arrayLetras[index] != arrayLetras[(arrayLetras.length - 1) - index]) {//começa no indice 0=a for diferente de indice[4] que tb é a , segue indice 1=r é diferente de indice 3 que é r?não, logo é palindromo.
      isPalindrome = false;
    }
  }
  return isPalindrome;
}console.log(verificaPalindrome("arara"));
//nesse exemplo subtrai o index porque eu estou voltando os indices antes do diferente o indice sobe, e depois do difernte ele desce
//por isso, 0 compara com 4 depois 1 com 3

//ex2

function indiceMaior(numeros){//aqui são os parametros
  let indiceMaior=0;//começa com 0 
  for (let key in numeros){//vai percorrer indice por indice
    if(numeros[key]>numeros[indiceMaior]){// se algum numero aqui for maior que o numero do inicio entra no if
      indiceMaior=[key] // aqui indice maior viraria o numero com o indice numeros[key], no caso 10 , mas como ele só quer o indice, coloca so [key]
    }
  }return indiceMaior;
}
console.log(indiceMaior([2,3,6,7,10,1]));
//ex3
function indiceMenor(numeros){
  let indiceMenor= 0;
  for (let key in numeros){
    if(numeros[key]< numeros[indiceMenor]){
      indiceMenor=[key]
    }
  }return indiceMenor;
}
console.log(indiceMenor([2,4,6,7,10,0,-3]));
//ex4
function maiorNome(palavra){
  let maiorNome=palavra[0];
  for(let key in palavra){
    if(palavra[key].length>maiorNome.length){//comprimento da palavra jose> jose não, lucas >jose sim, troca para o lucas, maior nome passa a ser o lucas, depois vai indo ate fernanda é maior que lucas sim, passa a ser fernanda     
      maiorNome=palavra[key]
    }
  }return maiorNome;
}
console.log(maiorNome(["José", "Lucas","Nádia", "Fernanda", "Cairo", "Joana" ]));

//não faça o que eu fiz de colocar palavra[key].length>palavra[0].length,
//porque daí o for vai rodar ate o fim e sempre comparar com o jose, e como a ultima palavra é a joana, 
//vai comparar com a joana e é maior que jose e retornar a joana, precisa ser a variavel maiorNome que começa no jose, mas assim
//que achar uma palavra maior, irá trocar por essa, e começará a comparar com essa.

//ex 5



//ex6
// function somaTodosNumeros(numeros) {
//   let total = 0;
//   for (let index = 1; index <= numeros; index += 1) {
//     total = total + index;
//   }
//   return total;
// }
// console.log(somaTodosNumeros(5)); //15

//ex 7 

// function verificaFimPalavra(palavra, fimPalavra) {
//   palavra = palavra.split('');//separou para virar array 
//   fimPalavra = fimPalavra.split('');
//   controle = true;
//   for (let index = 0; index < fimPalavra.length; index += 1) {
//     if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
//       controle = false;
//     }
//   }
//   return controle;
}
//ex trampolim e a palavra lim , pega a palavra tira a palvra fim vai começar no indice 6
// l daí precisa comar o index poque depois preciso ver o i e depois o m.
// compara com a palavra fim ficando assim: tarmpolim -index 6 i index 7 m index 8 
// lim index 0, 1 e 2.
