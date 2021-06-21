const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);
for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

/* Gera os dois itens, mas na forma de array, ficando frança como indice 0 e Paris indice 1, e para cada 
linha do objeto é criado um novo array. Ficando com 4 arrays.*/

