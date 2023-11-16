'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pokemon.hasMany(models.myPokemon, {foreignKey: 'pokeId'})
      Pokemon.belongsTo(models.Category, {foreignKey: 'categoryId'})
    }
  }
  Pokemon.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};