const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const commentSchema = new Schema({
//   text: { type: String, required: true },
//   user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
//   // userName: String,
//   // userAvatar: String
// })

const blogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
  // comments: [commentSchema]
})

module.exports = mongoose.model('Blog', blogSchema)
