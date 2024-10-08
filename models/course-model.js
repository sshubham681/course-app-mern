const mongoose = require("mongoose");

const Course = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  isFree: { type: Boolean, default: false },
});

const CourseModel = mongoose.model("courses", Course);

module.exports = CourseModel;
