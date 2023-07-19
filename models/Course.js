const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
  courseName: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true }
  // par: { type: String, required: true }
})

module.exports = mongoose.model('Course', courseSchema)
