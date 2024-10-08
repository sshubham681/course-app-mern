const express = require("express");
const router = express.Router();

// user signup
router.post("/signup", function (req, res) {
  res.send({
    msg: "Sign up",
  });
});
// user login
router.post("/login", function (req, res) {
  res.send({
    msg: "Login",
  });
});

// get all courses
router.get("/courses", function (req, res) {
  res.send({
    msg: "Get all courses",
  });
});
// get purchased courses
router.get("/my-courses", function (req, res) {
  res.send({
    msg: "Get purchased courses",
  });
});
// get all courses
router.post("/buy-course", function (req, res) {
  res.send({
    msg: "Purchase a courses",
  });
});

module.exports = router;
