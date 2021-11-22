//ex1Utilizando o operador $all , retorne todos os filmes que contenham action e adventure no array category .

use ('class')
db.movies.find(
  {category:{$all:["action","adventure"]}}
);

// ex 2 Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7 .

use ('class')
db.movies.find(
  {
    category: {
      $all: ["action"]
    },
    imdbRating: { $gt: 7 }
  }
);

//ex 3 Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105] . Dica: lembre-se do operador $each visto no dia anterior.

use ('class')
db.movies.updateOne(
  {
    title:"Batman"},
    {$push:{ratings:{
      $each:[85, 100, 102, 105]
    }}}
);

//ex 4 Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102] .


db.movies.updateOne(
  { title: "Godzilla" },
  {
    $push: {
      ratings: {
        $each: [78, 52, 95, 102]
      }
    }
  }
);

// ex 5 Adicione um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65] .

db.movies.updateOne(
  { title: "Home Alone" },
  {
push: {
      ratings: {
each: [200, 99, 65]
      }
    }
  }
);

//ex 6 Retorne todos os filmes com ratings maior do que 103 , exibindo apenas os campos title e ratings .

use ('class')
db.movies.find(
{ratings:{$elemMatch:{$gt:103}}},
{ title: true,
ratings:true,
_id:false});

//ex 7 Retorne todos os filmes com ratings entre 100 e 105 , exibindo apenas os campos title e ratings .
use ('class')
db.movies.find(
{ratings:{$elemMatch:{$gte:100, $lte: 105}}},
{ title: true,
ratings:true,
_id:false});

//ex 8 Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9 , exibindo apenas os campos title e ratings .

use ('class')
db.movies.find(
{ratings:{$elemMatch:{$gte:64, $lte: 105,$mod: [9, 0]}}},
{ title: true,
ratings:true,
_id:false});

// ex 9:Retorne os filmes da categoria adventure e com ratings maior do que 103 , exibindo apenas os campos title , ratings e category .

use ('class')
db.movies.find(
{ratings:{$elemMatch:{$lt: 103}},
category:{$all:["adventure"]},
},
{ title: true,
ratings:true,
category:true,
_id:false});

//ex 10 Retorne somente o título de todos os filmes com dois elementos no array category .

use ('class')
db.movies.find(
{category:{$size:2}},
{ title: true,
_id:false});

