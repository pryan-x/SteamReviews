const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/applist', controllers.getAllSteamGames)
router.get('/game/:id', controllers.getSingleGameSteam )

router.get('/gamespy/:id', controllers.getSingleGameSpy)


module.exports = router
