// exercise 1

db.bios.find({_id: 8})

// exercise 2 

db.bios.find({_id: 8}, {_id:1, "name":1 })

// exercises 3 

db.bios.find({_id: 8}, { birth:1, "name":1 , _id:0})

// exercise 4

db.bios.find({ "name.first": "John" }).pretty()

// exercise 5 

db.bios.find().limit(3).pretty()

// exercise 6 

db.bios.find().skip(5).limit(2)

// exercise 7 

db.books.countDocuments()

// exercise 8 

db.books.countDocuments({status:"PUBLISH"})

// exercise 9 

db.books.find({},{title:1, isbn:1, pageCount:1, _id:0}).limit(3);