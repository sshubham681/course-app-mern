const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    isFree: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const CourseModel = mongoose.model("courses", CourseSchema);

module.exports = CourseModel;
