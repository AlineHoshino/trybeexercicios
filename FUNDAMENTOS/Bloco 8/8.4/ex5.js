const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => { //split vai separar letra por letra ficando assim : ["A", "a", "n", "e", "m", "a", "r", "i", "e"]
        if (current === 'a' || current === 'A') return acumulator + 1;    // cada vez que achar um a o acumulator que começa em 0 vai somar +1
        return acumulator;
     }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);

