Para atualizar um conteúdo utilize o $set 
Note que dois parâmetros foram passados no método:
O primeiro deles é o filtro. Nesse caso, um filtro simples de igualdade, mas outros operadores podem ser utilizados aqui;
O segundo é a operação de update em si. Nesse caso, foi utilizado o operador de atualização $set para alterar o valor do campo size.uom para cm e o valor do campo status para P .
O método db.colecao.updateMany() permite que vários documentos que satisfaçam o critério de filtro sejam alterados de uma única vez.
No exemplo abaixo, o método db.colecao.updateMany() é utilizado para alterar todos os documentos da coleção inventory em que o valor do campo qty seja menor do que 50 :
db.inventory.updateMany(
  { "qty": { $lt: 50 } },
  { $set: { "size.uom": "in", status: "P" } }
);

O operador $mul multiplica o valor de um campo por um número especificado, persistindo o resultado dessa operação sem a necessidade do operador $set .

Com o operador $inc , você pode incrementar ou decrementar valores em um campo específico, utilizando tanto valores positivos quanto negativos.

Operadores $min e $max
Aqui temos dois operadores que também são bastante interessantes. Ambos fazem o mesmo tipo de comparação antes de executar a operação, porém em "sentidos" diferentes:
$min : altera o valor do campo atual para o valor passado pelo método se o valor passado pelo método for menor do que o valor do campo atual.
$max : altera o valor do campo atual para o valor passado pelo método se o valor passado pelo método for maior do que o valor do campo atual.

Operador rename:

db.fruits.updateOne(
  { name: "Banana" },
  { $rename: {
      "name": "productName"
    }
  }
);