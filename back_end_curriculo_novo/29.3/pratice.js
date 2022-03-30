db.products.find(
  { tags: { $size: 2 } }
);

//o retorno será

[
  {
    "_id": 1,
    "tags": [
      "red",
      "green"
    ]
  },
  {
    "_id": 2,
    "tags": [
      "apple",
      "lime"
    ]
  }
]

//porque sues campos tags são arrays e contém dois elementos

// sobre o expr uso 


db.supplies.insertMany([
  { "_id" : 1, "item" : "binder", "qty" : NumberInt("100"), "price" : NumberDecimal("12") },
  { "_id" : 2, "item" : "notebook", "qty" : NumberInt("200"), "price" : NumberDecimal("8") },
  { "_id" : 3, "item" : "pencil", "qty" : NumberInt("50"), "price" : NumberDecimal("6") },
  { "_id" : 4, "item" : "eraser", "qty" : NumberInt("150"), "price" : NumberDecimal("3") },
  { "_id" : 5, "item" : "legal pad", "qty" : NumberInt("42"), "price" : NumberDecimal("10") }
])

let discountedPrice = {
  $cond: {
     if: { $gte: ["$qty", 100] },
     then: { $multiply: ["$price", NumberDecimal("0.50")] },
     else: { $multiply: ["$price", NumberDecimal("0.75")] }
  }
};

db.supplies.find( { $expr: { $lt:[ discountedPrice,  NumberDecimal("5") ] } });

//The db.collection.find() operation returns the documents whose calculated discount price is less than NumberDecimal("5"):

//retorno

[
  {
    "_id": 2,
    "item": "notebook",
    "qty": 200,
    "price": {
      "$numberDecimal": "8"
    }
  },
  {
    "_id": 3,
    "item": "pencil",
    "qty": 50,
    "price": {
      "$numberDecimal": "6"
    }
  },
  {
    "_id": 4,
    "item": "eraser",
    "qty": 150,
    "price": {
      "$numberDecimal": "3"
    }
  }
]