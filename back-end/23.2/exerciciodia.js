//2 Selecione todos os super-heróis menores do que 1.80m de altura. 
use ('class')
db.super.find({"aspects.height":{$lt:180}});

//3 Retorne o total de super-heróis menores que 1.80m

use ('class')
db.super.find({"aspects.height":{$lt:180}}).count();

//4 Retorne o total de super-heróis com até 1.80m.

db.superheroes.count(
  { "aspects.height": { $lte: 180 } }
);
//5 Selecione um super-herói com 2.00m ou mais de altura
use ('class')
db.super.findOne({"aspects.height":{$gte:200}})

//6 Retorne o total de super-heróis com 2.00m ou mais.

use ('class')
db.super.find({"aspects.height":{$gte:200}})

//7Selecione todos os super-heróis que têm olhos verdes.
use ('class')
db.super.find({'aspects.eyeColor':"green"});

//8 Retorne o total de super-heróis com olhos azuis.
use ('class')
db.super.find({'aspects.eyeColor':"blue"}).count();
//9 Utilizando o operador $in , selecione todos os super-heróis com cabelos pretos ou carecas ( "No Hair" ).
use ('class')
db.super.find({'aspects.hairColor':{$in:["Black", "No Hair"]}});
//10 Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ).
use ('class')
db.super.find({'aspects.hairColor':{$in:["Black", "No Hair"]}});
//11  Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
db.superheroes.count(
  { "aspects.hairColor": { $nin: ["black", "No Hair"] } }
);

//12 Utilizando o operador $not , retorne o total de super-heróis que não tenham mais de 1.80m de altura.
use ('class')
db.super.find({"aspects.height":{$not:{$gt:180}}}).count();
//13 Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m .
use ('class')
db.super.find({
  $nor:[{race:"Human"},{"aspects.height":{$gt:180}}]
  })
//14 Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics .

use ('class')
db.super.find(
    {
$and:[
{ "aspects.height":{$in:[180, 200]}},
            {
                publisher: "Marvel Comics"
            }
]
    });

//15  Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes , e não sejam publicados pela DC Comics .

db.superheroes.find(
  {
and: [
          {
              "aspects.weight": { $gte: 80, $lte: 100 }
          },
          {
or: [{ race: "Human" }, { race: "Mutant" }]
          },
          {
              publisher: { $ne: "DC Comics" }
          }
      ]
  }
).pretty();