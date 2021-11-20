## Para alterar um único documento, você pode utilizar o método updateOne() . Como o nome do método diz, ele altera apenas o primeiro documento que satisfaça o critério de filtro.

db.inventory.updateOne(
  { item: "paper" },
  { $set: { "size.uom": "cm", status: "P" } }
);

- Primeiro parametro é o  (filtro)
- segundo parametro com o $set o update em si 
Não esquecer que quero setar um novo valor

Para alterar muitos documentos: updateMany
db.inventory.updateMany(
  { "qty": { $lt: 50 } },
  { $set: { "size.uom": "in", status: "P" } }
);

alterar campos dentro de subdocumentos:

db.products.update(
  { _id: 100 },
  { $set: { "details.make": "zzz" } }
);

## Alterando valores em arrays:
Como está :  tags: [ "coats", "outerwear", "clothing" ]
  ratings: [ { by: "ijk", rating: 4 } ]

db.products.update(
  { _id: 100 },
  { $set: {
      "tags.1": "rain gear",
      "ratings.0.rating": 2
    }
  }
);

Precisa colocar a posição no array, no caso tags.1 e o rating também:
Ficando assim

 "tags": [
    "coats",
    "rain gear",
    "clothing"
  ],
  "ratings": [
    {
      "by": "ijk",
      "rating": 2
    }
  ]
}

Operador $mul

O operador $mul multiplica o valor de um campo por um número especificado

Ex: db.products.insertOne(
  { "_id": 1, "item": "ABC", "price": NumberDecimal("10.99"), "qty": 25 }
);

db.products.update(
  { _id: 1 },
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
);

resultado após update:

{ "_id": 1, "item": "ABC", "price": NumberDecimal("13.7375"), "qty": 50 }

Você pode utilizar o $mul em um campo que não exista no documento. Nesse caso, o operador criará o campo e atribuirá a ele o valor zero do mesmo tipo numérico do multiplicador .


$max 

[
  { _id: 1, campo: 25 },
  { _id: 2, campo: 50 },
  { _id: 3, campo: 100 }
]


db.collection.updateMany({}, { $max: { campo: 75 } });
// Atualizando todos os valores do atributo "campo"
// para 75 caso sejam menores

db.collection.find();

resultado:

[
  { _id: 1, campo: 75 }, // valor anterior: 25
  { _id: 2, campo: 75 }, // valor anterior: 50
  { _id: 3, campo: 100 }, // não encontrou no escopo
]

Com o operador $min é praticamente a mesma coisa, porém na direção inversa :

db.collection.updateMany({}, { $min: { campo: 42 } });
// Atualizando todos os valores do atributo "campo"
// para 42 caso sejam maiores

resultado:

[
  { _id: 1, campo: 42 }, // valor anterior: 75
  { _id: 2, campo: 42 }, // valor anterior: 75
  { _id: 3, campo: 42 }, // valor anterior: 100
]


Pense assim: documento tem de ter no minimo esse valor, documento tem de ter no maximo esse valor

## Operador $currentDate

O operador $currentDate atribui ao valor de um campo a data corrente , utilizando um tipo Date ou timestamp . Se você não especificar o tipo, por padrão, o MongoDB atribuirá o valor do tipo Date .

## $rename coloca o nome antigo da chave e depois o nome que será atualizado. 

use conteudo_trybe;
db.fruits.insertOne(
  { _id: 100, name: "Banana", quantity: 100, inStock: true }
);

db.fruits.updateOne(
  { name: "Banana" },
  { $rename: {
      "name": "productName"
    }
  }
);

{ _id: 100, quantity: 100, inStock: true, productName: 'Banana' }

em vez de name agora é productName

## remover campos $unset 

{
  _id: 100,
  productName: "Banana",
  quantity: 100,
  inStock: true
}

db.fruits.updateMany(
  { productName: "Banana" },
  { $unset: { quantity: "" } }
);

{
  _id: 100,
  productName: "Banana",
  inStock: true
}