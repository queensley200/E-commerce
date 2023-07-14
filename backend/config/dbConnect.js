const mongoose = require('mongoose');

const uri =
  'mongodb+srv://queensley:tejumade@cluster0.1jcckr5.mongodb.net/E-commerce?retryWrites=true&w=majority';

const dbConnect = () => {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB');
      // Start your server or perform other operations
    })
    .catch((error) => {
      console.error('Failed to connect to MongoDB:', error);
    });
};



module.exports = dbConnect;
