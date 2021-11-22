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