const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UserModel = require("../models/user.models");
const authMiddleware = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// user signup
router.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const foundUser = await UserModel.findOne({ username });
    if (foundUser && foundUser?.username === username) {
      res.send({
        message: "User already exist!",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 5);
      await UserModel.create({
        username,
        password: hashedPassword,
      });
      res.send({
        message: "User created successfully!",
      });
    }
  } catch (error) {
    res.status(201).send({
      message: "Failed to create user.",
    });
  }
});

// user login
router.post("/login", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const foundUser = await UserModel.findOne({ username });
    if (foundUser) {
      const passwordMatch = await bcrypt.compare(password, foundUser.password);
      if (foundUser.username === username) {
        if (passwordMatch) {
          const token = jwt.sign({ username }, JWT_SECRET);
          res.send({
            token: token,
          });
        } else {
          res.send({
            message: "invalid login credentials",
          });
        }
      }
    } else {
      res.status(404).send({
        message: "User doesn't exist",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Failed to login",
    });
  }
});

// get all courses
router.get("/courses", function (req, res) {
  res.send({
    message: "Get all courses",
  });
});

// get purchased courses
router.get("/my-courses", authMiddleware, function (req, res) {
  res.send({
    message: "Get purchased courses",
  });
});

// get all courses
router.post("/buy-course", authMiddleware, function (req, res) {
  res.send({
    message: "Purchase a courses",
  });
});

module.exports = router;
