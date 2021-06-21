// const assert = require('assert');
// const factorial = number=>{
//   result=1;
//   for( let i=1; i<=number; i+=1){
//     result *=i;
//   }
//   return result;
// }

// const in1 = 5;
// const exp1 = 120;

// const in2 = 9;
// const exp2 = 362880;

// const in3 = 1;
// const exp3 = 1;

// const in4 = 0;
// const exp4 = 1;

// const in5 = 3;
// const exp5 = 6;

// const out1 = factorial(in1);
// const out2 = factorial(in2);
// const out3 = factorial(in3);
// const out4 = factorial(in4);
// const out5 = factorial(in5);

// assert.strictEqual(out1, exp1);
// assert.strictEqual(out2, exp2);
// assert.strictEqual(out3, exp3);
// assert.strictEqual(out4, exp4);
// assert.strictEqual(out5, exp5);

const assert = require('assert');
const getLargestNumber = (array) => {
  let largestNumber=array[0]
  for (let index = 0; index < array.length; index += 1) {
      if (array[index] > largestNumber) {
          largestNumber = array[index];
      }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

assert.strictEqual(getLargestNumber(parameter), result);

// exercícios foram comentados para um teste não afetar o outro 