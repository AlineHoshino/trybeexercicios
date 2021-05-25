//ex 1 no primeiro for vai ficar assim 
// *
// **
// ***
// ****
// *****
//daí como o inputline já está com 5 asteriscos, só precisamos que imprima o inputline 5 vezes. 
// então usamos o segundo for para isso
// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
// inputLine+= symbol;
// }
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1){
//   console.log(inputLine);
// }

//ex2

// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
// inputLine+= symbol;
// console.log(inputLine);
// }

//ex3
// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {//numero de linhas
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {// para fazer a linha e o asterisco
//     if (columnIndex < inputPosition) {//0<5 primeiro espaço, 1<5 2 espaço 2<5 3 espaço 3<5 4 espaço 4<5 - 5 espaço. daí 5<5 falso coloca o asterisco
//       inputLine = inputLine + ' ';
//     } else {
//       inputLine = inputLine + symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = ''; //esvazia para nao escrver o código em cima,
//   inputPosition -= 1;//input cai para 4
// };

// vai começar a segunda linha. daí no if 0<4 primeiro espaço, 1<4 segundo espaço, 2<4 3 espaço 3<4 4 espaço 4<4 falso vai para o else e imrpimi um asterisco, 5<4 falso imprimi 2 asterisco
//vai ser assim até termianr o triangulo.

//ex 4 

let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {// 4 voltas 4 linhas 0,1,2,3.
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};
// linhaa 1 linha de código so vai ter espaço em branco, porque nao vai conseguir satisfazer as duas condições dentro do if
// linha 2 lado a direita vale 4 e esquerda 2. 0>2 e 0<4 false-1espaço, 1>2 e 1<4 false-2espaço , 2>2 e 2<4 false-3espaço, 3>2 e 3<4 verdadeiro  -poe um asterisco, 4>2 e 4<4 false espaço, 5>2 e 5<4 false espaço
// linha 3 lado a direita vale 5 e esquerda 1 . 0>1 e 0<5 falso espaço, 1>1 e 1<5 false espaço 2>1 e 2<5 verdadeiro asterisco, 3>1 e 3<5 asterisco, 4>1 e 4<5 asterisco, 5>1 e 5 <5 falso espaço
//linha 4 lado a direita vale 6  e esquerda 0. 0>0 e 0<6 false espaço, 1>0 e 1<6 verdaeiro asterisco, 2>0 2 <6 asterisco, 3>0 e 3<6 astersico, 4>0 e 4<6 asterisco, 5>0 e 5<6 asterisco 

//ex 6 vi essa solução no slack apresentada pelo murilo rainho

/ Exercício 6
n = 11
primo = 0
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        primo += 1
    }
}
if (primo == 0) {
    console.log("Esse número é primo");
} else {
    console.log("Esse número NÃO é primo");
}
//vai pegar o 11 e dividir por 2, depois por 3, por 4, 5 até chegar no 10. 
//sempre sobrerá resto. entao primo continua igual a 0 e não entra no primeiro if, daí entra no segundo if e ele imprimi é primo.
// se fosse o numero 4 por exemplo:4 %2 da 2 e sobra 0 de resto, já entra no primeiro if e primo vale 1
// entao ja vimos que esse numero nao é primo.