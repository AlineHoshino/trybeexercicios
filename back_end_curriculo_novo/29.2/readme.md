Não esquecer de startar o container de novo 
docker start namedocontainer
O operador $lt seleciona os documentos em que o valor do atributo filtrado é menor do que (<) o valor especificado.
Veja o exemplo abaixo:
db.inventory.find({ qty: { $lt: 20 } })

Operador $ne
Esse operador é o contrário do anterior. Ao utilizar o $ne , o MongoDB seleciona os documentos em que o valor do atributo filtrado não é igual ao valor especificado.

Operador $in
A consulta abaixo retorna todos os documentos da coleção inventory em que o valor do atributo qty é 5 ou 15 . E embora você também possa executar essa consulta utilizando o operador $or , que você verá mais à frente no conteúdo, escolha o operador $in para executar comparações de igualdade com mais de um valor no mesmo atributo.

db.inventory.find({ qty: { $in: [ 5, 15 ] } })

{ $or: [{ <expression1> }, { <expression2> }, ... , { <expressionN> }] }