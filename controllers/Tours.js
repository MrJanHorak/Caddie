const axios = require('axios')
require('dotenv').config()

const Tour = require('../models/Tour')

const getRankings = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.sportsdata.io/golf/v2/json/PlayerSeasonStats/2022?key=${process.env.API_KEY}`
    )
    let tour = await Tour.findOne({ name: 'PGA Tour' })
    tour.rankings = []
    response.data.forEach((player) => {
      let playerObj = {
        name: player.Name,
        rank: player.WorldGolfRank,
        events: player.Events,
        playerId: player.PlayerID
      }
      tour.rankings.push(playerObj)
    })
    await tour.save()
    res.send(tour.rankings)
  } catch (error) {
    throw error
  }
}

const createTour = async (req, res) => {
  let newTour = await Tour.create(req.body)
  res.send(newTour)
}

module.exports = { getRankings, createTour }
