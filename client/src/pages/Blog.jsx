import Client from '../services/api'
import { BASE_URL } from '../services/api'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import Comment from './Comment'

const Blog = () => {
  const [formValues, setFormValues] = useState({ content: '' })
  const [editContent, setEditContent] = useState('')
  const [blogs, setBlogs] = useState([])
  const [editingBlog, setEditBlog] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await Client.post('/blogs/new', formValues)
    setBlogs([...blogs, response.data])
    setFormValues({ content: '' })
    // response.data is new object
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, content: e.target.value })
  }

  useEffect(() => {
    const getBlogs = async () => {
      let response = await axios.get(`${BASE_URL}/blogs/all`)
      setBlogs(response.data)
    }
    getBlogs()
  }, [])

  const handleChangeEdit = (e) => {
    setEditContent(e.target.value)
  }

  const handleEdit = (id) => {
    const blogEdit = blogs.find((blog) => blog._id === id)
    setEditBlog(id)
    setEditContent(blogEdit.content)
  }

  const handleUpdate = async (id) => {
    const updatedBlog = {
      ...blogs.find((blog) => blog._id === id),
      content: editContent
    }
    await Client.put(`/blogs/${id}`, updatedBlog)
    setBlogs(blogs.map((blog) => (blog._id === id ? updatedBlog : blog)))
    setEditBlog(null)
    setEditContent('')
  }

  const handleDelete = async (id) => {
    await Client.delete(`/blogs/${id}`)
    setBlogs(blogs.filter((blog) => blog._id !== id))
  }

  return (
    <div>
      <div className="blog-card">
        <h1>Blog</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="content"
            onChange={handleChange}
            value={formValues.content}
          />
          <button type="submit">Send It</button>
        </form>
      </div>
      <section className="new-blog-card">
        {blogs.map((blog) => (
          <div key={blog._id}>
            <h4>{blog.content}</h4>
            {/* <Comment comment={blog.comments} /> */}
            <button onClick={() => handleDelete(blog._id)}>
              Delete Blog Post
            </button>
            <button onClick={() => handleEdit(blog._id)}>Edit Blog Post</button>
            {editingBlog === blog._id && (
              <div>
                <input
                  placeholder="Edit Blog"
                  onChange={handleChangeEdit}
                  value={editContent}
                />
                <button onClick={() => handleUpdate(blog._id)}>
                  Update Blog
                </button>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}

export default Blog
