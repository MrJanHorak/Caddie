const router = require('express').Router()
const controller = require('../controllers/Tours')
const middleware = require('../middleware')

router.get('/all', controller.getRankings)

router.post('/new', controller.createTour)

module.exports = router
