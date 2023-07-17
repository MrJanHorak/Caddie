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

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateBlog
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteBlog
)

// router.post(
//   '/:blogId/comments/new',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.createComment
// )

module.exports = router
