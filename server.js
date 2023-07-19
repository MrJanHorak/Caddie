const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const AuthRouter = require('./routes/AuthRouter')
const BlogRouter = require('./routes/BlogRouter')
const CourseRouter = require('./routes/CourseRouter')
const TourRouter = require('./routes/TourRouter')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
// add dev for longer error message
app.use(logger('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)
app.use('/blogs', BlogRouter)
app.use('/courses', CourseRouter)
app.use('/tours', TourRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
