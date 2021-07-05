// const assert = require('assert');

// escreva sum abaixo
const sum = (...numbers) => numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum())

// assert.strictEqual(sum(), 0); // quando o sum está sem parametro é para retornar 0, então deixou o parametro 0 no final para acumulator começar em 0 
// assert.strictEqual(sum(1), 1);
// assert.strictEqual(sum(1, 2), 3);
// assert.strictEqual(sum(1, 2, 3), 6);
// assert.strictEqual(sum(1, 2, 3, 4), 10);