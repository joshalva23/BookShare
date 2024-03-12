require("dotenv").config(); // Acess env file

module.exports = {
  mongoURI: "mongodb://127.0.0.1:27017/bookdb", // bookdb is the database name
  secretOrKey: `${process.env.SECRET}` // secret key for JWT
};
