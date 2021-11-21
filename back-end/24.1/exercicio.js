// 1 Altere o imdbRating para 7.7 no filme Batman .

db.movies.updateOne(
  {title:"Batman"},
  {$set:{
    imdbRating:7.7
  }})

  //2 Altere budget para 1 no filme Godzilla .
  db.movies.updateOne(
    {title:"Godzilla"},
    {$set:{
      budget:1
    }});
// 3 Altere budget para 15 e imdbRating para 5.5 no filme Home Alone .
db.movies.updateOne(
  {title:"Home Alone"},
  {$set:{
    budget:15,
    imdbRating:5.5
  }});
//4  Aumente em 2 o imdbRating do filme Batman .

db.movies.updateOne(
  {title:"Batman"},
  {$inc:{
    imdbRating:2,
  }});

// 5 Aumente em 5 o budget do filme Home Alone

db.movies.updateOne(
  {title:"Home Alone"},
  {$inc:{
    budget:5,
  }});

//6 Multiplique por 4 o imdbRating do filme Batman .

use ('class')
db.movies.updateOne(
  {title:"Batman"},
  {$mul:{imdbRating:NumberLong("4")}}
);

//7 Renomeie o campo budget para estimatedBudget do filme Batman .

db.movies.updateOne(
  {title:"Batman"},
  {$rename:{budget:"estimatedBudget"}}
);

//8 xercício 8 : Utilize o operador $min para alterar o budget para 5 do filme Home Alone
db.movies.updateOne(
  {title:"Home Alone"},
  {$min:{budget:5}}
);

// ex 9 Utilize o operador $max para alterar o imdbRating para 8.6 do filme Godzilla . Além disso, 
//altere a categoria "adventure" para "thriller" do filme Godzilla .
db.movies.updateOne(
  {title: "Godzilla" },
  {
  $max: {imdbRating:8.6},
  $set: {"category.1":"thriller"},
  },
);

// adventure está na posição 1 do array

//ex 10 xercício 10 : Utilizando o operador $currentDate , crie um campo chamado
// lastUpdated com o tipo timestamp no filme Home Alone .

db.movies.updateOne(
  {title: "Home Alone" },
  {
   $currentDate : {lastUpdated:{$type:"timestamp"}}
  }
);

//ex 11  Utilizando uma única operação, crie um campo chamado sequels e atribua a ele o valor 0 em todos os documentos.

db.movies.updateMany(
  { },
  {
   $set : {sequels:0}
  }
);

//a chave vazia representa tudo 

//ex 12 Utilizando uma única operação, remova os campos budget e estimatedBudget em todos os documentos.

use ('class')
db.movies.updateMany(
  { },
  {
   $unset : {budget:"",estimatedBudget:"",
   },
  }
);

//ex 13 Para os filmes Batman ou Home Alone , atribua a imdbRating o valor 17 , caso o valor de imdbRating seja menor que 17 .

db.movies.updateMany(
  {title:{ $in:["Batman","Home Alone"]}},
  {
   $max : {imdbRating:17}
   },
);
