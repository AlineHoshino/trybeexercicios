clica em add connection no vscode do mongo
mongodb://localhost:27017

db.movies.findOne(
    { "title" : "Forrest Gump" },
    { "title" : 1, "imdb_rating" : 1 }
)

resultado:

{
    "_id" : ObjectId("5515942d31117f52a5122353"),
    "title" : "Forrest Gump",
    "imdb_rating" : 8.8
}

No método find o id vem junto por tabela, para não vir eu preciso passar o valor 0 de falso para ele.
Ficando assim: db.movies.findOne(
    { "title" : "Forrest Gump" },
    { "title" : 1, "imdb_rating" : 1, "_id": 0 }
)

Novo resultado sem  o id:

{
    "title" : "Forrest Gump",
    "imdb_rating" : 8.8
}