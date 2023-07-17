const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tourSchema = new Schema({
  name: { type: String, required: true },
  WorldGolfRank: { type: Number, required: true },
  TotalPoints: { type: Number, required: true },
  Events: { type: Number, required: true },
  Season: { type: Number, required: true }
})

module.exports = mongoose.model('Tour', tourSchema)
