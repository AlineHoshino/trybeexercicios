//Exercício 1 : Retorne o documento com _id igual a 8.

db.bios.find({ _id: 8 })
//Exercício 2 : Retorne o documento com o _id igual a 8, mas só exiba os atributos: _id e name .
db.bios.find({_id:8}, {name:true})
//Exercício 3 : Retorne apenas os campos name e birth do documento com _id igual a 8.
db.bios.find({_id:8}, {name:true, birth:true, _id:false})// colocou id false porque só quer name e birth 
//db.bios.find({_id:8}, {name:true}, {birth:true}, {_id:false})-pq assim nao vai?
// assim nao vai porque so aceita 2 parametros
//ex 4 Retorne todos os documentos em que o campo name.first seja igual a John , utilizando o método pretty() .
db.bios.find({ "name.first": "John" }).pretty()
//Exercício 5 : Retorne os 3 primeiros documentos da coleção bios utilizando o método pretty() .
db.bios.find().limit(3).pretty()
//Exercício 6 : Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.
db.bios.find().skip(5)
//Exercício 7 : Retorne a quantidade de documentos da coleção books .
use('class')
db.books.count()
use ('class')
db.books.count({"status": "PUBLISH"})
//Exercício 9 : Exiba os campos title , isbn e pageCount dos 3 primeiros livros. NÃO retorne o campo _id .
use('class')
db.books.find({}, {title:true, isbn:true,pageCount:true, _id:false}).limit(3)
//Exercício 10: Pule 5 documentos e exiba os atributos _id , title , authors e status dos livros com o status = "MEAP" , limitando-se a 10 documentos.
use ('class')
db.books.find(
    {
        status: "MEAP"
    },
    {
        title: true,
        authors: true,
        status: true
    }
).skip(5).limit(10).pretty()