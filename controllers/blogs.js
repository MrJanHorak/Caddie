const Blog = require('../models/Blog')

const createBlog = async (req, res) => {
  let newBlog = await Blog.create(req.body)
  res.send(newBlog)
}

const deleteBlog = async (req, res) => {
  const blogId = req.params.id
  const deletedBlog = await Blog.findByIdAndDelete(blogId)

  res.send(deletedBlog)
}

const getAllBlogs = async (req, res) => {
  let blogs = await Blog.find()
  res.send(blogs)
}
// const createComment = async (req, res) => {
//   let newComment = await Blog.create(req.body)
//   res.send(newComment)
// }

module.exports = { getAllBlogs, createBlog, deleteBlog }
