//This will fetch all the documents present in the given collection i.e., here the collection is "inventory"
db.inventory.find({qty:25})
        // ({<field>:<value>})


db.inventory.find({tags: {$in: ["red", "blue"]}})
// This uses the in-function i.e., "$in" which searches either of the given values in "tags" attribute (red or blue)

// AND 
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

// OR
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

