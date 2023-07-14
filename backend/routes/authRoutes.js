const express = require('express');
const multer = require('multer');
const userController = require('../controller/userCntrl');
// const DeleteUser = require('../controller/userCntrl');
// const UpdateUserPassword = require('../controller/userCntrl');
// const UpdateUserProfile = require('../controller/userCntrl');
const getProducts = require('../controller/products');
// const createProduct = require('../controller/userCntrl');
// const uploadImage = require('../controller/userCntrl');

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads'); // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Set the filename to the original name of the uploaded file
    },
  });
  
  // Create the multer instance with the configured storage
  const upload = multer({ storage: storage });
 
router.post ('/upload-image', upload.single('image'), userController.uploadImage);
router.post ("/register",userController.CreateUser);
router.get ("/product", getProducts);
router.post ("/product", createProduct);
router.put ("/profile", userController.UpdateUserProfile);
router.put ("/profile/password", userController.UpdateUserPassword);
router.delete("/profile", userController.DeleteUser);

module.exports= router;