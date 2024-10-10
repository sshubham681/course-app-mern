const mongoose = require("mongoose");

function connectToDB() {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("MONGO DB connected"));
  } catch (error) {
    console.log("Failed to connect with database");
    console.log(error);
  }
}

module.exports = connectToDB;
