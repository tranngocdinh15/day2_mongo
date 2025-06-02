// MongoDB Performance Optimization Assignment
// Script 1: Collection Setup and Sample Data Creation



// Function to generate random data
function generateProducts(count) {
    const categories = ["electronics", "clothing", "books", "home", "sports", "toys"];
    const manufacturers = ["Apple", "Samsung", "Nike", "Sony", "Microsoft", "Dell", "HP", "Canon"];
    const products = [];
    
    for (let i = 1; i <= count; i++) {
        const product = {
            _id: i,
            name: `Product ${i}`,
            category: categories[Math.floor(Math.random() * categories.length)],
            price: Math.round((Math.random() * 1000 + 10) * 100) / 100, // Price between 10-1010
            manufacturer: manufacturers[Math.floor(Math.random() * manufacturers.length)],
            description: `This is a detailed description for product ${i}. It includes features and specifications.`,
            inStock: Math.random() > 0.2, // 80% chance of being in stock
            rating: Math.round((Math.random() * 4 + 1) * 10) / 10, // Rating between 1.0-5.0
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)), // Random date within last year
            tags: [`tag${Math.floor(Math.random() * 10)}`, `feature${Math.floor(Math.random() * 5)}`]
        };
        products.push(product);
    }
    return products;
}

print("Creating 10,000 sample products...");

const sampleProducts = generateProducts(10000);
// Insert documents in batches for better performance
const batchSize = 1000;
for (let i = 0; i < sampleProducts.length; i += batchSize) {
    const batch = sampleProducts.slice(i, i + batchSize);
    db.products.insertMany(batch);
    print(`Inserted batch ${Math.floor(i/batchSize) + 1}`);
}