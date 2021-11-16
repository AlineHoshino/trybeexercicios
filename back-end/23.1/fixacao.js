//exercício do dia de insertone
//use sample deixei comentado porque o eslint nao suporta a palavra chave use
db.products.insertOne(
{
    "productName": "Caixa",
    "price": 20
}
)
// só passar um id com _
db.products.insertOne(
    {
        "_id": 100,
        "productName": "Caixa",
        "price": 20
    }
)
//exercício insert many 
db.products.insertMany(
        [
            { "productName": "Lapis", "stock": 10, "price": 20,"status":"A"},
            { "productName": "Tesoura", "price": 5, "status": "B" },
            { "productName": "Borracha", "price": 15, "status": "A" }
        ]
)