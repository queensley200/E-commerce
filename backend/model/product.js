// models/product.js
const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // You can add more fields based on your specific requirements
});

// Create a Product model using the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
