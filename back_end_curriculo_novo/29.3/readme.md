Operadores de consulta iteram sobre arrays 

o O operador $all seleciona todos os documentos em que o valor do campo é um array que contenha todos os elementos especificados. Se compararmos aos operadores que já conhecemos, esse operador é equivalente ao operador $and , pois fará a comparação de todos os valores especificados, porém, para arrays .

O operador $elemMatch seleciona os documentos que contêm um campo do tipo array com pelo menos um elemento que satisfaça todos os critérios de seleção especificados. Ou seja, com esse operador você pode especificar várias queries para um mesmo array .


Veja um exemplo considerando a coleção scores com os seguintes documentos:
{ _id: 1, results: [82, 85, 88] },
{ _id: 2, results: [75, 88, 89] }
A query abaixo seleciona somente os documentos em que o array results contém ao menos um elemento que seja maior ou igual a 80 e menor que 85 :
db.scores.find(
  { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
);
Como resultado, apenas o documento com o _id igual a 1 será retornado, já que o 82 satisfaz as duas verificações.


O operador $size seleciona documentos em que um array contenha um número de elementos especificado.
Considere a coleção products a seguir, contendo documentos em que o campo tags pode ser um array :
Copiar
{ _id: 1, tags: ["red", "green"] },
{ _id: 2, tags: ["apple", "lime"] },
{ _id: 3, tags: "fruit" },
{ _id: 4, tags: ["orange", "lemon", "grapefruit"] }
Ao executar a query abaixo, apenas os documentos com o _id igual 1 e 2 serão retornados, pois seus campos tags são arrays e contêm exatamente 2 elementos :
db.products.find(
  { tags: { $size: 2 } }
);

O operador $expr permite que você utilize expressões de agregação e construa queries que comparem campos no mesmo documento.

db.monthlyBudget.find(
  {
expr: { $gt: [ "$spent", "$budget" ] }
  }
);

Note que, na query , nenhum valor foi especificado explicitamente. O que acontece é que o operador $expr entende que deve comparar os valores dos dois campos. Por isso o $ é utilizado, indicando que a string entre aspas referencia um campo.
