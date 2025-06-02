// Script 2: Performance Testing Without Indexes

db.products.getPlanCache().clear();

// 1. Find all products with a price above 500
let start = new Date();
let result1 = db.products.find({ price: { $gt: 500 } }).toArray();
let end = new Date();
print("Query 1 (price > 500) execution time (ms): ", end - start);

// 2. Find all products in the "electronics" category sorted by price in descending order
start = new Date();
let result2 = db.products.find({ category: "electronics" }).sort({ price: -1 }).toArray();
end = new Date();
print("Query 2 (electronics sorted desc) execution time (ms): ", end - start);

// 3. Count the number of products from each manufacturer
start = new Date();
let pipeline = [
    { $group: { _id: "$manufacturer", count: { $sum: 1 } } }
];
let result3 = db.products.aggregate(pipeline).toArray();
end = new Date();
print("Query 3 (count by manufacturer) execution time (ms): ", end - start);

