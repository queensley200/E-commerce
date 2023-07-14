const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user.model');
const HttpStatus = require('http-status-codes');

const CreateUser = async (req, res) => {
  const { gender, dateOfBirth, password, confirmPassword, mobile, email, lastname, firstname } = req.body;

  // res.status(HttpStatus.BAD_REQUEST).json({ message: 'User already exists' });
  if (!gender || !dateOfBirth || !password || !confirmPassword || !mobile || !email || !lastname || !firstname) {
    return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Required fields are missing' });
  }
  try {
    // Check Password

    if (password !== confirmPassword){
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Password and confirm password do not match' });
    }
    // Check if the user already exists
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      // Create a new user
      const newUser = await User.create(req.body);
      
      res.status(HttpStatus.OK).json({ message: 'User created successfully', user: newUser });
    } else {
      // User already exists
      res.status(HttpStatus.BAD_REQUEST).json({ message: 'User already exists' });
    }
  } catch (error) {
    // Handle any errors that occurred during user creation
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to create user', error: error.message });
  }
};

const uploadImage = (req, res) => {
  // Access the uploaded image using req.file
  if (!req.file) {
    return res.status(HttpStatus.BAD_REQUEST).json({ error: 'No image file provided' });
  }

  // Process the image file and save it to the user's document in MongoDB
  // Here, you can use the User model and update the image field based on the user's ID

  return res.status(HttpStatus.OK).json({ message: 'Image uploaded successfully' });
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Server Error' });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(HttpStatus.NOT_FOUND).send('The user with the given ID was not found.');
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Server Error' });
  }
};

const UpdateUserProfile = async (req, res) => {
  const updateProfile = req.body;

  if (updateProfile.id === User.id) {
    // Update the user profile with the new data
    User.name = updateProfile.name;
    User.email = updateProfile.email;
    User.mobile = updateProfile.phone;

    await User.save(); // Save the updated profile to the database

    return res.json(User); // Send the updated profile as the response
  } else {
    res.status(HttpStatus.FORBIDDEN).json({ message: 'Unauthorized' });
  }
};

const UpdateUserPassword = async (req, res) => {
  try {
    const updatePassword = req.body.password;

    if (updatePassword.id === User.id) {
      // Update the user password
      User.password = updatePassword;

      // Save the updated profile to the database
      await User.save();

      res.json(User); // Send the updated profile as the response
    } else {
      res.status(HttpStatus.FORBIDDEN).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Server Error' });
  }
};
const DeleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({ message: 'User not found' });
    }

    // Delete the user profile from the database
    await User.deleteOne({ _id: userId });

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Server Error' });
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Email and password are required' });
  }

  try {
    // Check if the user exists
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid email or password' });
    }

    // User authentication successful
    res.status(HttpStatus.OK).json({ message: 'Login successful', user: existingUser });
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to authenticate user', error: error.message });
  }
};

const LogoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to logout' });
    }

    res.clearCookie('session'); // Clear the session cookie
    res.status(HttpStatus.OK).json({ message: 'Logout successful' });
  });
};

module.exports= {
  CreateUser,
  getUser,
  getAllUser,
  UpdateUserPassword,
  UpdateUserProfile, 
  DeleteUser,
  uploadImage,
  LoginUser
}