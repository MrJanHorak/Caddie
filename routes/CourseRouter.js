const router = require('express').Router()
const controller = require('../controllers/Courses')
const Course = require('../models/Course')
const middleware = require('../middleware')

router.post(
  '/new',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createCourse
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteCourse
)

router.get('/all', controller.getAllCourses)

module.exports = router
