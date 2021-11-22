## Operador $all
db.inventory.find({ tags: ["red", "blank"] });

db.inventory.find({ tags: { $all: ["red", "blank"] } });

A primeira query retornará somente os documentos em que o array tags seja exatamente igual ao passado como parâmetro no filtro, ou seja, contenha apenas esses dois elementos, na mesma ordem.
Já a segunda analisará o mesmo array , independentemente da existência de outros valores ou a ordem em que os elementos estejam.

## Operador $elemMatch

O operador $elemMatch seleciona os documentos que contêm um campo do tipo array com pelo menos um elemento que satisfaça todos os critérios de seleção especificados

## Operador $size

array vê se tem o numero de elementos passado pelo size

{ _id: 1, tags: ["red", "green"] },
{ _id: 2, tags: ["apple", "lime"] },
{ _id: 3, tags: "fruit" },
{ _id: 4, tags: ["orange", "lemon", "grapefruit"] }

db.products.find(
  { tags: { $size: 2 } }
);

vai retornar o _id:1 e _id:2

## Operador $expr
O operador $expr permite que você utilize expressões de agregação e construa queries que comparem campos no mesmo documento

{ _id: 1, category: "food", budget: 400, spent: 450 },
{ _id: 2, category: "drinks", budget: 100, spent: 150 },
{ _id: 3, category: "clothes", budget: 100, spent: 50 },
{ _id: 4, category: "misc", budget: 500, spent: 300 },
{ _id: 5, category: "travel", budget: 200, spent: 650 }

db.monthlyBudget.find(
  {
expr: { $gt: [ "$spent", "$budget" ] }
  }
);

vai comparar spent com budget

resposta 

{ "_id" : 1, "category" : "food", "budget" : 400, "spent" : 450 }
{ "_id" : 2, "category" : "drinks", "budget" : 100, "spent" : 150 }
{ "_id" : 5, "category" : "travel", "budget" : 200, "spent" : 650 }

## Operador $regex

deixa usa expressões regulares pra encontrar as respostas
A query abaixo seleciona todos os documentos em que o campo sku "termine" com "789" :
db.products.find({ sku: { $regex: /789$/ } });


O caractere i ao lado da expressão indica a opção case-insensitive . Dessa forma, apenas os documentos que contenham ABC no campo sku serão retornados, sem se importar se está em maiúsculo ou minúsculo:
db.products.find({ sku: { $regex: /^ABC/i } });

## Operador $mod

{ _id: 1, item: "abc123", qty: 0 },
{ _id: 2, item: "xyz123", qty: 5 },
{ _id: 3, item: "ijk123", qty: 12 }

db.inventory.find({ qty: { $mod: [4, 0] } });

vai ver todas as qtdades que divididas por 4 o resto é zero

resposta:

{ "_id" : 1, "item" : "abc123", "qty" : 0 }
{ "_id" : 3, "item" : "ijk123", "qty" : 12 }

## Operador $text

precisa criae um index do tipo text 

db.articles.createIndex({ subject: "text" });


depois conegue procurae os termos

db.articles.find({ $text: { $search: "coffee" } });