
//Operadores de comparação
//1Selecione e faça a contagem dos restaurantes presentes nos bairros Queens , Staten Island e Bronx . (utilizando o atributo borough )
use ('test')
db.restaurants.find({ borough: { $in: ["Queens", "Staten Island", "Bronx"] } }).count();
// 2 Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo American . (utilizando o atributo cuisine )
use ('test')
db.restaurants.find({ cuisine: { $ne: "American" }}).count();
//3 Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8 . (utilizando o atributo rating )
use ('test')
db.restaurants.find({ rating: { $gte: 8 }}).count();
//4 Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4 .
use ('test')
db.restaurants.find({ rating: { $lt: 4 }}).count();
//5 elecione e faça a contagem dos restaurantes que não possuem as avaliações 5 , 6 e 7 .
use ('test')
db.restaurants.find({ rating: { $nin: [5, 6, 7] } }).count();

//operadores lógicos
// 1 Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5 ,
// essa consulta também deve retornar restaurantes que não possuem o campo avaliação.
use ('test')
db.restaurants.find({ rating: { $not: { $lte: 5 } }}).count();
//2 Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6 , 
//ou restaurantes localizados no bairro Brooklyn .
use ('test')
db.restaurants.find({ $or:[{rating:{$gte:6}}, { borough: "Brooklyn" }]}).count();
//3 Selecione e faça a contagem dos restaurantes localizados nos bairros Queens , 
//Staten Island e Brooklyn e possuem avaliação maior que 4 .
use ('test')
db.restaurants.find({ 
  $and:[
    { borough:{$in:["Brooklyn","Queens", "Staten Island"]}},
    {rating:{$gt:4}}
    ]
    }).count();
//4 Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1 , 
//nem o campo culinária seja do tipo American 
    use ('test')
    db.restaurants.find({ 
      $nor:[
        { rating:1},
        {cuisine:"American"}
        ]
      }).count();
  // 5 Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 
  //ou menor que 10 , E esteja localizado no bairro Brooklyn OU não possuem culinária do tipo Delicatessen .

  use ('test')
  db.restaurants.find({
    $and:[
      {$or:[{rating:{$gt:6,$lt:10}}]},
      {$or:[{ borough: 'Brooklyn' },{cuisine:{$ne:'Delicatessen'}}]}
    ]
  }).count();

  //sort 

  //1 Ordene alfabeticamente os restaurantes pelo nome (atributo name )

  use ('test')
  db.restaurants.find().sort({name:1});

//2 Ordene os restaurantes de forma descrescente baseado nas avaliações
  db.restaurants.find().sort({ "rating": -1 }).pretty();

// delete

//Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ices .

use ('test')
db.restaurants.deleteOne({ cuisine: "Ice Cream, Gelato, Yogurt, Ices" });
//Remova todos os restaurantes que possuem culinária do tipo American
db.restaurants.deleteMany({ cuisine: "American" });
