const express = require("express");
const AdminModel = require("../models/admin.models");
const router = express.Router();
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET;

// sign up
router.post("/signup", async function (req, res) {
  const username = req.body.username
  const password = req.body.password
  try {
    const foundAdmin = await AdminModel.findOne({username})
    if(foundAdmin && foundAdmin.username === username) {
      res.send({
        message: 'Admin already exist!'
      })
    } else {
      const token = jwt.sign({username}, JWT_SECRET)
      await AdminModel.create({username, password, token})
      res.send({
        message: "Admin created successfully.",
      });
    }
  } catch (error) {
    res.status(201).send({
      message: "Failed to create admin.",
    });
  }
  
});

// login
router.post("/login", async function (req, res) {
  const username = req.body.username
  try {
    const foundUser = await UserModel.findOne({ username });
    if (foundUser.username === username) {
      res.send({
        token: foundUser.token,
      });
    } else {
      res.send({
        message: "invalid login credentials",
      });
    }
  } catch (error) {
    res.send({
      message: 'Unable to process'
    })
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
