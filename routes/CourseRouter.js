const router = require('express').Router()
const controller = require('../controllers/Course')
const middleware = require('../middleware')

router.get('/all', controller.getAllCourses)
router.post(
  '/new',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createCourse
)

module.exports = router
