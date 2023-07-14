const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (confirmPassword) {
        return confirmPassword === this.password;
      },
      message: 'Password and confirm password do not match',
    },
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ],
  image: {
    data: Buffer,  // Store image data as a Buffer
    contentType: String,  // Specify the content type of the image
  },
});

module.exports = mongoose.model('User', userSchema);
