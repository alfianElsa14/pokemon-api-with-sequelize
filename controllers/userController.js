const { handleValidationError, handleInternalError, handleNotFoundError, handleExistingRecordError } = require('../middleware/errorHandler.js');
const { Pokemon, User, myPokemon, Category } = require('../models')
const joi = require('joi');

exports.getAllUsers = async (req, res) => {
    try {
        const usersData = await User.findAll()
        res.status(200).json(usersData)
    } catch (error) {
        console.log(error);
        return handleInternalError(res)
    }
}

exports.addUser = async (req, res) => {
    try {
        const newUser = req.body;

        const schema = joi.object({
            name: joi.string().required(),
            gender: joi.string().required(),
        })

        const { error } = schema.validate(newUser)

        if (error) {
            return handleValidationError(res, error)
        }

        const existingUser = await User.findOne({
            where: {
                name: newUser.name
            }
        });

        if (existingUser) {
            return handleExistingRecordError(res, 'Nama sudah terdaftar, coba ganti dengan nama lain');
        }

        const result = await User.create({
            name: newUser.name,
            gender: newUser.gender
        })

        res.status(201).json({ message: `User berhasil di daftarkan`, newUser })
    } catch (error) {
        console.log(error);
        return handleInternalError(res)
    }
}

exports.getUserById = async (req, res) => {
    try {
        const { userId } = req.params
        const dataUser = await User.findByPk(userId);

        if (!dataUser) {
            return handleNotFoundError(res, 'User');
        }
        const response = await myPokemon.findAll({
            where: {
                userId
            },
            include: [
                {
                    model: User,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    },
                },
                {
                    model: Pokemon,
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "categoryId"]
                    },
                    include: {
                        model: Category,
                        attributes: {
                            exclude: ["id", "createdAt", "updatedAt"]
                        },
                    }
                }
            ]
        })


        if (response.length > 0) {
            const pokemonCount = response.map((el) => {
                return el.Pokemon
            })

            const userDetail = {
                username: response[0].User.name,
                gender: response[0].User.gender,
                pokemons: pokemonCount
            }

            res.status(200).json(userDetail)
        } else {
            const userDetail = {
                username: dataUser.name,
                gender: dataUser.gender,
                pokemons: "belum ada pokemon"
            };

            res.status(200).json(userDetail);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server Error' })
    }
}

exports.editUser = async (req, res) => {
    try {
        const { userId } = req.params
        const newData = req.body
        const dataUser = await User.findByPk(userId);

        if (!dataUser) {
            return handleNotFoundError(res, 'User');
        }

        const schema = joi.object({
            name: joi.string().required(),
            gender: joi.string().required(),
        })

        const { error } = schema.validate(newData)

        if (error) {
            return handleValidationError(res, error)
        }

        const existingUser = await User.findOne({
            where: {
                name: newData.name
            }
        });

        if (existingUser) {
            return handleExistingRecordError(res, 'Nama sudah terdaftar, coba ganti dengan nama lain');
        }

        const result = await User.update({
            name: newData.name,
            gender: newData.gender
        }, {
            where: {
                id: userId
            }
        })
        res.status(200).json({ message: "User berhasil di ubah", newData })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server Error' })
    }
}

exports.catchPokemon = async (req, res) => {
    try {
        const { userId } = req.params
        const poke = req.body;
        const schema = joi.object({
            userId,
            pokeId: joi.number().required(),
            jinak: true
        })

        const { error } = schema.validate(poke)

        if (error) {
            return handleValidationError(res, error)
        }

        const dataUser = await User.findByPk(userId);

        if (!dataUser) {
            return handleNotFoundError(res, 'User');
        }

        const dataPokemon = await Pokemon.findByPk(poke.pokeId)

        if (!dataPokemon) {
            return handleNotFoundError(res, 'Pokemon');
        }

        const existingPokemon = await myPokemon.findOne({
            where: {
                userId,
                pokeId: poke.pokeId
            }
        });

        if (existingPokemon) {
            return handleExistingRecordError(res, 'Pokemon sudah ditangkap sebelumnya !');
        }

        const pokemonya = await myPokemon.create({
            userId,
            pokeId: poke.pokeId,
            jinak: poke.jinak
        });

        const response = await myPokemon.findOne({
            where: {
                pokeId: poke.pokeId
            },
            include: [
                {
                    model: Pokemon,
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "categoryId"]
                    },
                    include: {
                        model: Category,
                        attributes: {
                            exclude: ["id", "createdAt", "updatedAt"]
                        },
                    }
                }
            ]
        })

        res.status(201).json({ status: 'Success', message: 'Selamat, Pokemon berhasil di tangkap', data: response.Pokemon });


} catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server Error' })
}
}

exports.deletePokemon = async (req, res) => {
    try {
        const { userId, pokeId } = req.params

        const dataUser = await User.findByPk(userId);

        if (!dataUser) {
            return handleNotFoundError(res, 'User');
        }

        const existingPokemon = await myPokemon.findOne({
            where: {
                userId,
                pokeId
            },
            include: [
                {
                    model: Pokemon,
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "categoryId"]
                    },
                    include: {
                        model: Category,
                        attributes: {
                            exclude: ["id", "createdAt", "updatedAt"]
                        },
                    }
                }
            ]
        });

        if (!existingPokemon) {
            return res.status(404).json({ status: 'Error', message: 'Kamu tidak mempunyai pokemon ini untuk di lepas' });
        }

        const response = await myPokemon.destroy({
            where: {
                userId,
                pokeId
            }
        })

        const deletedPokemon = existingPokemon.Pokemon

        res.status(200).json({ message: `pokemon berhasil di lepas`, deletedPokemon })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server Error' })
    }
}