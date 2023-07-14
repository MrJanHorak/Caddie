const router = require('express').Router()
const controller = require('../controllers/Blogs')
const middleware = require('../middleware')

router.get('/all', controller.getAllBlogs)
router.post(
  '/new',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createBlog
)

module.exports = router
