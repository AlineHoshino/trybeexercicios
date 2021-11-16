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
//9 