const Blog = require('../models/Blog')

const getAllBlogs = async (req, res) => {
  let blogs = await Blog.find()
  res.send(blogs)
}

const createBlog = async (req, res) => {
  let newBlog = await Blog.create(req.body)
  res.send(newBlog)
}

// const createComment = async (req, res) => {
//   let newComment = await Blog.create(req.body)
//   res.send(newComment)
// }

module.exports = { getAllBlogs, createBlog }
