const Blog = require('../models/Blog')

const createBlog = async (req, res) => {
  let newBlog = await Blog.create(req.body)
  res.send(newBlog)
}

const updateBlog = async (req, res) => {
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.send(updatedBlog)
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

module.exports = { getAllBlogs, createBlog, updateBlog, deleteBlog }
