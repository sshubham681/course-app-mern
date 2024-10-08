const mongoose = require("mongoose");

const User = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  timestamp: true,
});

const UserModel = mongoose.model(User, "user");

module.exports = UserModel;
