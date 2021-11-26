//ex 1 Adicione a categoria "superhero" ao filme Batman .

use ('class')
db.movies.updateOne(
  {title:"Batman"},
  {$push:{
    category:
      "superhero",
  },
  },
);

//ex 2 Exercício 2: Utilizando o modificador $each , adicione as categorias "villain" e "comic-based" ao filme Batman 

use ('class')
db.movies.updateOne(
  {title:"Batman"},
  {$push:{
    category:{
      $each:[
        "villain" ,"comic-based"
      ]
    },
  },
  },
);

//Primeiro faz o push para empurrar para o Array, depois coloca a chave que receberá o visualViewport, depois o each para dizer que é mais de um valor abre um colchete e coloca dentro os valores.

// ex 3 Remova a categoria "action" do filme Batman .

use ('class')
db.movies.updateOne(
  {title:"Batman"},
  {$pull:{
    category:"action"
    },
  },
);

// ex4 Remova o primeiro elemento do array category do filme Batman .

use ('class')
db.movies.updateOne(
  {title:"Batman"},
  {$pop:{
    category:-1
    },
  },
);

//ex 5  Remova o último elemento do array category do filme Batman .

use ('class')
db.movies.updateOne(
  {title:"Batman"},
  {$pop:{
    category:1
    },
  },
);

//ex Adicione o elemento "action" ao array category do filme Batman , garantindo que esse valor não se duplique.


use ('class')
db.movies.updateOne(
  {title:"Batman"},
  {$addToSet:{
    category:"action"
    },
  },
);

//ex 7  Adicione a categoria "90's" aos filmes Batman e Home Alone .

db.movies.updateMany(
  {
    title: {
$in: ["Batman", "Home Alone"],
    },
  },
  {
$push: { category: "90's" },
  },
);

//ex 8 Crie um array de documentos chamado cast para o filme Home Alone com os seguintes dados:
use ('class')
db.movies.updateOne(
  {
    title: "Home Alone"
  },
  {
$push: { cast:
{$each:[
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
]}
  },
  }
);

//9 Adicione o campo character com o valor Marv ao array de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone .
use ('class')
db.movies.updateOne(
  {
    title: "Home Alone",
    "cast.actor": "Daniel Stern",
  },
  {
    $set: { "cast.2.character": "Marv" },
  },
);

//ou 

db.movies.updateOne(
  {
    title: "Home Alone",
    "cast.actor": "Daniel Stern",
  },
  {
set: { "cast.$.character": "Marv" },
  },
);

//ex Exercício 10: Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:

use ('class')
db.movies.updateOne(
  {
    title: "Batman",
  },
  {
    $push: { cast:
    {$each:[
      {
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
    ]}
  },
  },
);

// ex 11 roduza três querys para o filme Batman :

//Adicione o campo actor , que deve ser um array com o valor Christian Bale , ao array de cast em que o campo character seja igual a Batman ;

use ('class')
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character":"Alfred"
  },
  {
    $push: { "cast.$.actor":
      "Michael Caine"
    },
  },
);


use ('class')
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character":"Coringa"
  },
  {
    $push: { "cast.$.actor":
      "Heath Ledger"
    },
  },
);

//ex 12 Adicione aos atores de cast do character Batman do filme Batman os valores "Michael Keaton" , "Val Kilmer" e "George Clooney" , e deixe o array em ordem alfabética.
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
push: {
      "cast.$.actor": {
each: ["Michael Keaton", "Val Kilmer", "George Clooney"],
sort: 1,
      },
    },
  },
);