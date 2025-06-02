// Script 4: Index Creation and Optimization

print("=== CREATING INDEXES ===\n");

// Create single field index on category
print("1. Creating single field index on 'category'");
db.products.createIndex({category: 1});
print("Reason: Frequently queried field for filtering products by category");

// Create compound index on category and price
print("2. Creating compound index on 'category' and 'price'");
db.products.createIndex({category: 1, price: -1});
print("Reason: Supports queries filtering by category and sorting by price");

// Create text index on description
print("3. Creating text index on 'description'");
db.products.createIndex({description: "text"});
print("Reason: Enables full-text search on product descriptions");


// Display all indexes
print("\n=== ALL INDEXES ===");
db.products.getIndexes().forEach(index => {
    print(`Index: ${JSON.stringify(index.key)}`);
    print(`Name: ${index.name}`);
    print("---");
});

// Analyze index statistics
print("\n=== INDEX STATISTICS ===");
let stats = db.products.stats({indexDetails: true});
print(`Collection size: ${stats.size} bytes`);
print(`Total index size: ${stats.totalIndexSize} bytes`);

// Individual index sizes
print("\nIndex sizes:");
Object.keys(stats.indexSizes).forEach(indexName => {
    print(`${indexName}: ${stats.indexSizes[indexName]} bytes`);
});