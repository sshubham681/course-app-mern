const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

function connectToDB() {
  try {
    mongoose.connect(MONGO_URI).then(() => console.log("MONGO DB connected"));
  } catch (error) {
    console.log("Failed to connect with database");
    console.log(error);
  }
}

module.exports = connectToDB;
