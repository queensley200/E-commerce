// controllers/products.js
const Product = require('../model/product');

getProducts = async(req, res) => {
  // Retrieve products from the database and send the response
    try{
        const product = await product.find()
        res.json(product);

    }catch(error){
        console.log(error);
        res.status(500).json ({message:'Server Error'})
    }
  

};

createProduct = async(req, res) => {
    try{
 // Extract the product details from the request body
    const {name,description,price} = req.body;
  // Create a new product instance using the extracted details
   const newProduct = new Product({
     name,
    description,
    price
   })
  // Save the new product to the database
   const createdProduct = await newProduct.save();
    // Send the created product as the response
    res.status(201).json(createdProduct);
}catch(error){
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
}

};

module.exports = getProducts;
module.exports = createProduct;