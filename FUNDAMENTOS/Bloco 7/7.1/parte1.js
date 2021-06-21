const testingScope= escopo=> {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

//ex 2 Refatorei o código analisando o gabarito da Trybe, explicação do sort e a-b no comentário

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = oddsAndEvens => {
const NumbersinOrder = oddsAndEvens.sort((a,b) => a - b);
return NumbersinOrder
}

const ArrayInOrder = sortArray(oddsAndEvens);
console.log(`Os números ${ArrayInOrder} se encontram ordenados de forma crescente !`);

/* Englobou em uma constante toda a função, passou o parametro oddsAndEvens que como é só um parametro fica sem parenteses,
em seguida faz a arrow function abre { criou uma constante que organiza os numeros em ordem crescente
Como o sort funciona: o sort usa uma tabela unicode então para ele se tem 1, 2 ,10, 5
e você dá o sort ele fica assim:1, 10, 2, 5, porque ao ver o 10, ele exerga o 1 primeiro, e 1 vem antes de 2.
Daí para resolver isso faz essa função a-b 
ele vai comparando um numero com o ṕroximo e fazendo a subtração:
a=1 b=2
entao 1-2 =-1 se o numero for menor que 0 deixa a antes do b
a=10 e b =5
10-5=5 5 é maior que zero, então a fica depois do b-
a=5 e b=5 
5-5=0,  0=0  permancem em sua posições
Daí entao chama o array dá um .sort() e joga a funcao dentro
arr.sort(function(a, b) {
   return a - b;
 });
 Daí organizamos essa função para ela ficar menor- tira a function deixa o parametro, poe a arrow tira o {
   deixa na mesma linha , tira o return coloca a-b fecha parenteses, porque a funcao ta sendo chamada dentro do sort.
   Depois crie uma const que chame a funcao
   Da um console log usa template literals chama a constante que tem todos os numeros ordenados, e coloca a frase
Fonte sobre o sort mais a funcao a-b : http://blog.dunderlabs.com/entendendo-ordenacao-de-arrays-em-javascript-sort-of.html */
//Exemplo usando o sort sem colocar a funçao dentro
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortArray = oddsAndEvens => {
// const NumbersinOrder = oddsAndEvens.sort();
// return NumbersinOrder
// }

// const ArrayInOrder = sortArray(oddsAndEvens);
// console.log(`${ArrayInOrder}`);
// fica 10,13,2,3,4,7 
