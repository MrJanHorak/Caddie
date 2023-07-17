const router = require('express').Router()
const controller = require('../controllers/Tours')
const middleware = require('../middleware')

router.get('/all', controller.getRankings)

module.exports = router
