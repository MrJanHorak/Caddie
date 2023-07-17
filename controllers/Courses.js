const Course = require('../models/Course')

const createCourse = async (req, res) => {
  const { courseName, city } = req.body
  const newCourse = new Course({
    courseName,
    city
  })
  const savedCourse = await newCourse.save()
  // let newCourse = await Course.create(req.body)
  res.send(savedCourse)
}

const deleteCourse = async (req, res) => {
  const courseId = req.params.id
  const deletedCourse = await Course.findByIdAndDelete(courseId)

  res.send(deletedCourse)
}

const getAllCourses = async (req, res) => {
  let courses = await Course.find()
  res.send(courses)
}

module.exports = { createCourse, deleteCourse, getAllCourses }
