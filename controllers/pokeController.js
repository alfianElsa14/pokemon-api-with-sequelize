const joi = require('joi');
const { handleNotFoundError, handleValidationError } = require('../middleware/errorHandler');
const { Pokemon, Category } = require('../models')

exports.getPokemons = async (req, res) => {
    try {
        const data = await Pokemon.findAll()
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server Error' })
    }
}

exports.getPokeById = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Pokemon.findOne({
            where: {
                id
            },
            include: [
                {
                    model: Category,
                    attributes: ['name'],
                }
            ]
        })

        if (!data) {
            return handleNotFoundError(res, 'Pokemon');
        }

        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server Error' })
    }
}

exports.getPokemonByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params

        const response = await Pokemon.findAll({
            where: {
                categoryId
            },
            include: [
                {
                    model: Category,
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "categoryId"]
                    }
                }
            ]
        })

        if (response.length < 1) {
            return handleNotFoundError(res, 'Category');
        }

        const pokemonCount = response.length

        res.status(200).json({total: pokemonCount, pokemons: response})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server Error' })
    }
}

exports.editCategoryPokemon = async (req, res) => {
    try {
        const { id } = req.params
        const newCategory = req.body
        const dataPoke = await Pokemon.findByPk(id)

        if(!dataPoke) {
            return handleNotFoundError(res, 'Pokemon')
        }

        const schema = joi.object({
            categoryId: joi.number().required()
        })

        const { error } = schema.validate(newCategory)

        if (error) {
            return handleValidationError(res, error)
        }

        const categoryExists = await Category.findByPk(newCategory.categoryId);

        if (!categoryExists) {
            return handleNotFoundError(res, 'Category');
        }

        const result = await Pokemon.update({
            categoryId: newCategory.categoryId
        }, {
            where: {
                id
            }
        })

        res.status(200).json({message: 'Category pokemon berhasil di ubah'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server Error' })
    }
}

