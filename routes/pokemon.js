const express = require('express')
const { getPokemons, getPokeById, getPokemonByCategory, editCategoryPokemon } = require('../controllers/pokeController')
const router = express.Router()

router.get('/', getPokemons)
router.get('/category/:categoryId', getPokemonByCategory)
router.get('/:id', getPokeById)
router.put('/:id', editCategoryPokemon)


module.exports = router