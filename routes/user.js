const express = require('express')
const { getAllUsers, getUserById, catchPokemon, deletePokemon, editUser, addUser } = require('../controllers/userController')
const router = express.Router()

router.get('/', getAllUsers)
router.post('/add', addUser)
router.get('/:userId', getUserById)
router.put('/:userId', editUser)
router.post('/:userId', catchPokemon)
router.delete('/:userId/:pokeId', deletePokemon)

module.exports = router