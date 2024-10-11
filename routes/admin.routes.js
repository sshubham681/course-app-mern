const express = require("express");
const AdminModel = require("../models/admin.models");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// sign up
router.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const foundAdmin = await AdminModel.findOne({ username });
    if (foundAdmin && foundAdmin.username === username) {
      res.send({
        message: "Admin already exist!",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 5);
      await AdminModel.create({
        username,
        password: hashedPassword,
      });
      res.send({
        message: "Admin created successfully.",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Failed to create admin.",
    });
  }
});

// Admin login
router.post("/login", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const foundUser = await AdminModel.findOne({ username });
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
        message: "Admin doesn't exist",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Failed to login",
    });
  }
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
