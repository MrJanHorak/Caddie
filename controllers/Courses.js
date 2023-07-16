const Course = require('../models/Course')

const getAllCourses = async (req, res) => {
  let courses = await Course.find()
  res.send(blogs)
}

const createCourse = async (req, res) => {
  let newCourse = await Course.create(req.body)
  res.send(newCourse)
}

module.exports = { getAllCourses, createCourse }
