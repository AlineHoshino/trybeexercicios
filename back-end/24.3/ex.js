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