Como usar o mongo no docker:
docker pull mongo
docker run --name container-mongo -p 27017:27017 -d mongo
Estou usando a extensão mongodb for vscode
ele precisa usar use ('nome do db')


MongoDB não relacional
Focado em escalabilidade e performance
Terminologia:
Databases possuem coleções 
coleções possuem documentos
documentos possuem atributos
use nomeDoBanco 
db.nomedaColecao.insertOne({x: 1})

 A função insertOne() cria  o banco de dados nomeDoBanco , como a coleção nomeDaColecao, caso eles não existam. Se existirem, apenas mapeia o documento a ser inserido dentro deles e, por fim, executa a operação.

 createIndex() cria coleção também.

 um insert recebe como parâmetro um JSON

 InsertMany para inserir vários dados
 InsertMany tem de por dentro de um array 

 [
    { "productName": "Lapis", "stock": 10, "price": 20,"status":"A"},
    { "productName": "Tesoura", "price": 5, "status": "B" },
    { "productName": "Borracha", "price": 15, "status": "A" }
]



 Find ajuda a encontrar os dados:
Projection:
 db.movies.findOne(
    { "title" : "Forrest Gump" },
    { "title" : true, "imdb_rating" : true }
)

Resposta traz o id: 

{
    "_id" : ObjectId("5515942d31117f52a5122353"),
    "title" : "Forrest Gump",
    "imdb_rating" : 8.8
}

Acima, você está pedindo achar o título forest Gump e voce quer achar o título e tambem o rating
passa o valor 1, ou true que significa verdadeiro.
Se não qusier ver o id:

db.movies.findOne(
    { "title" : "Forrest Gump" },
    { "title" : 1, "imdb_rating" : 1, "_id": 0 }
)

Count- para contar as coisas.

temos essa coleção:
{ "_id": "apples", "qty": 5 }
{ "_id": "bananas", "qty": 7 }
{ "_id": "oranges", "qty": { "in stock": 8, "ordered": 12 } }
{ "_id": "avocados", "qty": "fourteen" }
usa:
$gt( greater than , maior que, >)


só trará 
{ "_id": "apples", "qty": 5 }
{ "_id": "bananas", "qty": 7 }

O documento com o _id igual a "avocados" não foi retornado porque o valor do campo qty é do tipo string , enquanto o operador $gt é do tipo integer .
O documento com o _id igual a "oranges" também não foi retornado porque qty é do tipo object .

use ('nome do db')- por causa da extensão do vscode
db.inventory.find()-traz todos os documentos
db.inventory.find({})- traz todos os documentos

Objeto dentro do outro é um relacionamento no mongodb
Unindo assim faço uma única qery numa única collection
Find só encontra em uma collection

relacionamento 1:N

coloca num array

Método de cursor: Cursor pede item por item
Limit e skip

db.bios.find().limit(5)
A operação acima retornará os cinco primeiros documentos da coleção bios .

O exemplo abaixo na coleção bios pulará os dois primeiros documentos e retornará o cursor a partir daí:

db.bios.find().skip(2)


Projetando somente os atributos requeridos:
Através do segundo parâmetro do método find() , podemos especificar quais atributos serão retornados. O exemplo abaixo retorna todos os documentos da coleção bios , trazendo apenas o atributo name de cada documento:

db.bios.find({}, { name: 1 })

como ter um json dentro do docker:

docker exec -i <container-name> sh -c 'mongoimport -c <namecollection> -d <db.name> --drop' < xxxx.json

outro jeito:

docker cp xxx.json <container-name-or-id>:/tmp/xxx.json
docker exec <container-name-or-id> mongoimport -d <db-name> -c <c-name> --file /tmp/xxx.json