'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class myPokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      myPokemon.belongsTo(models.User, {foreignKey: 'userId'})
      myPokemon.belongsTo(models.Pokemon, {foreignKey: 'pokeId'})
    }
  }
  myPokemon.init({
    userId: DataTypes.INTEGER,
    pokeId: DataTypes.INTEGER,
    jinak: DataTypes.BOOLEAN
  }, {

    hooks: {
      beforeCreate: (el) => {
        el.jinak = true
      }
    },

    sequelize,
    modelName: 'myPokemon',
  });
  return myPokemon;
};