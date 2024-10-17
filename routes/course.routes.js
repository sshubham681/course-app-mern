const express = require('express')
const router = express.Router()

// Get all courses
router.get('/courses', function(req, res) {
  res.send({
    message: 'All courses'
  })
})
// Get all courses
router.get('/my-courses', function(req, res) {
  res.send({
    message: 'My courses'
  })
})

// create course
router.post("/create-course", function (req, res) {
  res.send({
    message: "Create course route",
  });
});

// delete course by id
router.delete("/delete-course/:id", function (req, res) {
  res.send({
    message: "Delete course by id",
  });
});

// update course by id
router.patch("/course/:id", function (req, res) {
  res.send({
    message: "Update course by id",
  });
});

module.exports = router