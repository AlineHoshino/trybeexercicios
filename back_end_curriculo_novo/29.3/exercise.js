use('cinema')
db.movies.find({
  category:{$all:["action", "adventure"]}
})

use('cinema')
db.movies.find({
  category:{$all:["action"]}, imdbRating:{$gt:7}
})

use('cinema')
db.movies.find({
  ratings:{$gt:103}
}, {_id:0, title:1, ratings:1})


db.movies.find(
  {
    ratings: {
      $elemMatch: { $gte: 100, $lte: 105 }
    }
  },
  {
    _id: 0,
    title: 1,
    ratings: 1
  }
).pretty();


db.movies.find(
  {
    ratings: {
      $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] }
    }
  },
  {
    _id: 0,
    title: 1,
    ratings: 1
  }
).pretty();


use('cinema')
db.movies.find(
{ ratings: {$gt:103}, category:"adventure"
},
  {
    _id: 0,
    title: 1,
    ratings: 1,
    category:1
  }
).pretty();

db.movies.find(
  { category: { $size: 2 } },
  { _id: 0, title: 1 }
).pretty();



db.movies.find(
  { ratings: { $size: 4 } },
  { _id: 0, title: 1 }
).pretty();

use('cinema')
db.movies.find({
  budget: { $mod: [5, 0] },
  category: { $size: 2 }
}).pretty();