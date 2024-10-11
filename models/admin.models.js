const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  token: {type: String}
});

const AdminModel = mongoose.model("admin", AdminSchema);

module.exports = AdminModel;
