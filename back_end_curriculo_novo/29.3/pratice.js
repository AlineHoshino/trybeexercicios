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

db.rpoducts.insertMany(
  [ { _id: 100, sku: "abc123", description: "Single line description." },
{ _id: 101, sku: "abc789", description: "First line\nSecond line" },
{ _id: 102, sku: "xyz456", description: "Many spaces before     line" },
{ _id: 103, sku: "xyz789", description: "Multiple\nline description" }]
)

db.rpoducts.find({sku:{$regex:/789$/}})

db.inventory.find({qty:{$mod:[4,0]}})

[
  {
    "_id": 1,
    "item": "abc123",
    "qty": 0
  },
  {
    "_id": 3,
    "item": "ijk123",
    "qty": 12
  }
]