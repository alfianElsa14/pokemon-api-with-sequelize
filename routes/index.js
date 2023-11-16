const express = require('express')
const router = express.Router()
const pokeRouter = require('./pokemon')
const userRouter = require('./user')

router.use('/pokemons', pokeRouter)
router.use('/users', userRouter)




module.exports = router