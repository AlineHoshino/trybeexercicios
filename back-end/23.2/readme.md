Operador $lt
O operador $lt seleciona os documentos em que o valor do atributo filtrado é menor do que (<) o valor especificado.
Veja o exemplo abaixo:
db.inventory.find({ qty: { $lt: 20 } })

lte seleciona os documentos em que o valor do atributo filtrado é menor ou igual (<=) 
db.inventory.find({ qty: { $lte: 20 } })

$gt maior do que (>) o valor
$gte  maior ou igual (>=)

$eq igual

$ne não é igual

$in
A consulta abaixo retorna todos os documentos da coleção inventory em que o valor do atributo qty é 5 ou 15 . E embora você também possa executar essa consulta utilizando o operador $or , que você verá mais à frente no conteúdo, escolha o operador $in para executar comparações de igualdade com **mais de um valor** no **mesmo atributo**.
ênfase para mais de um valor no mesmo atributo
db.inventory.find({ qty: { $in: [ 5, 15 ] } })

 $nin

 Essa consulta seleciona todos os documentos da coleção inventory em que o valor do atributo qty é diferente de 5 e 15 

 $not negação

 Múltiplas expressões especificando o mesmo atributo

 db.inventory.find({
and: [
        { price: { $ne: 1.99 } },
        { price: { $exists: true } }
    ]
})

O sort() só pode ser usado se tiver algum resultado de busca antes:

db.colecao.find().sort({ nomeDoAtributo: 1 })

deleteOne()
Esse método remove apenas um documento, que deve satisfazer o critério de seleção, mesmo que muitos outros documentos também se enquadrem no critério de seleção

na hora de criar a conexao coloca / e o nome do banco de dados
deleteMany()

'avaliacao.bom'- não pode deixar sem aspas por causa do ponto 
