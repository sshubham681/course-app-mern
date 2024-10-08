const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", User);
module.exports = UserModel;
