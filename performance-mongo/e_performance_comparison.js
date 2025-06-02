// Script 5: Performance Comparison with Indexes

print("=== PERFORMANCE COMPARISON WITH INDEXES ===\n");

// Analyze Query 1: Products with price > 500
print("1. Analysis: Find products with price > 500");
let explainResult1 = db.products.find({price: {$gt: 500}}).explain("executionStats");
print("Documents Examined:", explainResult1.executionStats.totalDocsExamined);
print("Documents Returned:", explainResult1.executionStats.nReturned);
print("Index Used:", explainResult1.executionStats.indexPrefix || "No index used");
print("Execution Time:", explainResult1.executionStats.executionTimeMillis + "ms");
print("---");

// Analyze Query 2: Electronics sorted by price
print("2. Analysis: Electronics sorted by price");
let explainResult2 = db.products.find({category: "electronics"}).sort({price: -1}).explain("executionStats");


print("Documents Examined:", explainResult2.executionStats.totalDocsExamined);
print("Documents Returned:", explainResult2.executionStats.nReturned);
print("Index Used:", explainResult2.executionStats.indexPrefix || "No index used");
print("Execution Time:", explainResult2.executionStats.executionTimeMillis + "ms");
print("---");
// Analyze Agg

// Analyze Aggregation Pipeline: Average price by category
print("3. Analysis: Average price by category (Aggregation)");
// Define the pipeline for average price by category
let pipeline = [
    { $group: { _id: "$category", averagePrice: { $avg: "$price" } } }
];

// Explain the aggregation
let explainResultNoIndex = db.products.explain("executionStats").aggregate(pipeline);
printjson({
    totalDocsExamined: explainResultNoIndex.executionStats.totalDocsExamined,
    nReturned: explainResultNoIndex.executionStats.nReturned,
    executionTimeMillis: explainResultNoIndex.executionStats.executionTimeMillis,
    indexUsed: "No index used for aggregation"
});