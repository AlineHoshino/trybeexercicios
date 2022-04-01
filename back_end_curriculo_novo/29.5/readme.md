Adicionando um valor a um array
Considere a coleção supplies , uma coleção vazia. A operação abaixo adiciona um objeto que tem as informações da compra de um produto ao array items do documento em que o _id seja igual a 1 na coleção supplies :
Para não precisarmos escrever uma query só para fazer o insert do documento, vamos usar a opção upsert: true para já adicionar o elemento ao mesmo tempo que usamos o operador $push . É importante ficar nítido que a condição upsert não influencia a forma como o $push funciona.

Adicionando múltiplos valores a um array
Se você quiser adicionar múltiplos valores a um array , isso também é possível utilizando o operador $push , mas dessa vez será necessário adicionar o modificador $each

db.supplies.updateOne(
  {},
  {
$push: {
      items: {
$each: [
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8,
          },
        ],
      },
    },
  },
  { upsert: true },
);

Com o operador pop -1 tira o primeiro elemento, com 1 tira o último

O operador $pull remove de um array existente todos os elementos com um ou mais valores que atendam à condição especificada.

O operador $addToSet é utilizado quando você precisa garantir que os valores de um array não sejam duplicados. Ou seja, ele garante que apenas valores únicos estejam presentes no array , tratando o array como se fosse um conjunto (uma vez que conjuntos, na matemática, não podem conter elementos duplicados).