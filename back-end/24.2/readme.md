## Operador $push

Adiciona valor a um array 

use sales;
db.supplies.updateOne(
  { _id: 1 },
  {
push: {
      items: {
        "name": "notepad",
        "price":  35.29,
        "quantity": 2,
      },
    },
  },
  { upsert: true },
);


name, price e quantity ficam dentro de um array
{
    _id : 1,
    items : [
        {
            "name" : "notepad",
            "price" : 35.29,
            "quantity" : 2,
        },
    ],
}

Para adicionar múltiplos valores em um array:
Precisa usar o $each , $each vem seguido de :[]

db.supplies.updateOne(
  {},
  {
push: {
      items: {
each: [
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

resultado :

{
    _id : 1,
    items : [
        {
            "name" : "notepad",
            "price" : 35.29,
            "quantity" : 2,
        },
        {
            "name" : "pens",
            "price" : 56.12,
            "quantity" : 5,
        },
        {
            "name" : "envelopes",
            "price" : 19.95,
            "quantity" : 8,
        },
    ],
}

Múltiplos modificadores:

db.supplies.updateOne(
  { _id: 1 },
  {
push: {
      items: {
each: [
          {
            "name" : "notepad",
            "price" : 35.29,
            "quantity" : 2,
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8,
          },
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
        ],
sort: { quantity: -1 },
slice: 2,
      },
    },
  },
  { upsert: true },
);


O modificador $each para adicionar múltiplos documentos ao array items ;
O modificador $sort para ordenar todos os elementos alterados no array items pelo campo quantity em ordem decrescente;
E o modificador $slice para manter apenas os dois primeiros elementos ordenados no array items .

resultado:

{
  _id : 1,
  items : [
    {
      "name" : "envelopes",
      "price" : 19.95,
      "quantity" : 8,
    },
    {
      "name" : "pens",
      "price" : 56.12,
      "quantity" : 5,
    },
  ],
}

$pop -1 remove o primeiro elemento, $pop +1 remove o último 

{
  _id: 1,
  items: [
    {
      "name" : "notepad",
      "price" : 35.29,
      "quantity" : 2,
    },
    {
      "name": "envelopes",
      "price": 19.95,
      "quantity": 8,
    },
    {
      "name": "pens",
      "price": 56.12,
      "quantity": 5,
    },
  ],
}

db.supplies.updateOne({ _id: 1 }, { $pop: { items: -1 } });
resultado:
{
  _id: 1,
  items: [
    {
      "name": "envelopes",
      "price": 19.95,
      "quantity": 8,
    },
    {
      "name": "pens",
      "price": 56.12,
      "quantity": 5,
    },
  ],
}

## Operador $pull

{
  _id: 1,
  items: [
    {
      "name" : "notepad",
      "price" : 35.29,
      "quantity" : 2,
    },
    {
      "name": "envelopes",
      "price": 19.95,
      "quantity": 8,
    },
    {
      "name": "pens",
      "price": 56.12,
      "quantity": 5,
    },
  ],
},
{
  _id: 2,
  items: [
    {
      "name" : "pencil",
      "price" : 5.29,
      "quantity" : 2,
    },
    {
      "name": "envelopes",
      "price": 19.95,
      "quantity": 8,
    },
    {
      "name": "backpack",
      "price": 80.12,
      "quantity": 1,
    },
    {
      "name": "pens",
      "price": 56.12,
      "quantity": 5,
    },
  ],
}

db.supplies.updateMany(
  {},
  {
pull: {
      items: {
        name: { $in: ["pens", "envelopes"] },
      },
    },
  },
);

resposta

{
  _id : 1,
  items : [
    {
      "name" : "notepad",
      "price" : 35.29,
      "quantity" : 2,
    },
  ],
},
{
  _id : 2,
  items : [
    {
      "name" : "pencil",
      "price" : 5.29,
      "quantity" : 2,
    },
    {
      "name" : "backpack",
      "price" : 80.12,
      "quantity" : 1,
    },
  ],
}

Removendo todos os itens que atendem a uma condição diretamente no $pull

db.profiles.updateOne(
  { _id: 1 },
  {
pull: {
      votes: { $gte: 6 },
    },
  },
);

resposta

{ _id: 1, votes: [3,  5] }

$addToSet - garante que valores num array nao sejam duplicados, se já tiver o valor no array ele não insere

$[<identifier>]

$[<identifier>] identifica o elemento que corresponde ao arrayFilters

Exemplo:

db.recipes.updateMany( // Passamos de updateOne para updateMany.
  {}, // Retiramos a restrição do título.
  {
set : {
      "ingredients.$[elemento].unit": "xícara", // Setamos `unit` como "xícara",
      "ingredients.$[elemento].name": "Farinha Integral", // `name` como "Farinha Integral".
    },
  },
  { arrayFilters: [ { "elemento.name": "Farinha" } ] }, // Filtramos os arrays que o valor da propriedade `name` seja "Farinha".
);

