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

use('bunisses')
db.restaurants.countDocuments({$and:[{ rating: { $not: { $lte: 5 } }},{rating:{$exists:false}} ]})

// ex 2

use('bunisses')
db.restaurants.countDocuments({$or:[{ rating: { $gte: 6 } },{borough:"Brooklyn"} ]})