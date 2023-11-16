'use strict';

const axios = require('axios');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let dataPoke = require('../data/db.json').map((el) => {
      el.createdAt = new Date()
      el.updatedAt = new Date()

      return el
    })

    await queryInterface.bulkInsert('Pokemons', dataPoke, null)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Pokemons', null, null)
  }
};
