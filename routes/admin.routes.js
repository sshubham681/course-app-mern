const express = require("express");
const router = express.Router();

// sign up
router.post("/signup", function (req, res) {
  res.send({
    message: "Admin Signup route",
  });
});

// login
router.post("/login", function (req, res) {
  res.send({
    message: "Admin Login route",
  });
});

// create course
router.post("/create-course", function (req, res) {
  res.send({
    message: "Admin create course route",
  });
});

// delete course by id
router.delete("/delete-course/:id", function (req, res) {
  res.send({
    message: "Admin delete course by id",
  });
});

// update course by id
router.patch("/course/:id", function (req, res) {
  res.send({
    message: "Admin update course by id",
  });
});

module.exports = router;
