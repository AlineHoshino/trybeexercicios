// solução da trybe

use('bunisses')
db.restaurants.find({ borough: { $in: ["Queens", "Staten Island", "Bronx"] } }).countDocuments();

// minha solução 

db.restaurants.countDocuments({ borough: { $in: ["Queens", "Staten Island", "Bronx"] } })


// ex 2 gabarito trybe 

use('bunisses')
db.restaurants.find({ cuisine: { $ne: "American" } }).countDocuments();

// meu gabarito 
use('bunisses')
db.restaurants.find({ cuisine: { $ne: "American" } }).count();

use('bunisses')
db.restaurants.countDocuments({ cuisine: { $ne: "American" } })

// ex 3 

use('bunisses')
db.restaurants.countDocuments({ rating: { $gte: 8 } })

//ex 4 

use('bunisses')
db.restaurants.countDocuments({ rating: { $lt: 4 } })

// ex 5 

use('bunisses')
db.restaurants.countDocuments({rating:{$nin:[5,6,7]}})


// exercises operadores lógicos
//ex 1 nao deveria usar o existes?
use('bunisses')
db.restaurants.countDocuments({$and:[{ rating: { $not: { $lte: 5 } }},{rating:{$exists:false}} ]})

// ex 2

use('bunisses')
db.restaurants.countDocuments({$or:[{ rating: { $gte: 6 } },{borough:"Brooklyn"} ]})

//ex3
use('bunisses')
db.restaurants.countDocuments({$and:[
  { rating: { $gt: 4} },
  {borough: {$in:["Queens","Staten Island","Brooklyn"]}}
]
})

// ex 4

use('bunisses')
db.restaurants.countDocuments({$and:[
  { rating: { $ne: 1} },
  {cuisine: {$ne: "American"}}
]
})

// exercise 5 - retorno 0 
db.restaurants.countDocuments({
  and: [
        { $or: [{ rating: { $gt: 6, $lt: 10 } }] },
        { $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }] },
      ],
    })

// exercise sort 

use('bunisses')
db.restaurants.find().sort({name:1})