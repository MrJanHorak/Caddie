const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tourSchema = new Schema({
  name: { type: String, required: true },
  rankings: [
    {
      name: { type: String },
      rank: { type: Number },
      playerId: { type: Number },
      events: { type: Number }
    }
  ],
  logo: { type: String, required: true }
})

module.exports = mongoose.model('Tour', tourSchema)
