const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => {
  console.log(`acumulator/bigger:${bigger}, current/number:${number}`)
  return (bigger > number) ? bigger : number};// ternário

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); 
//A maioria dos exercícios tem console.log para olhar o acc e o current

/*O bigger representa o acumulator e o number o current-valor atual 
Acumulator/Bigger começa valendo 0 , porque recebeu o parametro 0 na linha 6.E o current/number começa no 50.
Na linha 4 começa assim: 0 > 50 ? Não, resposta será number , e quem é number? 50. Logo o acumulador vai ganhar o resultado 50.
Depois 50>85 ?Não, resposta number, quem é number?85.Acumulador cai ganhar 85.
Depois 85 >-30? Sim, resposta bigger. Quem é biiger ? 85 .Acumulador continua com 85.
Assim vai até chegar no 15, 85>15 Sim, resposta final 85  
acumulator/bigger:0, current/number:50
acumulator/bigger:50, current/number:85
acumulator/bigger:85, current/number:-30
acumulator/bigger:85, current/number:3
acumulator/bigger:85, current/number:15 */
