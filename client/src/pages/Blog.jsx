import Client from '../services/api'
import { BASE_URL } from '../services/api'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Blog = () => {
  const [formValues, setFormValues] = useState({ content: '' })
  const [blogs, setBlogs] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await Client.post('/blogs/new', formValues)
    setBlogs([...blogs, response.data])
    // response.data is new object
  }

  const handleChange = (e) => {
    setFormValues({ content: e.target.value })
  }

  useEffect(() => {
    const getBlogs = async () => {
      let response = await axios.get(`${BASE_URL}/blogs/all`)
      setBlogs(response.data)
    }
    getBlogs()
  }, [])

  return (
    <div>
      <h1>Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="content"
          onChange={handleChange}
          value={formValues.content}
        />
        <button type="submit">Send It</button>
      </form>
      <section>
        {blogs.map((blog) => (
          <h4 key={blog._id}>{blog.content}</h4>
        ))}
      </section>
    </div>
  )
}

export default Blog
