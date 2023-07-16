import Client from '../services/api'
import { BASE_URL } from '../services/api'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Course = () => {
  const [formValues, setFormValues] = useState({ content: '' })
  const [courses, setCourses] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await Client.post('/courses/new', formValues)
    setCourses([...courses, response.data])
    setFormValues({ content: '' })
    // response.data is new object
  }

  const handleChange = (e) => {
    setFormValues({ content: e.target.value })
  }

  useEffect(() => {
    const getCourses = async () => {
      let response = await axios.get(`${BASE_URL}/courses/all`)
      setCourses(response.data)
    }
    getCourses()
  }, [])

  return (
    <div>
      <div className="course-card">
        <h1>Courses</h1>
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
          </div>
        ))}
      </section>
    </div>
  )
}

export default Blog
