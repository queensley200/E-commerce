// const bodyParser = require ( "body-parser");
const express = require('express');
const httpStatus = require('http-status-codes');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const passport = require('passport');
const multer = require('multer'); // Import multer for handling file uploads
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'queen',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
  })
);

app.use(passport.initialize());
app.use(passport.session());
// app.use(cors());
 app.use(cors({
  origin: 'http://localhost:3000',
  methods:"GET,POST,PUT,DELETE",
  credentials:true,
}));

const db = require('./model');
const cookieSession = require('cookie-session');
const Role = db.role;
db.mongoose
.connect('mongodb://localhost/E-commerce')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }

app.use('/api', authRoutes);

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Listening on port ${port}...`));
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
