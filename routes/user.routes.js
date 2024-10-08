const express = require("express");
const UserModel = require("../models/user.models");
const router = express.Router();

// user signup
router.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const foundUser = await UserModel.findOne({ username });
    console.log(foundUser?.username, "--f");
    console.log(username, "--username");
    if (foundUser && foundUser?.username === username) {
      res.send({
        message: "User already exist!",
      });
    } else {
      await UserModel.create({
        username,
        password,
      });
      res.send({
        message: "User got created!",
      });
    }
  } catch (error) {
    console.log(error, "error");
    res.status(201).send({
      message: "Failed to create user.",
    });
  }
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
