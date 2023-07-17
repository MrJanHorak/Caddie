const axios = require('axios')
require('dotenv').config()

const Tour = require('../models/Tour')

const getRankings = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.sportsdata.io/golf/v2/json/PlayerSeasonStats/2022?key=${process.env.API_KEY}`
    )
    console.log(response)
  } catch (error) {
    throw error
  }
}

module.exports = { getRankings }
